# Scopus Micro UI Template - React

## Features

- Usage with the [Scopus CLI](https://gitlab.et-scm.com/rap-scopus/scopus-cli)
- Includes Example Code and Best Practices
- Automatic Linting and Formatting using [Eslint](https://eslint.org/) and [Prettier](https://prettier.io/)
- Includes unit testing examples with [jest](https://jestjs.io/)
- [Code analyzer](https://github.com/danvk/source-map-explorer#readme) to view package dependencies
- Pull changes and updates from the template as new features are added
- Contribute back features and tools to the template to share with other teams

## Usage

### [Vanilla Template Branch](https://gitlab.et-scm.com/rap-scopus/sc-component-template/tree/template-vanilla)

### [React Template](https://gitlab.et-scm.com/rap-scopus/sc-component-template)

### Setup

- Use this project with the [Scopus CLI](https://gitlab.et-scm.com/rap-scopus/scopus-cli). Visit the cli [Readme](https://gitlab.et-scm.com/rap-scopus/scopus-cli) for more instructions.

### Install

- Run `npm install` then `npm start` to run the code

### Scripts

- `start`: start local development server
- `test`: start running tests with [jest](https://jestjs.io/)
- `test:coverage`: run tests and collect code coverage specs. Check the `/coverage` directory when complete.
- `build`: start a production build with [webpack](https://webpack.js.org/)
- `analyze`: run the [source-map-analyzer](https://github.com/danvk/source-map-explorer#readme) and for an interactive guide of your apps' package dependencies
- `lint`: run [eslint](https://eslint.org/), use the `- --fix` flag to auto-fix the linting issues. This runs automatically before [every commit](https://github.com/typicode/husky#readme).

## Contribute

- To create a re-usable contribution that other developers can benefit from, clone this repository and create a branch off the template you'd like to modify. For framework specific changes, use the `template-react` as a starting point.
- For general javascript changes, create a branch from `template-vanilla` and make it the target of your pull request when complete.
- After the changes are approved and merged, all developers can update their micro UI's using `scopus update` functionality in the CLI.
