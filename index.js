module.exports = rmComments

var visit = require('rework-visit')

function rmComments(styles) {
  visit(styles, function (declarations, node) {
    node.rules = node.rules.filter(function (rule) {
      return rule.type !== 'comment'
    })
  })
}
