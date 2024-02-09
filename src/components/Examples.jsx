import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";

const Examples = () => {
  const [selectedTopic, setSelectedTopic] = useState();

  const handleClick = (selectedButon) => {
    setSelectedTopic(selectedButon);
  };

  let tabContent = <p>Please select a topic</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          onSelect={() => handleClick("components")}
          isActive={selectedTopic === "components"}
        >
          Components
        </TabButton>
        <TabButton
          onSelect={() => handleClick("jsx")}
          isActive={selectedTopic === "jsx"}
        >
          Jsx
        </TabButton>
        <TabButton
          onSelect={() => handleClick("state")}
          isActive={selectedTopic === "state"}
        >
          State
        </TabButton>
        <TabButton
          onSelect={() => handleClick("props")}
          isActive={selectedTopic === "props"}
        >
          Props
        </TabButton>
      </menu>
      {tabContent}
    </section>
  );
};

export default Examples;
