rework-comments
===============

> Remove comments from files using rework without minifying

    $ npm install rework-comments

## How to use

    var rmComments = require('rework-comments')

    var cssWithoutComments = rework(yourCssWithComments).use(rmComments).toString()
