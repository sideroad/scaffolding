#Scaffolding any project

##Install
```sh
npm install -g scaffolding
```

##Simple to use
1.Prepare scaffolding.json
```js
{
  "properties": {
    "name": {
      "pattern": "^[a-zA-Z\\.\\-\\d]+$",
      "message": "Name must be only letters, numbers, dots, or dashes",
      "default": "sample",
      "required": true
    },
    "author": {
      "required": true
    }
  },
  "tpl": {
    "tpl/src/base.js": "dist/src/{{name}}.js",
    "tpl/test/base.test": "dist/test/{{name}}"
  }
}
```
2.Execute feo. Feo generates html, js and css files to dist directory.
```sh
scaffolding
```

##Offcourse! Generally, project involved many developers
1.Prepare .default.scaffolding.json
```
{
  "author": "sideroad"
}
2.You can override the default setting!

##Dependencies with awesome library
* [prompt](https://github.com/flatiron/prompt)
* [mustache](https://github.com/janl/mustache.js)
* [wrench](https://github.com/ryanmcgrath/wrench-js)

