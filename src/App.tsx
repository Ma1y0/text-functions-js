import { createSignal } from "solid-js";
import { reverse } from "./lib/reverse";
import { split } from "./lib/split";
import CountModal from "./components/CountModal";
import ReplaceModal from "./components/ReplaceModal";
import { getInfo } from "./lib/info";
import { caesarDecode, caesarEncode } from "./lib/caesar";

function App() {
  const [input, setInput] = createSignal("");
  const [output, setOutput] = createSignal("");

  return (
    <main class="flex justify-center p-6 items-center h-screen">
      <div class="flex flex-col w-full items-center h-full mt-32 gap-3">
        <textarea
          value={input()}
          onInput={(e) => setInput(e.target.value)}
          class="textarea textarea-bordered textarea-lg w-[60%] h-[40%]"
        />
        <div class="flex justify-around gap-2 ">
          <button onClick={() => reverse(input(), setOutput)} class="btn">
            Reverse
          </button>
          <button onClick={() => split(input(), setOutput)} class="btn">
            Split
          </button>
          <div>
            <button
              onClick={() =>
                // @ts-ignore
                document.getElementById("modal_count").showModal()
              }
              class="btn"
            >
              Count
            </button>
          </div>
          <button
            onClick={() =>
              // @ts-ignore
              document.getElementById("modal_replace").showModal()
            }
            class="btn"
          >
            Replace
          </button>
          <button class="btn" onClick={() => getInfo(input(), setOutput)}>
            Info
          </button>
          <button
            onClick={() => caesarEncode(input(), setOutput, 5)}
            class="btn"
          >
            Encode
          </button>
          <button
            onClick={() => caesarDecode(input(), setOutput, 5)}
            class="btn"
          >
            Decode
          </button>
        </div>
        <div>
          <p>{output()}</p>
        </div>
      </div>
      {/* Modals */}
      <CountModal input={input()} setOutput={setOutput} />
      <ReplaceModal input={input()} setOutput={setOutput} />
    </main>
  );
}

export default App;
