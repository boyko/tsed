import {Type} from "@tsed/core";
import {SpecTypes} from "../domain/SpecTypes";
import {StoredJson} from "../domain/StoredJson";
import {IJsonSerializerOptions} from "../interfaces";

export function getJsonSchema(model: Type<any>, options: IJsonSerializerOptions = {}) {
  return StoredJson.from(model).schema.toJSON({
    ...options,
    spec: options.spec || SpecTypes.JSON,
    root: true
  });
}
