import { COMPONENT_INTERNALS_FIELD_NAME, MODULE_FIELD_NAME } from "@/constant/Constants";
import StageComponentInternals from "@/stage/StageComponentInternals";
import { ComponentIdPair, ComponentConfigImpl, ComponentConfig } from "@/component/ComponentConfig";
import Component from "@/component/Component";
import Nestable from "@/component/Nestable";
import Module from "@/module/Module";

class StageComponent extends Component {

	constructor(module: Module, selector: string, topComponentIds: ComponentIdPair[], bottomComponentIds: ComponentIdPair[]) {
		const config: ComponentConfigImpl = new ComponentConfigImpl();
		config.setTopComponentIds(topComponentIds);
		config.setBottomComponentIds(bottomComponentIds);
		config.setModule(module);
		super(selector, config);
	}

	public setComponent(component: Nestable): StageComponent {
		this.setChild("body", component);
		return this;
	}

	public isConnected(): boolean {
		return true;
	}

	protected ____internal$$cydran$$init____(template: string, config: ComponentConfig): void {
		this[COMPONENT_INTERNALS_FIELD_NAME] = new StageComponentInternals(this, template, config);
		this[COMPONENT_INTERNALS_FIELD_NAME]["init"]();
	}

}

export default StageComponent;
