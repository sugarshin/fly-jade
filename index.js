module.exports = function() {
  this.filter("jade", (source, options) => {
    try {
      return require("jade").render(source, options)
    } catch (e) { throw e }
  }, { ext: ".html" })
}
