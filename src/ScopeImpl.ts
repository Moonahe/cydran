import Scope from "./Scope";

interface ScopeMap {

	[name: string]: any;

}

class ScopeImpl implements Scope {

	private code: string;

	private children: ScopeImpl[];

	private localItems: ScopeMap;

	private items: ScopeMap;

	private parent: ScopeImpl;

	constructor() {
		this.children = [];
		this.localItems = {};
		this.items = {};
		this.code = "";
		this.parent = null;
	}

	public setParent(parent: ScopeImpl): void {
		if (!parent) {
			return;
		}

		if (this.parent) {
			this.parent.removeChild(this);
		}

		this.parent = parent;
		this.parent.addChild(this);
		this.refresh();
	}

	public addChild(child: ScopeImpl): void {
		if (child) {
			this.children.push(child);
		}
	}

	public removeChild(child: ScopeImpl): void {
		const index: number = this.children.indexOf(child);

		if (index >= 0) {
			this.children.splice(index, 1);
		}
	}

	public getItems(): ScopeMap {
		return this.items;
	}

	public getCode(): string {
		return this.code;
	}

	public add(name: string, item: any): void {
		this.localItems[name] = item;
		this.refresh();
		this.refreshChildren();
	}

	public remove(name: string): void {
		delete this.localItems[name];
		this.refresh();
		this.refreshChildren();
	}

	private refresh(): void {
		this.items = {};

		if (this.parent) {
			const parentItems: ScopeMap = this.parent.getItems();

			for (const key in parentItems) {
				if (parentItems.hasOwnProperty(key)) {
					this.items[key] = parentItems[key];
				}
			}
		}

		for (const key in this.localItems) {
			if (this.localItems.hasOwnProperty(key)) {
				this.items[key] = this.localItems[key];
			}
		}

		this.refreshCode();
	}

	private refreshCode(): void {
		this.code = "";

		for (const key in this.items) {
			if (this.items.hasOwnProperty(key)) {
				const statement: string = "var " + key + " = arguments[0]['" + key + "'];\n";
				this.code += statement;
			}
		}
	}

	private refreshChildren(): void {
		for (const child of this.children) {
			child.refresh();
		}
	}

}

export default ScopeImpl;
