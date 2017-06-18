# Gigya Test App

Generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.2.
Uses [ngrx solutions](https://github.com/ngrx) for state management.

## Development Env

Prepare environment:

1. be sure to have node (7.6 or later), npm (4.1 or later) and Yarn (0.21 or later) installed
1. `npm install -g @angular/cli@1.X`
1. `ng set --global packageManager=yarn`
1. `yarn install`

Use next commands in dev mode:

* `ng serve` for a dev server, then navigate to `http://localhost:4200/`
* `ng lint` to lint sources
* `ng test` to run tests

Using state dev tools (including time travel debugging ;) ):

1. download and install the [Redux Devtools Extension](http://extension.remotedev.io/)
1. run app in dev mode and launch extension, then enjoy the magic

## Build

1. prepare environment (steps 1-3 [Development Env section](#development-env))
1. `rm -rf node_modules`
1. `yarn install`
1. define API connection details in *src/environments/environment.prod.ts*
1. `ng build --prod`
1. pick-up result artifact at *dist* folder

## Documentation Auto Generation

Be sure to have **compodoc** globally installed (`npm install -g @compodoc/compodoc`).

1. `rm -rf documentation`
1. `mkdir documentation`
1. `compodoc -p tsconfig.json`
1. pick-up result artifact at *documentation* folder
