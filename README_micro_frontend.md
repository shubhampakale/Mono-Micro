# Micro Frontend Architecture Example

## Folder Structure and Purpose

**Micro/**
- `.gitignore` — Specifies files and folders to exclude from git tracking.
- `README.md` — Project documentation.
- `package.json` — Root scripts (for running both host and remote together with `concurrently`).

**Micro/host/** (Host Micro Frontend)
- `package.json` — Manages dependencies and scripts for the host app.
- `webpack.config.js` — Webpack configuration, including Module Federation to load remote components.
- `.babelrc` — Babel configuration for React and modern JS.
- `public/index.html` — HTML template for the host app.
- `src/App.jsx` — Main React component; loads and displays the remote component.
- `src/index.js` — Entry point; renders the host app.

**Micro/remote/** (Remote Micro Frontend)
- `package.json` — Manages dependencies and scripts for the remote app.
- `webpack.config.js` — Webpack configuration, exposes `RemoteComponent` via Module Federation.
- `.babelrc` — Babel configuration for React and modern JS.
- `public/index.html` — HTML template for the remote app.
- `src/RemoteComponent.jsx` — The component exposed to the host.
- `src/index.js` — Entry point; renders the remote component.

## Purpose
- The `host` app loads and displays components from the `remote` app at runtime using Module Federation.
- The `remote` app exposes its components for use by the host.
- The root `package.json` allows you to start both apps together.

This structure enables independent development and deployment of micro frontends, while allowing integration in the host app.
