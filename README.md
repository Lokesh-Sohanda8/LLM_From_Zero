# LLM, From Zero 🧠

A single-scroll, dark-themed teaching page that walks through **31 lessons** — from "what is machine learning?" all the way to a complete modern LLM application (RAG, tools, agents, memory). Built for teaching a student the concepts behind Large Language Models from the ground up, one idea and one diagram at a time.

**[→ View the live page](https://lokesh-sohanda8.github.io/LLM_From_Zero/)**

![status](https://img.shields.io/badge/status-teaching%20material-5b9dff)
![lessons](https://img.shields.io/badge/lessons-31-a78bfa)
![type](https://img.shields.io/badge/type-HTML%20%2F%20CSS%20%2F%20JS-ffb454)

---

## What this is

Every lesson follows the same simple structure:

- **A one-line thesis** — the single idea the lesson is about
- **A diagram** — animated flow/branch/loop/comparison diagrams built in pure CSS + SVG (no external libraries)
- **A plain-English explanation** — a short paragraph, no jargon left unexplained
- **A "Think of it like…" analogy** — a real-world comparison to make the idea stick

The lessons build on each other in order:

```
01 → The Family Tree of an LLM (AI → ML → DL → NLP → Transformers → LLM)
02 → What Is Machine Learning?
03 → Neural Networks
04 → How a Network Actually Learns
05 → NLP
06 → Tokenization
07 → Tokens → Token IDs
08 → Embeddings
09 → Semantic Vector Space
10 → Positional Information
11 → Why Attention?
12 → Self-Attention
13 → Query, Key, Value
14 → The Attention Formula
15 → Multi-Head Attention
16 → Feed-Forward Network
17 → Residual Connections
18 → One Transformer Block
19 → The Transformer Stack
20 → Encoder vs. Decoder
21 → Causal (Masked) Attention
22 → The Complete LLM Pipeline
23 → Next-Token Prediction
24 → Autoregressive Generation
25 → Training an LLM
26 → Pretraining → Fine-Tuning → Alignment
27 → Training vs. Inference
28 → RAG (Retrieval-Augmented Generation)
29 → Tool / Function Calling
30 → AI Agent
MASTER → The Complete Modern LLM Application
```

## Features

- 🟦 **Animated flow diagrams** — every arrow has a small dot that travels along it, tracing the direction data actually moves through the model
- 📊 **Custom visuals** for the trickier concepts — a semantic vector-space scatter plot, a causal attention mask grid, a next-token probability bar chart, and the classic "the animal didn't cross the road… it was tired" disambiguation example
- 🧭 **Sticky lesson navigator** — jump to any lesson from a collapsible side rail (mobile-friendly)
- 📈 **Reading progress bar** — fills like data flowing through a pipeline as you scroll
- 🎨 **No frameworks, no build step** — plain HTML, CSS, and vanilla JS

## Project structure

```
llm-from-zero/
├── index.html        # page structure & all 31 lesson sections
├── css/
│   └── styles.css    # full design system (colors, typography, diagram components)
└── js/
    └── script.js     # scroll progress bar + mobile nav toggle
```

## Running it locally

No build step, no dependencies. Just open the file:

```bash
git clone https://github.com/lokeshsohanda/llm-from-zero.git
cd llm-from-zero
open index.html        # macOS
# or just double-click index.html / drag it into a browser
```

Fonts (Space Grotesk, Inter, JetBrains Mono) load from Google Fonts over the network — an internet connection is needed for the intended look, though the page still works offline with fallback system fonts.

## Deploying

Works as a static site with zero configuration. Easiest option is **GitHub Pages**:

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set source to the `main` branch, root folder
4. Your page will be live at `https://<username>.github.io/llm-from-zero/`

## Customizing

- **Colors / fonts** — all in `css/styles.css` under the `:root` CSS variables at the top
- **Add or edit a lesson** — each lesson is a self-contained `<section class="lesson">` block in `index.html`; copy an existing one as a template
- **Diagram styles available** — horizontal flow, vertical stack, branch/merge, side-by-side comparison, and a few bespoke ones (nested rings, scatter plot, probability bars, attention mask grid) — see the CSS classes prefixed `.diagram`, `.flow-row`, `.flow-col`, `.branch-`, `.compare-`

## License

Free to use and adapt for your own teaching material.

---

Built by [@lokeshsohanda](https://github.com/Lokesh-Sohanda8)) for teaching LLM fundamentals, one diagram at a time.
