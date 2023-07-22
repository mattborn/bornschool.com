//github.com/markedjs/marked/releases/tag/v5.0.1
marked.use({
  headerIds: false,
  mangle: false,
})

fetch('./readme.md')
  .then(response => response.text())
  .then(text => (document.body.innerHTML = marked.parse(text)))
