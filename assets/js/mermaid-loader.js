import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs";

const codeBlocks = document.querySelectorAll(
  "pre > code.language-mermaid, .language-mermaid pre > code",
);

for (const codeBlock of codeBlocks) {
  const diagram = document.createElement("pre");
  diagram.className = "mermaid";
  diagram.textContent = codeBlock.textContent;

  const highlightedBlock = codeBlock.closest(".language-mermaid.highlighter-rouge");
  const sourceBlock = highlightedBlock ?? codeBlock.closest("pre");
  sourceBlock.replaceWith(diagram);
}

mermaid.initialize({
  startOnLoad: false,
  securityLevel: "strict",
});

await mermaid.run({ querySelector: ".mermaid" });
