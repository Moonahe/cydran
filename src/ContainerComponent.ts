import AbstractComponent from "./AbstractComponent";
import Component from "./Component";
import Region from "./Region";

abstract class ContainerComponent extends AbstractComponent {

	private template: string;

	private regions: {[id: string]: Region;};

	constructor(componentName: string, template: string, ...regionNames: string[]) {
		super(componentName);
		this.template = template;
		this.regions = {};

		for (var i = 0;i < regionNames.length;i++) {
			this.withRegion(regionNames[i]);
		}
	}

	private withRegion(id: string): void {
		this.regions[id] = new Region(this);
	}

	public getRegion(id: string): Region {
		return this.regions[id];
	}

	protected render(): void {
		this.getEl().innerHTML = this.template;
	}

	protected wire(): void {
		for (var key in this.regions) {
			if (this.regions.hasOwnProperty(key)) {
				let attribute = '[data-pi-region="' + key + '"]';
				let element: Element = this.getEl().querySelectorAll(attribute)[0];
				let child: HTMLElement = element.appendChild(document.createElement('div'));
				this.regions[key].setEl(child);
			}
		}

		this.addStaticChildren();
	}

	protected unwire(): void {
		for (var key in this.regions) {
			if (this.regions.hasOwnProperty(key)) {
				this.regions[key].dispose();
			}
		}

		this.regions = null;
	}

	protected setInRegion(name: string, view: Component): void {
		this.getRegion(name).setView(view);
	}

	protected abstract addStaticChildren(): void;

}

export default ContainerComponent;