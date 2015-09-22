module.exports = function() {
  this.filter("jade", (data, options) => ({
    css: require("jade").render(data.toString(), {...options, filename: options.base ? `${options.base}/${options.filename}` : options.filename}), ext: ".html"
  }))
}
