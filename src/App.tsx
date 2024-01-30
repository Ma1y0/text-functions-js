import { createSignal } from "solid-js";
import { reverse } from "./lib/reverse";
import { split } from "./lib/split";
import CountModal from "./components/CountModal";
import ReplaceModal from "./components/ReplaceModal";

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
        <div class="flex justify-around  ">
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
