module.exports = function() {
  this.filter("jade", (data, options) => ({
    css: require("jade").render(data.toString(), options), ext: ".html"
  }))
}
