const INTERNAL_DIRECT_CHANNEL_NAME: string = "Cydran$$Direct$$Internal$$Channel";
const COMMENT_NODE_TYPE: number = 8;
const ELEMENT_NODE_TYPE: number = 1;
const TEXT_NODE_TYPE: number = 3;
const MODULE_FIELD_NAME: string = "____internal$$cydran$$module____";
const INTERNAL_CHANNEL_NAME: string = "Cydran$$Internal$$Channel";
const DEFAULT_MODULE_KEY: string = "DEFAULT";
const ANONYMOUS_REGION_PREFIX: string = "%%%Region_";
const CYDRAN_SCRIPT_PREFIX: string = "cydran/";
const DEFAULT_CLONE_DEPTH: number = 50;
const DEFAULT_EQUALS_DEPTH: number = 50;
const CYDRAN_KEY: string = "cydran";

const STAGE_CONSTANT_KEY: string = "$stage";

const ID_ATTRIBUTE: string = "id";
const NAME_ATTRIBUTE: string = "name";
const COMPONENT_ATTRIBUTE: string = "component";
const MODULE_ATTRIBUTE: string = "module";
const VALUE_ATTRIBUTE: string = "value";
const LOCK_ATTRIBUTE: string = "lock";

const STRING_TYPE = "string";

const NESTING_CHANGED: string = "NESTING_CHANGED";

function NO_OP_FN() {
	// Intentionally do nothing
}

function EMPTY_OBJECT_FN() {
	return {};
}

const VALID_ID: RegExp = /^[a-zA-Z][a-zA-Z0-9\$\@\-\_\.\:\\\/]*$/m;
const VALID_KEY: RegExp = new RegExp(/^[a-zA-Z\$\_][a-zA-Z0-9\$\_]*$/);

const CYDRAN_DIGEST_MAX_EVALUATIONS: string = "cydran.digest.maxEvaluations";
const CYDRAN_CLONE_MAX_EVALUATIONS: string = "cydran.clone.maxEvaluations";
const CYDRAN_EQUALS_MAX_EVALUATIONS: string = "cydran.equals.maxEvaluations";
const CYDRAN_DEVELOPMENT_ENABLED: string = "cydran.development.enabled";

const Events: any = {
	AFTER_CHILD_ADDED: "AFTER_CHILD_ADDED",
	AFTER_CHILD_CHANGED: "AFTER_CHILD_CHANGED",
	AFTER_CHILD_REMOVED: "AFTER_CHILD_REMOVED",
	AFTER_PARENT_ADDED: "AFTER_PARENT_ADDED",
	AFTER_PARENT_CHANGED: "AFTER_PARENT_CHANGED",
	AFTER_PARENT_REMOVED: "AFTER_PARENT_REMOVED",
	BEFORE_CHILD_ADDED: "BEFORE_CHILD_ADDED",
	BEFORE_CHILD_CHANGED: "BEFORE_CHILD_CHANGED",
	BEFORE_CHILD_REMOVED: "BEFORE_CHILD_REMOVED",
	BEFORE_DISPOSE: "BEFORE_DISPOSE",
	BEFORE_PARENT_ADDED: "BEFORE_PARENT_ADDED",
	BEFORE_PARENT_CHANGED: "BEFORE_PARENT_CHANGED",
	BEFORE_PARENT_REMOVED: "BEFORE_PARENT_REMOVED",
	COMPONENT_NESTING_CHANGED: "COMPONENT_NESTING_CHANGED"
};

export {
	DEFAULT_MODULE_KEY,
	INTERNAL_DIRECT_CHANNEL_NAME,
	INTERNAL_CHANNEL_NAME,
	MODULE_FIELD_NAME,
	TEXT_NODE_TYPE,
	COMMENT_NODE_TYPE,
	ELEMENT_NODE_TYPE,
	NO_OP_FN,
	EMPTY_OBJECT_FN,
	ANONYMOUS_REGION_PREFIX,
	DEFAULT_CLONE_DEPTH,
	DEFAULT_EQUALS_DEPTH,
	CYDRAN_SCRIPT_PREFIX,
	CYDRAN_KEY,
	ID_ATTRIBUTE,
	NAME_ATTRIBUTE,
	COMPONENT_ATTRIBUTE,
	MODULE_ATTRIBUTE,
	VALUE_ATTRIBUTE,
	LOCK_ATTRIBUTE,
	STRING_TYPE,
	VALID_ID,
	VALID_KEY,
	CYDRAN_DIGEST_MAX_EVALUATIONS,
	CYDRAN_CLONE_MAX_EVALUATIONS,
	CYDRAN_EQUALS_MAX_EVALUATIONS,
	CYDRAN_DEVELOPMENT_ENABLED,
	NESTING_CHANGED,
	Events,
	STAGE_CONSTANT_KEY
};
