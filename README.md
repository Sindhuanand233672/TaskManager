# TaskManager
It is used to manage Tasks!
# TallyUp

A friendly, lightweight task manager built with React and Vite. Add tasks, tag them by priority and category, track your progress, and celebrate every completed task with a burst of confetti.

## Features

- **Add, complete, and delete tasks** with a simple, distraction-free interface
- **Priority tagging** (High / Medium / Low) with color-coded indicators
- **Category tagging** (General / Personal / Work) to keep tasks organized
- **Progress tracker** showing completed vs. total tasks with a visual progress bar
- **Confetti celebration** triggered whenever a task is marked complete
- **Light / Dark theme toggle** — defaults to a light theme on every load, switches to a dark theme on toggle
- **Persistent storage** — tasks are saved to `localStorage`, so your list survives a page refresh

## Tech Stack

- [React](https://react.dev/) — UI library
- [Vite](https://vitejs.dev/) — build tool and dev server
- [canvas-confetti](https://www.npmjs.com/package/canvas-confetti) — confetti animation on task completion
- Plain CSS with custom properties for theming (no CSS framework)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later recommended)
- npm (comes bundled with Node.js)

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

The app will be available at `http://localhost:5173` (or the next available port if 5173 is in use).

### Building for production

```bash
npm run build
```

The optimized production build will be output to the `dist/` folder.

## Project Structure

```
tallyup/
├── public/
├── src/
│   ├── Components/
│   │   ├── Taskform.jsx        # Input form for adding new tasks
│   │   ├── Tasklist.jsx        # Renders the list of tasks
│   │   └── Progresstracker.jsx # Progress bar and completion count
│   ├── App.jsx                 # Root component, state management
│   ├── App.css                 # Global styles and theme variables
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## How It Works

- Task state lives in `App.jsx` and is passed down to `Taskform`, `Tasklist`, and `Progresstracker` as props.
- Every task is an object: `{ text, priority, category, completed }`.
- Tasks persist across page reloads via `localStorage`.
- Theme state toggles a `data-theme` attribute on `<body>`, which switches the CSS custom properties defined in `App.css`.
- Confetti fires via `canvas-confetti` whenever a task's `completed` flag flips from `false` to `true`.

## Roadmap

- [ ] Task editing (currently only add/complete/delete are supported)
- [ ] Due dates and reminders
- [ ] Drag-and-drop task reordering
- [ ] Filter/sort by priority or category

## Contributing

Contributions are welcome. Please open an issue to discuss any significant changes before submitting a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
