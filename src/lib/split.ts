import { Setter } from "solid-js";

export function split(input: string, setOutput: Setter<string>) {
  setOutput(JSON.stringify(input.split(" ")));
}
