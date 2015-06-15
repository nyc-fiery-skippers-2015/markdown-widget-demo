MarkdownPreviewer = {};

MarkdownPreviewer.SourceView = function(selector) {
  this.$elem = $(selector);
}

MarkdownPreviewer.SourceView.prototype = {
  getText: function() {
    return this.$elem.val();
  }, 

  setText: function(newText) {
    this.$elem.val(newText);
    return newText;
  }
}

MarkdownPreviewer.PreviewView = function(selector) {
  this.$elem = $(selector);
}

MarkdownPreviewer.PreviewView.prototype.setText = function(data) {
  this.$elem.html(data)
}

MarkdownPreviewer.Controller = function(sourceView, destView) {
  this.sourceView = sourceView;
  this.destView = destView;

  this.sourceView.$elem.on("keyup", function() {
    this.destView.setText(this.convertMarkdown(this.sourceView.getText()));
  }.bind(this));
}

MarkdownPreviewer.Controller.prototype.convertMarkdown = function(mdText)  {
  return marked(mdText);
}

$(document).ready(function() {
  new MarkdownPreviewer.Controller(new MarkdownPreviewer.SourceView("#markdown-source"),
                                   new MarkdownPreviewer.PreviewView("#preview"));
});
