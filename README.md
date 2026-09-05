HEAD
# TaskManager
It is used to manage Tasks!
# TallyUp

A friendly, lightweight task manager built with React and Vite. Add tasks tagged by priority and category, track completion progress, and get a confetti burst every time you finish something.

## Features

- **Add tasks** with a text input, priority, and category
- **Mark tasks complete / undo** — completed tasks show a strikethrough and reduced opacity
- **Delete individual tasks**
- **Clear all tasks** with a single button (only shown when there's at least one task)
- **Priority tagging** — High, Medium, or Low, shown as a colored left border on each task
- **Category tagging** — General, Personal, or Work
- **Progress tracker** — shows "X of Y tasks completed" with a live-updating progress bar
- **Empty state** — displays "No tasks yet — add one above" when the list is empty
- **Confetti celebration** — fires via `canvas-confetti` the moment a task is marked complete
- **Theme toggle** — a fixed button in the top-right corner switches between a light theme (default, blue accents) and a dark theme (pink accents). The theme always resets to light on refresh
- **Persistent storage** — tasks are saved to `localStorage` and reload with the page

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/) — dev server and build tool
- [canvas-confetti](https://www.npmjs.com/package/canvas-confetti)
- Plain CSS using custom properties (`:root` / `body[data-theme="pink"]`) for theming — no CSS framework

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later)
- npm

### Installation

```bash
git clone https://github.com/<your-username>/tallyup.git
cd tallyup
npm install
```

### Running locally

```bash
npm run dev
```

Opens at `http://localhost:5173` (or the next free port if that one's taken).

### Building for production

```bash
npm run build
```

Output goes to the `dist/` folder.

## Project Structure

```
tallyup/
├── public/
├── src/
│   ├── Components/
│   │   ├── Taskform.jsx        # Input field, priority/category selects, submit
│   │   ├── Tasklist.jsx        # Renders tasks, handles complete/delete + confetti
│   │   └── Progresstracker.jsx # Completion count and progress bar
│   ├── App.jsx                 # Task state, theme state, top-level layout
│   ├── App.css                 # Layout, component styles, theme variables
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## How It Works

- Each task is stored as an object: `{ text, priority, category, completed }`.
- `App.jsx` owns the `tasks` array and passes `addTask`, `updateTask`, and `deleteTask` down as props.
- `tasks` is synced to `localStorage` on every change via `useEffect`, so the list survives a page reload.
- Theme state (`"blue"` or `"pink"`) is stored in `App.jsx` and applied by setting a `data-theme` attribute on `<body>`; `App.css` swaps CSS custom properties based on that attribute. Theme always starts as `"blue"` on load.
- In `Tasklist.jsx`, `toggleComplete` flips a task's `completed` flag and calls `confetti()` only on the incomplete → complete transition (not on undo).

## Known Limitations

- No task editing after creation — only add, complete/undo, and delete are supported
- No due dates, reminders, or sorting/filtering by priority or category yet
- Tasks are stored per-browser via `localStorage`; there's no backend or cross-device sync

## Contributing

Issues and pull requests are welcome. Please open an issue first to discuss any significant change.

## License

This project is licensed under the [MIT License](LICENSE).

=======
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
>>>>>>> c0528b5 (final project)
