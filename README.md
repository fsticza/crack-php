# How to start breaking a monolith app with Vue.js
## Setup
- docker-compose.yml contains basic environmeal setup (nginx + php8)
- `docker-compose up` will start the environment

## Backend basics
- all source files can be found under src directory
- index.php includes the basic layout parts
- development and non-development environments are prepared (change or ignore 'development' for non-development envs via .env)

## Frontend basics
- client related source files can be found under /src/client
- a basic Vue3 + Vite app with a special vite.config.ts

## Integration
- resources.php parses dev/non-dev manifest file
  - includes main.ts and main.css in local
  - in order to have the dist directory, run `npm run build`
  - includes production ready assets from the generated dist/manifest.json
- css files go to "head" section of the layout
- js files go to "tail" section of the layout

## Local development
- after starting the docker environment, also start the Vue app with `npm run dev`
- for every new component you will need 2 things:
  - a DOM node in the PHP-generated html output (e.g. data-component="list-albums" in layout_body.html)
  - create and mount the Vue component in main.ts (e.g. 'list-albums': ListAlbumbs)
- in case you also want to handle routing in vue for a component, create a (e.g. content) component and pair it with App.vue in main.ts (note that in order to use vue-router, you also need to configure nginx to let vue handle the routing on page refresh)
- state management can also be shared between components, just pass the same state manager before mounting the component