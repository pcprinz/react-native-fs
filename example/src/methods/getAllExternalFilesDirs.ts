import { getAllExternalFilesDirs } from "@dr.pogodin/react-native-fs";
import type { TestMethods } from "../TestTypes";
import { Result } from "../TestUtils";

export const getAllExternalFilesDirsTests: TestMethods = {
  // TODO: This is not a very strict test.
  "getAllExternalFilesDirs() should return a list of all external directories [Android]":
    async () => {
      try {
        const res = await getAllExternalFilesDirs();
        if (!Array.isArray(res) || res.some((x) => typeof x !== "string")) {
          return Result.error(
            `result is not a string[]: ${JSON.stringify(res)}`
          );
        }
        return Result.success();
      } catch (e) {
        return Result.catch(e);
      }
    },
};
