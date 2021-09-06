# pwa-report

## Public access

To access the production build of the project go to:
https://filipedoria.github.io/pwa-report

## Project setup
The first step when open an existing Vue.js project is to install all the dependencies and plugins the project uses, this is referenced in the package.json files, and running the following command will do it for you.
```
npm install
```

### Compiles and hot-reloads for development
To test the project, served on the browser, through:
```
npm run serve
```
However the PWA features will no be available has for this the project needs to be built, creating the service.worker

### Previewing the production build Locally
The dist directory is meant to be served by an HTTP server (unless you've configured publicPath to be a relative value), so it will not work if you open dist/index.html directly over file:// protocol. The easiest way to preview your production build locally is using a Node.js static file server, for example serve (https://cli.vuejs.org/guide/deployment.html#previewing-locally)
```
serve -s dist
```

### Compiles and minifies for production
This command will create a production build of the project that can be sent to a host, this step is included on the deploy.sh which also sends the minified production build to the repository.
```
npm run build
```

### Compiles, minifies and deploys on branch on repository
Where the magic happens.
The project is automatically compiled, minified and deployed on the branch connected to Github Pages
```
npm run deploy
``` 

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
