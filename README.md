# Angular Todo List

A simple Todo List application built with Angular 12 and Angular Material.

## Features

- Add new todo items
- Mark todos as completed
- Edit existing todos
- Delete todos
- Press `Enter` to add or save edits
- Data persistence with browser `localStorage`
- Responsive layout for mobile and desktop

## Tech Stack

- Angular `12.2.x`
- Angular Material `12.2.x`
- TypeScript `4.3.x`
- UUID `8.3.2`

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm
- Angular CLI (`npm install -g @angular/cli`)

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm start
```

Open: `http://localhost:4200/`

## Available Scripts

- `npm start`: Run dev server
- `npm run build`: Build for production
- `npm run watch`: Build in watch mode (development config)
- `npm test`: Run unit tests with Karma

## Build

```bash
npm run build
```

Build output is generated in `dist/Todolist`.

## Project Structure

```text
src/
  app/
    header/                 # Top toolbar component
    todo-page/              # Main todo page (list + actions)
      Todo.ts               # Todo model
    app-routing.module.ts   # Routes (root -> todo page)
    app.module.ts           # Root Angular module + Material imports
```

## Data Persistence

Todos are saved in browser `localStorage` under the key:

- `todoList`

## Troubleshooting

### TS1383 error from `uuid`

If you see:

```text
Error: node_modules/uuid/dist/index.d.ts:1:1 - error TS1383
```

Use the Angular 12 compatible dependency set:

```bash
npm uninstall uuid @types/uuid
npm install uuid@8.3.2
```

Then install matching types (or remove `@types/uuid` entirely if not needed):

```bash
npm install -D @types/uuid@8
```

## License

For learning and personal use.
