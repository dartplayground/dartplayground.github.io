# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A static, no-framework, no-dependency Bangla-language Dart learning roadmap site ("Dart শেখার খাতা"), hosted on GitHub Pages from `docs/`. All learner-facing text is in Bangla; Dart keywords and code stay in English. There is no package manager, linter, or test suite.

## Source vs. build output

- **Edit only `dart_roadmap/`.** It is the source, written as a claude.ai Artifact page: `index.html` has no `<html>/<head>/<body>` tags (it starts with `<title>` and inline `<style>`).
- **`docs/` is generated.** Never hand-edit it. Regenerate with:
  ```sh
  sh build.sh
  ```
  `build.sh` copies the `.js` files and wraps `index.html` in a full document skeleton. It inserts `</head><body>` right before the line starting with `<header class="bar">`, so keep that line intact.
- Commit `dart_roadmap/` and the regenerated `docs/` together.

To preview locally, serve `docs/` (for example `python3 -m http.server -d docs`) and open the page. The site loads Google Fonts and highlight.js (with Dart grammar) from cdnjs.

## Architecture

Script load order in `index.html`: highlight.js, then an inline script declaring the global registries `TOPICS = {}`, `TRACES = {}`, `CARDS = []`, then `content1.js` … `content7.js` (data), then `app.js` (renderer). Content files only populate the globals; `app.js` reads them at load.

- **`app.js`**
  - `WEEKS`: week-to-topic-id mapping. This array alone defines sidebar order and prev/next order (`ORDER`). A topic in `TOPICS` but not in `WEEKS` does not appear.
  - `CLUES`: regexes over problem text that add hints to the "কিভাবে ভাববো?" panel.
  - `block()`: renders `learn` blocks. A block is a string (paragraph) or an object keyed by type: `h`, `code`/`out`, `list`, `tip`, `warn`, `table`, `boxes`, `array`, `chain`, `map`, `anat`, `objs`, `tree`, `widget`, `trace`.
  - `W`: interactive widgets (`opLab`, `patternLab`, `funcMachine`, `listLab`, `pipeLab`, `sortLab`, `stepSort`, `isolateDemo`, `termLab` = fake in-browser Linux shell with missions), mounted from `{ widget: 'name' }` blocks.
  - `mountTrace()`: step-through dry-run viewer for `TRACES` entries.
  - Hash routing (`#home`, `#cards`, `#<topic-id>`); renders the whole page on `hashchange`.
  - Progress is saved in `localStorage` under key `dart-khata-v1` (`S.done`, `S.known`). The last page is saved under `dart-khata-v1-last`.
- **Topic shape** (`TOPICS['id'] = {...}`): `short`, `title`, `days`, `goal`, optional `lang` (default code language for the topic, e.g. `'bash'`), `learn: [blocks]`, `how: [strings]`, optional `traces: ['traceId']`, optional `quiz: [{ q, code?, opts, a (correct index), why }]`, `probs: [{ l, q, hint?, code?, out?, ans?, note?, sol? }]`. `l` is the level: `e`/`m`/`h`/`p` (easy/medium/hard/project).
- **Trace shape** (`TRACES.id = { title, lang?, box? (label of the state box), code: [lines], steps: [{ l: lineIndex, v?: {vars}, p?: printed, n: note }] }`).
- **Cards**: each content file ends with `CARDS.push({ w: week, f: 'description', b: 'syntax' }, ...)`.
- `content6.js` uses `more(id, [...])` to append problems to topics defined in earlier files. Load order matters.

## Content conventions

- Code highlighting language: item `lang` > topic `lang` > `'dart'`. `bash` shows as "terminal", `plaintext` as "text". `CLUES` hints only apply to Dart problems.
- Inline markup in text fields (via `fmt()`): `{{code}}`, `**bold**`, `[text](https://url)`. Raw HTML is escaped.
- Code lives in JS template literals, so Dart interpolation must be written `\${...}`.
- Problem progress key = topic id + hash of the problem text `q`. Editing a problem's `q` text resets that problem's saved progress for learners.
- `app.js` sorts problems by level (e → m → h → p) and keeps authored order within a level, so new problems can be appended anywhere.
- Each problem should use only concepts taught up to that topic (as noted in `content6.js`).
