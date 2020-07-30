import { Component, AbstractElementMediator, Filters, builder, create, CydranConfig, HooksImpl } from "@/Component";
import { isDefined, requireNotNull, requireValid, setStrictTypeChecksEnabled } from "@/Utils";
import { CYDRAN_KEY, Events, Ids } from "@/Constants";
import {
	Hooks,
	ComponentOptions,
	Stage,
	StageBuilder,
	Filter,
	PagedFilter,
	LimitOffsetFilter,
	ElementMediator,
	Renderer,
	PubSub,
	Logger,
	Validators,
	RegistryStrategy
} from "@/Interfaces";
import { LoggerFactory } from "@/Logger";

const ORIGINAL_CYDRAN: any = window[CYDRAN_KEY];
const HOOKS: Hooks = HooksImpl.INSTANCE;

function noConflict() {
	const currentCydran: any = window[CYDRAN_KEY];
	window[CYDRAN_KEY] = ORIGINAL_CYDRAN;

	return currentCydran;
}

export {
	AbstractElementMediator,
	Component,
	ComponentOptions,
	CydranConfig,
	ElementMediator,
	Events,
	Filter,
	Filters,
	HOOKS,
	LimitOffsetFilter,
	Logger,
	LoggerFactory,
	PagedFilter,
	PubSub,
	RegistryStrategy,
	Renderer,
	Stage,
	StageBuilder,
	Validators,
	builder,
	create,
	isDefined,
	noConflict,
	requireNotNull,
	requireValid,
	setStrictTypeChecksEnabled,
	Ids
};
