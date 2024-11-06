# Documentation

## Quick start
- Clone the repository and up the compose file.
```shell
$ git clone https://github.com/code-rush/news-aggregator-client.git
```

## Development
**Prerequisites**

- *[Docker Desktop](https://www.docker.com/products/docker-desktop)*
- *[Node v22](https://nodejs.org/en)*

**Run the app in development mode**
```shell
$ docker compose up
```

## Project Setup

```sh
npm install
```
or
```sh
docker compose build
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```
or
```sh
docker compose up
```

### Access the website if using docker
If running website through docker, it is being exposed to port 8000. Go to
`http://localhost:8000/`

### Issues:

------
Unable to resolve dependency tree error when installing npm packages

```
npm ERR! code ERESOLVE
npm ERR! ERESOLVE is unable to resolve the dependency tree
npm ERR!
.........
```

[Solution](https://stackoverflow.com/questions/64573177/unable-to-resolve-dependency-tree-error-when-installing-npm-packages):

```sh
rm -rf node_modules
rm -rf package-lock.json
npm cache clean --force
npm install
