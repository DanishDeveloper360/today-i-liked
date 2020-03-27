# sc-component-template

## Features

- VanillaJS and React Versions
- Includes Example Code and Best Practices
- (TODO) Includes unit testing solutions
- Code analyzer and linting tools
- Generate micro-ui web component template code through the installable cli
- CLI will rename all the files and occurrences in the code
- Pull changes and updates from the template as new features are added
- Contribute back features and tools to the template to share with other teams

## Todo

- unit testing solutions
- review rc files, update package.json
- review webpack config
- check for CLI updates feature
- update feature built in
- deploy the CLI so it can be run like `npm install -g @scopus-cli/scopus-cli --registry=https://rt.artifactory.tio.systems/artifactory/api/npm/npm-scopus-cli-virtual/`

## Usage

### Setup Gitlab

- Make sure you are signed up on Gitlab, have a working SSH key (link to ssh key config)

### Install CLI

- `git clone git@gitlab.et-scm.com:rap-scopus/sc-component-template.git`
- `cd sc-component-template`
- `npm install && npm link`

### Setup Repository

- create new project on gitlab for your micro UI
- `git clone` your new project and `cd` into the directory

### Run CLI

- run `scopus-cli` inside project directory
- choose from vanillaJS and React templates
- adds the template repository as an upstream git remote for updates later
- renames files based on your chosen component name
- renames components inside files based on your chosen component name
- Performs at git commit with all ejection changes
