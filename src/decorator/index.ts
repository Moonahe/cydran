import { Mvvm } from "../Core";

import CSSClass from "./CSSClass";
Mvvm.register("class", ["*"], CSSClass);

import Enabled from "./Enabled";
Mvvm.register("enabled", ["*"], Enabled);

import ReadOnly from "./ReadOnly";
Mvvm.register(ReadOnly.KEY, ["*"], ReadOnly);

import Style from "./Style";
Mvvm.register(Style.KEY, ["*"], Style);

import ForceFocus from "./ForceFocus";
Mvvm.register("force-focus", ["*"], ForceFocus);

import SelectOptions from "./SelectOptions";
Mvvm.register("options-model", ["select"], SelectOptions);

import ValuedModel from "./ValuedModel";
Mvvm.register("model", ["input", "select", "textarea"], ValuedModel);

import Visible from "./Visible";
Mvvm.register("visible", ["*"], Visible);

import Repeat from "./Repeat";
Mvvm.register("repeat", ["*"], Repeat);

export {};
