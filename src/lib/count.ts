import { Setter } from "solid-js";

export function count(input: string, setOutput: Setter<string>, word: string) {
  setOutput(
    input
      .split(" ")
      .map((x) => x.trim())
      .filter((x) => x == word)
      .length.toString(),
  );
}
