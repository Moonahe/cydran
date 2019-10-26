/* tslint:disable */

interface ReplacerType {

	(substring: string, ...args: any[]): string;

}

var undefined;
var VERSION = '4.17.15';
var LARGE_ARRAY_SIZE = 200;
var CORE_ERROR_TEXT = 'Unsupported core-js use. Try https://npms.io/search?q=ponyfill.',
	FUNC_ERROR_TEXT = 'Expected a function';
var HASH_UNDEFINED = '__lodash_hash_undefined__';
var MAX_MEMOIZE_SIZE = 500;
var PLACEHOLDER = '__lodash_placeholder__';
var CLONE_DEEP_FLAG = 1,
	CLONE_FLAT_FLAG = 2,
	CLONE_SYMBOLS_FLAG = 4;
var COMPARE_PARTIAL_FLAG = 1,
	COMPARE_UNORDERED_FLAG = 2;
var WRAP_BIND_FLAG = 1,
	WRAP_BIND_KEY_FLAG = 2,
	WRAP_CURRY_BOUND_FLAG = 4,
	WRAP_CURRY_FLAG = 8,
	WRAP_CURRY_RIGHT_FLAG = 16,
	WRAP_PARTIAL_FLAG = 32,
	WRAP_PARTIAL_RIGHT_FLAG = 64,
	WRAP_ARY_FLAG = 128,
	WRAP_REARG_FLAG = 256,
	WRAP_FLIP_FLAG = 512;
var DEFAULT_TRUNC_LENGTH = 30,
	DEFAULT_TRUNC_OMISSION = '...';
var HOT_COUNT = 800,
	HOT_SPAN = 16;
var LAZY_FILTER_FLAG = 1,
	LAZY_MAP_FLAG = 2,
	LAZY_WHILE_FLAG = 3;
var INFINITY = 1 / 0,
	MAX_SAFE_INTEGER = 9007199254740991,
	MAX_INTEGER = 1.7976931348623157e+308,
	NAN = 0 / 0;
var MAX_ARRAY_LENGTH = 4294967295,
	MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1,
	HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
var wrapFlags = [
	['ary', WRAP_ARY_FLAG],
	['bind', WRAP_BIND_FLAG],
	['bindKey', WRAP_BIND_KEY_FLAG],
	['curry', WRAP_CURRY_FLAG],
	['curryRight', WRAP_CURRY_RIGHT_FLAG],
	['flip', WRAP_FLIP_FLAG],
	['partial', WRAP_PARTIAL_FLAG],
	['partialRight', WRAP_PARTIAL_RIGHT_FLAG],
	['rearg', WRAP_REARG_FLAG]
];
var argsTag = '[object Arguments]',
	arrayTag = '[object Array]',
	asyncTag = '[object AsyncFunction]',
	boolTag = '[object Boolean]',
	dateTag = '[object Date]',
	domExcTag = '[object DOMException]',
	errorTag = '[object Error]',
	funcTag = '[object Function]',
	genTag = '[object GeneratorFunction]',
	mapTag = '[object Map]',
	numberTag = '[object Number]',
	nullTag = '[object Null]',
	objectTag = '[object Object]',
	promiseTag = '[object Promise]',
	proxyTag = '[object Proxy]',
	regexpTag = '[object RegExp]',
	setTag = '[object Set]',
	stringTag = '[object String]',
	symbolTag = '[object Symbol]',
	undefinedTag = '[object Undefined]',
	weakMapTag = '[object WeakMap]',
	weakSetTag = '[object WeakSet]';
var arrayBufferTag = '[object ArrayBuffer]',
	dataViewTag = '[object DataView]',
	float32Tag = '[object Float32Array]',
	float64Tag = '[object Float64Array]',
	int8Tag = '[object Int8Array]',
	int16Tag = '[object Int16Array]',
	int32Tag = '[object Int32Array]',
	uint8Tag = '[object Uint8Array]',
	uint8ClampedTag = '[object Uint8ClampedArray]',
	uint16Tag = '[object Uint16Array]',
	uint32Tag = '[object Uint32Array]';
var reEmptyStringLeading = /\b__p \+= '';/g,
	reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
	reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g,
	reUnescapedHtml = /[&<>"']/g,
	reHasEscapedHtml = RegExp(reEscapedHtml.source),
	reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
var reEscape = /<%-([\s\S]+?)%>/g,
	reEvaluate = /<%([\s\S]+?)%>/g,
	reInterpolate = /<%=([\s\S]+?)%>/g;
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	reIsPlainProp = /^\w*$/,
	rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
	reHasRegExpChar = RegExp(reRegExpChar.source);
var reTrim = /^\s+|\s+$/g,
	reTrimStart = /^\s+/,
	reTrimEnd = /\s+$/;
var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
	reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
	reSplitDetails = /,? & /;
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
var reEscapeChar = /\\(\\)?/g;
var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
var reFlags = /\w*$/;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var reIsOctal = /^0o[0-7]+$/i;
var reIsUint = /^(?:0|[1-9]\d*)$/;
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
var reNoMatch = /($^)/;
var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
var rsAstralRange = '\\ud800-\\udfff',
	rsComboMarksRange = '\\u0300-\\u036f',
	reComboHalfMarksRange = '\\ufe20-\\ufe2f',
	rsComboSymbolsRange = '\\u20d0-\\u20ff',
	rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
	rsDingbatRange = '\\u2700-\\u27bf',
	rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
	rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
	rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
	rsPunctuationRange = '\\u2000-\\u206f',
	rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
	rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
	rsVarRange = '\\ufe0e\\ufe0f',
	rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
var rsApos = "['\u2019]",
	rsAstral = '[' + rsAstralRange + ']',
	rsBreak = '[' + rsBreakRange + ']',
	rsCombo = '[' + rsComboRange + ']',
	rsDigits = '\\d+',
	rsDingbat = '[' + rsDingbatRange + ']',
	rsLower = '[' + rsLowerRange + ']',
	rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
	rsFitz = '\\ud83c[\\udffb-\\udfff]',
	rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
	rsNonAstral = '[^' + rsAstralRange + ']',
	rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
	rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
	rsUpper = '[' + rsUpperRange + ']',
	rsZWJ = '\\u200d';
var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
	rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
	rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
	rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
	reOptMod = rsModifier + '?',
	rsOptVar = '[' + rsVarRange + ']?',
	rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
	rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
	rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
	rsSeq = rsOptVar + reOptMod + rsOptJoin,
	rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq,
	rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';
var reApos = RegExp(rsApos, 'g');
var reComboMark = RegExp(rsCombo, 'g');
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');
var reUnicodeWord = RegExp([
	rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
	rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
	rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
	rsUpper + '+' + rsOptContrUpper,
	rsOrdUpper,
	rsOrdLower,
	rsDigits,
	rsEmoji
].join('|'), 'g');
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + ']');
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
var contextProps = [
	'Array', 'Buffer', 'DataView', 'Date', 'Error', 'Float32Array', 'Float64Array',
	'Function', 'Int8Array', 'Int16Array', 'Int32Array', 'Map', 'Math', 'Object',
	'Promise', 'RegExp', 'Set', 'String', 'Symbol', 'TypeError', 'Uint8Array',
	'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'WeakMap',
	'_', 'clearTimeout', 'isFinite', 'parseInt', 'setTimeout'
];
var templateCounter = -1;
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
	cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
	cloneableTags[boolTag] = cloneableTags[dateTag] =
	cloneableTags[float32Tag] = cloneableTags[float64Tag] =
	cloneableTags[int8Tag] = cloneableTags[int16Tag] =
	cloneableTags[int32Tag] = cloneableTags[mapTag] =
	cloneableTags[numberTag] = cloneableTags[objectTag] =
	cloneableTags[regexpTag] = cloneableTags[setTag] =
	cloneableTags[stringTag] = cloneableTags[symbolTag] =
	cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
	cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
	cloneableTags[weakMapTag] = false;
var deburredLetters = {
	// Latin-1 Supplement block.
	'\xc0': 'A', '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
	'\xe0': 'a', '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
	'\xc7': 'C', '\xe7': 'c',
	'\xd0': 'D', '\xf0': 'd',
	'\xc8': 'E', '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
	'\xe8': 'e', '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
	'\xcc': 'I', '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
	'\xec': 'i', '\xed': 'i', '\xee': 'i', '\xef': 'i',
	'\xd1': 'N', '\xf1': 'n',
	'\xd2': 'O', '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
	'\xf2': 'o', '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
	'\xd9': 'U', '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
	'\xf9': 'u', '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
	'\xdd': 'Y', '\xfd': 'y', '\xff': 'y',
	'\xc6': 'Ae', '\xe6': 'ae',
	'\xde': 'Th', '\xfe': 'th',
	'\xdf': 'ss',
	// Latin Extended-A block.
	'\u0100': 'A', '\u0102': 'A', '\u0104': 'A',
	'\u0101': 'a', '\u0103': 'a', '\u0105': 'a',
	'\u0106': 'C', '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
	'\u0107': 'c', '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
	'\u010e': 'D', '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
	'\u0112': 'E', '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
	'\u0113': 'e', '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
	'\u011c': 'G', '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
	'\u011d': 'g', '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
	'\u0124': 'H', '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
	'\u0128': 'I', '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
	'\u0129': 'i', '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
	'\u0134': 'J', '\u0135': 'j',
	'\u0136': 'K', '\u0137': 'k', '\u0138': 'k',
	'\u0139': 'L', '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
	'\u013a': 'l', '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
	'\u0143': 'N', '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
	'\u0144': 'n', '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
	'\u014c': 'O', '\u014e': 'O', '\u0150': 'O',
	'\u014d': 'o', '\u014f': 'o', '\u0151': 'o',
	'\u0154': 'R', '\u0156': 'R', '\u0158': 'R',
	'\u0155': 'r', '\u0157': 'r', '\u0159': 'r',
	'\u015a': 'S', '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
	'\u015b': 's', '\u015d': 's', '\u015f': 's', '\u0161': 's',
	'\u0162': 'T', '\u0164': 'T', '\u0166': 'T',
	'\u0163': 't', '\u0165': 't', '\u0167': 't',
	'\u0168': 'U', '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
	'\u0169': 'u', '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
	'\u0174': 'W', '\u0175': 'w',
	'\u0176': 'Y', '\u0177': 'y', '\u0178': 'Y',
	'\u0179': 'Z', '\u017b': 'Z', '\u017d': 'Z',
	'\u017a': 'z', '\u017c': 'z', '\u017e': 'z',
	'\u0132': 'IJ', '\u0133': 'ij',
	'\u0152': 'Oe', '\u0153': 'oe',
	'\u0149': "'n", '\u017f': 's'
};
var htmlEscapes = {
	'&': '&amp;',
	'<': '&lt;',
	'>': '&gt;',
	'"': '&quot;',
	"'": '&#39;'
};
var htmlUnescapes = {
	'&amp;': '&',
	'&lt;': '<',
	'&gt;': '>',
	'&quot;': '"',
	'&#39;': "'"
};
var stringEscapes = {
	'\\': '\\',
	"'": "'",
	'\n': 'n',
	'\r': 'r',
	'\u2028': 'u2028',
	'\u2029': 'u2029'
};
var freeParseFloat = parseFloat,
	freeParseInt = parseInt;
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
var root = freeGlobal || freeSelf || Function('return this')();
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var freeProcess = moduleExports && freeGlobal.process;

var nodeUtil = (function () {
	try {
		// Use `util.types` for Node.js 10+.
		var types = freeModule && freeModule.require && freeModule.require('util').types;

		if (types) {
			return types;
		}

		// Legacy `process.binding('util')` for Node.js < 10.
		return freeProcess && freeProcess.binding && freeProcess.binding('util');
	} catch (e) { }
}());

/* Node.js helper references. */
var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer,
	nodeIsDate = nodeUtil && nodeUtil.isDate,
	nodeIsMap = nodeUtil && nodeUtil.isMap,
	nodeIsRegExp = nodeUtil && nodeUtil.isRegExp,
	nodeIsSet = nodeUtil && nodeUtil.isSet,
	nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

function apply(func: Function, thisArg: any, args: any[]): any {
	switch (args.length) {
		case 0: return func.call(thisArg);
		case 1: return func.call(thisArg, args[0]);
		case 2: return func.call(thisArg, args[0], args[1]);
		case 3: return func.call(thisArg, args[0], args[1], args[2]);
	}
	return func.apply(thisArg, args);
}

function arrayAggregator(array: any[], setter: Function, iteratee: Function, accumulator: any): Function {
	var index = -1,
		length = array == null ? 0 : array.length;

	while (++index < length) {
		var value = array[index];
		setter(accumulator, value, iteratee(value), array);
	}
	return accumulator;
}

function arrayEach(array: any[], iteratee: Function): any[] {
	var index = -1,
		length = array == null ? 0 : array.length;

	while (++index < length) {
		if (iteratee(array[index], index, array) === false) {
			break;
		}
	}
	return array;
}

function arrayEachRight(array: any[], iteratee: Function): any[] {
	var length = array == null ? 0 : array.length;

	while (length--) {
		if (iteratee(array[length], length, array) === false) {
			break;
		}
	}
	return array;
}

function arrayEvery(array: any[], predicate: Function): boolean {
	var index = -1,
		length = array == null ? 0 : array.length;

	while (++index < length) {
		if (!predicate(array[index], index, array)) {
			return false;
		}
	}
	return true;
}

function arrayFilter(array: any[], predicate: Function): any[] {
	var index = -1,
		length = array == null ? 0 : array.length,
		resIndex = 0,
		result = [];

	while (++index < length) {
		var value = array[index];
		if (predicate(value, index, array)) {
			result[resIndex++] = value;
		}
	}
	return result;
}

function arrayIncludes(array: any[], value: any): boolean {
	var length = array == null ? 0 : array.length;
	return !!length && baseIndexOf(array, value, 0) > -1;
}

function arrayIncludesWith(array: any[], value: any, comparator: Function): boolean {
	var index = -1,
		length = array == null ? 0 : array.length;

	while (++index < length) {
		if (comparator(value, array[index])) {
			return true;
		}
	}
	return false;
}

function arrayMap(array: any[], iteratee: Function): any[] {
	var index = -1,
		length = array == null ? 0 : array.length,
		result = Array(length);

	while (++index < length) {
		result[index] = iteratee(array[index], index, array);
	}
	return result;
}

function arrayPush(array: any[], values: any[]): any[] {
	var index = -1,
		length = values.length,
		offset = array.length;

	while (++index < length) {
		array[offset + index] = values[index];
	}
	return array;
}

function arrayReduce(array: any[], iteratee: Function, accumulator: any, initAccum: boolean): any {
	var index = -1,
		length = array == null ? 0 : array.length;

	if (initAccum && length) {
		accumulator = array[++index];
	}
	while (++index < length) {
		accumulator = iteratee(accumulator, array[index], index, array);
	}
	return accumulator;
}

function arrayReduceRight(array: any[], iteratee: Function, accumulator: any, initAccum: boolean): any {
	var length = array == null ? 0 : array.length;
	if (initAccum && length) {
		accumulator = array[--length];
	}
	while (length--) {
		accumulator = iteratee(accumulator, array[length], length, array);
	}
	return accumulator;
}

function arraySome(array: any[], predicate: Function): boolean {
	var index = -1,
		length = array == null ? 0 : array.length;

	while (++index < length) {
		if (predicate(array[index], index, array)) {
			return true;
		}
	}
	return false;
}

var asciiSize = baseProperty('length');

function asciiToArray(string: string): any[] {
	return string.split('');
}

function asciiWords(string: string): any[] {
	return string.match(reAsciiWord) || [];
}

function baseFindKey(collection: any[] | any, predicate: Function, eachFunc: Function): any {
	var result;
	eachFunc(collection, function (value, key, collection) {
		if (predicate(value, key, collection)) {
			result = key;
			return false;
		}
	});
	return result;
}

function baseFindIndex(array: any[], predicate: Function, fromIndex: number, fromRight?: boolean): number {
	var length = array.length,
		index = fromIndex + (fromRight ? 1 : -1);

	while ((fromRight ? index-- : ++index < length)) {
		if (predicate(array[index], index, array)) {
			return index;
		}
	}
	return -1;
}

function baseIndexOf(array: any[], value: any, fromIndex: number): number {
	return value === value
		? strictIndexOf(array, value, fromIndex)
		: baseFindIndex(array, baseIsNaN, fromIndex);
}

function baseIndexOfWith(array: any[], value: any, fromIndex: number, comparator: Function): number {
	var index = fromIndex - 1,
		length = array.length;

	while (++index < length) {
		if (comparator(array[index], value)) {
			return index;
		}
	}
	return -1;
}

function baseIsNaN(value: any): boolean {
	return value !== value;
}

function baseMean(array: any[], iteratee: Function): number {
	var length = array == null ? 0 : array.length;
	return length ? (baseSum(array, iteratee) / length) : NAN;
}

function baseProperty(key: string): Function {
	return function (object: any) {
		return object == null ? undefined : object[key];
	};
}

function basePropertyOf(object: any): Function {
	return function (key: string) {
		return object == null ? undefined : object[key];
	};
}

function baseReduce(collection: any[] | any, iteratee: Function, accumulator: any, initAccum: boolean, eachFunc: Function): any {
	eachFunc(collection, function (value: any, index: number, collection: any[]) {
		accumulator = initAccum
			? (initAccum = false, value)
			: iteratee(accumulator, value, index, collection);
	});
	return accumulator;
}

function baseSortBy(array: any[], comparer: Function): any[] {
	var length = array.length;

	array.sort(comparer);
	while (length--) {
		array[length] = array[length].value;
	}
	return array;
}

function baseSum(array: any[], iteratee: Function): number {
	var result,
		index = -1,
		length = array.length;

	while (++index < length) {
		var current = iteratee(array[index]);
		if (current !== undefined) {
			result = result === undefined ? current : (result + current);
		}
	}
	return result;
}

function baseTimes(n: number, iteratee: Function): any[] {
	var index = -1,
		result = Array(n);

	while (++index < n) {
		result[index] = iteratee(index);
	}
	return result;
}

function baseToPairs(object: any, props: any[]): any {
	return arrayMap(props, function (key) {
		return [key, object[key]];
	});
}

function baseUnary(func: Function): Function {
	return function (value: any): any {
		return func(value);
	};
}

function baseValues(object: any, props: any[]): any {
	return arrayMap(props, function (key: string) {
		return object[key];
	});
}

function cacheHas(cache: any, key: string): boolean {
	return cache.has(key);
}

function charsStartIndex(strSymbols: any[], chrSymbols: any[]): number {
	var index = -1,
		length = strSymbols.length;

	while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) { }
	return index;
}

function charsEndIndex(strSymbols: any[], chrSymbols: any[]): number {
	var index = strSymbols.length;

	while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) { }
	return index;
}

function countHolders(array: any[], placeholder: any): number {
	var length = array.length,
		result = 0;

	while (length--) {
		if (array[length] === placeholder) {
			++result;
		}
	}
	return result;
}

var deburrLetter: ReplacerType = basePropertyOf(deburredLetters) as ReplacerType;
var escapeHtmlChar: ReplacerType = basePropertyOf(htmlEscapes) as ReplacerType;

function escapeStringChar(chr: string): string {
	return '\\' + stringEscapes[chr];
}

function getValue(object: any, key: string): any {
	return object == null ? undefined : object[key];
}

function hasUnicode(string: string): boolean {
	return reHasUnicode.test(string);
}

function hasUnicodeWord(string: string): boolean {
	return reHasUnicodeWord.test(string);
}

function iteratorToArray(iterator: any): any[] {
	var data,
		result = [];

	while (!(data = iterator.next()).done) {
		result.push(data.value);
	}
	return result;
}

function mapToArray(map: any): any[] {
	var index = -1,
		result = Array(map.size);

	map.forEach(function (value: any, key: string) {
		result[++index] = [key, value];
	});
	return result;
}

function overArg(func: Function, transform: Function): Function {
	return function (arg: any) {
		return func(transform(arg));
	};
}

function replaceHolders(array: any[], placeholder: any): any[] {
	var index = -1,
		length = array.length,
		resIndex = 0,
		result = [];

	while (++index < length) {
		var value = array[index];
		if (value === placeholder || value === PLACEHOLDER) {
			array[index] = PLACEHOLDER;
			result[resIndex++] = index;
		}
	}
	return result;
}

function setToArray(set: any): any[] {
	var index = -1,
		result = Array(set.size);

	set.forEach(function (value: any) {
		result[++index] = value;
	});
	return result;
}

function setToPairs(set: any): any[] {
	var index = -1,
		result = Array(set.size);

	set.forEach(function (value) {
		result[++index] = [value, value];
	});
	return result;
}

function strictIndexOf(array: any[], value: any, fromIndex: number): number {
	var index = fromIndex - 1,
		length = array.length;

	while (++index < length) {
		if (array[index] === value) {
			return index;
		}
	}
	return -1;
}

function strictLastIndexOf(array: any[], value: any, fromIndex: number): number {
	var index = fromIndex + 1;
	while (index--) {
		if (array[index] === value) {
			return index;
		}
	}
	return index;
}

function stringSize(string: string): number {
	return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
}

function stringToArray(string: string): any[] {
	return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
}

var unescapeHtmlChar: Function = basePropertyOf(htmlUnescapes);

function unicodeSize(string: string): number {
	var result = reUnicode.lastIndex = 0;
	while (reUnicode.test(string)) {
		++result;
	}
	return result;
}

function unicodeToArray(string: string): any[] {
	return string.match(reUnicode) || [];
}

function unicodeWords(string: string): any[] {
	return string.match(reUnicodeWord) || [];
}

var runInContext = (function runInContext(context) {
	context = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));

	var Array = context.Array,
		Date = context.Date,
		Error = context.Error,
		Function = context.Function,
		Math = context.Math,
		Object = context.Object,
		RegExp = context.RegExp,
		String = context.String,
		TypeError = context.TypeError;
	var arrayProto = Array.prototype,
		funcProto = Function.prototype,
		objectProto = Object.prototype;
	var coreJsData = context['__core-js_shared__'];
	var funcToString = funcProto.toString;
	var hasOwnProperty = objectProto.hasOwnProperty;
	var idCounter = 0;
	var maskSrcKey = (function () {
		var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
		return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	var nativeObjectToString = objectProto.toString;
	var objectCtorString = funcToString.call(Object);
	var oldDash = root._;
	var reIsNative = RegExp('^' +
		funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
			.replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	var Buffer = moduleExports ? context.Buffer : undefined,
		Symbol = context.Symbol,
		Uint8Array = context.Uint8Array,
		allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined,
		getPrototype = overArg(Object.getPrototypeOf, Object),
		objectCreate = Object.create,
		propertyIsEnumerable = objectProto.propertyIsEnumerable,
		splice = arrayProto.splice,
		spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined,
		symIterator = Symbol ? Symbol.iterator : undefined,
		symToStringTag = Symbol ? Symbol.toStringTag : undefined;
	var defineProperty = (function () {
		try {
			var func = getNative(Object, 'defineProperty');
			func({}, '', {});
			return func;
		} catch (e) { }
	}());
	var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout,
		ctxNow = Date && Date.now !== root.Date.now && Date.now,
		ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;
	var nativeCeil = Math.ceil,
		nativeFloor = Math.floor,
		nativeGetSymbols = Object.getOwnPropertySymbols,
		nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
		nativeIsFinite = context.isFinite,
		nativeJoin = arrayProto.join,
		nativeKeys = overArg(Object.keys, Object),
		nativeMax = Math.max,
		nativeMin = Math.min,
		nativeNow = Date.now,
		nativeParseInt = context.parseInt,
		nativeRandom = Math.random,
		nativeReverse = arrayProto.reverse;
	var DataView = getNative(context, 'DataView'),
		Map = getNative(context, 'Map'),
		Promise = getNative(context, 'Promise'),
		Set = getNative(context, 'Set'),
		WeakMap = getNative(context, 'WeakMap'),
		nativeCreate = getNative(Object, 'create');
	var metaMap = WeakMap && new WeakMap;
	var realNames = {};
	var dataViewCtorString = toSource(DataView),
		mapCtorString = toSource(Map),
		promiseCtorString = toSource(Promise),
		setCtorString = toSource(Set),
		weakMapCtorString = toSource(WeakMap);
	var symbolProto = Symbol ? Symbol.prototype : undefined,
		symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
		symbolToString = symbolProto ? symbolProto.toString : undefined;

	function lodash(value: any) {
		if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
			if (value instanceof LodashWrapper) {
				return value;
			}
			if (hasOwnProperty.call(value, '__wrapped__')) {
				return wrapperClone(value);
			}
		}
		return new LodashWrapper(value);
	}

	var baseCreate = (function () {
		function object() { }
		return function (proto) {
			if (!isObject(proto)) {
				return {};
			}
			if (objectCreate) {
				return objectCreate(proto);
			}
			object.prototype = proto;
			var result = new object;
			object.prototype = undefined;
			return result;
		};
	}());

	function baseLodash() {
		// No operation performed.
	}

	function LodashWrapper(value: any, chainAll?: boolean) {
		this.__wrapped__ = value;
		this.__actions__ = [];
		this.__chain__ = !!chainAll;
		this.__index__ = 0;
		this.__values__ = undefined;
	}

	lodash.templateSettings = {
		'escape': reEscape,
		'evaluate': reEvaluate,
		'interpolate': reInterpolate,
		'variable': '',
		'imports': {
			'_': lodash
		}
	};

	lodash.prototype = baseLodash.prototype;
	lodash.prototype.constructor = lodash;
	LodashWrapper.prototype = baseCreate(baseLodash.prototype);
	LodashWrapper.prototype.constructor = LodashWrapper;

	function LazyWrapper(value: any) {
		this.__wrapped__ = value;
		this.__actions__ = [];
		this.__dir__ = 1;
		this.__filtered__ = false;
		this.__iteratees__ = [];
		this.__takeCount__ = MAX_ARRAY_LENGTH;
		this.__views__ = [];
	}

	function lazyClone(): any {
		var result = new LazyWrapper(this.__wrapped__);
		result.__actions__ = copyArray(this.__actions__);
		result.__dir__ = this.__dir__;
		result.__filtered__ = this.__filtered__;
		result.__iteratees__ = copyArray(this.__iteratees__);
		result.__takeCount__ = this.__takeCount__;
		result.__views__ = copyArray(this.__views__);
		return result;
	}

	function lazyReverse(): any {
		if (this.__filtered__) {
			var result = new LazyWrapper(this);
			result.__dir__ = -1;
			result.__filtered__ = true;
		} else {
			result = this.clone();
			result.__dir__ *= -1;
		}
		return result;
	}

	function lazyValue(): any {
		var array = this.__wrapped__.value(),
			dir = this.__dir__,
			isArr = isArray(array),
			isRight = dir < 0,
			arrLength = isArr ? array.length : 0,
			view = getView(0, arrLength, this.__views__),
			start = view.start,
			end = view.end,
			length = end - start,
			index = isRight ? end : (start - 1),
			iteratees = this.__iteratees__,
			iterLength = iteratees.length,
			resIndex = 0,
			takeCount = nativeMin(length, this.__takeCount__);

		if (!isArr || (!isRight && arrLength == length && takeCount == length)) {
			return baseWrapperValue(array, this.__actions__);
		}
		var result = [];

		outer:
		while (length-- && resIndex < takeCount) {
			index += dir;

			var iterIndex = -1,
				value = array[index];

			while (++iterIndex < iterLength) {
				var data = iteratees[iterIndex],
					iteratee = data.iteratee,
					type = data.type,
					computed = iteratee(value);

				if (type == LAZY_MAP_FLAG) {
					value = computed;
				} else if (!computed) {
					if (type == LAZY_FILTER_FLAG) {
						continue outer;
					} else {
						break outer;
					}
				}
			}
			result[resIndex++] = value;
		}
		return result;
	}

	LazyWrapper.prototype = baseCreate(baseLodash.prototype);
	LazyWrapper.prototype.constructor = LazyWrapper;

	function Hash(entries: any[]) {
		var index = -1,
			length = entries == null ? 0 : entries.length;

		this.clear();
		while (++index < length) {
			var entry = entries[index];
			this.set(entry[0], entry[1]);
		}
	}

	function hashClear(): void {
		this.__data__ = nativeCreate ? nativeCreate(null) : {};
		this.size = 0;
	}

	function hashDelete(key: string): boolean {
		var result = this.has(key) && delete this.__data__[key];
		this.size -= result ? 1 : 0;
		return result;
	}

	function hashGet(key: string): any {
		var data = this.__data__;
		if (nativeCreate) {
			var result = data[key];
			return result === HASH_UNDEFINED ? undefined : result;
		}
		return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}

	function hashHas(key: string): boolean {
		var data = this.__data__;
		return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
	}

	function hashSet(key: string, value: any): any {
		var data = this.__data__;
		this.size += this.has(key) ? 0 : 1;
		data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
		return this;
	}

	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	function ListCache(entries: any[]) {
		var index = -1,
			length = entries == null ? 0 : entries.length;

		this.clear();
		while (++index < length) {
			var entry = entries[index];
			this.set(entry[0], entry[1]);
		}
	}

	function listCacheClear(): void {
		this.__data__ = [];
		this.size = 0;
	}

	function listCacheDelete(key: string): boolean {
		var data = this.__data__,
			index = assocIndexOf(data, key);

		if (index < 0) {
			return false;
		}
		var lastIndex = data.length - 1;
		if (index == lastIndex) {
			data.pop();
		} else {
			splice.call(data, index, 1);
		}
		--this.size;
		return true;
	}

	function listCacheGet(key: string): any {
		var data = this.__data__,
			index = assocIndexOf(data, key);

		return index < 0 ? undefined : data[index][1];
	}

	function listCacheHas(key: string): boolean {
		return assocIndexOf(this.__data__, key) > -1;
	}

	function listCacheSet(key: string, value: any): any {
		var data = this.__data__,
			index = assocIndexOf(data, key);

		if (index < 0) {
			++this.size;
			data.push([key, value]);
		} else {
			data[index][1] = value;
		}
		return this;
	}

	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	function MapCache(entries: any[]) {
		var index = -1,
			length = entries == null ? 0 : entries.length;

		this.clear();
		while (++index < length) {
			var entry = entries[index];
			this.set(entry[0], entry[1]);
		}
	}

	function mapCacheClear(): void {
		this.size = 0;
		this.__data__ = {
			'hash': new Hash(),
			'map': new (Map || ListCache),
			'string': new Hash()
		};
	}

	function mapCacheDelete(key: string): boolean {
		var result = getMapData(this, key)['delete'](key);
		this.size -= result ? 1 : 0;
		return result;
	}

	function mapCacheGet(key: string): any {
		return getMapData(this, key).get(key);
	}

	function mapCacheHas(key: string): boolean {
		return getMapData(this, key).has(key);
	}

	function mapCacheSet(key: string, value: any): any {
		var data = getMapData(this, key),
			size = data.size;

		data.set(key, value);
		this.size += data.size == size ? 0 : 1;
		return this;
	}

	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	function SetCache(values: any[]) {
		var index = -1,
			length = values == null ? 0 : values.length;

		this.__data__ = new MapCache();
		while (++index < length) {
			this.add(values[index]);
		}
	}

	function setCacheAdd(value: any): any {
		this.__data__.set(value, HASH_UNDEFINED);
		return this;
	}

	function setCacheHas(value: any): boolean {
		return this.__data__.has(value);
	}

	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;

	function Stack(entries: any[]) {
		var data = this.__data__ = new ListCache(entries);
		this.size = data.size;
	}

	function stackClear(): void {
		this.__data__ = new ListCache();
		this.size = 0;
	}

	function stackDelete(key: string): boolean {
		var data = this.__data__,
			result = data['delete'](key);

		this.size = data.size;
		return result;
	}

	function stackGet(key: string): any {
		return this.__data__.get(key);
	}

	function stackHas(key: string): boolean {
		return this.__data__.has(key);
	}

	function stackSet(key: string, value: any): any {
		var data = this.__data__;
		if (data instanceof ListCache) {
			var pairs = data.__data__;
			if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
				pairs.push([key, value]);
				this.size = ++data.size;
				return this;
			}
			data = this.__data__ = new MapCache(pairs);
		}
		data.set(key, value);
		this.size = data.size;
		return this;
	}

	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;

	function arrayLikeKeys(value: any, inherited: boolean): string[] {
		var isArr = isArray(value),
			isArg = !isArr && isArguments(value),
			isBuff = !isArr && !isArg && isBuffer(value),
			isType = !isArr && !isArg && !isBuff && isTypedArray(value),
			skipIndexes = isArr || isArg || isBuff || isType,
			result = skipIndexes ? baseTimes(value.length, String) : [],
			length = result.length;

		for (var key in value) {
			if ((inherited || hasOwnProperty.call(value, key)) &&
				!(skipIndexes && (
					// Safari 9 has enumerable `arguments.length` in strict mode.
					key == 'length' ||
					// Node.js 0.10 has enumerable non-index properties on buffers.
					(isBuff && (key == 'offset' || key == 'parent')) ||
					// PhantomJS 2 has enumerable non-index properties on typed arrays.
					(isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
					// Skip index properties.
					isIndex(key, length)
				))) {
				result.push(key);
			}
		}
		return result;
	}

	function arraySample(array: any[]): any {
		var length = array.length;
		return length ? array[baseRandom(0, length - 1)] : undefined;
	}

	function arraySampleSize(array: any[], n: number): any[] {
		return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
	}

	function arrayShuffle(array: any[]): any[] {
		return shuffleSelf(copyArray(array));
	}

	function assignMergeValue(object: any, key: string, value: any): void {
		if ((value !== undefined && !eq(object[key], value)) ||
			(value === undefined && !(key in object))) {
			baseAssignValue(object, key, value);
		}
	}

	function assignValue(object: any, key: string, value: any): void {
		var objValue = object[key];
		if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
			(value === undefined && !(key in object))) {
			baseAssignValue(object, key, value);
		}
	}

	function assocIndexOf(array: any[], key: any): number {
		var length = array.length;
		while (length--) {
			if (eq(array[length][0], key)) {
				return length;
			}
		}
		return -1;
	}

    /**
     * Aggregates elements of `collection` on `accumulator` with keys transformed
     * by `iteratee` and values set by `setter`.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform keys.
     * @param {Object} accumulator The initial aggregated object.
     * @returns {Function} Returns `accumulator`.
     */
	function baseAggregator(collection, setter, iteratee, accumulator) {
		baseEach(collection, function (value, key, collection) {
			setter(accumulator, value, iteratee(value), collection);
		});
		return accumulator;
	}

	function baseAssign(object: any, source: any): any {
		return object && copyObject(source, keys(source), object);
	}

	function baseAssignIn(object: any, source: any): any {
		return object && copyObject(source, keysIn(source), object);
	}

	function baseAssignValue(object: any, key: string, value: any): void {
		if (key == '__proto__' && defineProperty) {
			defineProperty(object, key, {
				'configurable': true,
				'enumerable': true,
				'value': value,
				'writable': true
			});
		} else {
			object[key] = value;
		}
	}

	function baseAt(object: any, paths: string[]): any[] {
		var index = -1,
			length = paths.length,
			result = Array(length),
			skip = object == null;

		while (++index < length) {
			result[index] = skip ? undefined : get(object, paths[index]);
		}
		return result;
	}

	function baseClamp(number: number, lower: number, upper: number): number {
		if (number === number) {
			if (upper !== undefined) {
				number = number <= upper ? number : upper;
			}
			if (lower !== undefined) {
				number = number >= lower ? number : lower;
			}
		}
		return number;
	}

	function baseClone(value: any, bitmask: number, customizer?: Function, key?: string, object?: any, stack?: any): any {
		var result,
			isDeep = bitmask & CLONE_DEEP_FLAG,
			isFlat = bitmask & CLONE_FLAT_FLAG,
			isFull = bitmask & CLONE_SYMBOLS_FLAG;

		if (customizer) {
			result = object ? customizer(value, key, object, stack) : customizer(value);
		}
		if (result !== undefined) {
			return result;
		}
		if (!isObject(value)) {
			return value;
		}
		var isArr = isArray(value);
		if (isArr) {
			result = initCloneArray(value);
			if (!isDeep) {
				return copyArray(value, result);
			}
		} else {
			var tag = getTag(value),
				isFunc = tag == funcTag || tag == genTag;

			if (isBuffer(value)) {
				return cloneBuffer(value, isDeep);
			}
			if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
				result = (isFlat || isFunc) ? {} : initCloneObject(value);
				if (!isDeep) {
					return isFlat
						? copySymbolsIn(value, baseAssignIn(result, value))
						: copySymbols(value, baseAssign(result, value));
				}
			} else {
				if (!cloneableTags[tag]) {
					return object ? value : {};
				}
				result = initCloneByTag(value, tag, isDeep);
			}
		}
		// Check for circular references and return its corresponding clone.
		stack || (stack = new Stack);
		var stacked = stack.get(value);
		if (stacked) {
			return stacked;
		}
		stack.set(value, result);

		if (isSet(value)) {
			value.forEach(function (subValue) {
				result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
			});
		} else if (isMap(value)) {
			value.forEach(function (subValue, key) {
				result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
			});
		}

		var keysFunc = isFull
			? (isFlat ? getAllKeysIn : getAllKeys)
			: (isFlat ? keysIn : keys);

		var props = isArr ? undefined : keysFunc(value);
		arrayEach(props || value, function (subValue, key) {
			if (props) {
				key = subValue;
				subValue = value[key];
			}
			// Recursively populate clone (susceptible to call stack limits).
			assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
		});
		return result;
	}

	function baseConforms(source: any): Function {
		var props = keys(source);
		return function (object) {
			return baseConformsTo(object, source, props);
		};
	}

	function baseConformsTo(object: any, source: any, props: any): boolean {
		var length = props.length;
		if (object == null) {
			return !length;
		}
		object = Object(object);
		while (length--) {
			var key = props[length],
				predicate = source[key],
				value = object[key];

			if ((value === undefined && !(key in object)) || !predicate(value)) {
				return false;
			}
		}
		return true;
	}

	function baseDelay(func: Function, wait: number, args: any[]): number | any {
		if (typeof func != 'function') {
			throw new TypeError(FUNC_ERROR_TEXT);
		}
		return setTimeout(function () { func.apply(undefined, args); }, wait);
	}

    /**
     * The base implementation of methods like `_.difference` without support
     * for excluding multiple arrays or iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Array} values The values to exclude.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     */
	function baseDifference(array, values, iteratee, comparator) {
		var index = -1,
			includes = arrayIncludes,
			isCommon = true,
			length = array.length,
			result = [],
			valuesLength = values.length;

		if (!length) {
			return result;
		}
		if (iteratee) {
			values = arrayMap(values, baseUnary(iteratee));
		}
		if (comparator) {
			includes = arrayIncludesWith;
			isCommon = false;
		}
		else if (values.length >= LARGE_ARRAY_SIZE) {
			includes = cacheHas;
			isCommon = false;
			values = new SetCache(values);
		}
		outer:
		while (++index < length) {
			var value = array[index],
				computed = iteratee == null ? value : iteratee(value);

			value = (comparator || value !== 0) ? value : 0;
			if (isCommon && computed === computed) {
				var valuesIndex = valuesLength;
				while (valuesIndex--) {
					if (values[valuesIndex] === computed) {
						continue outer;
					}
				}
				result.push(value);
			}
			else if (!includes(values, computed, comparator)) {
				result.push(value);
			}
		}
		return result;
	}

    /**
     * The base implementation of `_.forEach` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */
	var baseEach = createBaseEach(baseForOwn);

    /**
     * The base implementation of `_.forEachRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */
	var baseEachRight = createBaseEach(baseForOwnRight, true);

    /**
     * The base implementation of `_.every` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`
     */
	function baseEvery(collection, predicate) {
		var result = true;
		baseEach(collection, function (value, index, collection) {
			result = !!predicate(value, index, collection);
			return result;
		});
		return result;
	}

    /**
     * The base implementation of methods like `_.max` and `_.min` which accepts a
     * `comparator` to determine the extremum value.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The iteratee invoked per iteration.
     * @param {Function} comparator The comparator used to compare values.
     * @returns {*} Returns the extremum value.
     */
	function baseExtremum(array, iteratee, comparator) {
		var index = -1,
			length = array.length;

		while (++index < length) {
			var value = array[index],
				current = iteratee(value);

			if (current != null && (computed === undefined
				? (current === current && !isSymbol(current))
				: comparator(current, computed)
			)) {
				var computed = current,
					result = value;
			}
		}
		return result;
	}

    /**
     * The base implementation of `_.fill` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     */
	function baseFill(array, value, start, end) {
		var length = array.length;

		start = toInteger(start);
		if (start < 0) {
			start = -start > length ? 0 : (length + start);
		}
		end = (end === undefined || end > length) ? length : toInteger(end);
		if (end < 0) {
			end += length;
		}
		end = start > end ? 0 : toLength(end);
		while (start < end) {
			array[start++] = value;
		}
		return array;
	}

    /**
     * The base implementation of `_.filter` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     */
	function baseFilter(collection, predicate) {
		var result = [];
		baseEach(collection, function (value, index, collection) {
			if (predicate(value, index, collection)) {
				result.push(value);
			}
		});
		return result;
	}

    /**
     * The base implementation of `_.flatten` with support for restricting flattening.
     *
     * @private
     * @param {Array} array The array to flatten.
     * @param {number} depth The maximum recursion depth.
     * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
     * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
     * @param {Array} [result=[]] The initial result value.
     * @returns {Array} Returns the new flattened array.
     */
	function baseFlatten(array: any[], depth: number, predicate?: boolean, isStrict?: boolean, result?: any[]): any[] {
		var index = -1,
			length = array.length;

		predicate || (predicate = isFlattenable);
		result || (result = []);

		while (++index < length) {
			var value = array[index];
			if (depth > 0 && predicate(value)) {
				if (depth > 1) {
					// Recursively flatten arrays (susceptible to call stack limits).
					baseFlatten(value, depth - 1, predicate, isStrict, result);
				} else {
					arrayPush(result, value);
				}
			} else if (!isStrict) {
				result[result.length] = value;
			}
		}
		return result;
	}

    /**
     * The base implementation of `baseForOwn` which iterates over `object`
     * properties returned by `keysFunc` and invokes `iteratee` for each property.
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */
	var baseFor = createBaseFor();

    /**
     * This function is like `baseFor` except that it iterates over properties
     * in the opposite order.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */
	var baseForRight = createBaseFor(true);

    /**
     * The base implementation of `_.forOwn` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
	function baseForOwn(object, iteratee) {
		return object && baseFor(object, iteratee, keys);
	}

    /**
     * The base implementation of `_.forOwnRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
	function baseForOwnRight(object, iteratee) {
		return object && baseForRight(object, iteratee, keys);
	}

    /**
     * The base implementation of `_.functions` which creates an array of
     * `object` function property names filtered from `props`.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Array} props The property names to filter.
     * @returns {Array} Returns the function names.
     */
	function baseFunctions(object, props) {
		return arrayFilter(props, function (key) {
			return isFunction(object[key]);
		});
	}

    /**
     * The base implementation of `_.get` without support for default values.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @returns {*} Returns the resolved value.
     */
	function baseGet(object, path) {
		path = castPath(path, object);

		var index = 0,
			length = path.length;

		while (object != null && index < length) {
			object = object[toKey(path[index++])];
		}
		return (index && index == length) ? object : undefined;
	}

    /**
     * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
     * `keysFunc` and `symbolsFunc` to get the enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @param {Function} symbolsFunc The function to get the symbols of `object`.
     * @returns {Array} Returns the array of property names and symbols.
     */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
		var result = keysFunc(object);
		return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
	}

    /**
     * The base implementation of `getTag` without fallbacks for buggy environments.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */
	function baseGetTag(value) {
		if (value == null) {
			return value === undefined ? undefinedTag : nullTag;
		}
		return (symToStringTag && symToStringTag in Object(value))
			? getRawTag(value)
			: objectToString(value);
	}

    /**
     * The base implementation of `_.gt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     */
	function baseGt(value, other) {
		return value > other;
	}

    /**
     * The base implementation of `_.has` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */
	function baseHas(object, key) {
		return object != null && hasOwnProperty.call(object, key);
	}

    /**
     * The base implementation of `_.hasIn` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */
	function baseHasIn(object, key) {
		return object != null && key in Object(object);
	}

	function baseInRange(number: number, start: number, end: number): boolean {
		return number >= nativeMin(start, end) && number < nativeMax(start, end);
	}

    /**
     * The base implementation of methods like `_.intersection`, without support
     * for iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of shared values.
     */
	function baseIntersection(arrays, iteratee, comparator) {
		var includes = comparator ? arrayIncludesWith : arrayIncludes,
			length = arrays[0].length,
			othLength = arrays.length,
			othIndex = othLength,
			caches = Array(othLength),
			maxLength = Infinity,
			result = [];

		while (othIndex--) {
			var array = arrays[othIndex];
			if (othIndex && iteratee) {
				array = arrayMap(array, baseUnary(iteratee));
			}
			maxLength = nativeMin(array.length, maxLength);
			caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
				? new SetCache(othIndex && array)
				: undefined;
		}
		array = arrays[0];

		var index = -1,
			seen = caches[0];

		outer:
		while (++index < length && result.length < maxLength) {
			var value = array[index],
				computed = iteratee ? iteratee(value) : value;

			value = (comparator || value !== 0) ? value : 0;
			if (!(seen
				? cacheHas(seen, computed)
				: includes(result, computed, comparator)
			)) {
				othIndex = othLength;
				while (--othIndex) {
					var cache = caches[othIndex];
					if (!(cache
						? cacheHas(cache, computed)
						: includes(arrays[othIndex], computed, comparator))
					) {
						continue outer;
					}
				}
				if (seen) {
					seen.push(computed);
				}
				result.push(value);
			}
		}
		return result;
	}

    /**
     * The base implementation of `_.invert` and `_.invertBy` which inverts
     * `object` with values transformed by `iteratee` and set by `setter`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform values.
     * @param {Object} accumulator The initial inverted object.
     * @returns {Function} Returns `accumulator`.
     */
	function baseInverter(object, setter, iteratee, accumulator) {
		baseForOwn(object, function (value, key, object) {
			setter(accumulator, iteratee(value), key, object);
		});
		return accumulator;
	}

    /**
     * The base implementation of `_.invoke` without support for individual
     * method arguments.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {Array} args The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     */
	function baseInvoke(object, path, args) {
		path = castPath(path, object);
		object = parent(object, path);
		var func = object == null ? object : object[toKey(last(path))];
		return func == null ? undefined : apply(func, object, args);
	}

	function baseIsArguments(value: any): boolean {
		return isObjectLike(value) && baseGetTag(value) == argsTag;
	}

	function baseIsArrayBuffer(value: any): boolean {
		return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
	}

	function baseIsDate(value: any): boolean {
		return isObjectLike(value) && baseGetTag(value) == dateTag;
	}

	function baseIsEqual(value: any, other: any, bitmask?: boolean, customizer?: Function, stack?: any): boolean {
		if (value === other) {
			return true;
		}
		if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
			return value !== value && other !== other;
		}
		return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
	}

    /**
     * A specialized version of `baseIsEqual` for arrays and objects which performs
     * deep comparisons and tracks traversed objects enabling objects with circular
     * references to be compared.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} [stack] Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
	function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
		var objIsArr = isArray(object),
			othIsArr = isArray(other),
			objTag = objIsArr ? arrayTag : getTag(object),
			othTag = othIsArr ? arrayTag : getTag(other);

		objTag = objTag == argsTag ? objectTag : objTag;
		othTag = othTag == argsTag ? objectTag : othTag;

		var objIsObj = objTag == objectTag,
			othIsObj = othTag == objectTag,
			isSameTag = objTag == othTag;

		if (isSameTag && isBuffer(object)) {
			if (!isBuffer(other)) {
				return false;
			}
			objIsArr = true;
			objIsObj = false;
		}
		if (isSameTag && !objIsObj) {
			stack || (stack = new Stack);
			return (objIsArr || isTypedArray(object))
				? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
				: equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
		}
		if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
			var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
				othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

			if (objIsWrapped || othIsWrapped) {
				var objUnwrapped = objIsWrapped ? object.value() : object,
					othUnwrapped = othIsWrapped ? other.value() : other;

				stack || (stack = new Stack);
				return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
			}
		}
		if (!isSameTag) {
			return false;
		}
		stack || (stack = new Stack);
		return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
	}

	function baseIsMap(value: any): boolean {
		return isObjectLike(value) && getTag(value) == mapTag;
	}

    /**
     * The base implementation of `_.isMatch` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Array} matchData The property names, values, and compare flags to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     */
	function baseIsMatch(object, source, matchData, customizer) {
		var index = matchData.length,
			length = index,
			noCustomizer = !customizer;

		if (object == null) {
			return !length;
		}
		object = Object(object);
		while (index--) {
			var data = matchData[index];
			if ((noCustomizer && data[2])
				? data[1] !== object[data[0]]
				: !(data[0] in object)
			) {
				return false;
			}
		}
		while (++index < length) {
			data = matchData[index];
			var key = data[0],
				objValue = object[key],
				srcValue = data[1];

			if (noCustomizer && data[2]) {
				if (objValue === undefined && !(key in object)) {
					return false;
				}
			} else {
				var stack = new Stack;
				if (customizer) {
					var result = customizer(objValue, srcValue, key, object, source, stack);
				}
				if (!(result === undefined
					? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
					: result
				)) {
					return false;
				}
			}
		}
		return true;
	}

	function baseIsNative(value: any): boolean {
		if (!isObject(value) || isMasked(value)) {
			return false;
		}
		var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
		return pattern.test(toSource(value));
	}

	function baseIsRegExp(value: any): boolean {
		return isObjectLike(value) && baseGetTag(value) == regexpTag;
	}

	function baseIsSet(value: any): boolean {
		return isObjectLike(value) && getTag(value) == setTag;
	}

	function baseIsTypedArray(value: any): boolean {
		return isObjectLike(value) &&
			isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
	}

	function baseIteratee(value: any): Function {
		// Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
		// See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
		if (typeof value == 'function') {
			return value;
		}
		if (value == null) {
			return identity;
		}
		if (typeof value == 'object') {
			return isArray(value)
				? baseMatchesProperty(value[0], value[1])
				: baseMatches(value);
		}
		return property(value);
	}

	function baseKeys(object: any): string[] {
		if (!isPrototype(object)) {
			return nativeKeys(object);
		}
		var result = [];
		for (var key in Object(object)) {
			if (hasOwnProperty.call(object, key) && key != 'constructor') {
				result.push(key);
			}
		}
		return result;
	}

	function baseKeysIn(object: any): string[] {
		if (!isObject(object)) {
			return nativeKeysIn(object);
		}
		var isProto = isPrototype(object),
			result = [];

		for (var key in object) {
			if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
				result.push(key);
			}
		}
		return result;
	}

	function baseLt(value: any, other: any): boolean {
		return value < other;
	}

    /**
     * The base implementation of `_.map` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     */
	function baseMap(collection, iteratee) {
		var index = -1,
			result = isArrayLike(collection) ? Array(collection.length) : [];

		baseEach(collection, function (value, key, collection) {
			result[++index] = iteratee(value, key, collection);
		});
		return result;
	}

	function baseMatches(source: any): Function {
		var matchData = getMatchData(source);
		if (matchData.length == 1 && matchData[0][2]) {
			return matchesStrictComparable(matchData[0][0], matchData[0][1]);
		}
		return function (object) {
			return object === source || baseIsMatch(object, source, matchData);
		};
	}

    /**
     * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
     *
     * @private
     * @param {string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */
	function baseMatchesProperty(path, srcValue) {
		if (isKey(path) && isStrictComparable(srcValue)) {
			return matchesStrictComparable(toKey(path), srcValue);
		}
		return function (object) {
			var objValue = get(object, path);
			return (objValue === undefined && objValue === srcValue)
				? hasIn(object, path)
				: baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
		};
	}

	function baseMerge(object: any, source: any, srcIndex: number , customizer: Function, stack?: any): void {
		if (object === source) {
			return;
		}
		baseFor(source, function (srcValue, key) {
			stack || (stack = new Stack());
			if (isObject(srcValue)) {
				baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
			}
			else {
				var newValue = customizer
					? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
					: undefined;

				if (newValue === undefined) {
					newValue = srcValue;
				}
				assignMergeValue(object, key, newValue);
			}
		}, keysIn);
	}

    /**
     * A specialized version of `baseMerge` for arrays and objects which performs
     * deep merges and tracks traversed objects enabling objects with circular
     * references to be merged.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {string} key The key of the value to merge.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} mergeFunc The function to merge values.
     * @param {Function} [customizer] The function to customize assigned values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */
	function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
		var objValue = safeGet(object, key),
			srcValue = safeGet(source, key),
			stacked = stack.get(srcValue);

		if (stacked) {
			assignMergeValue(object, key, stacked);
			return;
		}
		var newValue = customizer
			? customizer(objValue, srcValue, (key + ''), object, source, stack)
			: undefined;

		var isCommon = newValue === undefined;

		if (isCommon) {
			var isArr = isArray(srcValue),
				isBuff = !isArr && isBuffer(srcValue),
				isTyped = !isArr && !isBuff && isTypedArray(srcValue);

			newValue = srcValue;
			if (isArr || isBuff || isTyped) {
				if (isArray(objValue)) {
					newValue = objValue;
				}
				else if (isArrayLikeObject(objValue)) {
					newValue = copyArray(objValue);
				}
				else if (isBuff) {
					isCommon = false;
					newValue = cloneBuffer(srcValue, true);
				}
				else if (isTyped) {
					isCommon = false;
					newValue = cloneTypedArray(srcValue, true);
				}
				else {
					newValue = [];
				}
			}
			else if (isPlainObject(srcValue) || isArguments(srcValue)) {
				newValue = objValue;
				if (isArguments(objValue)) {
					newValue = toPlainObject(objValue);
				}
				else if (!isObject(objValue) || isFunction(objValue)) {
					newValue = initCloneObject(srcValue);
				}
			}
			else {
				isCommon = false;
			}
		}
		if (isCommon) {
			// Recursively merge objects and arrays (susceptible to call stack limits).
			stack.set(srcValue, newValue);
			mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
			stack['delete'](srcValue);
		}
		assignMergeValue(object, key, newValue);
	}

	function baseNth(array: any[], n: number): any {
		var length = array.length;
		if (!length) {
			return;
		}
		n += n < 0 ? length : 0;
		return isIndex(n, length) ? array[n] : undefined;
	}

    /**
     * The base implementation of `_.orderBy` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
     * @param {string[]} orders The sort orders of `iteratees`.
     * @returns {Array} Returns the new sorted array.
     */
	function baseOrderBy(collection, iteratees, orders) {
		var index = -1;
		iteratees = arrayMap(iteratees.length ? iteratees : [identity], baseUnary(getIteratee()));

		var result = baseMap(collection, function (value, key, collection) {
			var criteria = arrayMap(iteratees, function (iteratee) {
				return iteratee(value);
			});
			return { 'criteria': criteria, 'index': ++index, 'value': value };
		});

		return baseSortBy(result, function (object, other) {
			return compareMultiple(object, other, orders);
		});
	}

    /**
     * The base implementation of `_.pick` without support for individual
     * property identifiers.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @returns {Object} Returns the new object.
     */
	function basePick(object, paths) {
		return basePickBy(object, paths, function (value, path) {
			return hasIn(object, path);
		});
	}

    /**
     * The base implementation of  `_.pickBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @param {Function} predicate The function invoked per property.
     * @returns {Object} Returns the new object.
     */
	function basePickBy(object, paths, predicate) {
		var index = -1,
			length = paths.length,
			result = {};

		while (++index < length) {
			var path = paths[index],
				value = baseGet(object, path);

			if (predicate(value, path)) {
				baseSet(result, castPath(path, object), value);
			}
		}
		return result;
	}

    /**
     * A specialized version of `baseProperty` which supports deep paths.
     *
     * @private
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     */
	function basePropertyDeep(path) {
		return function (object) {
			return baseGet(object, path);
		};
	}

    /**
     * The base implementation of `_.pullAllBy` without support for iteratee
     * shorthands.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     */
	function basePullAll(array, values, iteratee, comparator) {
		var indexOf = comparator ? baseIndexOfWith : baseIndexOf,
			index = -1,
			length = values.length,
			seen = array;

		if (array === values) {
			values = copyArray(values);
		}
		if (iteratee) {
			seen = arrayMap(array, baseUnary(iteratee));
		}
		while (++index < length) {
			var fromIndex = 0,
				value = values[index],
				computed = iteratee ? iteratee(value) : value;

			while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
				if (seen !== array) {
					splice.call(seen, fromIndex, 1);
				}
				splice.call(array, fromIndex, 1);
			}
		}
		return array;
	}

    /**
     * The base implementation of `_.pullAt` without support for individual
     * indexes or capturing the removed elements.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {number[]} indexes The indexes of elements to remove.
     * @returns {Array} Returns `array`.
     */
	function basePullAt(array, indexes) {
		var length = array ? indexes.length : 0,
			lastIndex = length - 1;

		while (length--) {
			var index = indexes[length];
			if (length == lastIndex || index !== previous) {
				var previous = index;
				if (isIndex(index)) {
					splice.call(array, index, 1);
				} else {
					baseUnset(array, index);
				}
			}
		}
		return array;
	}

    /**
     * The base implementation of `_.random` without support for returning
     * floating-point numbers.
     *
     * @private
     * @param {number} lower The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the random number.
     */
	function baseRandom(lower, upper) {
		return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
	}

    /**
     * The base implementation of `_.range` and `_.rangeRight` which doesn't
     * coerce arguments.
     *
     * @private
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @param {number} step The value to increment or decrement by.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the range of numbers.
     */
	function baseRange(start, end, step, fromRight) {
		var index = -1,
			length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
			result = Array(length);

		while (length--) {
			result[fromRight ? length : ++index] = start;
			start += step;
		}
		return result;
	}

    /**
     * The base implementation of `_.repeat` which doesn't coerce arguments.
     *
     * @private
     * @param {string} string The string to repeat.
     * @param {number} n The number of times to repeat the string.
     * @returns {string} Returns the repeated string.
     */
	function baseRepeat(string, n) {
		var result = '';
		if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
			return result;
		}
		// Leverage the exponentiation by squaring algorithm for a faster repeat.
		// See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
		do {
			if (n % 2) {
				result += string;
			}
			n = nativeFloor(n / 2);
			if (n) {
				string += string;
			}
		} while (n);

		return result;
	}

	function baseRest(func: Function, start?: number): Function {
		return setToString(overRest(func, start, identity), func + '');
	}

	function baseSample(collection: any[] | any): any {
		return arraySample(values(collection));
	}

    /**
     * The base implementation of `_.sampleSize` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */
	function baseSampleSize(collection, n) {
		var array = values(collection);
		return shuffleSelf(array, baseClamp(n, 0, array.length));
	}

    /**
     * The base implementation of `_.set`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */
	function baseSet(object, path, value, customizer) {
		if (!isObject(object)) {
			return object;
		}
		path = castPath(path, object);

		var index = -1,
			length = path.length,
			lastIndex = length - 1,
			nested = object;

		while (nested != null && ++index < length) {
			var key = toKey(path[index]),
				newValue = value;

			if (index != lastIndex) {
				var objValue = nested[key];
				newValue = customizer ? customizer(objValue, key, nested) : undefined;
				if (newValue === undefined) {
					newValue = isObject(objValue)
						? objValue
						: (isIndex(path[index + 1]) ? [] : {});
				}
			}
			assignValue(nested, key, newValue);
			nested = nested[key];
		}
		return object;
	}

    /**
     * The base implementation of `setData` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */
	var baseSetData = !metaMap ? identity : function (func, data) {
		metaMap.set(func, data);
		return func;
	};

    /**
     * The base implementation of `setToString` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */
	var baseSetToString = !defineProperty ? identity : function (func, string) {
		return defineProperty(func, 'toString', {
			'configurable': true,
			'enumerable': false,
			'value': constant(string),
			'writable': true
		});
	};

    /**
     * The base implementation of `_.shuffle`.
     *
     * @private
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */
	function baseShuffle(collection) {
		return shuffleSelf(values(collection));
	}

	function baseSlice(array: any[], start: number, end: number): any[] {
		var index = -1,
			length = array.length;

		if (start < 0) {
			start = -start > length ? 0 : (length + start);
		}
		end = end > length ? length : end;
		if (end < 0) {
			end += length;
		}
		length = start > end ? 0 : ((end - start) >>> 0);
		start >>>= 0;

		var result = Array(length);
		while (++index < length) {
			result[index] = array[index + start];
		}
		return result;
	}

	function baseSome(collection: any[] | any, predicate: Function): boolean {
		var result: boolean;

		baseEach(collection, function (value, index, collection) {
			result = predicate(value, index, collection);
			return !result;
		});
		return !!result;
	}

	function baseSortedIndex(array: any[], value: any, retHighest: boolean): number {
		var low = 0,
			high = array == null ? low : array.length;

		if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
			while (low < high) {
				var mid = (low + high) >>> 1,
					computed = array[mid];

				if (computed !== null && !isSymbol(computed) &&
					(retHighest ? (computed <= value) : (computed < value))) {
					low = mid + 1;
				} else {
					high = mid;
				}
			}
			return high;
		}
		return baseSortedIndexBy(array, value, identity, retHighest);
	}

    /**
     * The base implementation of `_.sortedIndexBy` and `_.sortedLastIndexBy`
     * which invokes `iteratee` for `value` and each element of `array` to compute
     * their sort ranking. The iteratee is invoked with one argument; (value).
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} iteratee The iteratee invoked per element.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */
	function baseSortedIndexBy(array, value, iteratee, retHighest) {
		value = iteratee(value);

		var low = 0,
			high = array == null ? 0 : array.length,
			valIsNaN = value !== value,
			valIsNull = value === null,
			valIsSymbol = isSymbol(value),
			valIsUndefined = value === undefined;

		while (low < high) {
			var mid = nativeFloor((low + high) / 2),
				computed = iteratee(array[mid]),
				othIsDefined = computed !== undefined,
				othIsNull = computed === null,
				othIsReflexive = computed === computed,
				othIsSymbol = isSymbol(computed);

			if (valIsNaN) {
				var setLow = retHighest || othIsReflexive;
			} else if (valIsUndefined) {
				setLow = othIsReflexive && (retHighest || othIsDefined);
			} else if (valIsNull) {
				setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
			} else if (valIsSymbol) {
				setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
			} else if (othIsNull || othIsSymbol) {
				setLow = false;
			} else {
				setLow = retHighest ? (computed <= value) : (computed < value);
			}
			if (setLow) {
				low = mid + 1;
			} else {
				high = mid;
			}
		}
		return nativeMin(high, MAX_ARRAY_INDEX);
	}

	function baseSortedUniq(array: any[], iteratee: Function): any[] {
		var index = -1,
			length = array.length,
			resIndex = 0,
			result = [];

		while (++index < length) {
			var value = array[index],
				computed = iteratee ? iteratee(value) : value;

			if (!index || !eq(computed, seen)) {
				var seen = computed;
				result[resIndex++] = value === 0 ? 0 : value;
			}
		}
		return result;
	}

	function baseToNumber(value: any): number {
		if (typeof value == 'number') {
			return value;
		}
		if (isSymbol(value)) {
			return NAN;
		}
		return +value;
	}

	function baseToString(value: any): string {
		// Exit early for strings to avoid a performance hit in some environments.
		if (typeof value == 'string') {
			return value;
		}
		if (isArray(value)) {
			// Recursively convert values (susceptible to call stack limits).
			return arrayMap(value, baseToString) + '';
		}
		if (isSymbol(value)) {
			return symbolToString ? symbolToString.call(value) : '';
		}
		var result = (value + '');
		return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	function baseUniq(array: any[], iteratee?: Function, comparator?: Function): any[] {
		var index = -1,
			includes = arrayIncludes,
			length = array.length,
			isCommon = true,
			result = [],
			seen = result;

		if (comparator) {
			isCommon = false;
			includes = arrayIncludesWith;
		}
		else if (length >= LARGE_ARRAY_SIZE) {
			var set = iteratee ? null : createSet(array);
			if (set) {
				return setToArray(set);
			}
			isCommon = false;
			includes = cacheHas;
			seen = new SetCache;
		}
		else {
			seen = iteratee ? [] : result;
		}
		outer:
		while (++index < length) {
			var value = array[index],
				computed = iteratee ? iteratee(value) : value;

			value = (comparator || value !== 0) ? value : 0;
			if (isCommon && computed === computed) {
				var seenIndex = seen.length;
				while (seenIndex--) {
					if (seen[seenIndex] === computed) {
						continue outer;
					}
				}
				if (iteratee) {
					seen.push(computed);
				}
				result.push(value);
			}
			else if (!includes(seen, computed, comparator)) {
				if (seen !== result) {
					seen.push(computed);
				}
				result.push(value);
			}
		}
		return result;
	}

	function baseUnset(object: any, path: string[] | string): boolean {
		path = castPath(path, object);
		object = parent(object, path);
		return object == null || delete object[toKey(last(path))];
	}

	function baseUpdate(object: any, path: string[] | string, updater: Function, customizer: Function): any {
		return baseSet(object, path, updater(baseGet(object, path)), customizer);
	}

    /**
     * The base implementation of methods like `_.dropWhile` and `_.takeWhile`
     * without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {Function} predicate The function invoked per iteration.
     * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the slice of `array`.
     */
	function baseWhile(array, predicate, isDrop, fromRight) {
		var length = array.length,
			index = fromRight ? length : -1;

		while ((fromRight ? index-- : ++index < length) &&
			predicate(array[index], index, array)) { }

		return isDrop
			? baseSlice(array, (fromRight ? 0 : index), (fromRight ? index + 1 : length))
			: baseSlice(array, (fromRight ? index + 1 : 0), (fromRight ? length : index));
	}

    /**
     * The base implementation of `wrapperValue` which returns the result of
     * performing a sequence of actions on the unwrapped `value`, where each
     * successive action is supplied the return value of the previous.
     *
     * @private
     * @param {*} value The unwrapped value.
     * @param {Array} actions Actions to perform to resolve the unwrapped value.
     * @returns {*} Returns the resolved value.
     */
	function baseWrapperValue(value, actions) {
		var result = value;
		if (result instanceof LazyWrapper) {
			result = result.value();
		}
		return arrayReduce(actions, function (result, action) {
			return action.func.apply(action.thisArg, arrayPush([result], action.args));
		}, result);
	}

	function baseXor(arrays: any[], iteratee: Function, comparator?: Function): any[] {
		var length = arrays.length;
		if (length < 2) {
			return length ? baseUniq(arrays[0]) : [];
		}
		var index = -1,
			result = Array(length);

		while (++index < length) {
			var array = arrays[index],
				othIndex = -1;

			while (++othIndex < length) {
				if (othIndex != index) {
					result[index] = baseDifference(result[index] || array, arrays[othIndex], iteratee, comparator);
				}
			}
		}
		return baseUniq(baseFlatten(result, 1), iteratee, comparator);
	}

    /**
     * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
     *
     * @private
     * @param {Array} props The property identifiers.
     * @param {Array} values The property values.
     * @param {Function} assignFunc The function to assign values.
     * @returns {Object} Returns the new object.
     */
	function baseZipObject(props, values, assignFunc) {
		var index = -1,
			length = props.length,
			valsLength = values.length,
			result = {};

		while (++index < length) {
			var value = index < valsLength ? values[index] : undefined;
			assignFunc(result, props[index], value);
		}
		return result;
	}

    /**
     * Casts `value` to an empty array if it's not an array like object.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Array|Object} Returns the cast array-like object.
     */
	function castArrayLikeObject(value) {
		return isArrayLikeObject(value) ? value : [];
	}

	function castFunction(value: any): Function {
		return typeof value == 'function' ? value : identity;
	}

	function castPath(value: any, object: any): any[] {
		if (isArray(value)) {
			return value;
		}

		return isKey(value, object) ? [value] : stringToPath(toString(value));
	}

    /**
     * A `baseRest` alias which can be replaced with `identity` by module
     * replacement plugins.
     *
     * @private
     * @type {Function}
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */
	var castRest = baseRest;

	function castSlice(array: any[], start: number, end: number): any[] {
		var length = array.length;
		end = end === undefined ? length : end;
		return (!start && end >= length) ? array : baseSlice(array, start, end);
	}

	var clearTimeout: (obj: number | any) => void = ctxClearTimeout || function (id) {
		return root.clearTimeout(id);
	};

	function cloneBuffer(buffer: Buffer, isDeep: boolean): Buffer {
		if (isDeep) {
			return buffer.slice();
		}
		var length = buffer.length,
			result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

		buffer.copy(result);
		return result;
	}

	function cloneArrayBuffer(arrayBuffer: ArrayBuffer): ArrayBuffer {
		var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
		new Uint8Array(result).set(new Uint8Array(arrayBuffer));
		return result;
	}

	function cloneDataView(dataView: any, isDeep: boolean): any {
		var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
		return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
	}

	function cloneRegExp(regexp: any): any {
		var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
		result.lastIndex = regexp.lastIndex;
		return result;
	}

	function cloneSymbol(symbol: any): any {
		return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
	}

    /**
     * Creates a clone of `typedArray`.
     *
     * @private
     * @param {Object} typedArray The typed array to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned typed array.
     */
	function cloneTypedArray(typedArray, isDeep) {
		var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
		return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	}

	function compareAscending(value: any, other: any): number {
		if (value !== other) {
			var valIsDefined = value !== undefined,
				valIsNull = value === null,
				valIsReflexive = value === value,
				valIsSymbol = isSymbol(value);

			var othIsDefined = other !== undefined,
				othIsNull = other === null,
				othIsReflexive = other === other,
				othIsSymbol = isSymbol(other);

			if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
				(valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
				(valIsNull && othIsDefined && othIsReflexive) ||
				(!valIsDefined && othIsReflexive) ||
				!valIsReflexive) {
				return 1;
			}
			if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
				(othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
				(othIsNull && valIsDefined && valIsReflexive) ||
				(!othIsDefined && valIsReflexive) ||
				!othIsReflexive) {
				return -1;
			}
		}
		return 0;
	}

	function compareMultiple(object: any, other: any, orders: boolean[] | string[]): number {
		var index = -1,
			objCriteria = object.criteria,
			othCriteria = other.criteria,
			length = objCriteria.length,
			ordersLength = orders.length;

		while (++index < length) {
			var result = compareAscending(objCriteria[index], othCriteria[index]);
			if (result) {
				if (index >= ordersLength) {
					return result;
				}
				var order = orders[index];
				return result * (order == 'desc' ? -1 : 1);
			}
		}
		// Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
		// that causes it, under certain circumstances, to provide the same value for
		// `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
		// for more details.
		//
		// This also ensures a stable sort in V8 and other engines.
		// See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
		return object.index - other.index;
	}

	function composeArgs(args: any[], partials: any[], holders: number[], isCurried?: boolean): any[] {
		var argsIndex = -1,
			argsLength = args.length,
			holdersLength = holders.length,
			leftIndex = -1,
			leftLength = partials.length,
			rangeLength = nativeMax(argsLength - holdersLength, 0),
			result = Array(leftLength + rangeLength),
			isUncurried = !isCurried;

		while (++leftIndex < leftLength) {
			result[leftIndex] = partials[leftIndex];
		}
		while (++argsIndex < holdersLength) {
			if (isUncurried || argsIndex < argsLength) {
				result[holders[argsIndex]] = args[argsIndex];
			}
		}
		while (rangeLength--) {
			result[leftIndex++] = args[argsIndex++];
		}
		return result;
	}

    /**
     * This function is like `composeArgs` except that the arguments composition
     * is tailored for `_.partialRight`.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to append to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */
	function composeArgsRight(args, partials, holders, isCurried) {
		var argsIndex = -1,
			argsLength = args.length,
			holdersIndex = -1,
			holdersLength = holders.length,
			rightIndex = -1,
			rightLength = partials.length,
			rangeLength = nativeMax(argsLength - holdersLength, 0),
			result = Array(rangeLength + rightLength),
			isUncurried = !isCurried;

		while (++argsIndex < rangeLength) {
			result[argsIndex] = args[argsIndex];
		}
		var offset = argsIndex;
		while (++rightIndex < rightLength) {
			result[offset + rightIndex] = partials[rightIndex];
		}
		while (++holdersIndex < holdersLength) {
			if (isUncurried || argsIndex < argsLength) {
				result[offset + holders[holdersIndex]] = args[argsIndex++];
			}
		}
		return result;
	}

	function copyArray(source: any[], array?: any[]): any[] {
		var index = -1,
			length = source.length;

		array || (array = Array(length));
		while (++index < length) {
			array[index] = source[index];
		}
		return array;
	}

	function copyObject(source: any, props: string[], object: any, customizer: Function): any {
		var isNew = !object;
		object || (object = {});

		var index = -1,
			length = props.length;

		while (++index < length) {
			var key = props[index];

			var newValue = customizer
				? customizer(object[key], source[key], key, object, source)
				: undefined;

			if (newValue === undefined) {
				newValue = source[key];
			}
			if (isNew) {
				baseAssignValue(object, key, newValue);
			} else {
				assignValue(object, key, newValue);
			}
		}
		return object;
	}

    /**
     * Copies own symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */
	function copySymbols(source, object) {
		return copyObject(source, getSymbols(source), object);
	}

	function copySymbolsIn(source: any, object: any): any {
		return copyObject(source, getSymbolsIn(source), object);
	}

	function createAggregator(setter: Function, initializer?: Function): Function {
		return function (collection: any[] | any, iteratee: Function) {
			var func = isArray(collection) ? arrayAggregator : baseAggregator,
				accumulator = initializer ? initializer() : {};

			return func(collection, setter, getIteratee(iteratee, 2), accumulator);
		};
	}

    /**
     * Creates a function like `_.assign`.
     *
     * @private
     * @param {Function} assigner The function to assign values.
     * @returns {Function} Returns the new assigner function.
     */
	function createAssigner(assigner) {
		return baseRest(function (object, sources) {
			var index = -1,
				length = sources.length,
				customizer = length > 1 ? sources[length - 1] : undefined,
				guard = length > 2 ? sources[2] : undefined;

			customizer = (assigner.length > 3 && typeof customizer == 'function')
				? (length-- , customizer)
				: undefined;

			if (guard && isIterateeCall(sources[0], sources[1], guard)) {
				customizer = length < 3 ? undefined : customizer;
				length = 1;
			}
			object = Object(object);
			while (++index < length) {
				var source = sources[index];
				if (source) {
					assigner(object, source, index, customizer);
				}
			}
			return object;
		});
	}

    /**
     * Creates a `baseEach` or `baseEachRight` function.
     *
     * @private
     * @param {Function} eachFunc The function to iterate over a collection.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
	function createBaseEach(eachFunc, fromRight) {
		return function (collection, iteratee) {
			if (collection == null) {
				return collection;
			}
			if (!isArrayLike(collection)) {
				return eachFunc(collection, iteratee);
			}
			var length = collection.length,
				index = fromRight ? length : -1,
				iterable = Object(collection);

			while ((fromRight ? index-- : ++index < length)) {
				if (iteratee(iterable[index], index, iterable) === false) {
					break;
				}
			}
			return collection;
		};
	}

    /**
     * Creates a base function for methods like `_.forIn` and `_.forOwn`.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
	function createBaseFor(fromRight) {
		return function (object, iteratee, keysFunc) {
			var index = -1,
				iterable = Object(object),
				props = keysFunc(object),
				length = props.length;

			while (length--) {
				var key = props[fromRight ? length : ++index];
				if (iteratee(iterable[key], key, iterable) === false) {
					break;
				}
			}
			return object;
		};
	}

    /**
     * Creates a function that wraps `func` to invoke it with the optional `this`
     * binding of `thisArg`.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
	function createBind(func, bitmask, thisArg) {
		var isBind = bitmask & WRAP_BIND_FLAG,
			Ctor = createCtor(func);

		function wrapper() {
			var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
			return fn.apply(isBind ? thisArg : this, arguments);
		}
		return wrapper;
	}

    /**
     * Creates a function like `_.lowerFirst`.
     *
     * @private
     * @param {string} methodName The name of the `String` case method to use.
     * @returns {Function} Returns the new case function.
     */
	function createCaseFirst(methodName) {
		return function (string) {
			string = toString(string);

			var strSymbols = hasUnicode(string)
				? stringToArray(string)
				: undefined;

			var chr = strSymbols
				? strSymbols[0]
				: string.charAt(0);

			var trailing = strSymbols
				? castSlice(strSymbols, 1).join('')
				: string.slice(1);

			return chr[methodName]() + trailing;
		};
	}

    /**
     * Creates a function like `_.camelCase`.
     *
     * @private
     * @param {Function} callback The function to combine each word.
     * @returns {Function} Returns the new compounder function.
     */
	function createCompounder(callback) {
		return function (string) {
			return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
		};
	}

    /**
     * Creates a function that produces an instance of `Ctor` regardless of
     * whether it was invoked as part of a `new` expression or by `call` or `apply`.
     *
     * @private
     * @param {Function} Ctor The constructor to wrap.
     * @returns {Function} Returns the new wrapped function.
     */
	function createCtor(Ctor) {
		return function () {
			// Use a `switch` statement to work with class constructors. See
			// http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
			// for more details.
			var args = arguments;
			switch (args.length) {
				case 0: return new Ctor;
				case 1: return new Ctor(args[0]);
				case 2: return new Ctor(args[0], args[1]);
				case 3: return new Ctor(args[0], args[1], args[2]);
				case 4: return new Ctor(args[0], args[1], args[2], args[3]);
				case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
				case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
				case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
			}
			var thisBinding = baseCreate(Ctor.prototype),
				result = Ctor.apply(thisBinding, args);

			// Mimic the constructor's `return` behavior.
			// See https://es5.github.io/#x13.2.2 for more details.
			return isObject(result) ? result : thisBinding;
		};
	}

    /**
     * Creates a function that wraps `func` to enable currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {number} arity The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
	function createCurry(func, bitmask, arity) {
		var Ctor = createCtor(func);

		function wrapper() {
			var length = arguments.length,
				args = Array(length),
				index = length,
				placeholder = getHolder(wrapper);

			while (index--) {
				args[index] = arguments[index];
			}
			var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
				? []
				: replaceHolders(args, placeholder);

			length -= holders.length;
			if (length < arity) {
				return createRecurry(
					func, bitmask, createHybrid, wrapper.placeholder, undefined,
					args, holders, undefined, undefined, arity - length);
			}
			var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
			return apply(fn, this, args);
		}
		return wrapper;
	}

    /**
     * Creates a `_.find` or `_.findLast` function.
     *
     * @private
     * @param {Function} findIndexFunc The function to find the collection index.
     * @returns {Function} Returns the new find function.
     */
	function createFind(findIndexFunc) {
		return function (collection, predicate, fromIndex) {
			var iterable = Object(collection);
			if (!isArrayLike(collection)) {
				var iteratee = getIteratee(predicate, 3);
				collection = keys(collection);
				predicate = function (key) { return iteratee(iterable[key], key, iterable); };
			}
			var index = findIndexFunc(collection, predicate, fromIndex);
			return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
		};
	}

	function createFlow(fromRight?: boolean): Function {
		return flatRest(function (funcs) {
			var length = funcs.length,
				index = length,
				prereq = LodashWrapper.prototype.thru;

			if (fromRight) {
				funcs.reverse();
			}
			while (index--) {
				var func = funcs[index];
				if (typeof func != 'function') {
					throw new TypeError(FUNC_ERROR_TEXT);
				}
				if (prereq && !wrapper && getFuncName(func) == 'wrapper') {
					var wrapper = new LodashWrapper([], true);
				}
			}
			index = wrapper ? index : length;
			while (++index < length) {
				func = funcs[index];

				var funcName = getFuncName(func),
					data = funcName == 'wrapper' ? getData(func) : undefined;

				if (data && isLaziable(data[0]) &&
					data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) &&
					!data[4].length && data[9] == 1
				) {
					wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
				} else {
					wrapper = (func.length == 1 && isLaziable(func))
						? wrapper[funcName]()
						: wrapper.thru(func);
				}
			}
			return function () {
				var args = arguments,
					value = args[0];

				if (wrapper && args.length == 1 && isArray(value)) {
					return wrapper.plant(value).value();
				}
				var index = 0,
					result = length ? funcs[index].apply(this, args) : value;

				while (++index < length) {
					result = funcs[index].call(this, result);
				}
				return result;
			};
		});
	}

    /**
     * Creates a function that wraps `func` to invoke it with optional `this`
     * binding of `thisArg`, partial application, and currying.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [partialsRight] The arguments to append to those provided
     *  to the new function.
     * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
	function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
		var isAry = bitmask & WRAP_ARY_FLAG,
			isBind = bitmask & WRAP_BIND_FLAG,
			isBindKey = bitmask & WRAP_BIND_KEY_FLAG,
			isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG),
			isFlip = bitmask & WRAP_FLIP_FLAG,
			Ctor = isBindKey ? undefined : createCtor(func);

		function wrapper() {
			var length = arguments.length,
				args = Array(length),
				index = length;

			while (index--) {
				args[index] = arguments[index];
			}
			if (isCurried) {
				var placeholder = getHolder(wrapper),
					holdersCount = countHolders(args, placeholder);
			}
			if (partials) {
				args = composeArgs(args, partials, holders, isCurried);
			}
			if (partialsRight) {
				args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
			}
			length -= holdersCount;
			if (isCurried && length < arity) {
				var newHolders = replaceHolders(args, placeholder);
				return createRecurry(
					func, bitmask, createHybrid, wrapper.placeholder, thisArg,
					args, newHolders, argPos, ary, arity - length
				);
			}
			var thisBinding = isBind ? thisArg : this,
				fn = isBindKey ? thisBinding[func] : func;

			length = args.length;
			if (argPos) {
				args = reorder(args, argPos);
			} else if (isFlip && length > 1) {
				args.reverse();
			}
			if (isAry && ary < length) {
				args.length = ary;
			}
			if (this && this !== root && this instanceof wrapper) {
				fn = Ctor || createCtor(fn);
			}
			return fn.apply(thisBinding, args);
		}
		return wrapper;
	}

    /**
     * Creates a function like `_.invertBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} toIteratee The function to resolve iteratees.
     * @returns {Function} Returns the new inverter function.
     */
	function createInverter(setter, toIteratee) {
		return function (object, iteratee) {
			return baseInverter(object, setter, toIteratee(iteratee), {});
		};
	}

    /**
     * Creates a function that performs a mathematical operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @param {number} [defaultValue] The value used for `undefined` arguments.
     * @returns {Function} Returns the new mathematical operation function.
     */
	function createMathOperation(operator, defaultValue) {
		return function (value, other) {
			var result;
			if (value === undefined && other === undefined) {
				return defaultValue;
			}
			if (value !== undefined) {
				result = value;
			}
			if (other !== undefined) {
				if (result === undefined) {
					return other;
				}
				if (typeof value == 'string' || typeof other == 'string') {
					value = baseToString(value);
					other = baseToString(other);
				} else {
					value = baseToNumber(value);
					other = baseToNumber(other);
				}
				result = operator(value, other);
			}
			return result;
		};
	}

    /**
     * Creates a function like `_.over`.
     *
     * @private
     * @param {Function} arrayFunc The function to iterate over iteratees.
     * @returns {Function} Returns the new over function.
     */
	function createOver(arrayFunc) {
		return flatRest(function (iteratees) {
			iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
			return baseRest(function (args) {
				var thisArg = this;
				return arrayFunc(iteratees, function (iteratee) {
					return apply(iteratee, thisArg, args);
				});
			});
		});
	}

    /**
     * Creates the padding for `string` based on `length`. The `chars` string
     * is truncated if the number of characters exceeds `length`.
     *
     * @private
     * @param {number} length The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padding for `string`.
     */
	function createPadding(length, chars) {
		chars = chars === undefined ? ' ' : baseToString(chars);

		var charsLength = chars.length;
		if (charsLength < 2) {
			return charsLength ? baseRepeat(chars, length) : chars;
		}
		var result = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
		return hasUnicode(chars)
			? castSlice(stringToArray(result), 0, length).join('')
			: result.slice(0, length);
	}

    /**
     * Creates a function that wraps `func` to invoke it with the `this` binding
     * of `thisArg` and `partials` prepended to the arguments it receives.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {Array} partials The arguments to prepend to those provided to
     *  the new function.
     * @returns {Function} Returns the new wrapped function.
     */
	function createPartial(func, bitmask, thisArg, partials) {
		var isBind = bitmask & WRAP_BIND_FLAG,
			Ctor = createCtor(func);

		function wrapper() {
			var argsIndex = -1,
				argsLength = arguments.length,
				leftIndex = -1,
				leftLength = partials.length,
				args = Array(leftLength + argsLength),
				fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;

			while (++leftIndex < leftLength) {
				args[leftIndex] = partials[leftIndex];
			}
			while (argsLength--) {
				args[leftIndex++] = arguments[++argsIndex];
			}
			return apply(fn, isBind ? thisArg : this, args);
		}
		return wrapper;
	}

	function createRange(fromRight?: boolean): Function {
		return function (start, end, step) {
			if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
				end = step = undefined;
			}
			// Ensure the sign of `-0` is preserved.
			start = toFinite(start);
			if (end === undefined) {
				end = start;
				start = 0;
			} else {
				end = toFinite(end);
			}
			step = step === undefined ? (start < end ? 1 : -1) : toFinite(step);
			return baseRange(start, end, step, fromRight);
		};
	}

    /**
     * Creates a function that performs a relational operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @returns {Function} Returns the new relational operation function.
     */
	function createRelationalOperation(operator) {
		return function (value, other) {
			if (!(typeof value == 'string' && typeof other == 'string')) {
				value = toNumber(value);
				other = toNumber(other);
			}
			return operator(value, other);
		};
	}

    /**
     * Creates a function that wraps `func` to continue currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {Function} wrapFunc The function to create the `func` wrapper.
     * @param {*} placeholder The placeholder value.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
	function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
		var isCurry = bitmask & WRAP_CURRY_FLAG,
			newHolders = isCurry ? holders : undefined,
			newHoldersRight = isCurry ? undefined : holders,
			newPartials = isCurry ? partials : undefined,
			newPartialsRight = isCurry ? undefined : partials;

		bitmask |= (isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG);
		bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);

		if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
			bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
		}
		var newData = [
			func, bitmask, thisArg, newPartials, newHolders, newPartialsRight,
			newHoldersRight, argPos, ary, arity
		];

		var result = wrapFunc.apply(undefined, newData);
		if (isLaziable(func)) {
			setData(result, newData);
		}
		result.placeholder = placeholder;
		return setWrapToString(result, func, bitmask);
	}

    /**
     * Creates a function like `_.round`.
     *
     * @private
     * @param {string} methodName The name of the `Math` method to use when rounding.
     * @returns {Function} Returns the new round function.
     */
	function createRound(methodName) {
		var func = Math[methodName];
		return function (number, precision) {
			number = toNumber(number);
			precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
			if (precision && nativeIsFinite(number)) {
				// Shift with exponential notation to avoid floating-point issues.
				// See [MDN](https://mdn.io/round#Examples) for more details.
				var pair = (toString(number) + 'e').split('e'),
					value = func(pair[0] + 'e' + (+pair[1] + precision));

				pair = (toString(value) + 'e').split('e');
				return +(pair[0] + 'e' + (+pair[1] - precision));
			}
			return func(number);
		};
	}

    /**
     * Creates a set object of `values`.
     *
     * @private
     * @param {Array} values The values to add to the set.
     * @returns {Object} Returns the new set.
     */
	var createSet = !(Set && (1 / setToArray(new Set([, -0]))[1]) == INFINITY) ? noop : function (values) {
		return new Set(values);
	};

    /**
     * Creates a `_.toPairs` or `_.toPairsIn` function.
     *
     * @private
     * @param {Function} keysFunc The function to get the keys of a given object.
     * @returns {Function} Returns the new pairs function.
     */
	function createToPairs(keysFunc) {
		return function (object) {
			var tag = getTag(object);
			if (tag == mapTag) {
				return mapToArray(object);
			}
			if (tag == setTag) {
				return setToPairs(object);
			}
			return baseToPairs(object, keysFunc(object));
		};
	}

    /**
     * Creates a function that either curries or invokes `func` with optional
     * `this` binding and partially applied arguments.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags.
     *    1 - `_.bind`
     *    2 - `_.bindKey`
     *    4 - `_.curry` or `_.curryRight` of a bound function
     *    8 - `_.curry`
     *   16 - `_.curryRight`
     *   32 - `_.partial`
     *   64 - `_.partialRight`
     *  128 - `_.rearg`
     *  256 - `_.ary`
     *  512 - `_.flip`
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to be partially applied.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
	function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
		var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
		if (!isBindKey && typeof func != 'function') {
			throw new TypeError(FUNC_ERROR_TEXT);
		}
		var length = partials ? partials.length : 0;
		if (!length) {
			bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
			partials = holders = undefined;
		}
		ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
		arity = arity === undefined ? arity : toInteger(arity);
		length -= holders ? holders.length : 0;

		if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
			var partialsRight = partials,
				holdersRight = holders;

			partials = holders = undefined;
		}
		var data = isBindKey ? undefined : getData(func);

		var newData = [
			func, bitmask, thisArg, partials, holders, partialsRight, holdersRight,
			argPos, ary, arity
		];

		if (data) {
			mergeData(newData, data);
		}
		func = newData[0];
		bitmask = newData[1];
		thisArg = newData[2];
		partials = newData[3];
		holders = newData[4];
		arity = newData[9] = newData[9] === undefined
			? (isBindKey ? 0 : func.length)
			: nativeMax(newData[9] - length, 0);

		if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
			bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
		}
		if (!bitmask || bitmask == WRAP_BIND_FLAG) {
			var result = createBind(func, bitmask, thisArg);
		} else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
			result = createCurry(func, bitmask, arity);
		} else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
			result = createPartial(func, bitmask, thisArg, partials);
		} else {
			result = createHybrid.apply(undefined, newData);
		}
		var setter = data ? baseSetData : setData;
		return setWrapToString(setter(result, newData), func, bitmask);
	}

    /**
     * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
     * of source objects to the destination object for all destination properties
     * that resolve to `undefined`.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to assign.
     * @param {Object} object The parent object of `objValue`.
     * @returns {*} Returns the value to assign.
     */
	function customDefaultsAssignIn(objValue, srcValue, key, object) {
		if (objValue === undefined ||
			(eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key))) {
			return srcValue;
		}
		return objValue;
	}

    /**
     * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
     * objects into destination objects that are passed thru.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to merge.
     * @param {Object} object The parent object of `objValue`.
     * @param {Object} source The parent object of `srcValue`.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     * @returns {*} Returns the value to assign.
     */
	function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
		if (isObject(objValue) && isObject(srcValue)) {
			// Recursively merge objects and arrays (susceptible to call stack limits).
			stack.set(srcValue, objValue);
			baseMerge(objValue, srcValue, undefined, customDefaultsMerge, stack);
			stack['delete'](srcValue);
		}
		return objValue;
	}

    /**
     * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
     * objects.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {string} key The key of the property to inspect.
     * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
     */
	function customOmitClone(value) {
		return isPlainObject(value) ? undefined : value;
	}

    /**
     * A specialized version of `baseIsEqualDeep` for arrays with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Array} array The array to compare.
     * @param {Array} other The other array to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `array` and `other` objects.
     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
     */
	function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
		var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
			arrLength = array.length,
			othLength = other.length;

		if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
			return false;
		}
		// Assume cyclic values are equal.
		var stacked = stack.get(array);
		if (stacked && stack.get(other)) {
			return stacked == other;
		}
		var index = -1,
			result = true,
			seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

		stack.set(array, other);
		stack.set(other, array);

		// Ignore non-index properties.
		while (++index < arrLength) {
			var arrValue = array[index],
				othValue = other[index];

			if (customizer) {
				var compared = isPartial
					? customizer(othValue, arrValue, index, other, array, stack)
					: customizer(arrValue, othValue, index, array, other, stack);
			}
			if (compared !== undefined) {
				if (compared) {
					continue;
				}
				result = false;
				break;
			}
			// Recursively compare arrays (susceptible to call stack limits).
			if (seen) {
				if (!arraySome(other, function (othValue, othIndex) {
					if (!cacheHas(seen, othIndex) &&
						(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
						return seen.push(othIndex);
					}
				})) {
					result = false;
					break;
				}
			} else if (!(
				arrValue === othValue ||
				equalFunc(arrValue, othValue, bitmask, customizer, stack)
			)) {
				result = false;
				break;
			}
		}
		stack['delete'](array);
		stack['delete'](other);
		return result;
	}

    /**
     * A specialized version of `baseIsEqualDeep` for comparing objects of
     * the same `toStringTag`.
     *
     * **Note:** This function only supports comparing values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {string} tag The `toStringTag` of the objects to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
	function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
		switch (tag) {
			case dataViewTag:
				if ((object.byteLength != other.byteLength) ||
					(object.byteOffset != other.byteOffset)) {
					return false;
				}
				object = object.buffer;
				other = other.buffer;

			case arrayBufferTag:
				if ((object.byteLength != other.byteLength) ||
					!equalFunc(new Uint8Array(object), new Uint8Array(other))) {
					return false;
				}
				return true;

			case boolTag:
			case dateTag:
			case numberTag:
				// Coerce booleans to `1` or `0` and dates to milliseconds.
				// Invalid dates are coerced to `NaN`.
				return eq(+object, +other);

			case errorTag:
				return object.name == other.name && object.message == other.message;

			case regexpTag:
			case stringTag:
				// Coerce regexes to strings and treat strings, primitives and objects,
				// as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
				// for more details.
				return object == (other + '');

			case mapTag:
				var convert = mapToArray;

			case setTag:
				var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
				convert || (convert = setToArray);

				if (object.size != other.size && !isPartial) {
					return false;
				}
				// Assume cyclic values are equal.
				var stacked = stack.get(object);
				if (stacked) {
					return stacked == other;
				}
				bitmask |= COMPARE_UNORDERED_FLAG;

				// Recursively compare objects (susceptible to call stack limits).
				stack.set(object, other);
				var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
				stack['delete'](object);
				return result;

			case symbolTag:
				if (symbolValueOf) {
					return symbolValueOf.call(object) == symbolValueOf.call(other);
				}
		}
		return false;
	}

    /**
     * A specialized version of `baseIsEqualDeep` for objects with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
	function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
		var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
			objProps = getAllKeys(object),
			objLength = objProps.length,
			othProps = getAllKeys(other),
			othLength = othProps.length;

		if (objLength != othLength && !isPartial) {
			return false;
		}
		var index = objLength;
		while (index--) {
			var key = objProps[index];
			if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
				return false;
			}
		}
		// Assume cyclic values are equal.
		var stacked = stack.get(object);
		if (stacked && stack.get(other)) {
			return stacked == other;
		}
		var result = true;
		stack.set(object, other);
		stack.set(other, object);

		var skipCtor = isPartial;
		while (++index < objLength) {
			key = objProps[index];
			var objValue = object[key],
				othValue = other[key];

			if (customizer) {
				var compared = isPartial
					? customizer(othValue, objValue, key, other, object, stack)
					: customizer(objValue, othValue, key, object, other, stack);
			}
			// Recursively compare objects (susceptible to call stack limits).
			if (!(compared === undefined
				? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
				: compared
			)) {
				result = false;
				break;
			}
			skipCtor || (skipCtor = key == 'constructor');
		}
		if (result && !skipCtor) {
			var objCtor = object.constructor,
				othCtor = other.constructor;

			// Non `Object` object instances with different constructors are not equal.
			if (objCtor != othCtor &&
				('constructor' in object && 'constructor' in other) &&
				!(typeof objCtor == 'function' && objCtor instanceof objCtor &&
					typeof othCtor == 'function' && othCtor instanceof othCtor)) {
				result = false;
			}
		}
		stack['delete'](object);
		stack['delete'](other);
		return result;
	}

	function flatRest(func: Function): Function {
		return setToString(overRest(func, undefined, flatten), func + '');
	}

	function getAllKeys(object: any): string[] {
		return baseGetAllKeys(object, keys, getSymbols);
	}

	function getAllKeysIn(object: any): string[] {
		return baseGetAllKeys(object, keysIn, getSymbolsIn);
	}

	var getData: (f: Function) => any = !metaMap ? noop : function (func) {
		return metaMap.get(func);
	};

	function getFuncName(func: Function): string {
		var result = (func.name + ''),
			array = realNames[result],
			length = hasOwnProperty.call(realNames, result) ? array.length : 0;

		while (length--) {
			var data = array[length],
				otherFunc = data.func;
			if (otherFunc == null || otherFunc == func) {
				return data.name;
			}
		}
		return result;
	}

	function getHolder(func: Function): any {
		var object = hasOwnProperty.call(lodash, 'placeholder') ? lodash : func;
		return object["placeholder"];
	}

	function getIteratee(value: any, arity?: number): Function {
		var result: (v: any, a: number) => Function  = lodash.iteratee || iteratee;
		result = result === iteratee ? baseIteratee : result;
		return arguments.length ? result(value, arity) : result;
	}

	function getMapData(map: any, key: string): any {
		var data = map.__data__;
		return isKeyable(key)
			? data[typeof key == 'string' ? 'string' : 'hash']
			: data.map;
	}

    /**
     * Gets the property names, values, and compare flags of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the match data of `object`.
     */
	function getMatchData(object) {
		var result = keys(object),
			length = result.length;

		while (length--) {
			var key = result[length],
				value = object[key];

			result[length] = [key, value, isStrictComparable(value)];
		}
		return result;
	}

    /**
     * Gets the native function at `key` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the method to get.
     * @returns {*} Returns the function if it's native, else `undefined`.
     */
	function getNative(object, key) {
		var value = getValue(object, key);
		return baseIsNative(value) ? value : undefined;
	}

	function getRawTag(value: any): string {
		var isOwn = hasOwnProperty.call(value, symToStringTag),
			tag = value[symToStringTag];

		try {
			value[symToStringTag] = undefined;
			var unmasked = true;
		} catch (e) { }

		var result = nativeObjectToString.call(value);
		if (unmasked) {
			if (isOwn) {
				value[symToStringTag] = tag;
			} else {
				delete value[symToStringTag];
			}
		}
		return result;
	}

	var getSymbols: (source: any) => string[] = !nativeGetSymbols ? stubArray : function (object) {
		if (object == null) {
			return [];
		}
		object = Object(object);
		return arrayFilter(nativeGetSymbols(object), function (symbol) {
			return propertyIsEnumerable.call(object, symbol);
		});
	};

	var getSymbolsIn: (source: any) => string[] = !nativeGetSymbols ? stubArray : function (object) {
		var result = [];
		while (object) {
			arrayPush(result, getSymbols(object));
			object = getPrototype(object);
		}
		return result;
	};

	var getTag: (source: any) => string = baseGetTag;

	// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
		(Map && getTag(new Map) != mapTag) ||
		(Promise && getTag(Promise.resolve()) != promiseTag) ||
		(Set && getTag(new Set) != setTag) ||
		(WeakMap && getTag(new WeakMap) != weakMapTag)) {
		getTag = function (value) {
			var result = baseGetTag(value),
				Ctor = result == objectTag ? value.constructor : undefined,
				ctorString = Ctor ? toSource(Ctor) : '';

			if (ctorString) {
				switch (ctorString) {
					case dataViewCtorString: return dataViewTag;
					case mapCtorString: return mapTag;
					case promiseCtorString: return promiseTag;
					case setCtorString: return setTag;
					case weakMapCtorString: return weakMapTag;
				}
			}
			return result;
		};
	}

	function getView(start: number, end: number, transforms: Function[]): any {
		var index = -1,
			length = transforms.length;

		while (++index < length) {
			var data = transforms[index],
				size = data.size;

			switch (data.type) {
				case 'drop': start += size; break;
				case 'dropRight': end -= size; break;
				case 'take': end = nativeMin(end, start + size); break;
				case 'takeRight': start = nativeMax(start, end - size); break;
			}
		}
		return { 'start': start, 'end': end };
	}

    /**
     * Extracts wrapper details from the `source` body comment.
     *
     * @private
     * @param {string} source The source to inspect.
     * @returns {Array} Returns the wrapper details.
     */
	function getWrapDetails(source) {
		var match = source.match(reWrapDetails);
		return match ? match[1].split(reSplitDetails) : [];
	}

    /**
     * Checks if `path` exists on `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @param {Function} hasFunc The function to check properties.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     */
	function hasPath(object, path, hasFunc) {
		path = castPath(path, object);

		var index = -1,
			length = path.length,
			result = false;

		while (++index < length) {
			var key = toKey(path[index]);
			if (!(result = object != null && hasFunc(object, key))) {
				break;
			}
			object = object[key];
		}
		if (result || ++index != length) {
			return result;
		}
		length = object == null ? 0 : object.length;
		return !!length && isLength(length) && isIndex(key, length) &&
			(isArray(object) || isArguments(object));
	}

    /**
     * Initializes an array clone.
     *
     * @private
     * @param {Array} array The array to clone.
     * @returns {Array} Returns the initialized clone.
     */
	function initCloneArray(array) {
		var length = array.length,
			result = new array.constructor(length);

		// Add properties assigned by `RegExp#exec`.
		if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
			result.index = array.index;
			result.input = array.input;
		}
		return result;
	}

    /**
     * Initializes an object clone.
     *
     * @private
     * @param {Object} object The object to clone.
     * @returns {Object} Returns the initialized clone.
     */
	function initCloneObject(object) {
		return (typeof object.constructor == 'function' && !isPrototype(object))
			? baseCreate(getPrototype(object))
			: {};
	}

    /**
     * Initializes an object clone based on its `toStringTag`.
     *
     * **Note:** This function only supports cloning values with tags of
     * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
     *
     * @private
     * @param {Object} object The object to clone.
     * @param {string} tag The `toStringTag` of the object to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the initialized clone.
     */
	function initCloneByTag(object, tag, isDeep) {
		var Ctor = object.constructor;
		switch (tag) {
			case arrayBufferTag:
				return cloneArrayBuffer(object);

			case boolTag:
			case dateTag:
				return new Ctor(+object);

			case dataViewTag:
				return cloneDataView(object, isDeep);

			case float32Tag: case float64Tag:
			case int8Tag: case int16Tag: case int32Tag:
			case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
				return cloneTypedArray(object, isDeep);

			case mapTag:
				return new Ctor;

			case numberTag:
			case stringTag:
				return new Ctor(object);

			case regexpTag:
				return cloneRegExp(object);

			case setTag:
				return new Ctor;

			case symbolTag:
				return cloneSymbol(object);
		}
	}

	function insertWrapDetails(source: string, details: any[]): string {
		var length = details.length;
		if (!length) {
			return source;
		}
		var lastIndex = length - 1;
		details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
		details = details.join(length > 2 ? ', ' : ' ');
		return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
	}

	function isFlattenable(value: any): boolean {
		return isArray(value) || isArguments(value) ||
			!!(spreadableSymbol && value && value[spreadableSymbol]);
	}

	function isIndex(value: any, length?: number): boolean {
		var type = typeof value;
		length = length == null ? MAX_SAFE_INTEGER : length;

		return !!length &&
			(type == 'number' ||
				(type != 'symbol' && reIsUint.test(value))) &&
			(value > -1 && value % 1 == 0 && value < length);
	}

	function isIterateeCall(value: any, index: any, object: any): boolean {
		if (!isObject(object)) {
			return false;
		}
		var type = typeof index;
		if (type == 'number'
			? (isArrayLike(object) && isIndex(index, object.length))
			: (type == 'string' && index in object)
		) {
			return eq(object[index], value);
		}
		return false;
	}

	function isKey(value: any, object?: any): boolean {
		if (isArray(value)) {
			return false;
		}
		var type = typeof value;
		if (type == 'number' || type == 'symbol' || type == 'boolean' ||
			value == null || isSymbol(value)) {
			return true;
		}
		return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
			(object != null && value in Object(object));
	}

	function isKeyable(value: any): boolean {
		var type = typeof value;
		return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
			? (value !== '__proto__')
			: (value === null);
	}

	function isLaziable(func: Function): boolean {
		var funcName = getFuncName(func),
			other = lodash[funcName];

		if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
			return false;
		}
		if (func === other) {
			return true;
		}
		var data = getData(other);
		return !!data && func === data[0];
	}

	function isMasked(func: Function): boolean {
		return !!maskSrcKey && (maskSrcKey in func);
	}

	var isMaskable: (value: any) => boolean = coreJsData ? isFunction : stubFalse;

	function isPrototype(value: any): boolean {
		var Ctor = value && value.constructor,
			proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

		return value === proto;
	}

	function isStrictComparable(value: any): boolean {
		return value === value && !isObject(value);
	}

    /**
     * A specialized version of `matchesProperty` for source values suitable
     * for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {string} key The key of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */
	function matchesStrictComparable(key, srcValue) {
		return function (object) {
			if (object == null) {
				return false;
			}
			return object[key] === srcValue &&
				(srcValue !== undefined || (key in Object(object)));
		};
	}

	function memoizeCapped(func: Function): Function {
		var result = memoize(func, function (key) {
			if (cache.size === MAX_MEMOIZE_SIZE) {
				cache.clear();
			}
			return key;
		});

		var cache = result.cache;
		return result;
	}

    /**
     * Merges the function metadata of `source` into `data`.
     *
     * Merging metadata reduces the number of wrappers used to invoke a function.
     * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
     * may be applied regardless of execution order. Methods like `_.ary` and
     * `_.rearg` modify function arguments, making the order in which they are
     * executed important, preventing the merging of metadata. However, we make
     * an exception for a safe combined case where curried functions have `_.ary`
     * and or `_.rearg` applied.
     *
     * @private
     * @param {Array} data The destination metadata.
     * @param {Array} source The source metadata.
     * @returns {Array} Returns `data`.
     */
	function mergeData(data, source) {
		var bitmask = data[1],
			srcBitmask = source[1],
			newBitmask = bitmask | srcBitmask,
			isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);

		var isCombo =
			((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_CURRY_FLAG)) ||
			((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_REARG_FLAG) && (data[7].length <= source[8])) ||
			((srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG)) && (source[7].length <= source[8]) && (bitmask == WRAP_CURRY_FLAG));

		// Exit early if metadata can't be merged.
		if (!(isCommon || isCombo)) {
			return data;
		}
		// Use source `thisArg` if available.
		if (srcBitmask & WRAP_BIND_FLAG) {
			data[2] = source[2];
			// Set when currying a bound function.
			newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
		}
		// Compose partial arguments.
		var value = source[3];
		if (value) {
			var partials = data[3];
			data[3] = partials ? composeArgs(partials, value, source[4]) : value;
			data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
		}
		// Compose partial right arguments.
		value = source[5];
		if (value) {
			partials = data[5];
			data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
			data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
		}
		// Use source `argPos` if available.
		value = source[7];
		if (value) {
			data[7] = value;
		}
		// Use source `ary` if it's smaller.
		if (srcBitmask & WRAP_ARY_FLAG) {
			data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
		}
		// Use source `arity` if one is not provided.
		if (data[9] == null) {
			data[9] = source[9];
		}
		// Use source `func` and merge bitmasks.
		data[0] = source[0];
		data[1] = newBitmask;

		return data;
	}

    /**
     * This function is like
     * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * except that it includes inherited enumerable properties.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
	function nativeKeysIn(object) {
		var result = [];
		if (object != null) {
			for (var key in Object(object)) {
				result.push(key);
			}
		}
		return result;
	}

    /**
     * Converts `value` to a string using `Object.prototype.toString`.
     *
     * @private
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     */
	function objectToString(value) {
		return nativeObjectToString.call(value);
	}

    /**
     * A specialized version of `baseRest` which transforms the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @param {Function} transform The rest array transform.
     * @returns {Function} Returns the new function.
     */
	function overRest(func, start, transform) {
		start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
		return function () {
			var args = arguments,
				index = -1,
				length = nativeMax(args.length - start, 0),
				array = Array(length);

			while (++index < length) {
				array[index] = args[start + index];
			}
			index = -1;
			var otherArgs = Array(start + 1);
			while (++index < start) {
				otherArgs[index] = args[index];
			}
			otherArgs[start] = transform(array);
			return apply(func, this, otherArgs);
		};
	}

    /**
     * Gets the parent value at `path` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array} path The path to get the parent value of.
     * @returns {*} Returns the parent value.
     */
	function parent(object, path) {
		return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
	}

    /**
     * Reorder `array` according to the specified indexes where the element at
     * the first index is assigned as the first element, the element at
     * the second index is assigned as the second element, and so on.
     *
     * @private
     * @param {Array} array The array to reorder.
     * @param {Array} indexes The arranged array indexes.
     * @returns {Array} Returns `array`.
     */
	function reorder(array, indexes) {
		var arrLength = array.length,
			length = nativeMin(indexes.length, arrLength),
			oldArray = copyArray(array);

		while (length--) {
			var index = indexes[length];
			array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
		}
		return array;
	}

    /**
     * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the property to get.
     * @returns {*} Returns the property value.
     */
	function safeGet(object, key) {
		if (key === 'constructor' && typeof object[key] === 'function') {
			return;
		}

		if (key == '__proto__') {
			return;
		}

		return object[key];
	}

    /**
     * Sets metadata for `func`.
     *
     * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
     * period of time, it will trip its breaker and transition to an identity
     * function to avoid garbage collection pauses in V8. See
     * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
     * for more details.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */
	var setData = shortOut(baseSetData);

    /**
     * A simple wrapper around the global [`setTimeout`](https://mdn.io/setTimeout).
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @returns {number|Object} Returns the timer id or timeout object.
     */
	var setTimeout = ctxSetTimeout || function (func, wait) {
		return root.setTimeout(func, wait);
	};

    /**
     * Sets the `toString` method of `func` to return `string`.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */
	var setToString = shortOut(baseSetToString);

    /**
     * Sets the `toString` method of `wrapper` to mimic the source of `reference`
     * with wrapper details in a comment at the top of the source body.
     *
     * @private
     * @param {Function} wrapper The function to modify.
     * @param {Function} reference The reference function.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Function} Returns `wrapper`.
     */
	function setWrapToString(wrapper, reference, bitmask) {
		var source = (reference + '');
		return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
	}

    /**
     * Creates a function that'll short out and invoke `identity` instead
     * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
     * milliseconds.
     *
     * @private
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new shortable function.
     */
	function shortOut(func) {
		var count = 0,
			lastCalled = 0;

		return function () {
			var stamp = nativeNow(),
				remaining = HOT_SPAN - (stamp - lastCalled);

			lastCalled = stamp;
			if (remaining > 0) {
				if (++count >= HOT_COUNT) {
					return arguments[0];
				}
			} else {
				count = 0;
			}
			return func.apply(undefined, arguments);
		};
	}

	function shuffleSelf(array: any[], size?: number): any[] {
		var index = -1,
			length = array.length,
			lastIndex = length - 1;

		size = size === undefined ? length : size;
		while (++index < size) {
			var rand = baseRandom(index, lastIndex),
				value = array[rand];

			array[rand] = array[index];
			array[index] = value;
		}
		array.length = size;
		return array;
	}

    /**
     * Converts `string` to a property path array.
     *
     * @private
     * @param {string} string The string to convert.
     * @returns {Array} Returns the property path array.
     */
	var stringToPath = memoizeCapped(function (string) {
		var result = [];
		if (string.charCodeAt(0) === 46 /* . */) {
			result.push('');
		}
		string.replace(rePropName, function (match, number, quote, subString) {
			result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
		});
		return result;
	});

	function toKey(value: any): string {
		if (typeof value == 'string' || isSymbol(value)) {
			return value;
		}
		var result = (value + '');
		return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	function toSource(func: Function): string {
		if (func != null) {
			try {
				return funcToString.call(func);
			} catch (e) { }
			try {
				return (func + '');
			} catch (e) { }
		}
		return '';
	}

	function updateWrapDetails(details: any[], bitmask: number): any[] {
		arrayEach(wrapFlags, function (pair) {
			var value = '_.' + pair[0];
			if ((bitmask & pair[1]) && !arrayIncludes(details, value)) {
				details.push(value);
			}
		});
		return details.sort();
	}

	function wrapperClone(wrapper: any): any {
		if (wrapper instanceof LazyWrapper) {
			return wrapper.clone();
		}
		var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
		result.__actions__ = copyArray(wrapper.__actions__);
		result.__index__ = wrapper.__index__;
		result.__values__ = wrapper.__values__;
		return result;
	}

	/*------------------------------------------------------------------------*/

    /**
     * Creates an array of elements split into groups the length of `size`.
     * If `array` can't be split evenly, the final chunk will be the remaining
     * elements.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to process.
     * @param {number} [size=1] The length of each chunk
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the new array of chunks.
     * @example
     *
     * _.chunk(['a', 'b', 'c', 'd'], 2);
     * // => [['a', 'b'], ['c', 'd']]
     *
     * _.chunk(['a', 'b', 'c', 'd'], 3);
     * // => [['a', 'b', 'c'], ['d']]
     */
	function chunk(array, size, guard) {
		if ((guard ? isIterateeCall(array, size, guard) : size === undefined)) {
			size = 1;
		} else {
			size = nativeMax(toInteger(size), 0);
		}
		var length = array == null ? 0 : array.length;
		if (!length || size < 1) {
			return [];
		}
		var index = 0,
			resIndex = 0,
			result = Array(nativeCeil(length / size));

		while (index < length) {
			result[resIndex++] = baseSlice(array, index, (index += size));
		}
		return result;
	}

    /**
     * Creates an array with all falsey values removed. The values `false`, `null`,
     * `0`, `""`, `undefined`, and `NaN` are falsey.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to compact.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.compact([0, 1, false, 2, '', 3]);
     * // => [1, 2, 3]
     */
	function compact(array) {
		var index = -1,
			length = array == null ? 0 : array.length,
			resIndex = 0,
			result = [];

		while (++index < length) {
			var value = array[index];
			if (value) {
				result[resIndex++] = value;
			}
		}
		return result;
	}

    /**
     * Creates a new array concatenating `array` with any additional arrays
     * and/or values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to concatenate.
     * @param {...*} [values] The values to concatenate.
     * @returns {Array} Returns the new concatenated array.
     * @example
     *
     * var array = [1];
     * var other = _.concat(array, 2, [3], [[4]]);
     *
     * console.log(other);
     * // => [1, 2, 3, [4]]
     *
     * console.log(array);
     * // => [1]
     */
	function concat() {
		var length = arguments.length;
		if (!length) {
			return [];
		}
		var args = Array(length - 1),
			array = arguments[0],
			index = length;

		while (index--) {
			args[index - 1] = arguments[index];
		}
		return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
	}

    /**
     * Creates an array of `array` values not included in the other given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * **Note:** Unlike `_.pullAll`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.without, _.xor
     * @example
     *
     * _.difference([2, 1], [2, 3]);
     * // => [1]
     */
	var difference = baseRest(function (array, values) {
		return isArrayLikeObject(array)
			? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
			: [];
	});

    /**
     * This method is like `_.difference` except that it accepts `iteratee` which
     * is invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * **Note:** Unlike `_.pullAllBy`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */
	var differenceBy = baseRest(function (array, values) {
		var iteratee = last(values);
		if (isArrayLikeObject(iteratee)) {
			iteratee = undefined;
		}
		return isArrayLikeObject(array)
			? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), getIteratee(iteratee, 2))
			: [];
	});

    /**
     * This method is like `_.difference` except that it accepts `comparator`
     * which is invoked to compare elements of `array` to `values`. The order and
     * references of result values are determined by the first array. The comparator
     * is invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.pullAllWith`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     *
     * _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }]
     */
	var differenceWith = baseRest(function (array, values) {
		var comparator = last(values);
		if (isArrayLikeObject(comparator)) {
			comparator = undefined;
		}
		return isArrayLikeObject(array)
			? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), undefined, comparator)
			: [];
	});

    /**
     * Creates a slice of `array` with `n` elements dropped from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.drop([1, 2, 3]);
     * // => [2, 3]
     *
     * _.drop([1, 2, 3], 2);
     * // => [3]
     *
     * _.drop([1, 2, 3], 5);
     * // => []
     *
     * _.drop([1, 2, 3], 0);
     * // => [1, 2, 3]
     */
	function drop(array, n, guard) {
		var length = array == null ? 0 : array.length;
		if (!length) {
			return [];
		}
		n = (guard || n === undefined) ? 1 : toInteger(n);
		return baseSlice(array, n < 0 ? 0 : n, length);
	}

    /**
     * Creates a slice of `array` with `n` elements dropped from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.dropRight([1, 2, 3]);
     * // => [1, 2]
     *
     * _.dropRight([1, 2, 3], 2);
     * // => [1]
     *
     * _.dropRight([1, 2, 3], 5);
     * // => []
     *
     * _.dropRight([1, 2, 3], 0);
     * // => [1, 2, 3]
     */
	function dropRight(array, n, guard) {
		var length = array == null ? 0 : array.length;
		if (!length) {
			return [];
		}
		n = (guard || n === undefined) ? 1 : toInteger(n);
		n = length - n;
		return baseSlice(array, 0, n < 0 ? 0 : n);
	}

    /**
     * Creates a slice of `array` excluding elements dropped from the end.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.dropRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropRightWhile(users, ['active', false]);
     * // => objects for ['barney']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropRightWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */
	function dropRightWhile(array, predicate) {
		return (array && array.length)
			? baseWhile(array, getIteratee(predicate, 3), true, true)
			: [];
	}

    /**
     * Creates a slice of `array` excluding elements dropped from the beginning.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.dropWhile(users, function(o) { return !o.active; });
     * // => objects for ['pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropWhile(users, ['active', false]);
     * // => objects for ['pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */
	function dropWhile(array, predicate) {
		return (array && array.length)
			? baseWhile(array, getIteratee(predicate, 3), true)
			: [];
	}

    /**
     * Fills elements of `array` with `value` from `start` up to, but not
     * including, `end`.
     *
     * **Note:** This method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Array
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.fill(array, 'a');
     * console.log(array);
     * // => ['a', 'a', 'a']
     *
     * _.fill(Array(3), 2);
     * // => [2, 2, 2]
     *
     * _.fill([4, 6, 8, 10], '*', 1, 3);
     * // => [4, '*', '*', 10]
     */
	function fill(array, value, start, end) {
		var length = array == null ? 0 : array.length;
		if (!length) {
			return [];
		}
		if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
			start = 0;
			end = length;
		}
		return baseFill(array, value, start, end);
	}

    /**
     * This method is like `_.find` except that it returns the index of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.findIndex(users, function(o) { return o.user == 'barney'; });
     * // => 0
     *
     * // The `_.matches` iteratee shorthand.
     * _.findIndex(users, { 'user': 'fred', 'active': false });
     * // => 1
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findIndex(users, ['active', false]);
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.findIndex(users, 'active');
     * // => 2
     */
	function findIndex(array, predicate, fromIndex) {
		var length = array == null ? 0 : array.length;
		if (!length) {
			return -1;
		}
		var index = fromIndex == null ? 0 : toInteger(fromIndex);
		if (index < 0) {
			index = nativeMax(length + index, 0);
		}
		return baseFindIndex(array, getIteratee(predicate, 3), index);
	}

    /**
     * This method is like `_.findIndex` except that it iterates over elements
     * of `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
     * // => 2
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastIndex(users, { 'user': 'barney', 'active': true });
     * // => 0
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastIndex(users, ['active', false]);
     * // => 2
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastIndex(users, 'active');
     * // => 0
     */
	function findLastIndex(array, predicate, fromIndex) {
		var length = array == null ? 0 : array.length;
		if (!length) {
			return -1;
		}
		var index = length - 1;
		if (fromIndex !== undefined) {
			index = toInteger(fromIndex);
			index = fromIndex < 0
				? nativeMax(length + index, 0)
				: nativeMin(index, length - 1);
		}
		return baseFindIndex(array, getIteratee(predicate, 3), index, true);
	}

    /**
     * Flattens `array` a single level deep.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flatten([1, [2, [3, [4]], 5]]);
     * // => [1, 2, [3, [4]], 5]
     */
	function flatten(array) {
		var length = array == null ? 0 : array.length;
		return length ? baseFlatten(array, 1) : [];
	}

	function flattenDeep(array: any[]): any[] {
		var length = array == null ? 0 : array.length;
		return length ? baseFlatten(array, INFINITY) : [];
	}

	function flattenDepth(array: any[], depth: number): any[] {
		var length = array == null ? 0 : array.length;
		if (!length) {
			return [];
		}
		depth = depth === undefined ? 1 : toInteger(depth);
		return baseFlatten(array, depth);
	}

    /**
     * The inverse of `_.toPairs`; this method returns an object composed
     * from key-value `pairs`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} pairs The key-value pairs.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.fromPairs([['a', 1], ['b', 2]]);
     * // => { 'a': 1, 'b': 2 }
     */
	function fromPairs(pairs) {
		var index = -1,
			length = pairs == null ? 0 : pairs.length,
			result = {};

		while (++index < length) {
			var pair = pairs[index];
			result[pair[0]] = pair[1];
		}
		return result;
	}

    /**
     * Gets the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias first
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the first element of `array`.
     * @example
     *
     * _.head([1, 2, 3]);
     * // => 1
     *
     * _.head([]);
     * // => undefined
     */
	function head(array) {
		return (array && array.length) ? array[0] : undefined;
	}

    /**
     * Gets the index at which the first occurrence of `value` is found in `array`
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. If `fromIndex` is negative, it's used as the
     * offset from the end of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.indexOf([1, 2, 1, 2], 2);
     * // => 1
     *
     * // Search from the `fromIndex`.
     * _.indexOf([1, 2, 1, 2], 2, 2);
     * // => 3
     */
	function indexOf(array, value, fromIndex) {
		var length = array == null ? 0 : array.length;
		if (!length) {
			return -1;
		}
		var index = fromIndex == null ? 0 : toInteger(fromIndex);
		if (index < 0) {
			index = nativeMax(length + index, 0);
		}
		return baseIndexOf(array, value, index);
	}

    /**
     * Gets all but the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.initial([1, 2, 3]);
     * // => [1, 2]
     */
	function initial(array) {
		var length = array == null ? 0 : array.length;
		return length ? baseSlice(array, 0, -1) : [];
	}

    /**
     * Creates an array of unique values that are included in all given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersection([2, 1], [2, 3]);
     * // => [2]
     */
	var intersection = baseRest(function (arrays) {
		var mapped = arrayMap(arrays, castArrayLikeObject);
		return (mapped.length && mapped[0] === arrays[0])
			? baseIntersection(mapped)
			: [];
	});

    /**
     * This method is like `_.intersection` except that it accepts `iteratee`
     * which is invoked for each element of each `arrays` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [2.1]
     *
     * // The `_.property` iteratee shorthand.
     * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }]
     */
	var intersectionBy = baseRest(function (arrays) {
		var iteratee = last(arrays),
			mapped = arrayMap(arrays, castArrayLikeObject);

		if (iteratee === last(mapped)) {
			iteratee = undefined;
		} else {
			mapped.pop();
		}
		return (mapped.length && mapped[0] === arrays[0])
			? baseIntersection(mapped, getIteratee(iteratee, 2))
			: [];
	});

    /**
     * This method is like `_.intersection` except that it accepts `comparator`
     * which is invoked to compare elements of `arrays`. The order and references
     * of result values are determined by the first array. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.intersectionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }]
     */
	var intersectionWith = baseRest(function (arrays) {
		var comparator = last(arrays),
			mapped = arrayMap(arrays, castArrayLikeObject);

		comparator = typeof comparator == 'function' ? comparator : undefined;
		if (comparator) {
			mapped.pop();
		}
		return (mapped.length && mapped[0] === arrays[0])
			? baseIntersection(mapped, undefined, comparator)
			: [];
	});

    /**
     * Converts all elements in `array` into a string separated by `separator`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to convert.
     * @param {string} [separator=','] The element separator.
     * @returns {string} Returns the joined string.
     * @example
     *
     * _.join(['a', 'b', 'c'], '~');
     * // => 'a~b~c'
     */
	function join(array, separator) {
		return array == null ? '' : nativeJoin.call(array, separator);
	}

    /**
     * Gets the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the last element of `array`.
     * @example
     *
     * _.last([1, 2, 3]);
     * // => 3
     */
	function last(array) {
		var length = array == null ? 0 : array.length;
		return length ? array[length - 1] : undefined;
	}

    /**
     * This method is like `_.indexOf` except that it iterates over elements of
     * `array` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.lastIndexOf([1, 2, 1, 2], 2);
     * // => 3
     *
     * // Search from the `fromIndex`.
     * _.lastIndexOf([1, 2, 1, 2], 2, 2);
     * // => 1
     */
	function lastIndexOf(array, value, fromIndex) {
		var length = array == null ? 0 : array.length;
		if (!length) {
			return -1;
		}
		var index = length;
		if (fromIndex !== undefined) {
			index = toInteger(fromIndex);
			index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
		}
		return value === value
			? strictLastIndexOf(array, value, index)
			: baseFindIndex(array, baseIsNaN, index, true);
	}

    /**
     * Gets the element at index `n` of `array`. If `n` is negative, the nth
     * element from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.11.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=0] The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     *
     * _.nth(array, 1);
     * // => 'b'
     *
     * _.nth(array, -2);
     * // => 'c';
     */
	function nth(array, n) {
		return (array && array.length) ? baseNth(array, toInteger(n)) : undefined;
	}

    /**
     * Removes all given values from `array` using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.without`, this method mutates `array`. Use `_.remove`
     * to remove elements from an array by predicate.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...*} [values] The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pull(array, 'a', 'c');
     * console.log(array);
     * // => ['b', 'b']
     */
	var pull = baseRest(pullAll);

    /**
     * This method is like `_.pull` except that it accepts an array of values to remove.
     *
     * **Note:** Unlike `_.difference`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pullAll(array, ['a', 'c']);
     * console.log(array);
     * // => ['b', 'b']
     */
	function pullAll(array, values) {
		return (array && array.length && values && values.length)
			? basePullAll(array, values)
			: array;
	}

    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
	function pullAllBy(array, values, iteratee) {
		return (array && array.length && values && values.length)
			? basePullAll(array, values, getIteratee(iteratee, 2))
			: array;
	}

    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which
     * is invoked to compare elements of `array` to `values`. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
	function pullAllWith(array, values, comparator) {
		return (array && array.length && values && values.length)
			? basePullAll(array, values, undefined, comparator)
			: array;
	}

    /**
     * Removes elements from `array` corresponding to `indexes` and returns an
     * array of removed elements.
     *
     * **Note:** Unlike `_.at`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...(number|number[])} [indexes] The indexes of elements to remove.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     * var pulled = _.pullAt(array, [1, 3]);
     *
     * console.log(array);
     * // => ['a', 'c']
     *
     * console.log(pulled);
     * // => ['b', 'd']
     */
	var pullAt = flatRest(function (array, indexes) {
		var length = array == null ? 0 : array.length,
			result = baseAt(array, indexes);

		basePullAt(array, arrayMap(indexes, function (index) {
			return isIndex(index, length) ? +index : index;
		}).sort(compareAscending));

		return result;
	});

	function remove(array: any[], predicate: Function): any[] {
		var result = [];
		if (!(array && array.length)) {
			return result;
		}
		var index = -1,
			indexes = [],
			length = array.length;

		predicate = getIteratee(predicate, 3);
		while (++index < length) {
			var value = array[index];
			if (predicate(value, index, array)) {
				result.push(value);
				indexes.push(index);
			}
		}
		basePullAt(array, indexes);
		return result;
	}

    /**
     * Reverses `array` so that the first element becomes the last, the second
     * element becomes the second to last, and so on.
     *
     * **Note:** This method mutates `array` and is based on
     * [`Array#reverse`](https://mdn.io/Array/reverse).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.reverse(array);
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */
	function reverse(array) {
		return array == null ? array : nativeReverse.call(array);
	}

    /**
     * Creates a slice of `array` from `start` up to, but not including, `end`.
     *
     * **Note:** This method is used instead of
     * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
     * returned.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */
	function slice(array, start, end) {
		var length = array == null ? 0 : array.length;
		if (!length) {
			return [];
		}
		if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
			start = 0;
			end = length;
		}
		else {
			start = start == null ? 0 : toInteger(start);
			end = end === undefined ? length : toInteger(end);
		}
		return baseSlice(array, start, end);
	}

    /**
     * Uses a binary search to determine the lowest index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedIndex([30, 50], 40);
     * // => 1
     */
	function sortedIndex(array, value) {
		return baseSortedIndex(array, value);
	}

    /**
     * This method is like `_.sortedIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedIndexBy(objects, { 'x': 4 }, 'x');
     * // => 0
     */
	function sortedIndexBy(array, value, iteratee) {
		return baseSortedIndexBy(array, value, getIteratee(iteratee, 2));
	}

    /**
     * This method is like `_.indexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedIndexOf([4, 5, 5, 5, 6], 5);
     * // => 1
     */
	function sortedIndexOf(array, value) {
		var length = array == null ? 0 : array.length;
		if (length) {
			var index = baseSortedIndex(array, value);
			if (index < length && eq(array[index], value)) {
				return index;
			}
		}
		return -1;
	}

    /**
     * This method is like `_.sortedIndex` except that it returns the highest
     * index at which `value` should be inserted into `array` in order to
     * maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedLastIndex([4, 5, 5, 5, 6], 5);
     * // => 4
     */
	function sortedLastIndex(array, value) {
		return baseSortedIndex(array, value, true);
	}

    /**
     * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 1
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedLastIndexBy(objects, { 'x': 4 }, 'x');
     * // => 1
     */
	function sortedLastIndexBy(array, value, iteratee) {
		return baseSortedIndexBy(array, value, getIteratee(iteratee, 2), true);
	}

    /**
     * This method is like `_.lastIndexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedLastIndexOf([4, 5, 5, 5, 6], 5);
     * // => 3
     */
	function sortedLastIndexOf(array, value) {
		var length = array == null ? 0 : array.length;
		if (length) {
			var index = baseSortedIndex(array, value, true) - 1;
			if (eq(array[index], value)) {
				return index;
			}
		}
		return -1;
	}

    /**
     * This method is like `_.uniq` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniq([1, 1, 2]);
     * // => [1, 2]
     */
	function sortedUniq(array) {
		return (array && array.length)
			? baseSortedUniq(array)
			: [];
	}

    /**
     * This method is like `_.uniqBy` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
     * // => [1.1, 2.3]
     */
	function sortedUniqBy(array, iteratee) {
		return (array && array.length)
			? baseSortedUniq(array, getIteratee(iteratee, 2))
			: [];
	}

    /**
     * Gets all but the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.tail([1, 2, 3]);
     * // => [2, 3]
     */
	function tail(array) {
		var length = array == null ? 0 : array.length;
		return length ? baseSlice(array, 1, length) : [];
	}

    /**
     * Creates a slice of `array` with `n` elements taken from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.take([1, 2, 3]);
     * // => [1]
     *
     * _.take([1, 2, 3], 2);
     * // => [1, 2]
     *
     * _.take([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.take([1, 2, 3], 0);
     * // => []
     */
	function take(array, n, guard) {
		if (!(array && array.length)) {
			return [];
		}
		n = (guard || n === undefined) ? 1 : toInteger(n);
		return baseSlice(array, 0, n < 0 ? 0 : n);
	}

    /**
     * Creates a slice of `array` with `n` elements taken from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.takeRight([1, 2, 3]);
     * // => [3]
     *
     * _.takeRight([1, 2, 3], 2);
     * // => [2, 3]
     *
     * _.takeRight([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.takeRight([1, 2, 3], 0);
     * // => []
     */
	function takeRight(array, n, guard) {
		var length = array == null ? 0 : array.length;
		if (!length) {
			return [];
		}
		n = (guard || n === undefined) ? 1 : toInteger(n);
		n = length - n;
		return baseSlice(array, n < 0 ? 0 : n, length);
	}

    /**
     * Creates a slice of `array` with elements taken from the end. Elements are
     * taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.takeRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeRightWhile(users, ['active', false]);
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeRightWhile(users, 'active');
     * // => []
     */
	function takeRightWhile(array, predicate) {
		return (array && array.length)
			? baseWhile(array, getIteratee(predicate, 3), false, true)
			: [];
	}

    /**
     * Creates a slice of `array` with elements taken from the beginning. Elements
     * are taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.takeWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeWhile(users, ['active', false]);
     * // => objects for ['barney', 'fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeWhile(users, 'active');
     * // => []
     */
	function takeWhile(array, predicate) {
		return (array && array.length)
			? baseWhile(array, getIteratee(predicate, 3))
			: [];
	}

    /**
     * Creates an array of unique values, in order, from all given arrays using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.union([2], [1, 2]);
     * // => [2, 1]
     */
	var union = baseRest(function (arrays) {
		return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
	});

    /**
     * This method is like `_.union` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which uniqueness is computed. Result values are chosen from the first
     * array in which the value occurs. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.unionBy([2.1], [1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */
	var unionBy = baseRest(function (arrays) {
		var iteratee = last(arrays);
		if (isArrayLikeObject(iteratee)) {
			iteratee = undefined;
		}
		return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee, 2));
	});

    /**
     * This method is like `_.union` except that it accepts `comparator` which
     * is invoked to compare elements of `arrays`. Result values are chosen from
     * the first array in which the value occurs. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.unionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */
	var unionWith = baseRest(function (arrays) {
		var comparator = last(arrays);
		comparator = typeof comparator == 'function' ? comparator : undefined;
		return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined, comparator);
	});

	function uniq(array: any[]): any[] {
		return (array && array.length) ? baseUniq(array) : [];
	}

	function uniqBy(array: any[], iteratee: Function): any[] {
		return (array && array.length) ? baseUniq(array, getIteratee(iteratee, 2)) : [];
	}

    /**
     * This method is like `_.uniq` except that it accepts `comparator` which
     * is invoked to compare elements of `array`. The order of result values is
     * determined by the order they occur in the array.The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.uniqWith(objects, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
     */
	function uniqWith(array, comparator) {
		comparator = typeof comparator == 'function' ? comparator : undefined;
		return (array && array.length) ? baseUniq(array, undefined, comparator) : [];
	}

	function unzip(array: any[]): any[] {
		if (!(array && array.length)) {
			return [];
		}
		var length = 0;
		array = arrayFilter(array, function (group) {
			if (isArrayLikeObject(group)) {
				length = nativeMax(group.length, length);
				return true;
			}
		});
		return baseTimes(length, function (index) {
			return arrayMap(array, baseProperty(index));
		});
	}

	function unzipWith(array: any[], iteratee: Function): any {
		if (!(array && array.length)) {
			return [];
		}
		var result = unzip(array);
		if (iteratee == null) {
			return result;
		}
		return arrayMap(result, function (group) {
			return apply(iteratee, undefined, group);
		});
	}

    /**
     * Creates an array excluding all given values using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.pull`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...*} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.xor
     * @example
     *
     * _.without([2, 1, 2, 3], 1, 2);
     * // => [3]
     */
	var without = baseRest(function (array, values) {
		return isArrayLikeObject(array)
			? baseDifference(array, values)
			: [];
	});

    /**
     * Creates an array of unique values that is the
     * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
     * of the given arrays. The order of result values is determined by the order
     * they occur in the arrays.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.without
     * @example
     *
     * _.xor([2, 1], [2, 3]);
     * // => [1, 3]
     */
	var xor = baseRest(function (arrays) {
		return baseXor(arrayFilter(arrays, isArrayLikeObject));
	});

    /**
     * This method is like `_.xor` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which by which they're compared. The order of result values is determined
     * by the order they occur in the arrays. The iteratee is invoked with one
     * argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2, 3.4]
     *
     * // The `_.property` iteratee shorthand.
     * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */
	var xorBy = baseRest(function (arrays) {
		var iteratee = last(arrays);
		if (isArrayLikeObject(iteratee)) {
			iteratee = undefined;
		}
		return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee, 2));
	});

    /**
     * This method is like `_.xor` except that it accepts `comparator` which is
     * invoked to compare elements of `arrays`. The order of result values is
     * determined by the order they occur in the arrays. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.xorWith(objects, others, _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */
	var xorWith = baseRest(function (arrays) {
		var comparator = last(arrays);
		comparator = typeof comparator == 'function' ? comparator : undefined;
		return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined, comparator);
	});

    /**
     * Creates an array of grouped elements, the first of which contains the
     * first elements of the given arrays, the second of which contains the
     * second elements of the given arrays, and so on.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     */
	var zip = baseRest(unzip);

	function zipObject(props: string[], values: any[]): any {
		return baseZipObject(props || [], values || [], assignValue);
	}

	function zipObjectDeep(props: string[], values: any[]): any {
		return baseZipObject(props || [], values || [], baseSet);
	}

    /**
     * This method is like `_.zip` except that it accepts `iteratee` to specify
     * how grouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  grouped values.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
     *   return a + b + c;
     * });
     * // => [111, 222]
     */
	var zipWith = baseRest(function (arrays) {
		var length = arrays.length,
			iteratee = length > 1 ? arrays[length - 1] : undefined;

		iteratee = typeof iteratee == 'function' ? (arrays.pop(), iteratee) : undefined;
		return unzipWith(arrays, iteratee);
	});

	/*------------------------------------------------------------------------*/

	function chain(value: any): any {
		var result = lodash(value);
		result.__chain__ = true;
		return result;
	}

	function tap(value: any, interceptor: Function): any {
		interceptor(value);
		return value;
	}

	function thru(value: any, interceptor: Function): any {
		return interceptor(value);
	}

    /**
     * This method is the wrapper version of `_.at`.
     *
     * @name at
     * @memberOf _
     * @since 1.0.0
     * @category Seq
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _(object).at(['a[0].b.c', 'a[1]']).value();
     * // => [3, 4]
     */
	var wrapperAt = flatRest(function (paths) {
		var length = paths.length,
			start = length ? paths[0] : 0,
			value = this.__wrapped__,
			interceptor = function (object) { return baseAt(object, paths); };

		if (length > 1 || this.__actions__.length ||
			!(value instanceof LazyWrapper) || !isIndex(start)) {
			return this.thru(interceptor);
		}
		value = value.slice(start, +start + (length ? 1 : 0));
		value.__actions__.push({
			'func': thru,
			'args': [interceptor],
			'thisArg': undefined
		});
		return new LodashWrapper(value, this.__chain__).thru(function (array) {
			if (length && !array.length) {
				array.push(undefined);
			}
			return array;
		});
	});

    /**
     * Creates a `lodash` wrapper instance with explicit method chain sequences enabled.
     *
     * @name chain
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 }
     * ];
     *
     * // A sequence without explicit chaining.
     * _(users).head();
     * // => { 'user': 'barney', 'age': 36 }
     *
     * // A sequence with explicit chaining.
     * _(users)
     *   .chain()
     *   .head()
     *   .pick('user')
     *   .value();
     * // => { 'user': 'barney' }
     */
	function wrapperChain() {
		return chain(this);
	}

    /**
     * Executes the chain sequence and returns the wrapped result.
     *
     * @name commit
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2];
     * var wrapped = _(array).push(3);
     *
     * console.log(array);
     * // => [1, 2]
     *
     * wrapped = wrapped.commit();
     * console.log(array);
     * // => [1, 2, 3]
     *
     * wrapped.last();
     * // => 3
     *
     * console.log(array);
     * // => [1, 2, 3]
     */
	function wrapperCommit() {
		return new LodashWrapper(this.value(), this.__chain__);
	}

    /**
     * Gets the next value on a wrapped object following the
     * [iterator protocol](https://mdn.io/iteration_protocols#iterator).
     *
     * @name next
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the next iterator value.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 1 }
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 2 }
     *
     * wrapped.next();
     * // => { 'done': true, 'value': undefined }
     */
	function wrapperNext() {
		if (this.__values__ === undefined) {
			this.__values__ = toArray(this.value());
		}
		var done = this.__index__ >= this.__values__.length,
			value = done ? undefined : this.__values__[this.__index__++];

		return { 'done': done, 'value': value };
	}

    /**
     * Enables the wrapper to be iterable.
     *
     * @name Symbol.iterator
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the wrapper object.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped[Symbol.iterator]() === wrapped;
     * // => true
     *
     * Array.from(wrapped);
     * // => [1, 2]
     */
	function wrapperToIterator() {
		return this;
	}

    /**
     * Creates a clone of the chain sequence planting `value` as the wrapped value.
     *
     * @name plant
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @param {*} value The value to plant.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2]).map(square);
     * var other = wrapped.plant([3, 4]);
     *
     * other.value();
     * // => [9, 16]
     *
     * wrapped.value();
     * // => [1, 4]
     */
	function wrapperPlant(value) {
		var result,
			parent = this;

		while (parent instanceof baseLodash) {
			var clone = wrapperClone(parent);
			clone.__index__ = 0;
			clone.__values__ = undefined;
			if (result) {
				previous.__wrapped__ = clone;
			} else {
				result = clone;
			}
			var previous = clone;
			parent = parent.__wrapped__;
		}
		previous.__wrapped__ = value;
		return result;
	}

    /**
     * This method is the wrapper version of `_.reverse`.
     *
     * **Note:** This method mutates the wrapped array.
     *
     * @name reverse
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _(array).reverse().value()
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */
	function wrapperReverse() {
		var value = this.__wrapped__;
		if (value instanceof LazyWrapper) {
			var wrapped = value;
			if (this.__actions__.length) {
				wrapped = new LazyWrapper(this);
			}
			wrapped = wrapped.reverse();
			wrapped.__actions__.push({
				'func': thru,
				'args': [reverse],
				'thisArg': undefined
			});
			return new LodashWrapper(wrapped, this.__chain__);
		}
		return this.thru(reverse);
	}

    /**
     * Executes the chain sequence to resolve the unwrapped value.
     *
     * @name value
     * @memberOf _
     * @since 0.1.0
     * @alias toJSON, valueOf
     * @category Seq
     * @returns {*} Returns the resolved unwrapped value.
     * @example
     *
     * _([1, 2, 3]).value();
     * // => [1, 2, 3]
     */
	function wrapperValue() {
		return baseWrapperValue(this.__wrapped__, this.__actions__);
	}

	/*------------------------------------------------------------------------*/

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the number of times the key was returned by `iteratee`. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.countBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': 1, '6': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.countBy(['one', 'two', 'three'], 'length');
     * // => { '3': 2, '5': 1 }
     */
	var countBy = createAggregator(function (result, value, key) {
		if (hasOwnProperty.call(result, key)) {
			++result[key];
		} else {
			baseAssignValue(result, key, 1);
		}
	});

    /**
     * Checks if `predicate` returns truthy for **all** elements of `collection`.
     * Iteration is stopped once `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * **Note:** This method returns `true` for
     * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
     * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
     * elements of empty collections.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`.
     * @example
     *
     * _.every([true, 1, null, 'yes'], Boolean);
     * // => false
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.every(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.every(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.every(users, 'active');
     * // => false
     */
	function every(collection, predicate, guard) {
		var func = isArray(collection) ? arrayEvery : baseEvery;
		if (guard && isIterateeCall(collection, predicate, guard)) {
			predicate = undefined;
		}
		return func(collection, getIteratee(predicate, 3));
	}

    /**
     * Iterates over elements of `collection`, returning an array of all elements
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * **Note:** Unlike `_.remove`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.reject
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * _.filter(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, { 'age': 36, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.filter(users, 'active');
     * // => objects for ['barney']
     */
	function filter(collection, predicate) {
		var func = isArray(collection) ? arrayFilter : baseFilter;
		return func(collection, getIteratee(predicate, 3));
	}

    /**
     * Iterates over elements of `collection`, returning the first element
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': true },
     *   { 'user': 'fred',    'age': 40, 'active': false },
     *   { 'user': 'pebbles', 'age': 1,  'active': true }
     * ];
     *
     * _.find(users, function(o) { return o.age < 40; });
     * // => object for 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.find(users, { 'age': 1, 'active': true });
     * // => object for 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.find(users, ['active', false]);
     * // => object for 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.find(users, 'active');
     * // => object for 'barney'
     */
	var find = createFind(findIndex);

    /**
     * This method is like `_.find` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=collection.length-1] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * _.findLast([1, 2, 3, 4], function(n) {
     *   return n % 2 == 1;
     * });
     * // => 3
     */
	var findLast = createFind(findLastIndex);

    /**
     * Creates a flattened array of values by running each element in `collection`
     * thru `iteratee` and flattening the mapped results. The iteratee is invoked
     * with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [n, n];
     * }
     *
     * _.flatMap([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */
	function flatMap(collection, iteratee) {
		return baseFlatten(map(collection, iteratee), 1);
	}

    /**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDeep([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */
	function flatMapDeep(collection, iteratee) {
		return baseFlatten(map(collection, iteratee), INFINITY);
	}

    /**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDepth([1, 2], duplicate, 2);
     * // => [[1, 1], [2, 2]]
     */
	function flatMapDepth(collection, iteratee, depth) {
		depth = depth === undefined ? 1 : toInteger(depth);
		return baseFlatten(map(collection, iteratee), depth);
	}

    /**
     * Iterates over elements of `collection` and invokes `iteratee` for each element.
     * The iteratee is invoked with three arguments: (value, index|key, collection).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * **Note:** As with other "Collections" methods, objects with a "length"
     * property are iterated like arrays. To avoid this behavior use `_.forIn`
     * or `_.forOwn` for object iteration.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias each
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEachRight
     * @example
     *
     * _.forEach([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `1` then `2`.
     *
     * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */
	function forEach(collection, iteratee) {
		var func = isArray(collection) ? arrayEach : baseEach;
		return func(collection, getIteratee(iteratee, 3));
	}

	function forEachRight(collection: any[] | any, iteratee: Function): any[] | any {
		var func = isArray(collection) ? arrayEachRight : baseEachRight;
		return func(collection, getIteratee(iteratee, 3));
	}

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The order of grouped values
     * is determined by the order they occur in `collection`. The corresponding
     * value of each key is an array of elements responsible for generating the
     * key. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.groupBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': [4.2], '6': [6.1, 6.3] }
     *
     * // The `_.property` iteratee shorthand.
     * _.groupBy(['one', 'two', 'three'], 'length');
     * // => { '3': ['one', 'two'], '5': ['three'] }
     */
	var groupBy = createAggregator(function (result, value, key) {
		if (hasOwnProperty.call(result, key)) {
			result[key].push(value);
		} else {
			baseAssignValue(result, key, [value]);
		}
	});

    /**
     * Checks if `value` is in `collection`. If `collection` is a string, it's
     * checked for a substring of `value`, otherwise
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * is used for equality comparisons. If `fromIndex` is negative, it's used as
     * the offset from the end of `collection`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {boolean} Returns `true` if `value` is found, else `false`.
     * @example
     *
     * _.includes([1, 2, 3], 1);
     * // => true
     *
     * _.includes([1, 2, 3], 1, 2);
     * // => false
     *
     * _.includes({ 'a': 1, 'b': 2 }, 1);
     * // => true
     *
     * _.includes('abcd', 'bc');
     * // => true
     */
	function includes(collection, value, fromIndex, guard) {
		collection = isArrayLike(collection) ? collection : values(collection);
		fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;

		var length = collection.length;
		if (fromIndex < 0) {
			fromIndex = nativeMax(length + fromIndex, 0);
		}
		return isString(collection)
			? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
			: (!!length && baseIndexOf(collection, value, fromIndex) > -1);
	}

    /**
     * Invokes the method at `path` of each element in `collection`, returning
     * an array of the results of each invoked method. Any additional arguments
     * are provided to each invoked method. If `path` is a function, it's invoked
     * for, and `this` bound to, each element in `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array|Function|string} path The path of the method to invoke or
     *  the function invoked per iteration.
     * @param {...*} [args] The arguments to invoke each method with.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');
     * // => [[1, 5, 7], [1, 2, 3]]
     *
     * _.invokeMap([123, 456], String.prototype.split, '');
     * // => [['1', '2', '3'], ['4', '5', '6']]
     */
	var invokeMap = baseRest(function (collection, path, args) {
		var index = -1,
			isFunc = typeof path == 'function',
			result = isArrayLike(collection) ? Array(collection.length) : [];

		baseEach(collection, function (value) {
			result[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
		});
		return result;
	});

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the last element responsible for generating the key. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * var array = [
     *   { 'dir': 'left', 'code': 97 },
     *   { 'dir': 'right', 'code': 100 }
     * ];
     *
     * _.keyBy(array, function(o) {
     *   return String.fromCharCode(o.code);
     * });
     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
     *
     * _.keyBy(array, 'dir');
     * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
     */
	var keyBy: (collection: any[] | any, iteratee: Function) => any = createAggregator(function (result, value, key) {
		baseAssignValue(result, key, value);
	});

	function map(collection: any[] | any, iteratee: Function): any[] {
		var func = isArray(collection) ? arrayMap : baseMap;
		return func(collection, getIteratee(iteratee, 3));
	}

    /**
     * This method is like `_.sortBy` except that it allows specifying the sort
     * orders of the iteratees to sort by. If `orders` is unspecified, all values
     * are sorted in ascending order. Otherwise, specify an order of "desc" for
     * descending or "asc" for ascending sort order of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @param {string[]} [orders] The sort orders of `iteratees`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 34 },
     *   { 'user': 'fred',   'age': 40 },
     *   { 'user': 'barney', 'age': 36 }
     * ];
     *
     * // Sort by `user` in ascending order and by `age` in descending order.
     * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
     */
	function orderBy(collection, iteratees, orders, guard) {
		if (collection == null) {
			return [];
		}
		if (!isArray(iteratees)) {
			iteratees = iteratees == null ? [] : [iteratees];
		}
		orders = guard ? undefined : orders;
		if (!isArray(orders)) {
			orders = orders == null ? [] : [orders];
		}
		return baseOrderBy(collection, iteratees, orders);
	}

    /**
     * Creates an array of elements split into two groups, the first of which
     * contains elements `predicate` returns truthy for, the second of which
     * contains elements `predicate` returns falsey for. The predicate is
     * invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of grouped elements.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': false },
     *   { 'user': 'fred',    'age': 40, 'active': true },
     *   { 'user': 'pebbles', 'age': 1,  'active': false }
     * ];
     *
     * _.partition(users, function(o) { return o.active; });
     * // => objects for [['fred'], ['barney', 'pebbles']]
     *
     * // The `_.matches` iteratee shorthand.
     * _.partition(users, { 'age': 1, 'active': false });
     * // => objects for [['pebbles'], ['barney', 'fred']]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.partition(users, ['active', false]);
     * // => objects for [['barney', 'pebbles'], ['fred']]
     *
     * // The `_.property` iteratee shorthand.
     * _.partition(users, 'active');
     * // => objects for [['fred'], ['barney', 'pebbles']]
     */
	var partition = createAggregator(function (result, value, key) {
		result[key ? 0 : 1].push(value);
	}, function () { return [[], []]; });

	function reduce(collection: any[] | any, iteratee: Function, accumulator: any): any {
		var func = isArray(collection) ? arrayReduce : baseReduce,
			initAccum = arguments.length < 3;

		return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEach);
	}

    /**
     * This method is like `_.reduce` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduce
     * @example
     *
     * var array = [[0, 1], [2, 3], [4, 5]];
     *
     * _.reduceRight(array, function(flattened, other) {
     *   return flattened.concat(other);
     * }, []);
     * // => [4, 5, 2, 3, 0, 1]
     */
	function reduceRight(collection, iteratee, accumulator) {
		var func = isArray(collection) ? arrayReduceRight : baseReduce,
			initAccum = arguments.length < 3;

		return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEachRight);
	}

	function reject(collection: any[] | any, predicate: Function): any[] {
		var func = isArray(collection) ? arrayFilter : baseFilter;
		return func(collection, negate(getIteratee(predicate, 3)));
	}

	function sample(collection: any[] | any): any {
		var func = isArray(collection) ? arraySample : baseSample;
		return func(collection);
	}

    /**
     * Gets `n` random elements at unique keys from `collection` up to the
     * size of `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @param {number} [n=1] The number of elements to sample.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the random elements.
     * @example
     *
     * _.sampleSize([1, 2, 3], 2);
     * // => [3, 1]
     *
     * _.sampleSize([1, 2, 3], 4);
     * // => [2, 3, 1]
     */
	function sampleSize(collection, n, guard) {
		if ((guard ? isIterateeCall(collection, n, guard) : n === undefined)) {
			n = 1;
		} else {
			n = toInteger(n);
		}
		var func = isArray(collection) ? arraySampleSize : baseSampleSize;
		return func(collection, n);
	}

    /**
     * Creates an array of shuffled values, using a version of the
     * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     * @example
     *
     * _.shuffle([1, 2, 3, 4]);
     * // => [4, 1, 3, 2]
     */
	function shuffle(collection) {
		var func = isArray(collection) ? arrayShuffle : baseShuffle;
		return func(collection);
	}

    /**
     * Gets the size of `collection` by returning its length for array-like
     * values or the number of own enumerable string keyed properties for objects.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @returns {number} Returns the collection size.
     * @example
     *
     * _.size([1, 2, 3]);
     * // => 3
     *
     * _.size({ 'a': 1, 'b': 2 });
     * // => 2
     *
     * _.size('pebbles');
     * // => 7
     */
	function size(collection) {
		if (collection == null) {
			return 0;
		}
		if (isArrayLike(collection)) {
			return isString(collection) ? stringSize(collection) : collection.length;
		}
		var tag = getTag(collection);
		if (tag == mapTag || tag == setTag) {
			return collection.size;
		}
		return baseKeys(collection).length;
	}

    /**
     * Checks if `predicate` returns truthy for **any** element of `collection`.
     * Iteration is stopped once `predicate` returns truthy. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     * @example
     *
     * _.some([null, 0, 'yes', false], Boolean);
     * // => true
     *
     * var users = [
     *   { 'user': 'barney', 'active': true },
     *   { 'user': 'fred',   'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.some(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.some(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.some(users, 'active');
     * // => true
     */
	function some(collection, predicate, guard) {
		var func = isArray(collection) ? arraySome : baseSome;
		if (guard && isIterateeCall(collection, predicate, guard)) {
			predicate = undefined;
		}
		return func(collection, getIteratee(predicate, 3));
	}

    /**
     * Creates an array of elements, sorted in ascending order by the results of
     * running each element in a collection thru each iteratee. This method
     * performs a stable sort, that is, it preserves the original sort order of
     * equal elements. The iteratees are invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 },
     *   { 'user': 'barney', 'age': 34 }
     * ];
     *
     * _.sortBy(users, [function(o) { return o.user; }]);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
     *
     * _.sortBy(users, ['user', 'age']);
     * // => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]
     */
	var sortBy = baseRest(function (collection, iteratees) {
		if (collection == null) {
			return [];
		}
		var length = iteratees.length;
		if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
			iteratees = [];
		} else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
			iteratees = [iteratees[0]];
		}
		return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
	});

	/*------------------------------------------------------------------------*/

    /**
     * Gets the timestamp of the number of milliseconds that have elapsed since
     * the Unix epoch (1 January 1970 00:00:00 UTC).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Date
     * @returns {number} Returns the timestamp.
     * @example
     *
     * _.defer(function(stamp) {
     *   console.log(_.now() - stamp);
     * }, _.now());
     * // => Logs the number of milliseconds it took for the deferred invocation.
     */
	var now = ctxNow || function () {
		return root.Date.now();
	};

	/*------------------------------------------------------------------------*/

    /**
     * The opposite of `_.before`; this method creates a function that invokes
     * `func` once it's called `n` or more times.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {number} n The number of calls before `func` is invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var saves = ['profile', 'settings'];
     *
     * var done = _.after(saves.length, function() {
     *   console.log('done saving!');
     * });
     *
     * _.forEach(saves, function(type) {
     *   asyncSave({ 'type': type, 'complete': done });
     * });
     * // => Logs 'done saving!' after the two async saves have completed.
     */
	function after(n, func) {
		if (typeof func != 'function') {
			throw new TypeError(FUNC_ERROR_TEXT);
		}
		n = toInteger(n);
		return function () {
			if (--n < 1) {
				return func.apply(this, arguments);
			}
		};
	}

    /**
     * Creates a function that invokes `func`, with up to `n` arguments,
     * ignoring any additional arguments.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @param {number} [n=func.length] The arity cap.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.ary(parseInt, 1));
     * // => [6, 8, 10]
     */
	function ary(func, n, guard) {
		n = guard ? undefined : n;
		n = (func && n == null) ? func.length : n;
		return createWrap(func, WRAP_ARY_FLAG, undefined, undefined, undefined, undefined, n);
	}

    /**
     * Creates a function that invokes `func`, with the `this` binding and arguments
     * of the created function, while it's called less than `n` times. Subsequent
     * calls to the created function return the result of the last `func` invocation.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {number} n The number of calls at which `func` is no longer invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * jQuery(element).on('click', _.before(5, addContactToList));
     * // => Allows adding up to 4 contacts to the list.
     */
	function before(n, func) {
		var result;
		if (typeof func != 'function') {
			throw new TypeError(FUNC_ERROR_TEXT);
		}
		n = toInteger(n);
		return function () {
			if (--n > 0) {
				result = func.apply(this, arguments);
			}
			if (n <= 1) {
				func = undefined;
			}
			return result;
		};
	}

    /**
     * Creates a function that invokes `func` with the `this` binding of `thisArg`
     * and `partials` prepended to the arguments it receives.
     *
     * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for partially applied arguments.
     *
     * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
     * property of bound functions.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to bind.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * function greet(greeting, punctuation) {
     *   return greeting + ' ' + this.user + punctuation;
     * }
     *
     * var object = { 'user': 'fred' };
     *
     * var bound = _.bind(greet, object, 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bind(greet, object, _, '!');
     * bound('hi');
     * // => 'hi fred!'
     */
	var bind = baseRest(function (func, thisArg, partials) {
		var bitmask = WRAP_BIND_FLAG;
		if (partials.length) {
			var holders = replaceHolders(partials, getHolder(bind));
			bitmask |= WRAP_PARTIAL_FLAG;
		}
		return createWrap(func, bitmask, thisArg, partials, holders);
	});

    /**
     * Creates a function that invokes the method at `object[key]` with `partials`
     * prepended to the arguments it receives.
     *
     * This method differs from `_.bind` by allowing bound functions to reference
     * methods that may be redefined or don't yet exist. See
     * [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
     * for more details.
     *
     * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Function
     * @param {Object} object The object to invoke the method on.
     * @param {string} key The key of the method.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * var object = {
     *   'user': 'fred',
     *   'greet': function(greeting, punctuation) {
     *     return greeting + ' ' + this.user + punctuation;
     *   }
     * };
     *
     * var bound = _.bindKey(object, 'greet', 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * object.greet = function(greeting, punctuation) {
     *   return greeting + 'ya ' + this.user + punctuation;
     * };
     *
     * bound('!');
     * // => 'hiya fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bindKey(object, 'greet', _, '!');
     * bound('hi');
     * // => 'hiya fred!'
     */
	var bindKey = baseRest(function (object, key, partials) {
		var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
		if (partials.length) {
			var holders = replaceHolders(partials, getHolder(bindKey));
			bitmask |= WRAP_PARTIAL_FLAG;
		}
		return createWrap(key, bitmask, object, partials, holders);
	});

    /**
     * Creates a function that accepts arguments of `func` and either invokes
     * `func` returning its result, if at least `arity` number of arguments have
     * been provided, or returns a function that accepts the remaining `func`
     * arguments, and so on. The arity of `func` may be specified if `func.length`
     * is not sufficient.
     *
     * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curry(abc);
     *
     * curried(1)(2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(1)(_, 3)(2);
     * // => [1, 2, 3]
     */
	function curry(func, arity, guard) {
		arity = guard ? undefined : arity;
		var result = createWrap(func, WRAP_CURRY_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
		result.placeholder = curry.placeholder;
		return result;
	}

    /**
     * This method is like `_.curry` except that arguments are applied to `func`
     * in the manner of `_.partialRight` instead of `_.partial`.
     *
     * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curryRight(abc);
     *
     * curried(3)(2)(1);
     * // => [1, 2, 3]
     *
     * curried(2, 3)(1);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(3)(1, _)(2);
     * // => [1, 2, 3]
     */
	function curryRight(func, arity, guard) {
		arity = guard ? undefined : arity;
		var result = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
		result.placeholder = curryRight.placeholder;
		return result;
	}

    /**
     * Creates a debounced function that delays invoking `func` until after `wait`
     * milliseconds have elapsed since the last time the debounced function was
     * invoked. The debounced function comes with a `cancel` method to cancel
     * delayed `func` invocations and a `flush` method to immediately invoke them.
     * Provide `options` to indicate whether `func` should be invoked on the
     * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
     * with the last arguments provided to the debounced function. Subsequent
     * calls to the debounced function return the result of the last `func`
     * invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the debounced function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.debounce` and `_.throttle`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to debounce.
     * @param {number} [wait=0] The number of milliseconds to delay.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=false]
     *  Specify invoking on the leading edge of the timeout.
     * @param {number} [options.maxWait]
     *  The maximum time `func` is allowed to be delayed before it's invoked.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new debounced function.
     * @example
     *
     * // Avoid costly calculations while the window size is in flux.
     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
     *
     * // Invoke `sendMail` when clicked, debouncing subsequent calls.
     * jQuery(element).on('click', _.debounce(sendMail, 300, {
     *   'leading': true,
     *   'trailing': false
     * }));
     *
     * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
     * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
     * var source = new EventSource('/stream');
     * jQuery(source).on('message', debounced);
     *
     * // Cancel the trailing debounced invocation.
     * jQuery(window).on('popstate', debounced.cancel);
     */
	function debounce(func, wait, options) {
		var lastArgs,
			lastThis,
			maxWait,
			result,
			timerId,
			lastCallTime,
			lastInvokeTime = 0,
			leading = false,
			maxing = false,
			trailing = true;

		if (typeof func != 'function') {
			throw new TypeError(FUNC_ERROR_TEXT);
		}
		wait = toNumber(wait) || 0;
		if (isObject(options)) {
			leading = !!options.leading;
			maxing = 'maxWait' in options;
			maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
			trailing = 'trailing' in options ? !!options.trailing : trailing;
		}

		function invokeFunc(time) {
			var args = lastArgs,
				thisArg = lastThis;

			lastArgs = lastThis = undefined;
			lastInvokeTime = time;
			result = func.apply(thisArg, args);
			return result;
		}

		function leadingEdge(time) {
			// Reset any `maxWait` timer.
			lastInvokeTime = time;
			// Start the timer for the trailing edge.
			timerId = setTimeout(timerExpired, wait);
			// Invoke the leading edge.
			return leading ? invokeFunc(time) : result;
		}

		function remainingWait(time) {
			var timeSinceLastCall = time - lastCallTime,
				timeSinceLastInvoke = time - lastInvokeTime,
				timeWaiting = wait - timeSinceLastCall;

			return maxing
				? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
				: timeWaiting;
		}

		function shouldInvoke(time) {
			var timeSinceLastCall = time - lastCallTime,
				timeSinceLastInvoke = time - lastInvokeTime;

			// Either this is the first call, activity has stopped and we're at the
			// trailing edge, the system time has gone backwards and we're treating
			// it as the trailing edge, or we've hit the `maxWait` limit.
			return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
				(timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
		}

		function timerExpired() {
			var time = now();
			if (shouldInvoke(time)) {
				return trailingEdge(time);
			}
			// Restart the timer.
			timerId = setTimeout(timerExpired, remainingWait(time));
		}

		function trailingEdge(time) {
			timerId = undefined;

			// Only invoke if we have `lastArgs` which means `func` has been
			// debounced at least once.
			if (trailing && lastArgs) {
				return invokeFunc(time);
			}
			lastArgs = lastThis = undefined;
			return result;
		}

		function cancel() {
			if (timerId !== undefined) {
				clearTimeout(timerId);
			}
			lastInvokeTime = 0;
			lastArgs = lastCallTime = lastThis = timerId = undefined;
		}

		function flush() {
			return timerId === undefined ? result : trailingEdge(now());
		}

		function debounced() {
			var time = now(),
				isInvoking = shouldInvoke(time);

			lastArgs = arguments;
			lastThis = this;
			lastCallTime = time;

			if (isInvoking) {
				if (timerId === undefined) {
					return leadingEdge(lastCallTime);
				}
				if (maxing) {
					// Handle invocations in a tight loop.
					clearTimeout(timerId);
					timerId = setTimeout(timerExpired, wait);
					return invokeFunc(lastCallTime);
				}
			}
			if (timerId === undefined) {
				timerId = setTimeout(timerExpired, wait);
			}
			return result;
		}
		debounced.cancel = cancel;
		debounced.flush = flush;
		return debounced;
	}

    /**
     * Defers invoking the `func` until the current call stack has cleared. Any
     * additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to defer.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.defer(function(text) {
     *   console.log(text);
     * }, 'deferred');
     * // => Logs 'deferred' after one millisecond.
     */
	var defer = baseRest(function (func, args) {
		return baseDelay(func, 1, args);
	});

    /**
     * Invokes `func` after `wait` milliseconds. Any additional arguments are
     * provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.delay(function(text) {
     *   console.log(text);
     * }, 1000, 'later');
     * // => Logs 'later' after one second.
     */
	var delay = baseRest(function (func, wait, args) {
		return baseDelay(func, toNumber(wait) || 0, args);
	});

    /**
     * Creates a function that invokes `func` with arguments reversed.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to flip arguments for.
     * @returns {Function} Returns the new flipped function.
     * @example
     *
     * var flipped = _.flip(function() {
     *   return _.toArray(arguments);
     * });
     *
     * flipped('a', 'b', 'c', 'd');
     * // => ['d', 'c', 'b', 'a']
     */
	function flip(func) {
		return createWrap(func, WRAP_FLIP_FLAG);
	}

    /**
     * Creates a function that memoizes the result of `func`. If `resolver` is
     * provided, it determines the cache key for storing the result based on the
     * arguments provided to the memoized function. By default, the first argument
     * provided to the memoized function is used as the map cache key. The `func`
     * is invoked with the `this` binding of the memoized function.
     *
     * **Note:** The cache is exposed as the `cache` property on the memoized
     * function. Its creation may be customized by replacing the `_.memoize.Cache`
     * constructor with one whose instances implement the
     * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
     * method interface of `clear`, `delete`, `get`, `has`, and `set`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to have its output memoized.
     * @param {Function} [resolver] The function to resolve the cache key.
     * @returns {Function} Returns the new memoized function.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     * var other = { 'c': 3, 'd': 4 };
     *
     * var values = _.memoize(_.values);
     * values(object);
     * // => [1, 2]
     *
     * values(other);
     * // => [3, 4]
     *
     * object.a = 2;
     * values(object);
     * // => [1, 2]
     *
     * // Modify the result cache.
     * values.cache.set(object, ['a', 'b']);
     * values(object);
     * // => ['a', 'b']
     *
     * // Replace `_.memoize.Cache`.
     * _.memoize.Cache = WeakMap;
     */
	function memoize(func, resolver) {
		if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
			throw new TypeError(FUNC_ERROR_TEXT);
		}
		var memoized = function () {
			var args = arguments,
				key = resolver ? resolver.apply(this, args) : args[0],
				cache = memoized.cache;

			if (cache.has(key)) {
				return cache.get(key);
			}
			var result = func.apply(this, args);
			memoized.cache = cache.set(key, result) || cache;
			return result;
		};
		memoized.cache = new (memoize.Cache || MapCache);
		return memoized;
	}

	// Expose `MapCache`.
	memoize.Cache = MapCache;

    /**
     * Creates a function that negates the result of the predicate `func`. The
     * `func` predicate is invoked with the `this` binding and arguments of the
     * created function.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} predicate The predicate to negate.
     * @returns {Function} Returns the new negated function.
     * @example
     *
     * function isEven(n) {
     *   return n % 2 == 0;
     * }
     *
     * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
     * // => [1, 3, 5]
     */
	function negate(predicate) {
		if (typeof predicate != 'function') {
			throw new TypeError(FUNC_ERROR_TEXT);
		}
		return function () {
			var args = arguments;
			switch (args.length) {
				case 0: return !predicate.call(this);
				case 1: return !predicate.call(this, args[0]);
				case 2: return !predicate.call(this, args[0], args[1]);
				case 3: return !predicate.call(this, args[0], args[1], args[2]);
			}
			return !predicate.apply(this, args);
		};
	}

    /**
     * Creates a function that is restricted to invoking `func` once. Repeat calls
     * to the function return the value of the first invocation. The `func` is
     * invoked with the `this` binding and arguments of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var initialize = _.once(createApplication);
     * initialize();
     * initialize();
     * // => `createApplication` is invoked once
     */
	function once(func) {
		return before(2, func);
	}

    /**
     * Creates a function that invokes `func` with its arguments transformed.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Function
     * @param {Function} func The function to wrap.
     * @param {...(Function|Function[])} [transforms=[_.identity]]
     *  The argument transforms.
     * @returns {Function} Returns the new function.
     * @example
     *
     * function doubled(n) {
     *   return n * 2;
     * }
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var func = _.overArgs(function(x, y) {
     *   return [x, y];
     * }, [square, doubled]);
     *
     * func(9, 3);
     * // => [81, 6]
     *
     * func(10, 5);
     * // => [100, 10]
     */
	var overArgs = castRest(function (func, transforms) {
		transforms = (transforms.length == 1 && isArray(transforms[0]))
			? arrayMap(transforms[0], baseUnary(getIteratee()))
			: arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));

		var funcsLength = transforms.length;
		return baseRest(function (args) {
			var index = -1,
				length = nativeMin(args.length, funcsLength);

			while (++index < length) {
				args[index] = transforms[index].call(this, args[index]);
			}
			return apply(func, this, args);
		});
	});

    /**
     * Creates a function that invokes `func` with `partials` prepended to the
     * arguments it receives. This method is like `_.bind` except it does **not**
     * alter the `this` binding.
     *
     * The `_.partial.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 0.2.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var sayHelloTo = _.partial(greet, 'hello');
     * sayHelloTo('fred');
     * // => 'hello fred'
     *
     * // Partially applied with placeholders.
     * var greetFred = _.partial(greet, _, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     */
	var partial = baseRest(function (func, partials) {
		var holders = replaceHolders(partials, getHolder(partial));
		return createWrap(func, WRAP_PARTIAL_FLAG, undefined, partials, holders);
	});

    /**
     * This method is like `_.partial` except that partially applied arguments
     * are appended to the arguments it receives.
     *
     * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var greetFred = _.partialRight(greet, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     *
     * // Partially applied with placeholders.
     * var sayHelloTo = _.partialRight(greet, 'hello', _);
     * sayHelloTo('fred');
     * // => 'hello fred'
     */
	var partialRight = baseRest(function (func, partials) {
		var holders = replaceHolders(partials, getHolder(partialRight));
		return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined, partials, holders);
	});

    /**
     * Creates a function that invokes `func` with arguments arranged according
     * to the specified `indexes` where the argument value at the first index is
     * provided as the first argument, the argument value at the second index is
     * provided as the second argument, and so on.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to rearrange arguments for.
     * @param {...(number|number[])} indexes The arranged argument indexes.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var rearged = _.rearg(function(a, b, c) {
     *   return [a, b, c];
     * }, [2, 0, 1]);
     *
     * rearged('b', 'c', 'a')
     * // => ['a', 'b', 'c']
     */
	var rearg = flatRest(function (func, indexes) {
		return createWrap(func, WRAP_REARG_FLAG, undefined, undefined, undefined, indexes);
	});

    /**
     * Creates a function that invokes `func` with the `this` binding of the
     * created function and arguments from `start` and beyond provided as
     * an array.
     *
     * **Note:** This method is based on the
     * [rest parameter](https://mdn.io/rest_parameters).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.rest(function(what, names) {
     *   return what + ' ' + _.initial(names).join(', ') +
     *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
     * });
     *
     * say('hello', 'fred', 'barney', 'pebbles');
     * // => 'hello fred, barney, & pebbles'
     */
	function rest(func, start) {
		if (typeof func != 'function') {
			throw new TypeError(FUNC_ERROR_TEXT);
		}
		start = start === undefined ? start : toInteger(start);
		return baseRest(func, start);
	}

    /**
     * Creates a function that invokes `func` with the `this` binding of the
     * create function and an array of arguments much like
     * [`Function#apply`](http://www.ecma-international.org/ecma-262/7.0/#sec-function.prototype.apply).
     *
     * **Note:** This method is based on the
     * [spread operator](https://mdn.io/spread_operator).
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Function
     * @param {Function} func The function to spread arguments over.
     * @param {number} [start=0] The start position of the spread.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.spread(function(who, what) {
     *   return who + ' says ' + what;
     * });
     *
     * say(['fred', 'hello']);
     * // => 'fred says hello'
     *
     * var numbers = Promise.all([
     *   Promise.resolve(40),
     *   Promise.resolve(36)
     * ]);
     *
     * numbers.then(_.spread(function(x, y) {
     *   return x + y;
     * }));
     * // => a Promise of 76
     */
	function spread(func, start) {
		if (typeof func != 'function') {
			throw new TypeError(FUNC_ERROR_TEXT);
		}
		start = start == null ? 0 : nativeMax(toInteger(start), 0);
		return baseRest(function (args) {
			var array = args[start],
				otherArgs = castSlice(args, 0, start);

			if (array) {
				arrayPush(otherArgs, array);
			}
			return apply(func, this, otherArgs);
		});
	}

    /**
     * Creates a throttled function that only invokes `func` at most once per
     * every `wait` milliseconds. The throttled function comes with a `cancel`
     * method to cancel delayed `func` invocations and a `flush` method to
     * immediately invoke them. Provide `options` to indicate whether `func`
     * should be invoked on the leading and/or trailing edge of the `wait`
     * timeout. The `func` is invoked with the last arguments provided to the
     * throttled function. Subsequent calls to the throttled function return the
     * result of the last `func` invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the throttled function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.throttle` and `_.debounce`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to throttle.
     * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=true]
     *  Specify invoking on the leading edge of the timeout.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new throttled function.
     * @example
     *
     * // Avoid excessively updating the position while scrolling.
     * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
     *
     * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
     * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
     * jQuery(element).on('click', throttled);
     *
     * // Cancel the trailing throttled invocation.
     * jQuery(window).on('popstate', throttled.cancel);
     */
	function throttle(func, wait, options) {
		var leading = true,
			trailing = true;

		if (typeof func != 'function') {
			throw new TypeError(FUNC_ERROR_TEXT);
		}
		if (isObject(options)) {
			leading = 'leading' in options ? !!options.leading : leading;
			trailing = 'trailing' in options ? !!options.trailing : trailing;
		}
		return debounce(func, wait, {
			'leading': leading,
			'maxWait': wait,
			'trailing': trailing
		});
	}

    /**
     * Creates a function that accepts up to one argument, ignoring any
     * additional arguments.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.unary(parseInt));
     * // => [6, 8, 10]
     */
	function unary(func) {
		return ary(func, 1);
	}

    /**
     * Creates a function that provides `value` to `wrapper` as its first
     * argument. Any additional arguments provided to the function are appended
     * to those provided to the `wrapper`. The wrapper is invoked with the `this`
     * binding of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {*} value The value to wrap.
     * @param {Function} [wrapper=identity] The wrapper function.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var p = _.wrap(_.escape, function(func, text) {
     *   return '<p>' + func(text) + '</p>';
     * });
     *
     * p('fred, barney, & pebbles');
     * // => '<p>fred, barney, &amp; pebbles</p>'
     */
	function wrap(value, wrapper) {
		return partial(castFunction(wrapper), value);
	}

	/*------------------------------------------------------------------------*/

    /**
     * Casts `value` as an array if it's not one.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Lang
     * @param {*} value The value to inspect.
     * @returns {Array} Returns the cast array.
     * @example
     *
     * _.castArray(1);
     * // => [1]
     *
     * _.castArray({ 'a': 1 });
     * // => [{ 'a': 1 }]
     *
     * _.castArray('abc');
     * // => ['abc']
     *
     * _.castArray(null);
     * // => [null]
     *
     * _.castArray(undefined);
     * // => [undefined]
     *
     * _.castArray();
     * // => []
     *
     * var array = [1, 2, 3];
     * console.log(_.castArray(array) === array);
     * // => true
     */
	function castArray() {
		if (!arguments.length) {
			return [];
		}
		var value = arguments[0];
		return isArray(value) ? value : [value];
	}

	function clone(value: any): any {
		return baseClone(value, CLONE_SYMBOLS_FLAG);
	}

	function cloneWith(value: any, customizer: Function): any {
		customizer = typeof customizer == 'function' ? customizer : undefined;
		return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
	}

	function cloneDeep(value: any): any {
		return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
	}

	function cloneDeepWith(value: any, customizer: Function): any {
		customizer = typeof customizer == 'function' ? customizer : undefined;
		return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
	}

	function conformsTo(object: any, source: any): boolean {
		return source == null || baseConformsTo(object, source, keys(source));
	}

	function eq(value: any, other: any): boolean {
		return value === other || (value !== value && other !== other);
	}

	var gt: (value: any, other: any) => boolean = createRelationalOperation(baseGt);

	var gte: (value: any, other: any) => boolean = createRelationalOperation(function (value, other) {
		return value >= other;
	});

	var isArguments: (value: any) => boolean = baseIsArguments(function () { return arguments; }()) ? baseIsArguments : function (value) {
		return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
			!propertyIsEnumerable.call(value, 'callee');
	};

	var isArray: (value: any) => boolean = Array.isArray;

	var isArrayBuffer: (value: any) => boolean = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;

	function isArrayLike(value: any): boolean {
		return value != null && isLength(value.length) && !isFunction(value);
	}

	function isArrayLikeObject(value: any): boolean {
		return isObjectLike(value) && isArrayLike(value);
	}

	function isBoolean(value: any): boolean {
		return value === true || value === false ||
			(isObjectLike(value) && baseGetTag(value) == boolTag);
	}

	var isBuffer: (value: any) => boolean = nativeIsBuffer || stubFalse;

	var isDate: (value: any) => boolean = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;

	function isElement(value: any): boolean {
		return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
	}

	function isEmpty(value: any): boolean {
		if (value == null) {
			return true;
		}
		if (isArrayLike(value) &&
			(isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
				isBuffer(value) || isTypedArray(value) || isArguments(value))) {
			return !value.length;
		}
		var tag = getTag(value);
		if (tag == mapTag || tag == setTag) {
			return !value.size;
		}
		if (isPrototype(value)) {
			return !baseKeys(value).length;
		}
		for (var key in value) {
			if (hasOwnProperty.call(value, key)) {
				return false;
			}
		}
		return true;
	}

	function isEqual(value: any, other: any): boolean {
		return baseIsEqual(value, other);
	}

    /**
     * This method is like `_.isEqual` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with up to
     * six arguments: (objValue, othValue [, index|key, object, other, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, othValue) {
     *   if (isGreeting(objValue) && isGreeting(othValue)) {
     *     return true;
     *   }
     * }
     *
     * var array = ['hello', 'goodbye'];
     * var other = ['hi', 'goodbye'];
     *
     * _.isEqualWith(array, other, customizer);
     * // => true
     */
	function isEqualWith(value, other, customizer) {
		customizer = typeof customizer == 'function' ? customizer : undefined;
		var result = customizer ? customizer(value, other) : undefined;
		return result === undefined ? baseIsEqual(value, other, undefined, customizer) : !!result;
	}

    /**
     * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
     * `SyntaxError`, `TypeError`, or `URIError` object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
     * @example
     *
     * _.isError(new Error);
     * // => true
     *
     * _.isError(Error);
     * // => false
     */
	function isError(value) {
		if (!isObjectLike(value)) {
			return false;
		}
		var tag = baseGetTag(value);
		return tag == errorTag || tag == domExcTag ||
			(typeof value.message == 'string' && typeof value.name == 'string' && !isPlainObject(value));
	}

    /**
     * Checks if `value` is a finite primitive number.
     *
     * **Note:** This method is based on
     * [`Number.isFinite`](https://mdn.io/Number/isFinite).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
     * @example
     *
     * _.isFinite(3);
     * // => true
     *
     * _.isFinite(Number.MIN_VALUE);
     * // => true
     *
     * _.isFinite(Infinity);
     * // => false
     *
     * _.isFinite('3');
     * // => false
     */
	function isFinite(value) {
		return typeof value == 'number' && nativeIsFinite(value);
	}

    /**
     * Checks if `value` is classified as a `Function` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a function, else `false`.
     * @example
     *
     * _.isFunction(_);
     * // => true
     *
     * _.isFunction(/abc/);
     * // => false
     */
	function isFunction(value) {
		if (!isObject(value)) {
			return false;
		}
		// The use of `Object#toString` avoids issues with the `typeof` operator
		// in Safari 9 which returns 'object' for typed arrays and other constructors.
		var tag = baseGetTag(value);
		return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}

    /**
     * Checks if `value` is an integer.
     *
     * **Note:** This method is based on
     * [`Number.isInteger`](https://mdn.io/Number/isInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
     * @example
     *
     * _.isInteger(3);
     * // => true
     *
     * _.isInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isInteger(Infinity);
     * // => false
     *
     * _.isInteger('3');
     * // => false
     */
	function isInteger(value) {
		return typeof value == 'number' && value == toInteger(value);
	}

    /**
     * Checks if `value` is a valid array-like length.
     *
     * **Note:** This method is loosely based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
     * @example
     *
     * _.isLength(3);
     * // => true
     *
     * _.isLength(Number.MIN_VALUE);
     * // => false
     *
     * _.isLength(Infinity);
     * // => false
     *
     * _.isLength('3');
     * // => false
     */
	function isLength(value) {
		return typeof value == 'number' &&
			value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

    /**
     * Checks if `value` is the
     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(_.noop);
     * // => true
     *
     * _.isObject(null);
     * // => false
     */
	function isObject(value) {
		var type = typeof value;
		return value != null && (type == 'object' || type == 'function');
	}

    /**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */
	function isObjectLike(value) {
		return value != null && typeof value == 'object';
	}

    /**
     * Checks if `value` is classified as a `Map` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     * @example
     *
     * _.isMap(new Map);
     * // => true
     *
     * _.isMap(new WeakMap);
     * // => false
     */
	var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

    /**
     * Performs a partial deep comparison between `object` and `source` to
     * determine if `object` contains equivalent property values.
     *
     * **Note:** This method is equivalent to `_.matches` when `source` is
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.isMatch(object, { 'b': 2 });
     * // => true
     *
     * _.isMatch(object, { 'b': 1 });
     * // => false
     */
	function isMatch(object, source) {
		return object === source || baseIsMatch(object, source, getMatchData(source));
	}

    /**
     * This method is like `_.isMatch` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with five
     * arguments: (objValue, srcValue, index|key, object, source).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, srcValue) {
     *   if (isGreeting(objValue) && isGreeting(srcValue)) {
     *     return true;
     *   }
     * }
     *
     * var object = { 'greeting': 'hello' };
     * var source = { 'greeting': 'hi' };
     *
     * _.isMatchWith(object, source, customizer);
     * // => true
     */
	function isMatchWith(object, source, customizer) {
		customizer = typeof customizer == 'function' ? customizer : undefined;
		return baseIsMatch(object, source, getMatchData(source), customizer);
	}

    /**
     * Checks if `value` is `NaN`.
     *
     * **Note:** This method is based on
     * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
     * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
     * `undefined` and other non-number values.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
     * @example
     *
     * _.isNaN(NaN);
     * // => true
     *
     * _.isNaN(new Number(NaN));
     * // => true
     *
     * isNaN(undefined);
     * // => true
     *
     * _.isNaN(undefined);
     * // => false
     */
	function isNaN(value) {
		// An `NaN` primitive is the only value that is not equal to itself.
		// Perform the `toStringTag` check first to avoid errors with some
		// ActiveX objects in IE.
		return isNumber(value) && value != +value;
	}

    /**
     * Checks if `value` is a pristine native function.
     *
     * **Note:** This method can't reliably detect native functions in the presence
     * of the core-js package because core-js circumvents this kind of detection.
     * Despite multiple requests, the core-js maintainer has made it clear: any
     * attempt to fix the detection will be obstructed. As a result, we're left
     * with little choice but to throw an error. Unfortunately, this also affects
     * packages, like [babel-polyfill](https://www.npmjs.com/package/babel-polyfill),
     * which rely on core-js.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     * @example
     *
     * _.isNative(Array.prototype.push);
     * // => true
     *
     * _.isNative(_);
     * // => false
     */
	function isNative(value) {
		if (isMaskable(value)) {
			throw new Error(CORE_ERROR_TEXT);
		}
		return baseIsNative(value);
	}

    /**
     * Checks if `value` is `null`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
     * @example
     *
     * _.isNull(null);
     * // => true
     *
     * _.isNull(void 0);
     * // => false
     */
	function isNull(value) {
		return value === null;
	}

    /**
     * Checks if `value` is `null` or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
     * @example
     *
     * _.isNil(null);
     * // => true
     *
     * _.isNil(void 0);
     * // => true
     *
     * _.isNil(NaN);
     * // => false
     */
	function isNil(value) {
		return value == null;
	}

    /**
     * Checks if `value` is classified as a `Number` primitive or object.
     *
     * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
     * classified as numbers, use the `_.isFinite` method.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a number, else `false`.
     * @example
     *
     * _.isNumber(3);
     * // => true
     *
     * _.isNumber(Number.MIN_VALUE);
     * // => true
     *
     * _.isNumber(Infinity);
     * // => true
     *
     * _.isNumber('3');
     * // => false
     */
	function isNumber(value) {
		return typeof value == 'number' ||
			(isObjectLike(value) && baseGetTag(value) == numberTag);
	}

    /**
     * Checks if `value` is a plain object, that is, an object created by the
     * `Object` constructor or one with a `[[Prototype]]` of `null`.
     *
     * @static
     * @memberOf _
     * @since 0.8.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * _.isPlainObject(new Foo);
     * // => false
     *
     * _.isPlainObject([1, 2, 3]);
     * // => false
     *
     * _.isPlainObject({ 'x': 0, 'y': 0 });
     * // => true
     *
     * _.isPlainObject(Object.create(null));
     * // => true
     */
	function isPlainObject(value) {
		if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
			return false;
		}
		var proto = getPrototype(value);
		if (proto === null) {
			return true;
		}
		var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
		return typeof Ctor == 'function' && Ctor instanceof Ctor &&
			funcToString.call(Ctor) == objectCtorString;
	}

    /**
     * Checks if `value` is classified as a `RegExp` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     * @example
     *
     * _.isRegExp(/abc/);
     * // => true
     *
     * _.isRegExp('/abc/');
     * // => false
     */
	var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;

    /**
     * Checks if `value` is a safe integer. An integer is safe if it's an IEEE-754
     * double precision number which isn't the result of a rounded unsafe integer.
     *
     * **Note:** This method is based on
     * [`Number.isSafeInteger`](https://mdn.io/Number/isSafeInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a safe integer, else `false`.
     * @example
     *
     * _.isSafeInteger(3);
     * // => true
     *
     * _.isSafeInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isSafeInteger(Infinity);
     * // => false
     *
     * _.isSafeInteger('3');
     * // => false
     */
	function isSafeInteger(value) {
		return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
	}

    /**
     * Checks if `value` is classified as a `Set` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     * @example
     *
     * _.isSet(new Set);
     * // => true
     *
     * _.isSet(new WeakSet);
     * // => false
     */
	var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

    /**
     * Checks if `value` is classified as a `String` primitive or object.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a string, else `false`.
     * @example
     *
     * _.isString('abc');
     * // => true
     *
     * _.isString(1);
     * // => false
     */
	function isString(value) {
		return typeof value == 'string' ||
			(!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
	}

    /**
     * Checks if `value` is classified as a `Symbol` primitive or object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
     * @example
     *
     * _.isSymbol(Symbol.iterator);
     * // => true
     *
     * _.isSymbol('abc');
     * // => false
     */
	function isSymbol(value) {
		return typeof value == 'symbol' ||
			(isObjectLike(value) && baseGetTag(value) == symbolTag);
	}

    /**
     * Checks if `value` is classified as a typed array.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     * @example
     *
     * _.isTypedArray(new Uint8Array);
     * // => true
     *
     * _.isTypedArray([]);
     * // => false
     */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

    /**
     * Checks if `value` is `undefined`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
     * @example
     *
     * _.isUndefined(void 0);
     * // => true
     *
     * _.isUndefined(null);
     * // => false
     */
	function isUndefined(value) {
		return value === undefined;
	}

    /**
     * Checks if `value` is classified as a `WeakMap` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
     * @example
     *
     * _.isWeakMap(new WeakMap);
     * // => true
     *
     * _.isWeakMap(new Map);
     * // => false
     */
	function isWeakMap(value) {
		return isObjectLike(value) && getTag(value) == weakMapTag;
	}

    /**
     * Checks if `value` is classified as a `WeakSet` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak set, else `false`.
     * @example
     *
     * _.isWeakSet(new WeakSet);
     * // => true
     *
     * _.isWeakSet(new Set);
     * // => false
     */
	function isWeakSet(value) {
		return isObjectLike(value) && baseGetTag(value) == weakSetTag;
	}

    /**
     * Checks if `value` is less than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     * @see _.gt
     * @example
     *
     * _.lt(1, 3);
     * // => true
     *
     * _.lt(3, 3);
     * // => false
     *
     * _.lt(3, 1);
     * // => false
     */
	var lt = createRelationalOperation(baseLt);

    /**
     * Checks if `value` is less than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than or equal to
     *  `other`, else `false`.
     * @see _.gte
     * @example
     *
     * _.lte(1, 3);
     * // => true
     *
     * _.lte(3, 3);
     * // => true
     *
     * _.lte(3, 1);
     * // => false
     */
	var lte = createRelationalOperation(function (value, other) {
		return value <= other;
	});

    /**
     * Converts `value` to an array.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Array} Returns the converted array.
     * @example
     *
     * _.toArray({ 'a': 1, 'b': 2 });
     * // => [1, 2]
     *
     * _.toArray('abc');
     * // => ['a', 'b', 'c']
     *
     * _.toArray(1);
     * // => []
     *
     * _.toArray(null);
     * // => []
     */
	function toArray(value) {
		if (!value) {
			return [];
		}
		if (isArrayLike(value)) {
			return isString(value) ? stringToArray(value) : copyArray(value);
		}
		if (symIterator && value[symIterator]) {
			return iteratorToArray(value[symIterator]());
		}
		var tag = getTag(value),
			func = tag == mapTag ? mapToArray : (tag == setTag ? setToArray : values);

		return func(value);
	}

    /**
     * Converts `value` to a finite number.
     *
     * @static
     * @memberOf _
     * @since 4.12.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted number.
     * @example
     *
     * _.toFinite(3.2);
     * // => 3.2
     *
     * _.toFinite(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toFinite(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toFinite('3.2');
     * // => 3.2
     */
	function toFinite(value) {
		if (!value) {
			return value === 0 ? value : 0;
		}
		value = toNumber(value);
		if (value === INFINITY || value === -INFINITY) {
			var sign = (value < 0 ? -1 : 1);
			return sign * MAX_INTEGER;
		}
		return value === value ? value : 0;
	}

    /**
     * Converts `value` to an integer.
     *
     * **Note:** This method is loosely based on
     * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toInteger(3.2);
     * // => 3
     *
     * _.toInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toInteger(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toInteger('3.2');
     * // => 3
     */
	function toInteger(value) {
		var result = toFinite(value),
			remainder = result % 1;

		return result === result ? (remainder ? result - remainder : result) : 0;
	}

    /**
     * Converts `value` to an integer suitable for use as the length of an
     * array-like object.
     *
     * **Note:** This method is based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toLength(3.2);
     * // => 3
     *
     * _.toLength(Number.MIN_VALUE);
     * // => 0
     *
     * _.toLength(Infinity);
     * // => 4294967295
     *
     * _.toLength('3.2');
     * // => 3
     */
	function toLength(value) {
		return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
	}

    /**
     * Converts `value` to a number.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     * @example
     *
     * _.toNumber(3.2);
     * // => 3.2
     *
     * _.toNumber(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toNumber(Infinity);
     * // => Infinity
     *
     * _.toNumber('3.2');
     * // => 3.2
     */
	function toNumber(value) {
		if (typeof value == 'number') {
			return value;
		}
		if (isSymbol(value)) {
			return NAN;
		}
		if (isObject(value)) {
			var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
			value = isObject(other) ? (other + '') : other;
		}
		if (typeof value != 'string') {
			return value === 0 ? value : +value;
		}
		value = value.replace(reTrim, '');
		var isBinary = reIsBinary.test(value);
		return (isBinary || reIsOctal.test(value))
			? freeParseInt(value.slice(2), isBinary ? 2 : 8)
			: (reIsBadHex.test(value) ? NAN : +value);
	}

    /**
     * Converts `value` to a plain object flattening inherited enumerable string
     * keyed properties of `value` to own properties of the plain object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Object} Returns the converted plain object.
     * @example
     *
     * function Foo() {
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.assign({ 'a': 1 }, new Foo);
     * // => { 'a': 1, 'b': 2 }
     *
     * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
     * // => { 'a': 1, 'b': 2, 'c': 3 }
     */
	function toPlainObject(value) {
		return copyObject(value, keysIn(value));
	}

    /**
     * Converts `value` to a safe integer. A safe integer can be compared and
     * represented correctly.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toSafeInteger(3.2);
     * // => 3
     *
     * _.toSafeInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toSafeInteger(Infinity);
     * // => 9007199254740991
     *
     * _.toSafeInteger('3.2');
     * // => 3
     */
	function toSafeInteger(value) {
		return value
			? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER)
			: (value === 0 ? value : 0);
	}

	function toString(value: any): string {
		return value == null ? '' : baseToString(value);
	}

	var assign = createAssigner(function (object, source) {
		if (isPrototype(source) || isArrayLike(source)) {
			copyObject(source, keys(source), object);
			return;
		}
		for (var key in source) {
			if (hasOwnProperty.call(source, key)) {
				assignValue(object, key, source[key]);
			}
		}
	});

	var assignIn = createAssigner(function (object, source) {
		copyObject(source, keysIn(source), object);
	});

	var assignInWith = createAssigner(function (object, source, srcIndex, customizer) {
		copyObject(source, keysIn(source), object, customizer);
	});

	var assignWith = createAssigner(function (object, source, srcIndex, customizer) {
		copyObject(source, keys(source), object, customizer);
	});

	var at = flatRest(baseAt);

	function create(prototype: any, properties: any): any {
		var result = baseCreate(prototype);
		return properties == null ? result : baseAssign(result, properties);
	}

	var defaults = baseRest(function (object, sources) {
		object = Object(object);

		var index = -1;
		var length = sources.length;
		var guard = length > 2 ? sources[2] : undefined;

		if (guard && isIterateeCall(sources[0], sources[1], guard)) {
			length = 1;
		}

		while (++index < length) {
			var source = sources[index];
			var props = keysIn(source);
			var propsIndex = -1;
			var propsLength = props.length;

			while (++propsIndex < propsLength) {
				var key = props[propsIndex];
				var value = object[key];

				if (value === undefined ||
					(eq(value, objectProto[key]) && !hasOwnProperty.call(object, key))) {
					object[key] = source[key];
				}
			}
		}

		return object;
	});

	var defaultsDeep = baseRest(function (args) {
		args.push(undefined, customDefaultsMerge);
		return apply(mergeWith, undefined, args);
	});

	function findKey(object: any, predicate: Function): string {
		return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
	}

	function findLastKey(object: any, predicate: Function): string {
		return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
	}

	function forIn(object: any, iteratee: Function): any {
		return object == null
			? object
			: baseFor(object, getIteratee(iteratee, 3), keysIn);
	}

	function forInRight(object: any, iteratee: Function): any {
		return object == null
			? object
			: baseForRight(object, getIteratee(iteratee, 3), keysIn);
	}

	function forOwn(object: any, iteratee: Function): any {
		return object && baseForOwn(object, getIteratee(iteratee, 3));
	}

	function forOwnRight(object: any, iteratee: Function): any {
		return object && baseForOwnRight(object, getIteratee(iteratee, 3));
	}

	function functions(object: any): string[] {
		return object == null ? [] : baseFunctions(object, keys(object));
	}

	function functionsIn(object: any): string[] {
		return object == null ? [] : baseFunctions(object, keysIn(object));
	}

	function get(object: any, path: string[] | string, defaultValue?: any): any {
		var result = object == null ? undefined : baseGet(object, path);
		return result === undefined ? defaultValue : result;
	}

	function has(object: any, path: string[] | string): boolean {
		return object != null && hasPath(object, path, baseHas);
	}

	function hasIn(object: any, path: string[] | string): boolean {
		return object != null && hasPath(object, path, baseHasIn);
	}

	var invert = createInverter(function (result, value, key) {
		if (value != null &&
			typeof value.toString != 'function') {
			value = nativeObjectToString.call(value);
		}

		result[value] = key;
	}, constant(identity));

	var invertBy = createInverter(function (result, value, key) {
		if (value != null &&
			typeof value.toString != 'function') {
			value = nativeObjectToString.call(value);
		}

		if (hasOwnProperty.call(result, value)) {
			result[value].push(key);
		} else {
			result[value] = [key];
		}
	}, getIteratee);

	var invoke = baseRest(baseInvoke);

	function keys(object: any): string[] {
		return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}

	function keysIn(object: any): string[] {
		return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
	}

	function mapKeys(object: any, iteratee: Function): any {
		var result = {};
		iteratee = getIteratee(iteratee, 3);

		baseForOwn(object, function (value, key, object) {
			baseAssignValue(result, iteratee(value, key, object), value);
		});
		return result;
	}

	function mapValues(object: any, iteratee: Function): any {
		var result = {};
		iteratee = getIteratee(iteratee, 3);

		baseForOwn(object, function (value, key, object) {
			baseAssignValue(result, key, iteratee(value, key, object));
		});
		return result;
	}

	var merge = createAssigner(function (object, source, srcIndex) {
		baseMerge(object, source, srcIndex);
	});

	var mergeWith = createAssigner(function (object, source, srcIndex, customizer) {
		baseMerge(object, source, srcIndex, customizer);
	});

	var omit = flatRest(function (object, paths) {
		var result = {};
		if (object == null) {
			return result;
		}
		var isDeep = false;
		paths = arrayMap(paths, function (path) {
			path = castPath(path, object);
			isDeep || (isDeep = path.length > 1);
			return path;
		});
		copyObject(object, getAllKeysIn(object), result);
		if (isDeep) {
			result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
		}
		var length = paths.length;
		while (length--) {
			baseUnset(result, paths[length]);
		}
		return result;
	});

	function omitBy(object: any, predicate: Function): any {
		return pickBy(object, negate(getIteratee(predicate)));
	}

	var pick = flatRest(function (object, paths) {
		return object == null ? {} : basePick(object, paths);
	});

	function pickBy(object: any, predicate: Function): any {
		if (object == null) {
			return {};
		}
		var props = arrayMap(getAllKeysIn(object), function (prop) {
			return [prop];
		});
		predicate = getIteratee(predicate);
		return basePickBy(object, props, function (value, path) {
			return predicate(value, path[0]);
		});
	}

	function result(object: any, path: string[] | string, defaultValue: any): any {
		path = castPath(path, object);

		var index = -1,
			length = path.length;

		// Ensure the loop is entered when path is empty.
		if (!length) {
			length = 1;
			object = undefined;
		}
		while (++index < length) {
			var value = object == null ? undefined : object[toKey(path[index])];
			if (value === undefined) {
				index = length;
				value = defaultValue;
			}
			object = isFunction(value) ? value.call(object) : value;
		}
		return object;
	}

	function set(object: any, path: string[] | string, value: any): any {
		return object == null ? object : baseSet(object, path, value);
	}

	function setWith(object: any, path: string[] | string, value: any, customizer: Function): any {
		customizer = typeof customizer == 'function' ? customizer : undefined;
		return object == null ? object : baseSet(object, path, value, customizer);
	}

	var toPairs = createToPairs(keys);
	var toPairsIn = createToPairs(keysIn);

	function transform(object: any, iteratee: Function, accumulator: any): any {
		var isArr = isArray(object),
			isArrLike = isArr || isBuffer(object) || isTypedArray(object);

		iteratee = getIteratee(iteratee, 4);
		if (accumulator == null) {
			var Ctor = object && object.constructor;
			if (isArrLike) {
				accumulator = isArr ? new Ctor : [];
			}
			else if (isObject(object)) {
				accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
			}
			else {
				accumulator = {};
			}
		}
		(isArrLike ? arrayEach : baseForOwn)(object, function (value, index, object) {
			return iteratee(accumulator, value, index, object);
		});
		return accumulator;
	}

	function unset(object: any, path: string[] | string): boolean {
		return object == null ? true : baseUnset(object, path);
	}

	function update(object: any, path: string[] | string, updater: Function): any {
		return object == null ? object : baseUpdate(object, path, castFunction(updater));
	}

	function updateWith(object: any, path: string | string[], updater: Function, customizer: Function): any {
		customizer = typeof customizer == 'function' ? customizer : undefined;
		return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
	}

	function values(object: any): any[] {
		return object == null ? [] : baseValues(object, keys(object));
	}

	function valuesIn(object: any): any[] {
		return object == null ? [] : baseValues(object, keysIn(object));
	}

	function clamp(number: number, lower: number, upper: number): number {
		if (upper === undefined) {
			upper = lower;
			lower = undefined;
		}
		if (upper !== undefined) {
			upper = toNumber(upper);
			upper = upper === upper ? upper : 0;
		}
		if (lower !== undefined) {
			lower = toNumber(lower);
			lower = lower === lower ? lower : 0;
		}
		return baseClamp(toNumber(number), lower, upper);
	}

	function inRange(number: number, start: number, end: number): boolean {
		start = toFinite(start);
		if (end === undefined) {
			end = start;
			start = 0;
		} else {
			end = toFinite(end);
		}
		number = toNumber(number);
		return baseInRange(number, start, end);
	}

	function random(lower: number, upper: number, floating: boolean): number {
		if (floating && typeof floating != 'boolean' && isIterateeCall(lower, upper, floating)) {
			upper = floating = undefined;
		}
		if (floating === undefined) {
			if (typeof upper == 'boolean') {
				floating = upper;
				upper = undefined;
			}
			else if (typeof lower == 'boolean') {
				floating = lower;
				lower = undefined;
			}
		}
		if (lower === undefined && upper === undefined) {
			lower = 0;
			upper = 1;
		}
		else {
			lower = toFinite(lower);
			if (upper === undefined) {
				upper = lower;
				lower = 0;
			} else {
				upper = toFinite(upper);
			}
		}
		if (lower > upper) {
			var temp = lower;
			lower = upper;
			upper = temp;
		}
		if (floating || lower % 1 || upper % 1) {
			var rand = nativeRandom();
			return nativeMin(lower + (rand * (upper - lower + freeParseFloat('1e-' + ((rand + '').length - 1)))), upper);
		}
		return baseRandom(lower, upper);
	}

	var camelCase = createCompounder(function (result, word, index) {
		word = word.toLowerCase();
		return result + (index ? capitalize(word) : word);
	});

	function capitalize(string: string): string {
		return upperFirst(toString(string).toLowerCase());
	}

	function deburr(string: string): string {
		string = toString(string);
		return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
	}

	function endsWith(string: string, target: string, position: number): boolean {
		string = toString(string);
		target = baseToString(target);

		var length = string.length;
		position = position === undefined
			? length
			: baseClamp(toInteger(position), 0, length);

		var end = position;
		position -= target.length;
		return position >= 0 && string.slice(position, end) == target;
	}

	function escape(string: string): string {
		string = toString(string);
		return (string && reHasUnescapedHtml.test(string))
			? string.replace(reUnescapedHtml, escapeHtmlChar)
			: string;
	}

	function escapeRegExp(string: string): string {
		string = toString(string);
		return (string && reHasRegExpChar.test(string))
			? string.replace(reRegExpChar, '\\$&')
			: string;
	}

	var kebabCase = createCompounder(function (result, word, index) {
		return result + (index ? '-' : '') + word.toLowerCase();
	});

	var lowerCase = createCompounder(function (result, word, index) {
		return result + (index ? ' ' : '') + word.toLowerCase();
	});

	var lowerFirst = createCaseFirst('toLowerCase');

	function pad(string: string, length: number, chars: string): string {
		string = toString(string);
		length = toInteger(length);

		var strLength = length ? stringSize(string) : 0;
		if (!length || strLength >= length) {
			return string;
		}
		var mid = (length - strLength) / 2;
		return (
			createPadding(nativeFloor(mid), chars) +
			string +
			createPadding(nativeCeil(mid), chars)
		);
	}

	function padEnd(string: string, length: number, chars: string): string {
		string = toString(string);
		length = toInteger(length);

		var strLength = length ? stringSize(string) : 0;
		return (length && strLength < length)
			? (string + createPadding(length - strLength, chars))
			: string;
	}

	function padStart(string: string, length: number, chars: string): string {
		string = toString(string);
		length = toInteger(length);

		var strLength = length ? stringSize(string) : 0;
		return (length && strLength < length)
			? (createPadding(length - strLength, chars) + string)
			: string;
	}

	function parseInt(string: string, radix: number, guard: any): number {
		if (guard || radix == null) {
			radix = 0;
		} else if (radix) {
			radix = +radix;
		}
		return nativeParseInt(toString(string).replace(reTrimStart, ''), radix || 0);
	}

	function repeat(string: string, n: number, guard: any): string {
		if ((guard ? isIterateeCall(string, n, guard) : n === undefined)) {
			n = 1;
		} else {
			n = toInteger(n);
		}
		return baseRepeat(toString(string), n);
	}

	function replace(source?: string, pattern?: string | RegExp, replacement?: string | Function): string {
		var args = arguments,
			string = toString(source);

		return args.length < 3 ? string : string.replace(pattern, replacement);
	}

	var snakeCase = createCompounder(function (result, word, index) {
		return result + (index ? '_' : '') + word.toLowerCase();
	});

	function split(string: string, separator: string | RegExp, limit: number): string[] {
		if (limit && typeof limit != 'number' && isIterateeCall(string, separator, limit)) {
			separator = limit = undefined;
		}
		limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0;
		if (!limit) {
			return [];
		}
		string = toString(string);
		if (string && (
			typeof separator == 'string' ||
			(separator != null && !isRegExp(separator))
		)) {
			separator = baseToString(separator);
			if (!separator && hasUnicode(string)) {
				return castSlice(stringToArray(string), 0, limit);
			}
		}
		return string.split(separator, limit);
	}

	var startCase = createCompounder(function (result, word, index) {
		return result + (index ? ' ' : '') + upperFirst(word);
	});

	function startsWith(string: string, target: string, position: number): boolean {
		string = toString(string);
		position = position == null
			? 0
			: baseClamp(toInteger(position), 0, string.length);

		target = baseToString(target);
		return string.slice(position, position + target.length) == target;
	}

	function template(string: string, options: any, guard: any): Function {
		// Based on John Resig's `tmpl` implementation
		// (http://ejohn.org/blog/javascript-micro-templating/)
		// and Laura Doktorova's doT.js (https://github.com/olado/doT).
		var settings = lodash.templateSettings;

		if (guard && isIterateeCall(string, options, guard)) {
			options = undefined;
		}
		string = toString(string);
		options = assignInWith({}, options, settings, customDefaultsAssignIn);

		var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn),
			importsKeys = keys(imports),
			importsValues = baseValues(imports, importsKeys);

		var isEscaping,
			isEvaluating,
			index = 0,
			interpolate = options.interpolate || reNoMatch,
			source = "__p += '";

		// Compile the regexp to match each delimiter.
		var reDelimiters = RegExp(
			(options.escape || reNoMatch).source + '|' +
			interpolate.source + '|' +
			(interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' +
			(options.evaluate || reNoMatch).source + '|$'
			, 'g');

		// Use a sourceURL for easier debugging.
		// The sourceURL gets injected into the source that's eval-ed, so be careful
		// with lookup (in case of e.g. prototype pollution), and strip newlines if any.
		// A newline wouldn't be a valid sourceURL anyway, and it'd enable code injection.
		var sourceURL = '//# sourceURL=' +
			(hasOwnProperty.call(options, 'sourceURL')
				? (options.sourceURL + '').replace(/[\r\n]/g, ' ')
				: ('lodash.templateSources[' + (++templateCounter) + ']')
			) + '\n';

		string.replace(reDelimiters, function (match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
			interpolateValue || (interpolateValue = esTemplateValue);

			// Escape characters that can't be included in string literals.
			source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);

			// Replace delimiters with snippets.
			if (escapeValue) {
				isEscaping = true;
				source += "' +\n__e(" + escapeValue + ") +\n'";
			}
			if (evaluateValue) {
				isEvaluating = true;
				source += "';\n" + evaluateValue + ";\n__p += '";
			}
			if (interpolateValue) {
				source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
			}
			index = offset + match.length;

			// The JS engine embedded in Adobe products needs `match` returned in
			// order to produce the correct `offset` value.
			return match;
		});

		source += "';\n";

		// If `variable` is not specified wrap a with-statement around the generated
		// code to add the data object to the top of the scope chain.
		// Like with sourceURL, we take care to not check the option's prototype,
		// as this configuration is a code injection vector.
		var variable = hasOwnProperty.call(options, 'variable') && options.variable;
		if (!variable) {
			source = 'with (obj) {\n' + source + '\n}\n';
		}
		// Cleanup code by stripping empty strings.
		source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source)
			.replace(reEmptyStringMiddle, '$1')
			.replace(reEmptyStringTrailing, '$1;');

		// Frame code as the function body.
		source = 'function(' + (variable || 'obj') + ') {\n' +
			(variable
				? ''
				: 'obj || (obj = {});\n'
			) +
			"var __t, __p = ''" +
			(isEscaping
				? ', __e = _.escape'
				: ''
			) +
			(isEvaluating
				? ', __j = Array.prototype.join;\n' +
				"function print() { __p += __j.call(arguments, '') }\n"
				: ';\n'
			) +
			source +
			'return __p\n}';

		var result = attempt(function () {
			return Function(importsKeys, sourceURL + 'return ' + source)
				.apply(undefined, importsValues);
		});

		// Provide the compiled function's source by its `toString` method or
		// the `source` property as a convenience for inlining compiled templates.
		result.source = source;
		if (isError(result)) {
			throw result;
		}
		return result;
	}

	function toLower(value: string): string {
		return toString(value).toLowerCase();
	}

	function toUpper(value: string): string {
		return toString(value).toUpperCase();
	}

	function trim(string: string, chars: string, guard: any): string {
		string = toString(string);
		if (string && (guard || chars === undefined)) {
			return string.replace(reTrim, '');
		}
		if (!string || !(chars = baseToString(chars))) {
			return string;
		}
		var strSymbols = stringToArray(string),
			chrSymbols = stringToArray(chars),
			start = charsStartIndex(strSymbols, chrSymbols),
			end = charsEndIndex(strSymbols, chrSymbols) + 1;

		return castSlice(strSymbols, start, end).join('');
	}

	function trimEnd(string: string, chars: string, guard: any): string {
		string = toString(string);
		if (string && (guard || chars === undefined)) {
			return string.replace(reTrimEnd, '');
		}
		if (!string || !(chars = baseToString(chars))) {
			return string;
		}
		var strSymbols = stringToArray(string),
			end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;

		return castSlice(strSymbols, 0, end).join('');
	}

	function trimStart(string: string, chars: string, guard: any): string {
		string = toString(string);
		if (string && (guard || chars === undefined)) {
			return string.replace(reTrimStart, '');
		}
		if (!string || !(chars = baseToString(chars))) {
			return string;
		}
		var strSymbols = stringToArray(string),
			start = charsStartIndex(strSymbols, stringToArray(chars));

		return castSlice(strSymbols, start).join('');
	}

	function truncate(string: string, options: any): string {
		var length = DEFAULT_TRUNC_LENGTH,
			omission = DEFAULT_TRUNC_OMISSION;

		if (isObject(options)) {
			var separator = 'separator' in options ? options.separator : separator;
			length = 'length' in options ? toInteger(options.length) : length;
			omission = 'omission' in options ? baseToString(options.omission) : omission;
		}
		string = toString(string);

		var strLength = string.length;
		if (hasUnicode(string)) {
			var strSymbols = stringToArray(string);
			strLength = strSymbols.length;
		}
		if (length >= strLength) {
			return string;
		}
		var end = length - stringSize(omission);
		if (end < 1) {
			return omission;
		}
		var result = strSymbols
			? castSlice(strSymbols, 0, end).join('')
			: string.slice(0, end);

		if (separator === undefined) {
			return result + omission;
		}
		if (strSymbols) {
			end += (result.length - end);
		}
		if (isRegExp(separator)) {
			if (string.slice(end).search(separator)) {
				var match,
					substring = result;

				if (!separator.global) {
					separator = RegExp(separator.source, toString(reFlags.exec(separator)) + 'g');
				}
				separator.lastIndex = 0;
				while ((match = separator.exec(substring))) {
					var newEnd = match.index;
				}
				result = result.slice(0, newEnd === undefined ? end : newEnd);
			}
		} else if (string.indexOf(baseToString(separator), end) != end) {
			var index = result.lastIndexOf(separator);
			if (index > -1) {
				result = result.slice(0, index);
			}
		}
		return result + omission;
	}

	function unescape(string: string): string {
		string = toString(string);
		return (string && reHasEscapedHtml.test(string))
			? string.replace(reEscapedHtml, unescapeHtmlChar)
			: string;
	}

	var upperCase = createCompounder(function (result, word, index) {
		return result + (index ? ' ' : '') + word.toUpperCase();
	});

	var upperFirst = createCaseFirst('toUpperCase');

	function words(string: string, pattern: string | RegExp, guard: any): string[] {
		string = toString(string);
		pattern = guard ? undefined : pattern;

		if (pattern === undefined) {
			return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
		}
		return string.match(pattern) || [];
	}

	var attempt = baseRest(function (func, args) {
		try {
			return apply(func, undefined, args);
		} catch (e) {
			return isError(e) ? e : new Error(e);
		}
	});

	var bindAll = flatRest(function (object, methodNames) {
		arrayEach(methodNames, function (key) {
			key = toKey(key);
			baseAssignValue(object, key, bind(object[key], object));
		});
		return object;
	});

	function cond(pairs: any[]): Function {
		var length = pairs == null ? 0 : pairs.length,
			toIteratee = getIteratee();

		pairs = !length ? [] : arrayMap(pairs, function (pair) {
			if (typeof pair[1] != 'function') {
				throw new TypeError(FUNC_ERROR_TEXT);
			}
			return [toIteratee(pair[0]), pair[1]];
		});

		return baseRest(function (args) {
			var index = -1;
			while (++index < length) {
				var pair = pairs[index];
				if (apply(pair[0], this, args)) {
					return apply(pair[1], this, args);
				}
			}
		});
	}

	function conforms(source: any): Function {
		return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
	}

	function constant(value: any): Function {
		return function () {
			return value;
		};
	}

	function defaultTo(value: any, defaultValue: any): any {
		return (value == null || value !== value) ? defaultValue : value;
	}

	var flow = createFlow();

	var flowRight = createFlow(true);

	function identity(value: any): any {
		return value;
	}

	function iteratee(func: any): Function {
		return baseIteratee(typeof func == 'function' ? func : baseClone(func, CLONE_DEEP_FLAG));
	}

	function matches(source: any): Function {
		return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
	}

	function matchesProperty(path: string | string[], srcValue: any): Function {
		return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
	}

	var method = baseRest(function (path, args) {
		return function (object) {
			return baseInvoke(object, path, args);
		};
	});

	var methodOf = baseRest(function (object, args) {
		return function (path) {
			return baseInvoke(object, path, args);
		};
	});

	function mixin(object: any, source: any, options: any): Function | any {
		var props = keys(source),
			methodNames = baseFunctions(source, props);

		if (options == null &&
			!(isObject(source) && (methodNames.length || !props.length))) {
			options = source;
			source = object;
			object = this;
			methodNames = baseFunctions(source, keys(source));
		}
		var chain = !(isObject(options) && 'chain' in options) || !!options.chain,
			isFunc = isFunction(object);

		arrayEach(methodNames, function (methodName) {
			var func = source[methodName];
			object[methodName] = func;
			if (isFunc) {
				object.prototype[methodName] = function () {
					var chainAll = this.__chain__;
					if (chain || chainAll) {
						var result = object(this.__wrapped__),
							actions = result.__actions__ = copyArray(this.__actions__);

						actions.push({ 'func': func, 'args': arguments, 'thisArg': object });
						result.__chain__ = chainAll;
						return result;
					}
					return func.apply(object, arrayPush([this.value()], arguments));
				};
			}
		});

		return object;
	}

	function noConflict(): Function {
		if (root._ === this) {
			root._ = oldDash;
		}
		return this;
	}

	function noop(): void {
		// No operation performed.
	}

	function nthArg(n: number): Function {
		n = toInteger(n);
		return baseRest(function (args) {
			return baseNth(args, n);
		});
	}

	var over = createOver(arrayMap);
	var overEvery = createOver(arrayEvery);
	var overSome = createOver(arraySome);

	function property(path: any[] | string): Function {
		return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
	}

	function propertyOf(object: any): Function {
		return function (path) {
			return object == null ? undefined : baseGet(object, path);
		};
	}

	var range = createRange();
	var rangeRight = createRange(true);

	function stubArray(): any[] {
		return [];
	}

	function stubFalse(): boolean {
		return false;
	}

	function stubObject(): any {
		return {};
	}

	function stubString(): string {
		return '';
	}

	function stubTrue(): boolean {
		return true;
	}

	function times(n: number, iteratee: Function): any[] {
		n = toInteger(n);
		if (n < 1 || n > MAX_SAFE_INTEGER) {
			return [];
		}
		var index = MAX_ARRAY_LENGTH,
			length = nativeMin(n, MAX_ARRAY_LENGTH);

		iteratee = getIteratee(iteratee);
		n -= MAX_ARRAY_LENGTH;

		var result = baseTimes(length, iteratee);
		while (++index < n) {
			iteratee(index);
		}
		return result;
	}

	function toPath(value: any): any[] {
		if (isArray(value)) {
			return arrayMap(value, toKey);
		}
		return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
	}

	function uniqueId(prefix: string): string {
		var id = ++idCounter;
		return toString(prefix) + id;
	}

	var add = createMathOperation(function (augend, addend) {
		return augend + addend;
	}, 0);

	var ceil = createRound('ceil');

	var divide = createMathOperation(function (dividend, divisor) {
		return dividend / divisor;
	}, 1);

	var floor = createRound('floor');

	function max(array: any[]): any {
		return (array && array.length)
			? baseExtremum(array, identity, baseGt)
			: undefined;
	}

	function maxBy(array: any[], iteratee: Function): any {
		return (array && array.length)
			? baseExtremum(array, getIteratee(iteratee, 2), baseGt)
			: undefined;
	}

	function mean(array: any[]): number {
		return baseMean(array, identity);
	}

	function meanBy(array: any[], iteratee: Function): number {
		return baseMean(array, getIteratee(iteratee, 2));
	}

	function min(array: any[]): any {
		return (array && array.length)
			? baseExtremum(array, identity, baseLt)
			: undefined;
	}

	function minBy(array: any[], iteratee: Function): any {
		return (array && array.length)
			? baseExtremum(array, getIteratee(iteratee, 2), baseLt)
			: undefined;
	}

	var multiply = createMathOperation(function (multiplier, multiplicand) {
		return multiplier * multiplicand;
	}, 1);

	var round = createRound('round');

	var subtract = createMathOperation(function (minuend, subtrahend) {
		return minuend - subtrahend;
	}, 0);

	function sum(array: any[]): number {
		return (array && array.length)
			? baseSum(array, identity)
			: 0;
	}

	function sumBy(array: any[], iteratee: Function): number {
		return (array && array.length)
			? baseSum(array, getIteratee(iteratee, 2))
			: 0;
	}

	lodash.after = after;
	lodash.ary = ary;
	lodash.assign = assign;
	lodash.assignIn = assignIn;
	lodash.assignInWith = assignInWith;
	lodash.assignWith = assignWith;
	lodash.at = at;
	lodash.before = before;
	lodash.bind = bind;
	lodash.bindAll = bindAll;
	lodash.bindKey = bindKey;
	lodash.castArray = castArray;
	lodash.chain = chain;
	lodash.chunk = chunk;
	lodash.compact = compact;
	lodash.concat = concat;
	lodash.cond = cond;
	lodash.conforms = conforms;
	lodash.constant = constant;
	lodash.countBy = countBy;
	lodash.create = create;
	lodash.curry = curry;
	lodash.curryRight = curryRight;
	lodash.debounce = debounce;
	lodash.defaults = defaults;
	lodash.defaultsDeep = defaultsDeep;
	lodash.defer = defer;
	lodash.delay = delay;
	lodash.difference = difference;
	lodash.differenceBy = differenceBy;
	lodash.differenceWith = differenceWith;
	lodash.drop = drop;
	lodash.dropRight = dropRight;
	lodash.dropRightWhile = dropRightWhile;
	lodash.dropWhile = dropWhile;
	lodash.fill = fill;
	lodash.filter = filter;
	lodash.flatMap = flatMap;
	lodash.flatMapDeep = flatMapDeep;
	lodash.flatMapDepth = flatMapDepth;
	lodash.flatten = flatten;
	lodash.flattenDeep = flattenDeep;
	lodash.flattenDepth = flattenDepth;
	lodash.flip = flip;
	lodash.flow = flow;
	lodash.flowRight = flowRight;
	lodash.fromPairs = fromPairs;
	lodash.functions = functions;
	lodash.functionsIn = functionsIn;
	lodash.groupBy = groupBy;
	lodash.initial = initial;
	lodash.intersection = intersection;
	lodash.intersectionBy = intersectionBy;
	lodash.intersectionWith = intersectionWith;
	lodash.invert = invert;
	lodash.invertBy = invertBy;
	lodash.invokeMap = invokeMap;
	lodash.iteratee = iteratee;
	lodash.keyBy = keyBy;
	lodash.keys = keys;
	lodash.keysIn = keysIn;
	lodash.map = map;
	lodash.mapKeys = mapKeys;
	lodash.mapValues = mapValues;
	lodash.matches = matches;
	lodash.matchesProperty = matchesProperty;
	lodash.memoize = memoize;
	lodash.merge = merge;
	lodash.mergeWith = mergeWith;
	lodash.method = method;
	lodash.methodOf = methodOf;
	lodash.mixin = mixin;
	lodash.negate = negate;
	lodash.nthArg = nthArg;
	lodash.omit = omit;
	lodash.omitBy = omitBy;
	lodash.once = once;
	lodash.orderBy = orderBy;
	lodash.over = over;
	lodash.overArgs = overArgs;
	lodash.overEvery = overEvery;
	lodash.overSome = overSome;
	lodash.partial = partial;
	lodash.partialRight = partialRight;
	lodash.partition = partition;
	lodash.pick = pick;
	lodash.pickBy = pickBy;
	lodash.property = property;
	lodash.propertyOf = propertyOf;
	lodash.pull = pull;
	lodash.pullAll = pullAll;
	lodash.pullAllBy = pullAllBy;
	lodash.pullAllWith = pullAllWith;
	lodash.pullAt = pullAt;
	lodash.range = range;
	lodash.rangeRight = rangeRight;
	lodash.rearg = rearg;
	lodash.reject = reject;
	lodash.remove = remove;
	lodash.rest = rest;
	lodash.reverse = reverse;
	lodash.sampleSize = sampleSize;
	lodash.set = set;
	lodash.setWith = setWith;
	lodash.shuffle = shuffle;
	lodash.slice = slice;
	lodash.sortBy = sortBy;
	lodash.sortedUniq = sortedUniq;
	lodash.sortedUniqBy = sortedUniqBy;
	lodash.split = split;
	lodash.spread = spread;
	lodash.tail = tail;
	lodash.take = take;
	lodash.takeRight = takeRight;
	lodash.takeRightWhile = takeRightWhile;
	lodash.takeWhile = takeWhile;
	lodash.tap = tap;
	lodash.throttle = throttle;
	lodash.thru = thru;
	lodash.toArray = toArray;
	lodash.toPairs = toPairs;
	lodash.toPairsIn = toPairsIn;
	lodash.toPath = toPath;
	lodash.toPlainObject = toPlainObject;
	lodash.transform = transform;
	lodash.unary = unary;
	lodash.union = union;
	lodash.unionBy = unionBy;
	lodash.unionWith = unionWith;
	lodash.uniq = uniq;
	lodash.uniqBy = uniqBy;
	lodash.uniqWith = uniqWith;
	lodash.unset = unset;
	lodash.unzip = unzip;
	lodash.unzipWith = unzipWith;
	lodash.update = update;
	lodash.updateWith = updateWith;
	lodash.values = values;
	lodash.valuesIn = valuesIn;
	lodash.without = without;
	lodash.words = words;
	lodash.wrap = wrap;
	lodash.xor = xor;
	lodash.xorBy = xorBy;
	lodash.xorWith = xorWith;
	lodash.zip = zip;
	lodash.zipObject = zipObject;
	lodash.zipObjectDeep = zipObjectDeep;
	lodash.zipWith = zipWith;
	lodash.entries = toPairs;
	lodash.entriesIn = toPairsIn;
	lodash.extend = assignIn;
	lodash.extendWith = assignInWith;

	mixin(lodash, lodash);

	lodash.add = add;
	lodash.attempt = attempt;
	lodash.camelCase = camelCase;
	lodash.capitalize = capitalize;
	lodash.ceil = ceil;
	lodash.clamp = clamp;
	lodash.clone = clone;
	lodash.cloneDeep = cloneDeep;
	lodash.cloneDeepWith = cloneDeepWith;
	lodash.cloneWith = cloneWith;
	lodash.conformsTo = conformsTo;
	lodash.deburr = deburr;
	lodash.defaultTo = defaultTo;
	lodash.divide = divide;
	lodash.endsWith = endsWith;
	lodash.eq = eq;
	lodash.escape = escape;
	lodash.escapeRegExp = escapeRegExp;
	lodash.every = every;
	lodash.find = find;
	lodash.findIndex = findIndex;
	lodash.findKey = findKey;
	lodash.findLast = findLast;
	lodash.findLastIndex = findLastIndex;
	lodash.findLastKey = findLastKey;
	lodash.floor = floor;
	lodash.forEach = forEach;
	lodash.forEachRight = forEachRight;
	lodash.forIn = forIn;
	lodash.forInRight = forInRight;
	lodash.forOwn = forOwn;
	lodash.forOwnRight = forOwnRight;
	lodash.get = get;
	lodash.gt = gt;
	lodash.gte = gte;
	lodash.has = has;
	lodash.hasIn = hasIn;
	lodash.head = head;
	lodash.identity = identity;
	lodash.includes = includes;
	lodash.indexOf = indexOf;
	lodash.inRange = inRange;
	lodash.invoke = invoke;
	lodash.isArguments = isArguments;
	lodash.isArray = isArray;
	lodash.isArrayBuffer = isArrayBuffer;
	lodash.isArrayLike = isArrayLike;
	lodash.isArrayLikeObject = isArrayLikeObject;
	lodash.isBoolean = isBoolean;
	lodash.isBuffer = isBuffer;
	lodash.isDate = isDate;
	lodash.isElement = isElement;
	lodash.isEmpty = isEmpty;
	lodash.isEqual = isEqual;
	lodash.isEqualWith = isEqualWith;
	lodash.isError = isError;
	lodash.isFinite = isFinite;
	lodash.isFunction = isFunction;
	lodash.isInteger = isInteger;
	lodash.isLength = isLength;
	lodash.isMap = isMap;
	lodash.isMatch = isMatch;
	lodash.isMatchWith = isMatchWith;
	lodash.isNaN = isNaN;
	lodash.isNative = isNative;
	lodash.isNil = isNil;
	lodash.isNull = isNull;
	lodash.isNumber = isNumber;
	lodash.isObject = isObject;
	lodash.isObjectLike = isObjectLike;
	lodash.isPlainObject = isPlainObject;
	lodash.isRegExp = isRegExp;
	lodash.isSafeInteger = isSafeInteger;
	lodash.isSet = isSet;
	lodash.isString = isString;
	lodash.isSymbol = isSymbol;
	lodash.isTypedArray = isTypedArray;
	lodash.isUndefined = isUndefined;
	lodash.isWeakMap = isWeakMap;
	lodash.isWeakSet = isWeakSet;
	lodash.join = join;
	lodash.kebabCase = kebabCase;
	lodash.last = last;
	lodash.lastIndexOf = lastIndexOf;
	lodash.lowerCase = lowerCase;
	lodash.lowerFirst = lowerFirst;
	lodash.lt = lt;
	lodash.lte = lte;
	lodash.max = max;
	lodash.maxBy = maxBy;
	lodash.mean = mean;
	lodash.meanBy = meanBy;
	lodash.min = min;
	lodash.minBy = minBy;
	lodash.stubArray = stubArray;
	lodash.stubFalse = stubFalse;
	lodash.stubObject = stubObject;
	lodash.stubString = stubString;
	lodash.stubTrue = stubTrue;
	lodash.multiply = multiply;
	lodash.nth = nth;
	lodash.noConflict = noConflict;
	lodash.noop = noop;
	lodash.now = now;
	lodash.pad = pad;
	lodash.padEnd = padEnd;
	lodash.padStart = padStart;
	lodash.parseInt = parseInt;
	lodash.random = random;
	lodash.reduce = reduce;
	lodash.reduceRight = reduceRight;
	lodash.repeat = repeat;
	lodash.replace = replace;
	lodash.result = result;
	lodash.round = round;
	lodash.runInContext = runInContext;
	lodash.sample = sample;
	lodash.size = size;
	lodash.snakeCase = snakeCase;
	lodash.some = some;
	lodash.sortedIndex = sortedIndex;
	lodash.sortedIndexBy = sortedIndexBy;
	lodash.sortedIndexOf = sortedIndexOf;
	lodash.sortedLastIndex = sortedLastIndex;
	lodash.sortedLastIndexBy = sortedLastIndexBy;
	lodash.sortedLastIndexOf = sortedLastIndexOf;
	lodash.startCase = startCase;
	lodash.startsWith = startsWith;
	lodash.subtract = subtract;
	lodash.sum = sum;
	lodash.sumBy = sumBy;
	lodash.template = template;
	lodash.times = times;
	lodash.toFinite = toFinite;
	lodash.toInteger = toInteger;
	lodash.toLength = toLength;
	lodash.toLower = toLower;
	lodash.toNumber = toNumber;
	lodash.toSafeInteger = toSafeInteger;
	lodash.toString = toString;
	lodash.toUpper = toUpper;
	lodash.trim = trim;
	lodash.trimEnd = trimEnd;
	lodash.trimStart = trimStart;
	lodash.truncate = truncate;
	lodash.unescape = unescape;
	lodash.uniqueId = uniqueId;
	lodash.upperCase = upperCase;
	lodash.upperFirst = upperFirst;
	lodash.each = forEach;
	lodash.eachRight = forEachRight;
	lodash.first = head;

	mixin(lodash, (function () {
		var source = {};
		baseForOwn(lodash, function (func, methodName) {
			if (!hasOwnProperty.call(lodash.prototype, methodName)) {
				source[methodName] = func;
			}
		});
		return source;
	}()), { 'chain': false });

	lodash.VERSION = VERSION;

	// Assign default placeholders.
	arrayEach(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function (methodName) {
		lodash[methodName].placeholder = lodash;
	});

	// Add `LazyWrapper` methods for `_.drop` and `_.take` variants.
	arrayEach(['drop', 'take'], function (methodName, index) {
		LazyWrapper.prototype[methodName] = function (n) {
			n = n === undefined ? 1 : nativeMax(toInteger(n), 0);

			var result = (this.__filtered__ && !index)
				? new LazyWrapper(this)
				: this.clone();

			if (result.__filtered__) {
				result.__takeCount__ = nativeMin(n, result.__takeCount__);
			} else {
				result.__views__.push({
					'size': nativeMin(n, MAX_ARRAY_LENGTH),
					'type': methodName + (result.__dir__ < 0 ? 'Right' : '')
				});
			}
			return result;
		};

		LazyWrapper.prototype[methodName + 'Right'] = function (n) {
			return this.reverse()[methodName](n).reverse();
		};
	});

	// Add `LazyWrapper` methods that accept an `iteratee` value.
	arrayEach(['filter', 'map', 'takeWhile'], function (methodName, index) {
		var type = index + 1,
			isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;

		LazyWrapper.prototype[methodName] = function (iteratee) {
			var result = this.clone();
			result.__iteratees__.push({
				'iteratee': getIteratee(iteratee, 3),
				'type': type
			});
			result.__filtered__ = result.__filtered__ || isFilter;
			return result;
		};
	});

	// Add `LazyWrapper` methods for `_.head` and `_.last`.
	arrayEach(['head', 'last'], function (methodName, index) {
		var takeName = 'take' + (index ? 'Right' : '');

		LazyWrapper.prototype[methodName] = function () {
			return this[takeName](1).value()[0];
		};
	});

	// Add `LazyWrapper` methods for `_.initial` and `_.tail`.
	arrayEach(['initial', 'tail'], function (methodName, index) {
		var dropName = 'drop' + (index ? '' : 'Right');

		LazyWrapper.prototype[methodName] = function () {
			return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
		};
	});

	LazyWrapper.prototype.compact = function () {
		return this.filter(identity);
	};

	LazyWrapper.prototype.find = function (predicate) {
		return this.filter(predicate).head();
	};

	LazyWrapper.prototype.findLast = function (predicate) {
		return this.reverse().find(predicate);
	};

	LazyWrapper.prototype.invokeMap = baseRest(function (path, args) {
		if (typeof path == 'function') {
			return new LazyWrapper(this);
		}
		return this.map(function (value) {
			return baseInvoke(value, path, args);
		});
	});

	LazyWrapper.prototype.reject = function (predicate) {
		return this.filter(negate(getIteratee(predicate)));
	};

	LazyWrapper.prototype.slice = function (start, end) {
		start = toInteger(start);

		var result = this;
		if (result.__filtered__ && (start > 0 || end < 0)) {
			return new LazyWrapper(result);
		}
		if (start < 0) {
			result = result.takeRight(-start);
		} else if (start) {
			result = result.drop(start);
		}
		if (end !== undefined) {
			end = toInteger(end);
			result = end < 0 ? result.dropRight(-end) : result.take(end - start);
		}
		return result;
	};

	LazyWrapper.prototype.takeRightWhile = function (predicate) {
		return this.reverse().takeWhile(predicate).reverse();
	};

	LazyWrapper.prototype.toArray = function () {
		return this.take(MAX_ARRAY_LENGTH);
	};

	// Add `LazyWrapper` methods to `lodash.prototype`.
	baseForOwn(LazyWrapper.prototype, function (func, methodName) {
		var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName),
			isTaker = /^(?:head|last)$/.test(methodName),
			lodashFunc = lodash[isTaker ? ('take' + (methodName == 'last' ? 'Right' : '')) : methodName],
			retUnwrapped = isTaker || /^find/.test(methodName);

		if (!lodashFunc) {
			return;
		}
		lodash.prototype[methodName] = function () {
			var value = this.__wrapped__,
				args = isTaker ? [1] : arguments,
				isLazy = value instanceof LazyWrapper,
				iteratee = args[0],
				useLazy = isLazy || isArray(value);

			var interceptor = function (value) {
				var result = lodashFunc.apply(lodash, arrayPush([value], args));
				return (isTaker && chainAll) ? result[0] : result;
			};

			if (useLazy && checkIteratee && typeof iteratee == 'function' && iteratee.length != 1) {
				// Avoid lazy use if the iteratee has a "length" value other than `1`.
				isLazy = useLazy = false;
			}
			var chainAll = this.__chain__,
				isHybrid = !!this.__actions__.length,
				isUnwrapped = retUnwrapped && !chainAll,
				onlyLazy = isLazy && !isHybrid;

			if (!retUnwrapped && useLazy) {
				value = onlyLazy ? value : new LazyWrapper(this);
				var result = func.apply(value, args);
				result.__actions__.push({ 'func': thru, 'args': [interceptor], 'thisArg': undefined });
				return new LodashWrapper(result, chainAll);
			}
			if (isUnwrapped && onlyLazy) {
				return func.apply(this, args);
			}
			result = this.thru(interceptor);
			return isUnwrapped ? (isTaker ? result.value()[0] : result.value()) : result;
		};
	});

	// Add `Array` methods to `lodash.prototype`.
	arrayEach(['pop', 'push', 'shift', 'sort', 'splice', 'unshift'], function (methodName) {
		var func = arrayProto[methodName],
			chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru',
			retUnwrapped = /^(?:pop|shift)$/.test(methodName);

		lodash.prototype[methodName] = function () {
			var args = arguments;
			if (retUnwrapped && !this.__chain__) {
				var value = this.value();
				return func.apply(isArray(value) ? value : [], args);
			}
			return this[chainName](function (value) {
				return func.apply(isArray(value) ? value : [], args);
			});
		};
	});

	// Map minified method names to their real names.
	baseForOwn(LazyWrapper.prototype, function (func, methodName) {
		var lodashFunc = lodash[methodName];
		if (lodashFunc) {
			var key = lodashFunc.name + '';
			if (!hasOwnProperty.call(realNames, key)) {
				realNames[key] = [];
			}
			realNames[key].push({ 'name': methodName, 'func': lodashFunc });
		}
	});

	realNames[createHybrid(undefined, WRAP_BIND_KEY_FLAG).name] = [{
		'name': 'wrapper',
		'func': undefined
	}];

	// Add methods to `LazyWrapper`.
	LazyWrapper.prototype.clone = lazyClone;
	LazyWrapper.prototype.reverse = lazyReverse;
	LazyWrapper.prototype.value = lazyValue;

	// Add chain sequence methods to the `lodash` wrapper.
	lodash.prototype.at = wrapperAt;
	lodash.prototype.chain = wrapperChain;
	lodash.prototype.commit = wrapperCommit;
	lodash.prototype.next = wrapperNext;
	lodash.prototype.plant = wrapperPlant;
	lodash.prototype.reverse = wrapperReverse;
	lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;

	// Add lazy aliases.
	lodash.prototype.first = lodash.prototype.head;

	if (symIterator) {
		lodash.prototype[symIterator] = wrapperToIterator;
	}
	return lodash;
});

var _ = runInContext();


export default {
	deepCopy: function (source) {
		return _.cloneDeep(source);
	},
	deepEquals: function (first, second): boolean {
		return _.isEqual(first, second);
	},
};
