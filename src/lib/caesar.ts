import { Setter } from "solid-js";

export function caesarEncode(
  input: string,
  setOutput: Setter<string>,
  shift: number,
) {
  setOutput(
    Array.from(input)
      .map((x) => {
        let char = x.charCodeAt(0);

        if (char >= 97 && char <= 122) {
          char = ((char - 97 + shift) % 26) + 97;
        } else if (char >= 65 && char <= 90) {
          char = ((char - 65 + shift) % 26) + 65;
        }

        return String.fromCharCode(char);
      })
      .join(""),
  );
}

export function caesarDecode(
  input: string,
  setOutput: Setter<string>,
  shift: number,
) {
  setOutput(
    Array.from(input)
      .map((x) => {
        let char = x.charCodeAt(0);

        if (char >= 97 && char <= 122) {
          char = ((char - 97 - shift + 26) % 26) + 97;
        } else if (char >= 65 && char <= 90) {
          char = ((char - 65 - shift + 26) % 26) + 65;
        }

        return String.fromCharCode(char);
      })
      .join(""),
  );
}
