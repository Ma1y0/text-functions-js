import { Setter } from "solid-js";

export function getInfo(input: string, setOutput: Setter<string>) {
  const words = input.split(" ").length;
  const characters = Array.from(input).length;

  setOutput(`Words: ${words}\nCharacters: ${characters}`);
}
