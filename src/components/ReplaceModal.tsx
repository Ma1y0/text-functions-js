import { Setter, createSignal } from "solid-js";
import { replace_ } from "../lib/replace";

export default function ReplaceModal({
  input,
  setOutput,
}: {
  input: string;
  setOutput: Setter<string>;
}) {
  const [replace, setReplace] = createSignal("");
  const [rwith, setRwith] = createSignal("");

  return (
    <>
      <dialog id="modal_replace" class="modal">
        <div class="modal-box">
          <input
            value={replace()}
            onInput={(e) => setReplace(e.target.value)}
            class="input input-bordered"
            placeholder="replace"
          />
          <input
            value={rwith()}
            onInput={(e) => setRwith(e.target.value)}
            class="input input-bordered mt-3"
            placeholder="with"
          />
          <div class="modal-action">
            <form method="dialog">
              <button
                class="btn"
                onClick={() =>
                  replace_(input, setOutput, replace().trim(), rwith().trim())
                }
              >
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
