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
2.Execute scaffolding.
2.1.Input prompt answer.
2.2.Generates files by tpl settings. The file contents, filename will be replaced with prompt answer.
```sh
scaffolding
```

##Advanced

###Offcourse! Generally, project involved many developers
1.Prepare .default.scaffolding.json
```js
{
  "author": "sideroad"
}
```
2.You can override the default setting!

###Use your favorite name for json
```sh
scaffolding chocolate.json
```

##Dependencies with awesome library
* [prompt](https://github.com/flatiron/prompt)
* [mustache](https://github.com/janl/mustache.js)
* [wrench](https://github.com/ryanmcgrath/wrench-js)

