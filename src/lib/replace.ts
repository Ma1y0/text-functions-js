import { Setter } from "solid-js";

export function replace_(
  input: string,
  setOutput: Setter<string>,
  replace: string,
  rwith: string,
) {
  console.log(input.replace(replace, rwith));
  setOutput(input.replace(replace, rwith));
}
