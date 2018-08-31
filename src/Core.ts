import Logger from "./logger/Logger";
import LoggerFactory from "./logger/LoggerFactory";
import Broadcaster from "./messaging/Broadcaster";
import Listener from "./messaging/Listener";
import PubSub from "./messaging/PubSub";
import {Registry} from "./Registry";
import SequenceGenerator from "./SequenceGenerator";

const ATTRIBUTE_PREFIX: string = "data-c-";

abstract class Component {

	private logger: Logger;

	private el: HTMLElement;

	private regions: {[id: string]: Region;};

	private parentView: Component;

	private componentName: string;

	private id: number;

	private template: Function;

	private mvvm: Mvvm;

	private pubSub: PubSub;

	private metadata: {
		[id: string]: any;
	};

	constructor(componentName: string, template: Function) {
		this.componentName = componentName;
		this.template = template;
		this.id = SequenceGenerator.INSTANCE.next();
		this.logger = LoggerFactory.getLogger(componentName + " Component " + this.id);
		this.mvvm = new Mvvm(this);
		this.regions = {};
		this.pubSub = new PubSub(this);
	}

	public static expose(name: string): void {
		Registry.registerPrototype(name, this);
	}

	public static exposeSingleton(name: string): void {
		Registry.registerSingleton(name, this);
	}

	public hasMetadata(name: string): boolean {
		return this.getMetadata(name) ? true : false;
	}

	public getMetadata(name: string): any {
		return this.metadata[name];
	}

	public setEl(el: HTMLElement): void {
		this.getLogger().trace("Setting el");

		if (this.el) {
			this.getLogger().trace("el already present, unwiring");
			this.unwireInternal();
		}

		this.el = el;

		if (this.el) {
			this.getLogger().trace("el present, wiring");
			this.wireInternal();
		}
	}

	public setParentView(parentView: Component): void {
		if (parentView) {
			this.getLogger().trace("Setting parent view " + parentView.getId());
		} else {
			this.getLogger().trace("Clearing parent view");
		}

		this.parentView = parentView;
	}

	public getRegion(name: string): Region {
		if (!this.regions[name]) {
			this.getLogger().trace("Creating region " + name);
			this.regions[name] = new Region(name, this);
		}

		return this.regions[name];
	}

	public digest(): void {
		this.$apply(() => {});
	}

	public setChild(name: string, component: Component): void {
		this.getRegion(name).setComponent(component);
	}

	public setChildFromRegistry(name: string, componentName: string, defaultComponentName?: string): void {
		let component: Component = this.get(componentName);

		if (!component && defaultComponentName) {
			component = this.get(defaultComponentName);
		}

		if (component) {
			this.setChild(name, component);
		} else {
			this.getLogger().error("Unable to set component " + componentName + " on region " + name);
		}
	}

	public message(channelName: string, messageName: string, payload: any): void {
		this.pubSub.broadcastLocal(channelName, messageName, payload);
	}

	public dispose(): void {
		this.unwire();
		this.pubSub.dispose();
		this.parentView = null;
	}

	public getId(): number {
		return this.id;
	}

	protected withMetadata(name: string, value: any): void {
		this.metadata[name] = value;
	}

	protected listenTo(channel: string, messageName: string, target: Function): void {
		this.pubSub.listenTo(channel, messageName, (payload) => {
			this.$apply(target, payload);
		});
	}

	protected broadcastTo(channel: string): Broadcaster {
		return this.pubSub.broadcastTo(channel);
	}

	protected get<T>(id: string): T {
		return Registry.get(id);
	}

	protected render(): void {
		this.getLogger().trace("Rendering");
		this.getEl().innerHTML = this.template(this);
	}

	protected $apply(fn: Function, ...args: any[]): void {
		this.mvvm.$apply(fn, args);
	}

	protected getEl(): HTMLElement {
		return this.el;
	}

	protected getParentView(): Component {
		return this.parentView;
	}

	protected getLogger(): Logger {
		return this.logger;
	}

	protected wire(): void {
		// Intentionally do nothing, but allow child classes to override
	}

	protected unwire(): void {
		// Intentionally do nothing, but allow child classes to override
	}

	private notify(messageName: string): void {
		this.message("component", messageName, {});
	}

	protected abstract wireListeners(): void;

	private wireInternal(): void {
		this.wireListeners();
		this.notify("prewire");
		this.el.setAttribute("data-component-type", this.componentName);
		this.el.setAttribute("data-component-id", this.id + "");
		this.render();
		this.mvvm.init(this.getEl(), this);
		this.wire();
		this.notify("wired");
	}

	private unwireInternal(): void {
		this.notify("preunwired");
		this.unwire();
		this.mvvm.dispose();

		for (var key in this.regions) {
			if (this.regions.hasOwnProperty(key)) {
				this.regions[key].dispose();
			}
		}

		this.notify("unwired");
		this.pubSub.dispose();
	}

}

abstract class Decorator<T> {

	private el: HTMLElement;

	private model: any;

	private expression: string;

	private value: any;

	private mvvm: Mvvm;

	private parentView: Component;

	constructor(mvvm: Mvvm, parentView: Component, el: HTMLElement, expression: string, model: any) {
		this.parentView = parentView;
		this.el = el;
		this.expression = expression;
		this.model = model;
		this.value = null;
		this.mvvm = mvvm;
		this.wire();
	}

	public dispose(): void {
		this.unwire();
		this.model = null;
		this.value = null;
		this.mvvm = null;
		this.parentView = null;
	}

	public evaluateModel(): void {
		const oldValue: any = this.value;
		this.getTarget();

		if (!this.isEqual(oldValue, this.value)) {
			this.onTargetChange(this.value);
		}
	}

	protected getEl(): HTMLElement {
		return this.el;
	}

	protected getModel(): any {
		return this.model;
	}

	protected getParentView(): Component {
		return this.parentView;
	}

	protected invokeTarget(...args: any[]): void {
		const code: string = '"use strict"; (' + this.expression + ");";
		Function(code).apply(this.model, args);

		if (this.mvvm) {
			this.mvvm.evaluateModel();
		}
	}

	protected getExpression(): string {
		return this.expression;
	}

	protected getTarget(): T {
		const code: string = '"use strict"; ' + Mvvm.getFiltersCode() + " return (" + this.expression + ");";
		this.value = Function(code).apply(this.model, [Mvvm.getFilters()]);

		return this.value;
	}

	protected setTarget(value: T): void {
		const code: string = '"use strict"; ' + this.expression + "= arguments[0];";
		this.value = value;

		Function(code).apply(this.model, [value]);

		this.mvvm.evaluateModel();
	}

	protected abstract wire(): void;

	protected abstract unwire(): void;

	protected abstract onTargetChange(value: any): void;

	private isEqual(first: any, second: any): boolean {
		// TODO - Implement a deep equals

		return (first == second);
	}

}

class Region {

	private el: HTMLElement;

	private component: Component;

	private parentView: Component;

	private logger: Logger;

	private name: string;

	constructor(name: string, parentView: Component) {
		this.name = name;
		this.parentView = parentView;
		this.logger = LoggerFactory.getLogger("Region " + this.name + " for " + parentView.getId());
	}

	public setEl(el: HTMLElement): void {
		this.logger.trace("Setting el");

		if (this.el && this.component) {
			this.logger.trace("Existing el and component, unregistering el from component");
			this.component.setEl(null);
		}

		this.el = el;

		if (this.el) {
			this.wireEl();
		}
	}

	public setComponent(component: Component): void {
		this.logger.trace("Setting component");

		if (this.component) {
			this.component.setEl(null);
			this.component.setParentView(null);
		}

		this.component = component;

		if (this.el) {
			this.wireEl();
		}

		this.component.setParentView(this.parentView);
	}

	public dispose() {
		if (this.component) {
			this.component.dispose();
		}
	}

	private wireEl(): void {
		while (this.el.firstChild) {
			this.el.removeChild(this.el.firstChild);
		}

		const child: HTMLElement = document.createElement("div");

		this.el.appendChild(child);

		if (this.component) {
			this.logger.trace("component, setting container el");
			this.component.setEl(child);
		}
	}

}

class Mvvm {

	private logger: Logger;

	public static register(name: string, supportedTags: string[], elementDecoratorClass: any): void {
		if (!Mvvm.factories[name]) {
			Mvvm.factories[name] = {};
		}

		for (var i = 0;i < supportedTags.length;i++) {
			let supportedTag: string = supportedTags[i];
			Mvvm.factories[name][supportedTag] = elementDecoratorClass;
		}
	}

	public static registerFilter(name: string, fn: Function) {
		Mvvm.filters[name] = fn;

		let code: string = "";

		for (let key in Mvvm.filters) {
			if (Mvvm.filters.hasOwnProperty(key)) {
				let statement: string = "var " + key + " = arguments[0]['" + key + "'];\n";
				code += statement;
			}
		}

		Mvvm.filtersCode = code;
	}

	public static getFilters(): {[name: string]: Function;} {
		return Mvvm.filters;
	}

	public static getFiltersCode(): string {
		return Mvvm.filtersCode;
	}

	private static factories: {
		[decoratorType: string]: {
			[tag: string]: {new(): Decorator<any>;};
		},
	} = {};

	private static filters: {
		[name: string]: Function;
	} = {};

	private static filtersCode: string = "";

	private el: HTMLElement;

	private decorators: Decorator<any>[];

	private model: any;

	private parentView: Component;

	constructor(model: any) {
		this.logger = LoggerFactory.getLogger("Mvvm");
		this.decorators = [];
		this.model = model;
	}

	public init(el: HTMLElement, parentView: Component): void {
		this.el = el;
		this.parentView = parentView;
		this.populateDecorators();
	}

	public dispose(): void {
		for (var i = 0;i < this.decorators.length;i++) {
			this.decorators[i].dispose();
		}

		this.decorators = [];
		this.parentView = null;
	}

	public evaluateModel(): void {
		for (var i = 0;i < this.decorators.length;i++) {
			this.decorators[i].evaluateModel();
		}
	}

	public $apply(fn: Function, ...args: any[]): any {
		const result: any = fn.apply(this.model, args);
		this.evaluateModel();

		return result;
	}

	private populateDecorators(): void {
		this.processChildren(this.el.children);
	}

	private processChildren(children: HTMLCollection): void {
		for (var i = 0;i < children.length;i++) {
			let el: Element = children[i];
			let attr = el.attributes;

			for (var j = 0;j < attr.length;j++) {
				if (attr[j].name.indexOf(ATTRIBUTE_PREFIX) == 0) {
					const decoratorType: string = attr[j].name.substr(ATTRIBUTE_PREFIX.length);

					this.addDecorator(el.tagName.toLowerCase(), decoratorType, attr[j].value, el as HTMLElement);
					el.removeAttribute(attr[j].name);
				}
			}

			this.processChildren(el.children);
		}
	}

	private addDecorator(tag: string, decoratorType: string, attributeValue: string, el: HTMLElement) {
		const tags: {[tag: string]: {new(): Decorator<any>;};} = Mvvm.factories[decoratorType];

		let decorator: Decorator<any> = null;

		if (!tags) {
			this.logger.error("Unsupported decorator type: " + decoratorType + ".");
			return;
		}

		let decoratorClass: any = tags[tag];

		if (!decoratorClass) {
			decoratorClass = tags["*"];
		}

		if (!decoratorClass) {
			this.logger.error("Unsupported tag: " + tag + " for decorator " + decoratorType + ".");
			return;
		}

		decorator = new decoratorClass(this, this.parentView, el, attributeValue, this.model);

		this.decorators.push(decorator);
	}

}

export {
	Component,
	Decorator,
	Region,
	Mvvm,
};
