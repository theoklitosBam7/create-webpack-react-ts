# create-webpack-react-ts

create-webpack-react-ts acts as simple starter template for initialize a React TypeScript project with Webpack configuration. You can clone / fork this repository and play with `webpack.config.js` and `tsconfig.json` files, building your preferred configuration for your React app.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running / Development](#running-development)
  - [Development server](#dev-server)
  - [Building](#building)
  - [Deploying](#deploying)
- [Further Reading / Useful Links](#further-reading)
- [License](#license)

## Prerequisites

You will need the following things properly installed on your computer.

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (at least 12.x version)
- Any modern web browser

## Installation

- `git clone --depth=1 https://github.com/theoklitosBam7/create-webpack-react-ts.git <your_project_name>`
- `cd <your_project_name>`
- `npm install`

## Running / Development

### Development server

- `npm start`
- Your default browser will automatically open at [http://localhost:8080](http://localhost:8080). You may change the port in `devServer` options in `webpack.config.js` file.
- The app will automatically reload if you change any of the source files.

### Building

Run `npm run build` to build the project. <br />
The build artifacts will be stored in the `dist/` directory. It correctly bundles React in production mode and optimizes the build for the best performance.

### Deploying

There are plenty of services to deploy your app such as [Netlify](https://www.netlify.com/), [GitHub Pages](https://pages.github.com/), [Vercel](https://vercel.com/), [Heroku](https://www.heroku.com/).

## Further Reading / Useful Links

- [Webpack Docs](https://v4.webpack.js.org/concepts/)
- [Babel Docs](https://babeljs.io/docs/en/)
- [React](https://reactjs.org/)

## License

#### [MIT](./LICENSE)
