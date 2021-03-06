
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

- Run `npm install`

### Scripts

- `start`: start local development server
- `test`: start running tests with [jest](https://jestjs.io/)
- `test:coverage`: run tests and collect code coverage specs. Check the `/coverage` directory when complete.
- `build`: start a production build with [webpack](https://webpack.js.org/)
- `analyze`: run the [source-map-analyzer](https://github.com/danvk/source-map-explorer#readme) and for an interactive guide of your apps' package dependencies
- `lint`: run [eslint](https://eslint.org/), use the `- --fix` flag to auto-fix the linting issues. This runs automatically before [every commit](https://github.com/typicode/husky#readme).

### Developing

#### In Isolation

- Run `npm start` and the wrapper inside `index.html` will be hosted at `http://localhost:9000`

#### In Scopus Web

- Follow the instructions above to get your micro-ui development environment running in isolation.
- Start running Scopus-Web locally [Setup Instructions](https://confluence.cbsels.com/display/SCOPUS/Scopus+Web+Local+Setup?preview=/38973729/43714980/Scopus%20Developer%20Environment%20Setup.docx)
- Include the following code where you'd like your micro-ui to render. This should be somewhere in Scopus-Web.

```html
<micro-ui
  override-url="http://localhost:9000"
  component-id="sc-testing"
  description="Scopus Testing Example"
></micro-ui>
```

- The definitions of the attributes are as follows:

| Attribute            |                                                                Definition |
| -------------------- | ------------------------------------------------------------------------: |
| override-url         |                                         should be `http://localhost:9000` |
| component-id         | tag name for your web component defined by `window.customElements.define` |
| description (etc...) |                 any attributes that are passed down to your web component |

- After the micro-ui has been approved and deployed, remove `override-url` to start rendering the hosted build.

### Configuration

Use the file `src/main/resources/{component-id}-env-vars.json` to define properties that can be retrieved with PBJ, by calling:

```js
const config = scopus.platform.configuration.getComponentConfiguration(`${component-id}`);
```

The configuration file is stored in a s3 bucket, and it's part of the [component registration process](https://confluence.cbsels.com/display/SCOPUS/Component+Registration+Process+Scopus+Web) to upload it.

When running [in isolation](#In-Isolation), while PBJ doesn't support pointing to development scopus, you have to manually set a configuration in `sessionStorage` as done in [index.html](src/index.html).

## Contribute

- To create a re-usable contribution that other developers can benefit from, clone this repository and create a branch off the template you'd like to modify. For framework specific changes, use the `template-react` as a starting point.
- For general javascript changes, create a branch from `template-vanilla` and make it the target of your pull request when complete.
- After the changes are approved and merged, all developers can update their micro UI's using `scopus update` functionality in the CLI.
=======

