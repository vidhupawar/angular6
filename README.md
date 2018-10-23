# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Example app with Angular 6 + Angular CLI + Angular Material + Docker + Angular Example Library

## Getting started

**Warning**

> Verify that you are running at least node 8.9.x and npm 5.x.x by running node -v and npm -v in a terminal/console window. Older versions produce errors, but newer versions are fine.

1. Go to project folder and install dependencies.
 ```bash
 npm install
 ```


Tasks                    | Description
-------------------------|---------------------------------------------------------------------------------------
npm i                    | Install dependencies
npm start                | Start the app in development mode
npm run test             | Run unit tests with karma and jasmine
npm run e2e              | Run end to end tests with protractor
npm run build            | Build the app for production
npm run build:library    | Build the library
npm run lint             | Run the linter (tslint)
npm run ci               | Execute linter and tests
npm run extract          | Generate all json files with the translations in assets folder
npm run translate        | Translate all keys remaining using Google Translate and using English language as the origin
npm run deploy           | Build the app and deploy dist folder to Github pages (angular-cli-ghpages) (fork to do this and remove CNAME file)
npm run bundle-report    | Build and run webpack-bundle-analyzer over stats json, really cool :)
npm run release          | Create a new release using standard-version
npm run docker           | Build the docker image and run the container
npm run update           | Update the project dependencies with ng update