/**
* Scaffolding
*
* @author sideroad
*/
(function( exports, require, currentDir ){
  "use strict";


  var prompt = require('prompt'),
    mustache = require('mustache'),
    fs = require('fs'),
    path = require('path'),
    wrench = require('wrench');

  exports.generate = function( config ){
    var defaultFile = '.default.scaffolding.json',
        defaults = fs.existsSync( defaultFile ) ? JSON.parse( fs.readFileSync( defaultFile )) : {};

    Object.keys(defaults).forEach(function(key){
      if(config.properties[key]) {
        config.properties[key]['default'] = defaults[key];
      }
    });

    prompt.start();
    prompt.get(config, function (err, result) {
      var tpls = config.tpl || {};

      Object.keys(tpls).forEach(function( tpl ){
        var dist = mustache.render( tpls[tpl], result ),
            distDir = path.dirname(dist);
        if( fs.statSync(tpl).isFile() ){
          wrench.mkdirSyncRecursive( distDir );

          fs.writeFileSync( dist, mustache.render( fs.readFileSync(tpl, 'utf-8'), result));
        } else {
          wrench.mkdirSyncRecursive( distDir );
          wrench.copyDirSyncRecursive( tpl, dist );
          wrench.readdirSyncRecursive(dist).forEach(function(file){
            file = path.join( dist, file);
            fs.writeFileSync( file, mustache.render( fs.readFileSync( file, 'utf-8'), result), 'utf-8');
          });
        }

      });
    });


  };
})( exports, require, __dirname );