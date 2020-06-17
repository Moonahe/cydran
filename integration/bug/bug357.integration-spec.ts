import { anything, instance, mock, spy, verify, when } from "ts-mockito";
import { builder, Stage, Component } from "cydran";

function reduce(input): string {
	return (input + "")
		.replace(/\n/g, "")
		.replace(/\t/g, "")
		.replace(/<!--#-->/g, "");
}

const EXPECTED_BEFORE: string = `<ul><li>Alpha<button>Click Me</button></li><li>Beta<button>Click Me</button></li><li>Gamma<button>Click Me</button></li></ul>`;
const EXPECTED_AFTER: string = `<ul><li>Beta<button>Click Me</button></li><li>Gamma<button>Click Me</button></li></ul>`;

interface Item {

	id: string;

	name: string;

}

const children: ChildComponent[] = [];

class ChildComponent extends Component {

	constructor() {
		super(`
			<li>
				{{v().name}}
				<button c:onclick="m().findMe()">Click Me</button>
			</li>
		`);
	}

	public findMe(): void {
		children.push(this);
	}

	public kill(): void {
		this.$apply(() => {
			this.getParent()["killChild"](this.getValue());
		}, []);
	}

}

class TestComponent extends Component {

	private items: Item[];

	constructor() {
		super(`
			<div>
				<ul c:repeat="m().items" c:repeat:mode="none">
					<template type="item">
						<c:component name="childItem"></c:component>
					</template>
				</ul>
			</div>
		`);

		this.items = [
			{
				id: "1",
				name: "Alpha"
			},
			{
				id: "2",
				name: "Beta"
			},
			{
				id: "3",
				name: "Gamma"
			}
		];
	}

	public killChild(item: Item): void {
		const removeIdx = this.items.indexOf(item);

		if (removeIdx > -1) {
			this.items.splice(removeIdx, 1);
		}
	}

}

test("Exception should not be thrown when removing an item from a repeat", () => {
	builder("body")
		.withInfoLogging()
		.withPrototype("childItem", ChildComponent)
		.withInitializer((stage: Stage) => {
			const component: Component = new TestComponent();
			stage.setComponent(component);
			expect(reduce(component.getEl().innerHTML)).toEqual(EXPECTED_BEFORE);
			component.getEl().querySelector("button").click();
			children[0].kill();
			expect(reduce(component.getEl().innerHTML)).toEqual(EXPECTED_AFTER);
			stage.dispose();
		})
		.build()
		.start();
});