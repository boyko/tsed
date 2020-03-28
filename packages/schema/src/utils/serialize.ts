import {isArray, Store} from "@tsed/core";
import {IJsonSerializerOptions} from "../interfaces";

function getStoredJson(value: any) {
  return Store.from(value.class).get("StoredJson");
}

export function createRef(value: any, options: IJsonSerializerOptions = {}) {
  const storedJson = getStoredJson(value);
  const name = storedJson.schema.getName() || value.getName();

  if (!options.schemas[name]) {
    options.schemas[name] = {}; // avoid infinite calls
    options.schemas[name] = serialize(storedJson.schema, {...options, root: false});
  }

  return {
    $ref: `#/${options.spec === "openapi3" ? "components/schemas" : "definitions"}/${name}`
  };
}

export function serializeItem(value: any, options: IJsonSerializerOptions) {
  // console.log("value && value.isClass", value, value.isClass);
  if (value && value.isClass) {
    return createRef(value, {...options, root: false});
  }

  return serialize(value, {...options, root: false});
}

export function serialize(input: any, options: IJsonSerializerOptions = {}) {
  options.schemas = options.schemas || {};

  if (typeof input !== "object" || input === null) {
    return input;
  }

  if ("toJSON" in input) {
    return input.toJSON(options);
  }

  return Object.entries(input).reduce<any>(
    (obj, [key, value]: any[]) => {
      if (isProp(key, value) && !shouldIgnore(value)) {
        obj[key] = serializeItem(value, options);
      }

      return obj;
    },
    isArray(input) ? [] : {}
  );
}

function shouldIgnore(value: any) {
  return !!(value && value._ignore);
}

function isProp(key: string, value: any) {
  return !key.match(/^_/) && typeof value !== "function";
}
