# lightspeedcal

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Deploy to github
remove dist folder from .gitignore, then:
```
git add dist
git commit -m "add new deploy"
git subtree push --prefix dist origin gh-pages

OR

git push origin `git subtree split --prefix dist <local-branch>`:gh-pages --force
```
