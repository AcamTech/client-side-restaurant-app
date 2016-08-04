# Toque APP!

Aplicacion para el manejo de pedidos (Meseros y cocina) en tiempo real en un restaurante, desarrollada completamente en Javascript y utilizando Firebase como PaaS.

| **Tech** | **Description** |**Learn More**|
|----------|-------|---|
|  [React](https://facebook.github.io/react/)  |   Fast, composable client-side components.    | [Pluralsight Course](https://www.pluralsight.com/courses/react-flux-building-applications)  |
|  [Redux](http://redux.js.org) |  Enforces unidirectional data flows and immutable, hot reloadable store. Supports time-travel debugging. Lean alternative to [Facebook's Flux](https://facebook.github.io/flux/docs/overview.html).| [Tutorial](https://egghead.io/series/getting-started-with-redux)    |
|  [React Router](https://github.com/reactjs/react-router) | A complete routing library for React | [Pluralsight Course](https://www.pluralsight.com/courses/react-flux-building-applications) |
|  [Babel](http://babeljs.io) |  Compiles ES6 to ES5. Enjoy the new version of JavaScript today.     | [ES6 REPL](https://babeljs.io/repl/), [ES6 vs ES5](http://es6-features.org), [ES6 Katas](http://es6katas.org), [Pluralsight course](https://www.pluralsight.com/courses/javascript-fundamentals-es6)    |
| [Webpack](http://webpack.github.io) | Bundles npm packages and our JS into a single file. Includes hot reloading via [react-transform-hmr](https://www.npmjs.com/package/react-transform-hmr). | [Quick Webpack How-to](https://github.com/petehunt/webpack-howto) [Pluralsight Course](https://www.pluralsight.com/courses/webpack-fundamentals)|
| [Browsersync](https://www.browsersync.io/) | Lightweight development HTTP server that supports synchronized testing and debugging on multiple devices. | [Intro vid](https://www.youtube.com/watch?time_continue=1&v=heNWfzc7ufQ)|
| [Mocha](http://mochajs.org) | Automated tests with [Chai](http://chaijs.com/) for assertions and [Cheerio](https://www.npmjs.com/package/cheerio) for DOM testing without a browser using Node. | [Pluralsight Course](https://www.pluralsight.com/courses/testing-javascript) |
| [TrackJS](https://trackjs.com/) | JavaScript error tracking. | [Free trial](https://my.trackjs.com/signup)|
| [ESLint](http://eslint.org/)| Lint JS. Reports syntax and style issues. Using [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) for additional React specific linting rules. | |
| [SASS](http://sass-lang.com/) | Compiled CSS styles with variables, functions, and more. | [Pluralsight Course](https://www.pluralsight.com/courses/better-css)|
| [Editor Config](http://editorconfig.org) | Enforce consistent editor settings (spaces vs tabs, etc). | [IDE Plugins](http://editorconfig.org/#download) |
| [npm Scripts](https://docs.npmjs.com/misc/scripts)| Glues all this together in a handy automated build. | [Pluralsight course](https://www.pluralsight.com/courses/npm-build-tool-introduction), [Why not Gulp?](https://medium.com/@housecor/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8#.vtaziro8n)  |

##Configuración inicial de la maquina
1. **Instalar [Node 4.0.0 o superior](https://nodejs.org)** - (Se recomienda instalar la versión 5.0 o superior). Puedes usar NVM para manejar múltiples versiones de Node en la misma maquina? Use [nvm](https://github.com/creationix/nvm).
2. **Instalar [Git](https://git-scm.com/downloads)**.
3. **Instalar [React developer tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) and [Redux Dev Tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)** en Chrome. (opcional.)
4. En un Mac? Eso es todo lo que necesitas, a continuación se detalla la instalación en linux y windows

**On Linux:**

 * Ejecuta esto [Incrementa el limite](http://stackoverflow.com/questions/16748737/grunt-watch-error-waiting-fatal-error-watch-enospc) en el numero de archivos que se puede observar. [Acá el porque](https://github.com/coryhouse/react-slingshot/issues/6).
`echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p`

**En Windows:**

* **Instalar [Python 2.7](https://www.python.org/downloads/)**. Algunos módulos de node puede depender de node-gyp, El cual requiere Python en Windows.
* **Instalar el compilador de C++**. Browser-sync requirere un compilador de C++ en Windows. [Visual Studio Express](https://www.visualstudio.com/en-US/products/visual-studio-express-vs) Viene con un compilador de C++ gratuito.O si ya tienes Visual C++ instalado: Abre visual estudio code y ve a File -> New -> Project -> Visual C++ -> Install Visual C++ Tools for Windows Desktop.

## Iniciando el proyecto
1. **Clona el proyecto**. `git clone https://github.com/batusai513/client-side-restaurant-app.git`.
2. **Instalar los paquetes de Node**. `npm install`
3. **Corre la aplicación con:**. `npm start -s`
