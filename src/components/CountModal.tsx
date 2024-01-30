import { Setter, createSignal } from "solid-js";
import { count } from "../lib/count";

export default function CountModal({
  input,
  setOutput,
}: {
  input: string;
  setOutput: Setter<string>;
}) {
  const [word, setWord] = createSignal("");

  return (
    <>
      <dialog id="modal_count" class="modal">
        <div class="modal-box">
          <input
            value={word()}
            onInput={(e) => setWord(e.target.value)}
            class="input input-bordered"
            placeholder="word"
          />
          <div class="modal-action">
            <form method="dialog">
              <button
                class="btn"
                onClick={() => count(input, setOutput, word().trim())}
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
