import { JSDOM } from "jsdom";
const WIN = new JSDOM("<html><body></body></html>").window;
global["window"] = WIN;

import { assert, expect } from "chai";
import { describe, it, xit } from "mocha";
import { anything, instance, mock, spy, verify, when } from "ts-mockito";
import { builder, Stage, Component } from "cydran";

class TestComponent extends Component {

	constructor() {
		super("<div>Hello World!</div>");
	}

}

describe("Testcase 1", () => {

	it("Testcase should pass", () => {

		builder("body")
			.withWarnLogging()
			.withInitializer((stage: Stage) => {
				stage.setComponent(new TestComponent());
				assert.equal(WIN.document.body.innerHTML, "<div>Hello World!</div>");
			})
			.build()
			.start();
	});

});