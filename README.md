# LLM, From Zero 🧠

> **Learn Large Language Models from the ground up — one concept, one diagram, and one analogy at a time.**

**LLM, From Zero** is an interactive, single-page learning experience designed to teach the fundamentals of Large Language Models from scratch.

The course starts with the foundations of **Artificial Intelligence, Machine Learning, Neural Networks, and NLP**, then progressively builds toward **Tokenization, Embeddings, Attention, Transformers, LLM Training, RAG, Tool Calling, AI Agents, and complete modern LLM applications**.

The goal isn't simply to memorize what a Transformer is.

The goal is to understand **why each piece exists, what problem it solves, and how all the pieces eventually fit together.**

---

## 🌐 Live Demo

**[→ Open LLM, From Zero](https://lokesh-sohanda8.github.io/LLM_From_Zero/)**

---

## 🎯 What Is This?

LLM, From Zero is essentially an **interactive visual textbook for understanding LLMs**.

Instead of throwing complicated equations and terminology at the learner immediately, every concept is introduced progressively.

Each lesson follows a simple teaching pattern:

```text
Core Idea
    ↓
Visual Diagram
    ↓
Plain-English Explanation
    ↓
Real-World Analogy
    ↓
Interactive / Technical Example
```

The course is designed to answer questions such as:

* What is an LLM actually doing?
* How does text become something a neural network can process?
* What are tokens?
* Why do tokens become vectors?
* How does an LLM understand context?
* Why do we need attention?
* What exactly are Query, Key, and Value?
* How does a Transformer work?
* Why does an LLM predict the next token?
* How does an LLM learn?
* What is the difference between training and inference?
* Why do we need RAG?
* How can an LLM use tools?
* What makes something an AI agent?
* How do all these pieces combine into a real AI application?

---

# 🗺️ Learning Roadmap

The course contains **31 lessons**, organized into **6 chapters**.

```text
FOUNDATIONS
    ↓
TEXT → NUMBERS
    ↓
ATTENTION
    ↓
TRANSFORMER
    ↓
TRAINING & INFERENCE
    ↓
MODERN LLM APPLICATIONS
```

---

# 📚 Chapter 1 — Foundations

### 01 → The Family Tree of an LLM

AI → Machine Learning → Deep Learning → NLP → Transformers → LLMs

### 02 → What Is Machine Learning?

Understanding how machines learn patterns from examples.

### 03 → Neural Networks: Stacking Simple Math

Understanding neurons, layers, weights, and how neural networks are structured.

### 04 → How a Network Actually Learns

Understanding prediction, loss, gradients, and parameter updates.

### 05 → NLP: Teaching Machines to Read

Understanding Natural Language Processing and why human language is challenging for computers.

---

# 🔢 Chapter 2 — Preparing Language for a Model

### 06 → Tokenization: Chopping Text into Pieces

How text is broken down into tokens.

### 07 → From Tokens to Token IDs

How tokens are represented as numerical IDs.

### 08 → Embeddings: Giving Numbers Meaning

How token IDs are mapped into learned vectors.

### 09 → Semantic Vector Space

Understanding how numerical representations can capture relationships between concepts.

### 10 → Positional Information: Word Order Matters

Understanding how a Transformer knows where tokens appear in a sequence.

---

# 👀 Chapter 3 — The Attention Mechanism

### 11 → Why Attention? Context Changes Meaning

Understanding why a model needs to consider surrounding words.

### 12 → Self-Attention: Every Token Looks at Every Token

Understanding how tokens gather information from one another.

### 13 → Query, Key, Value — The Three Roles

Understanding the three fundamental representations used by attention.

### 14 → The Attention Formula, Step by Step

Breaking down the mathematics behind attention.

### 15 → Multi-Head Attention: Many Perspectives at Once

Understanding how multiple attention heads can capture different relationships simultaneously.

---

# 🧱 Chapter 4 — The Full Transformer

### 16 → The Feed-Forward Network

Understanding what happens to each token after attention.

### 17 → Residual Connections: Don't Lose the Original

Understanding shortcut connections and why they are important in deep networks.

### 18 → One Transformer Block, Assembled

Putting attention, FFN, residual connections, and normalization together.

### 19 → The Transformer Stack

Understanding how many Transformer blocks are stacked to create a deep model.

### 20 → Encoder vs. Decoder

Understanding the two major Transformer architectural patterns.

### 21 → Causal (Masked) Attention

Understanding how decoder-style models prevent access to future tokens.

### 22 → The Complete LLM Pipeline

Connecting all the components into a complete LLM processing pipeline.

---

# 🧠 Chapter 5 — Training & Deployment

### 23 → Next-Token Prediction

Understanding the fundamental prediction objective behind modern language models.

### 24 → Autoregressive Generation

Understanding how an LLM generates text one token at a time.

### 25 → Training an LLM

Connecting prediction, loss, gradients, backpropagation, and parameter updates.

### 26 → Pretraining → Fine-Tuning → Alignment

Understanding the major stages involved in developing a useful language model.

### 27 → Training vs. Inference

Understanding the difference between teaching a model and using a trained model.

---

# 🤖 Chapter 6 — Building Real Applications

### 28 → RAG: Retrieval-Augmented Generation

Understanding how external knowledge can be retrieved and supplied to an LLM.

### 29 → Tool / Function Calling

Understanding how an LLM can request actions from external tools and APIs.

### 30 → AI Agent: A Loop, Not Just an Answer

Understanding how LLMs can be wrapped inside planning, action, observation, and execution loops.

### 31 → The Complete Modern LLM Application

Putting everything together into a modern application containing:

```text
User
 ↓
Agent Orchestrator
 ├── LLM / Transformer
 ├── RAG → Vector Database
 ├── Tools / APIs
 └── Memory
 ↓
Response
```

The lesson demonstrates an important idea:

> **A raw LLM is only one component of a modern AI application.**

---

# ✨ Features

## 🎨 Visual Learning

The course uses custom visual diagrams to explain difficult concepts.

Visualizations include:

* AI → LLM hierarchy
* Neural network architecture
* Learning and optimization flow
* Tokenization
* Embeddings
* Semantic vector space
* Positional information
* Attention
* Query / Key / Value
* Attention calculations
* Multi-head attention
* Feed-forward networks
* Residual connections
* Transformer blocks
* Transformer stacks
* Encoder vs. Decoder
* Causal masking
* Next-token prediction
* LLM training
* RAG
* Tool calling
* AI agents
* Complete LLM application architecture

---

## 🟦 Animated Diagrams

Many diagrams use animated SVG elements where small dots travel along arrows.

This makes the **direction of information flow** visually obvious.

Instead of simply seeing:

```text
A → B → C
```

the learner can visually observe information moving through the pipeline.

---

## 🎮 Interactive Demos

The course contains three interactive demonstrations.

### 1. Tokenizer Demo

Type text into the tokenizer playground and see the text broken into tokens.

This makes tokenization concrete rather than purely theoretical.

### 2. Attention Demo

The attention demonstration allows the learner to explore how context can change the interpretation of a word.

The classic example:

> "The animal didn't cross the road because it was tired."

helps demonstrate how attention can help connect a pronoun with relevant context.

### 3. Next-Token Probability Demo

The probability playground demonstrates how an LLM can assign different probabilities to possible next tokens.

This connects directly to the concept of **next-token prediction**.

---

# 🧠 Quizzes & Knowledge Checks

The course contains chapter-level quizzes and a final recap.

## Chapter Quizzes

Each of the 6 chapters contains a **3-question knowledge check**.

```text
6 Chapters × 3 Questions
        ↓
18 Chapter Questions
```

Answers provide immediate feedback and explanations.

---

## 🏆 Final Recap

The course ends with a **10-question final recap quiz**.

The final quiz pulls questions from across the course so learners can test whether the concepts actually connected together.

---

# 📖 Expanded Glossary

The glossary is available directly inside the learning interface.

It is designed as a quick-reference companion for learners who encounter unfamiliar terminology during the lessons.

Each entry contains:

* A beginner-friendly definition
* Additional technical context where useful
* A real-world analogy

---

## Artificial Intelligence (AI)

Artificial Intelligence is the broad field of building machines or software that can perform tasks that normally require human-like intelligence, such as recognizing patterns, making predictions, understanding language, or solving problems.

**Analogy:** Think of AI as an entire school. Machine Learning, Deep Learning, NLP, and LLMs are different subjects inside that school.

---

## Machine Learning (ML)

Machine Learning is a way of building systems that learn patterns from examples instead of being explicitly programmed with every rule.

**Analogy:** Instead of teaching a student a rule for recognizing every fruit, you show them hundreds of examples and allow them to discover the patterns.

---

## Neural Network

A neural network is a mathematical model made of layers of interconnected units that transform numbers. Each layer can learn useful patterns from the previous layer.

**Analogy:** Imagine an assembly line where every worker performs a small transformation. After many stages, the final product becomes much more useful.

---

## Deep Learning

Deep Learning is Machine Learning based on neural networks with many layers, allowing models to learn increasingly complex representations.

**Analogy:** A simple neural network is a small assembly line; deep learning is a huge factory with many processing stages.

---

## NLP

NLP stands for **Natural Language Processing**. It is the field of AI concerned with processing and understanding human language.

**Analogy:** NLP is a bridge between human language and computers that ultimately operate on numbers.

---

## Token

A token is a small piece of text processed by a language model as one unit.

A token can be a complete word, part of a word, punctuation, whitespace, or another text fragment depending on the tokenizer.

**Analogy:** Think of a sentence as a LEGO structure. Tokens are the individual LEGO pieces.

---

## Tokenization

Tokenization is the process of breaking text into tokens that a language model can process.

**Analogy:** Imagine cutting a sentence into LEGO pieces. Common pieces can remain large, while unusual words may be broken into smaller pieces.

---

## Token ID

A Token ID is the integer assigned to a token in a model's vocabulary.

The ID itself does not represent meaning. It acts as an index that lets the model find the token's learned representation.

**Analogy:** A library catalog number identifies a book without being the book itself.

---

## Vocabulary

A vocabulary is the collection of tokens that a tokenizer and model know how to represent.

**Analogy:** Think of it as the collection of LEGO pieces available to the model.

---

## Vector

A vector is an ordered collection of numbers used to represent information mathematically.

**Analogy:** Think of a vector as a set of coordinates describing where something is located on a mathematical map.

---

## Embedding

An embedding is a learned vector representation of information such as a token, word, sentence, or other object.

**Analogy:** Imagine giving every word a location on a giant map where related concepts tend to occupy related regions.

---

## Semantic Vector Space

A semantic vector space is a mathematical space in which concepts are represented as vectors and their relationships can be captured through their positions and relationships.

**Analogy:** Imagine a giant map of concepts where "doctor" might be near "hospital" and "banana" might be near "fruit."

---

## Positional Information

Positional information tells a Transformer where each token occurs in a sequence.

This is important because attention alone does not inherently tell the model whether a token appeared first, second, or last.

**Analogy:** Imagine a puzzle where each piece has a number telling you where it belongs.

---

## Logits

Logits are the raw, unnormalized scores produced by a model for possible next tokens.

They are converted into probabilities later.

**Analogy:** Imagine judges giving contestants raw marks before those marks are converted into percentages.

---

## Softmax

Softmax converts a collection of raw scores into a probability distribution.

The resulting probabilities are non-negative and sum to 1.

**Analogy:** Raw competition scores are converted into percentages showing each candidate's share of the total.

---

## Attention

Attention is a mechanism that allows tokens to gather information from other tokens and determine which ones are more relevant.

**Analogy:** Imagine reading a sentence and deciding which surrounding words deserve the most attention to understand the current word.

---

## Self-Attention

Self-attention is attention where tokens attend to other tokens within the same sequence.

**Analogy:** Imagine a group discussion where everyone listens to everyone else before forming their own understanding.

---

## Query / Key / Value

Query, Key, and Value are three learned representations used during attention.

* **Query:** What information am I looking for?
* **Key:** What kind of information do I contain?
* **Value:** What information can I provide?

The model compares Queries with Keys and uses the resulting relationships to determine how much information to take from Values.

**Analogy:** In a library, your question is the Query, book labels are Keys, and the information inside the books is the Value.

---

## Attention Score

An attention score measures how relevant one token is to another during attention.

**Analogy:** Imagine asking several people for help. The score represents how relevant each person's answer appears to your question.

---

## Attention Weight

An attention weight is the normalized importance assigned to another token during attention.

**Analogy:** If five people give you advice, the amount of trust you place in each person's answer is similar to an attention weight.

---

## Multi-Head Attention

Multi-Head Attention runs multiple attention mechanisms in parallel.

Different heads can learn to focus on different relationships or patterns in the same sequence.

**Analogy:** Imagine several detectives investigating the same case. One studies people, another locations, another timelines, and another hidden relationships.

---

## Transformer

A Transformer is a neural network architecture built around attention mechanisms.

Transformers allow tokens to interact with one another and then process those representations through additional neural network layers.

**Analogy:** Think of a Transformer as a workshop where team members communicate, process information, and repeatedly refine their understanding.

---

## Feed-Forward Network (FFN)

A Feed-Forward Network is the component of a Transformer block that processes each token's representation independently after attention has mixed contextual information.

It typically expands the representation, applies a non-linear transformation, and projects it back down.

**Analogy:** Attention is a group discussion; the FFN is each person going back to their desk to think about what they just learned.

---

## Residual Connection

A residual connection adds a layer's original input back to its transformed output.

This allows the layer to focus on learning what needs to change instead of rebuilding the entire representation.

**Analogy:** Instead of rewriting an entire document, keep the original and apply only the necessary edits.

---

## Transformer Block

A Transformer block is one repeated unit of a Transformer architecture.

It typically contains:

* Attention
* Feed-Forward Network
* Residual connections
* Normalization components

**Analogy:** Think of one Transformer block as one floor of a building.

---

## Transformer Stack

A Transformer stack is a sequence of Transformer blocks placed one after another.

Each block receives and refines the representations produced by the previous block.

**Analogy:** Imagine sending an idea through several editors, where each editor improves it further.

---

## Encoder

An encoder is the part of a Transformer architecture designed to build rich representations of an input sequence.

**Analogy:** Think of an encoder as someone reading an entire document and building a detailed understanding of it.

---

## Decoder

A decoder generates an output sequence, typically one token at a time.

In autoregressive language models, it uses causal attention to prevent access to future tokens.

**Analogy:** Think of a writer composing a story one word at a time while only being able to see what has already been written.

---

## Causal Mask

A causal mask prevents a token from attending to tokens that appear later in the sequence.

This prevents the model from seeing future information during next-token prediction.

**Analogy:** During an exam, you can see the questions you've reached but cannot look at the next page.

---

## Next-Token Prediction

Next-token prediction is the fundamental training objective behind many modern language models.

Given the previous tokens, the model learns to predict what token should come next.

**Analogy:** Imagine someone finishing your sentence by guessing the next word you are likely to say.

---

## Autoregressive

Autoregressive generation means producing output one token at a time, where each newly generated token becomes part of the context used to generate the next token.

**Analogy:** Imagine telling a story one word at a time and using everything already said to decide what comes next.

---

## Loss

Loss is a numerical measurement of how different a model's prediction is from the desired target.

**Analogy:** Think of loss as a mistake meter showing how far a student's answer was from the target.

---

## Backpropagation

Backpropagation calculates how the loss changes with respect to the model's parameters by working backward through the network.

The resulting gradients are used to update the model.

**Analogy:** Imagine tracing a bad group-project result backward through the decisions that caused it so the next attempt can be improved.

---

## Gradient

A gradient tells us how the loss changes when model parameters change.

Gradients provide information about the direction in which parameters should be adjusted.

**Analogy:** Imagine standing on a mountain. The gradient tells you about the slope and which direction leads downhill.

---

## Weight / Parameter

A parameter is a learned numerical value inside a neural network. Weights are a major type of parameter.

During training, these values are adjusted to improve the model.

**Analogy:** Imagine millions of tiny knobs inside a machine. Training repeatedly adjusts those knobs.

---

## Training

Training is the process of adjusting a model's parameters using data so that it becomes better at a particular objective.

**Analogy:** Training is practice. The model repeatedly attempts a task, receives feedback, and improves.

---

## Pretraining

Pretraining is the initial large-scale training stage where a language model learns general patterns from massive amounts of text.

**Analogy:** Pretraining is like general school education before specialization.

---

## Fine-Tuning

Fine-tuning is additional training performed on an already pretrained model using a more focused dataset.

**Analogy:** Pretraining is general education; fine-tuning is specialization.

---

## RLHF / Alignment

RLHF stands for **Reinforcement Learning from Human Feedback**.

It refers to techniques that use human preferences or evaluations to make model behavior more aligned with desired human behavior.

**Analogy:** Imagine a teacher evaluating several answers and explaining which answer is clearer, safer, more helpful, or more polite.

---

## Inference

Inference is the process of using an already-trained model to generate an output.

During normal inference, the model's learned parameters are not updated.

**Analogy:** Training is studying for an exam; inference is taking the exam.

---

## Context

Context is the information available to the model while it generates a response.

It can include:

* User instructions
* Conversation history
* Retrieved documents
* System instructions
* Other supplied information

**Analogy:** Context is like the notes you are allowed to keep on your desk while answering a question.

---

## Retrieval

Retrieval is the process of finding relevant information from an external collection of documents or data.

**Analogy:** Imagine asking a librarian a question and having them search the shelves for the most relevant pages.

---

## RAG

RAG stands for **Retrieval-Augmented Generation**.

A RAG system retrieves relevant information from an external knowledge source and provides it to an LLM as context before generating an answer.

```text
Question
   ↓
Retrieve Information
   ↓
Add Context
   ↓
Generate Answer
```

**Analogy:** Imagine a student taking an open-book examination. Instead of relying entirely on memory, the student searches the textbook and uses the relevant information to answer.

---

## Tool / Function Calling

Tool or function calling allows an LLM to request that an external program or tool perform an operation.

The LLM typically produces a structured request, while the surrounding application actually executes the tool.

Examples include:

* Database queries
* API calls
* Calculations
* Web searches
* Sending messages
* External application actions

**Analogy:** Imagine an employee who cannot directly access a company's database but can ask a database specialist to retrieve information.

---

## AI Agent

An AI agent is a system that combines an LLM with tools, instructions, memory or state, and an execution loop to accomplish a goal.

A simplified agent loop is:

```text
Goal
 ↓
Plan
 ↓
Act
 ↓
Observe
 ↓
Decide
 ↓
Act Again
```

**Analogy:** A normal chatbot is like asking an employee a question and receiving an answer. An AI agent is like giving an employee a task and allowing them to decide which tools and steps are required to complete it.

---

# 🔗 How Everything Connects

The course intentionally builds toward one larger mental model.

```text
                 ┌──────────────────────┐
                 │        USER          │
                 └──────────┬───────────┘
                            ↓
                 ┌──────────────────────┐
                 │  AGENT ORCHESTRATOR  │
                 └──────────┬───────────┘
                            ↓
              ┌─────────────┼─────────────┐
              ↓             ↓             ↓
        ┌──────────┐  ┌──────────┐  ┌──────────┐
        │   LLM    │  │   RAG    │  │  TOOLS   │
        │TRANSFORMER│ │VECTOR DB │  │  / APIs  │
        └──────────┘  └──────────┘  └──────────┘
              │             │             │
              └─────────────┼─────────────┘
                            ↓
                      ┌──────────┐
                      │ MEMORY   │
                      └────┬─────┘
                           ↓
                    ┌────────────┐
                    │ RESPONSE  │
                    └────────────┘
```

The key idea is:

> **The LLM is the reasoning and language engine, but the surrounding system gives it knowledge, tools, memory, and the ability to perform multi-step tasks.**

---

# 🏗️ Project Architecture

The project intentionally uses a lightweight static architecture.

```text
llm-from-zero/
│
├── index.html
│
├── css/
│   └── styles.css
│
├── js/
│   └── script.js
│
├── favicon.ico
├── apple-touch-icon.png
├── icon-192.png
├── icon-512.png
│
└── README.md
```

### `index.html`

Contains the complete learning experience:

* 31 lessons
* Chapter introductions
* Lesson navigation
* Diagrams
* Interactive demonstrations
* Chapter quizzes
* Final quiz
* Glossary
* Tooltips
* Progress controls

### `css/styles.css`

Contains the complete visual system:

* Dark theme
* Typography
* Responsive layouts
* Lesson styling
* Diagram components
* Animations
* Quiz styling
* Glossary panel
* Navigation
* Print styles
* Mobile layouts

### `js/script.js`

Handles client-side interactions including:

* Lesson navigation
* Mobile navigation
* Reading progress
* Lesson completion
* Browser persistence
* Glossary interactions
* Interactive tokenizer
* Attention demonstration
* Probability demonstration
* Chapter quizzes
* Final quiz

### Icons

The project includes:

* `favicon.ico`
* `apple-touch-icon.png`
* `icon-192.png`
* `icon-512.png`

These provide browser and device icon support.

---

# 🛠️ Technology Stack

The project intentionally avoids frameworks and build systems.

```text
HTML5
CSS3
Vanilla JavaScript
SVG
Google Fonts
Browser Local Storage
```

### No framework

There is no dependency on:

* React
* Next.js
* Vue
* Angular
* Bootstrap
* Tailwind
* Node.js
* Backend APIs
* Database

This makes the project extremely easy to run, modify, and deploy.

---

# 🚀 Running Locally

Clone the repository:

```bash
git clone https://github.com/lokeshsohanda/llm-from-zero.git
```

Enter the project:

```bash
cd llm-from-zero
```

Then open:

```text
index.html
```

in a modern web browser.

You can also use VS Code's **Live Server** extension for a local development server.

No package installation or build process is required.

---

# 🌐 Deployment

Because the project is a static website, it can be deployed using almost any static hosting platform.

Examples include:

* GitHub Pages
* Vercel
* Netlify
* Cloudflare Pages
* Any static web server

### GitHub Pages

1. Push the repository to GitHub.
2. Open **Settings → Pages**.
3. Select the deployment branch.
4. Select the repository root.
5. Save.
6. Open the generated Pages URL.

Current deployment:

**https://lokesh-sohanda8.github.io/LLM_From_Zero/**

---

# 🎨 Design Philosophy

The interface follows a **visual-first teaching philosophy**.

The design intentionally uses:

* Dark backgrounds
* Bright accent colors
* Large typography
* Technical diagrams
* Monospace elements
* Animated data flows
* Compact explanations
* Interactive demonstrations
* Progressive navigation

The objective is to make the website feel like an **interactive technical textbook** rather than a traditional documentation page.

---

# 🧑‍🎓 Who Is This For?

LLM, From Zero is intended for:

* Beginners learning Generative AI
* Students studying AI/ML
* Data Science students
* Developers entering the LLM ecosystem
* AI Engineering beginners
* Developers learning Transformers
* Educators teaching LLM fundamentals
* Anyone curious about how ChatGPT-style systems work

You do not need to already be an LLM expert.

The course is intentionally designed to start from the fundamentals.

---

# 🧭 Recommended Learning Approach

Don't rush through the lessons.

For every lesson:

```text
1. Read the thesis
        ↓
2. Study the diagram
        ↓
3. Read the explanation
        ↓
4. Understand the analogy
        ↓
5. Try the interactive example
        ↓
6. Complete the chapter quiz
        ↓
7. Mark the lesson as understood
```

The goal is **conceptual understanding**, not memorization.

---

# 💡 The Core Teaching Philosophy

The project follows one central principle:

> **Don't memorize the Transformer. Understand why the Transformer exists.**

Instead of only asking:

> "What is attention?"

the course tries to answer:

> "Why did we need attention in the first place?"

Instead of only explaining:

> "What is RAG?"

the course asks:

> "Why would an LLM need external knowledge?"

Instead of defining:

> "What is an AI agent?"

the course asks:

> "Why isn't one LLM response enough to complete certain tasks?"

This approach helps learners build a mental model instead of collecting disconnected definitions.

---

# 🔬 From LLMs to Real AI Systems

One of the main goals of the course is to show that an LLM is only one component of a modern AI application.

A raw LLM fundamentally performs language modeling — predicting tokens.

A real application can surround it with:

```text
LLM
+
RAG
+
Tools
+
Memory
+
Orchestration
+
Agent Loop
```

This produces systems capable of working with external knowledge, calling APIs, maintaining context, and completing multi-step tasks.

---

# 📈 Learning Progression

The entire course can be viewed as a transformation:

```text
Human Language
      ↓
     Tokens
      ↓
   Token IDs
      ↓
   Embeddings
      ↓
Contextual Representations
      ↓
    Attention
      ↓
  Transformer
      ↓
  Next-Token Prediction
      ↓
      LLM
      ↓
     RAG
      ↓
     Tools
      ↓
     Memory
      ↓
     Agent
      ↓
Modern AI Application
```

Every lesson introduces one layer of this progression.

---

# 🔮 Future Expansion Ideas

The current course focuses on building a strong conceptual foundation.

Potential future additions include:

* Temperature visualization
* Top-K sampling playground
* Top-P sampling playground
* Token probability exploration
* Attention matrix explorer
* Embedding visualization
* Vector similarity playground
* Transformer inference simulator
* RAG pipeline playground
* Vector database visualization
* Tool-calling playground
* Agent execution visualizer
* Prompt engineering module
* LLM API module
* Fine-tuning module
* LoRA / PEFT module
* Quantization module
* LLM deployment module
* LLM evaluation module
* AI safety and guardrails module

---

# 🤝 Contributing

Contributions that improve the educational experience are welcome.

Useful contributions include:

* Fixing technical inaccuracies
* Improving explanations
* Adding better analogies
* Creating new diagrams
* Improving accessibility
* Improving mobile responsiveness
* Adding interactive demonstrations
* Adding new lessons
* Improving quizzes

The guiding principle should always be:

> **Make difficult LLM concepts easier to understand.**

---

# 📄 License

Free to use and adapt for educational and teaching purposes.

If you reuse substantial parts of the project, attribution is appreciated.

---

# 👨‍🏫 Built for Learning

Built by **[Lokesh Sohanda](https://github.com/lokeshsohanda)** for learning and teaching LLM fundamentals.

The project is based on a simple idea:

> **Complex technology becomes easier when you understand it one layer at a time.**

From:

```text
AI
 ↓
Machine Learning
 ↓
Neural Networks
 ↓
NLP
 ↓
Tokens
 ↓
Embeddings
 ↓
Attention
 ↓
Transformers
 ↓
LLMs
 ↓
RAG
 ↓
Tools
 ↓
Agents
 ↓
Modern AI Applications
```

### 🧠 That's LLM, From Zero.