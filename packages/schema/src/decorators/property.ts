import {applyDecorators} from "@tsed/core";
import {StoredJson} from "../domain/StoredJson";

export function Property() {
  return applyDecorators(StoredJson.from);
}
