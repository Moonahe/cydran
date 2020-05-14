import RegistrationError from "@/error/RegistrationError";
import ObjectUtils from "@/util/ObjectUtils";
import Register from "@/registry/Register";
import { VALID_ID } from "@/constant/ValidationRegExp";
import SimpleMap from "@/pattern/SimpleMap";
import Instantiator from "@/registry/Instantiator";
import PubSubImpl from "@/message/PubSubImpl";
import Module from "@/module/Module";
import Gettable from "@/registry/Gettable";
import RegistryStrategy from "@/registry/RegistryStrategy";
import Type from "@/type/Type";

const requireValid = ObjectUtils.requireValid;
const requireNotNull = ObjectUtils.requireNotNull;

interface Factory<T> {

	get(gettable: Gettable): T;

}

class DefaultRegistryStrategyImpl implements RegistryStrategy, Register {

	private factories: SimpleMap<Factory<any>>;

	private module: Module;

	constructor(module: Module) {
		this.factories = {};
		this.module = module;
	}

	public get<T>(id: string, gettable: Gettable): T {
		requireValid(id, "id", VALID_ID);
		let instance: T = null;

		if (this.factories[id]) {
			instance = this.factories[id].get(gettable);
		}

		return instance;
	}

	public registerConstant(id: string, instance: any): void {
		this.registerFactory(id, new ConstantFactory(instance));
	}

	public registerPrototype(id: string, classInstance: Type<any>, dependencies?: string[]): void {
		this.registerFactory(id, new PrototypeFactory(this.module, Instantiator.create(classInstance), dependencies || []));
	}

	public registerPrototypeWithFactory(id: string, factoryFn: () => any, dependencies?: string[]): void {
		this.registerFactory(id, new PrototypeFactory(this.module, factoryFn, dependencies || []));
	}

	public registerSingleton(id: string, classInstance: Type<any>, dependencies?: string[]): void {
		this.registerFactory(id, new SingletonFactory(this.module, Instantiator.create(classInstance), dependencies || []));
	}

	public registerSingletonWithFactory(id: string, factoryFn: () => any, dependencies?: string[]): void {
		this.registerFactory(id, new SingletonFactory(this.module, factoryFn, dependencies || []));
	}

	private registerFactory(id: string, factory: Factory<any>): void {
		requireValid(id, "id", VALID_ID);

		if (id && factory) {
			if (this.factories[id]) {
				throw new RegistrationError("'%id%' key is considered unique and already exists", { "%id%": id });
			}

			this.factories[id] = factory;
		}
	}
}

export interface Registry extends Register, Gettable {

	addStrategy(strategy: RegistryStrategy): void;

}

export class RegistryImpl implements Registry {

	private strategies: RegistryStrategy[];

	private defaultStrategy: DefaultRegistryStrategyImpl;

	private module: Module;

	constructor(module: Module) {
		this.module = module;
		this.defaultStrategy = new DefaultRegistryStrategyImpl(this.module);
		this.strategies = [this.defaultStrategy];
	}

	public get<T>(id: string): T {
		requireValid(id, "id", VALID_ID);
		let i: number = 0;

		let instance: T = null;

		while (!instance && i < this.strategies.length) {
			instance = this.strategies[i].get(id, this);
			i++;
		}

		return instance;
	}

	public registerConstant(id: string, instance: any): Registry {
		requireValid(id, "id", VALID_ID);
		requireNotNull(instance, "instance");
		this.defaultStrategy.registerConstant(id, instance);
		return this;
	}

	public registerPrototype(id: string, classInstance: Type<any>, dependencies: string[]): Registry {
		requireValid(id, "id", VALID_ID);
		requireNotNull(classInstance, "classInstance");
		this.defaultStrategy.registerPrototype(id, classInstance, dependencies);
		return this;
	}

	public registerPrototypeWithFactory(id: string, factoryFn: () => any, dependencies?: string[]): Registry {
		requireValid(id, "id", VALID_ID);
		requireNotNull(factoryFn, "factoryFn");
		this.defaultStrategy.registerPrototypeWithFactory(id, factoryFn, dependencies);
		return this;
	}

	public registerSingleton(id: string, classInstance: Type<any>, dependencies: string[]): Registry {
		requireValid(id, "id", VALID_ID);
		requireNotNull(classInstance, "classInstance");
		this.defaultStrategy.registerSingleton(id, classInstance, dependencies);
		return this;
	}

	public registerSingletonWithFactory(id: string, factoryFn: () => any, dependencies?: string[]): Registry {
		requireValid(id, "id", VALID_ID);
		requireNotNull(factoryFn, "factoryFn");
		this.defaultStrategy.registerSingletonWithFactory(id, factoryFn, dependencies);
		return this;
	}

	public addStrategy(strategy: RegistryStrategy): void {
		requireNotNull(strategy, "strategy");
		this.strategies.push(strategy);
	}

}

class ConstantFactory<T> implements Factory<T> {

	private instance: T;

	constructor(instance: T) {
		this.instance = instance;
	}

	public get(gettable: Gettable): T {
		return this.instance;
	}

}

abstract class AbstractFunctionalFactory<T> implements Factory<T> {

	private fn: (args: any[]) => T;

	private dependencies: string[];

	private module: Module;

	constructor(module: Module, fn: (args: any[]) => T, dependencies: string[]) {
		this.module = module;
		this.dependencies = dependencies;
		this.fn = fn;
	}

	public abstract get(gettable: Gettable): T;

	protected create(gettable: Gettable) {
		const params: any[] = [];

		const pubSubs: PubSubImpl[] = [];

		for (const id of this.dependencies) {

			switch (id) {
				case "$pubSub":
					const pubSub: PubSubImpl = new PubSubImpl(null, null);
					params.push(pubSub);
					pubSubs.push(pubSub);
					break;

				default:
					const param: any = gettable.get(id);
					params.push(param);
					break;
			}

		}

		const result: T = this.fn.apply({}, params);

		for (const pubSub of pubSubs) {
			pubSub.setContext(result);
			pubSub.setModule(this.module);
		}

		return result;
	}

}

class PrototypeFactory<T> extends AbstractFunctionalFactory<T> {

	constructor(module: Module, fn: (args: any[]) => T, dependencies: string[]) {
		super(module, fn, dependencies);
	}

	public get(gettable: Gettable): T {
		return this.create(gettable);
	}

}

class SingletonFactory<T> extends AbstractFunctionalFactory<T> {

	private instance: T;

	constructor(module: Module, fn: (args: any[]) => T, dependencies: string[]) {
		super(module, fn, dependencies);
		this.instance = null;
	}

	public get(gettable: Gettable): T {
		if (!this.instance) {
			this.instance = this.create(gettable);
		}

		return this.instance;
	}

}
