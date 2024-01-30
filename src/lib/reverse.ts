import { Setter } from "solid-js";

export function reverse(input: string, setOutput: Setter<string>) {
  setOutput(Array.from(input).reverse().join(""));
}
