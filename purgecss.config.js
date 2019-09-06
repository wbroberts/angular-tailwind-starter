module.exports = {
  content: ['src/index.html', 'src/app/**/*.html'],
  css: ['src/styles.tailwind.css'],
  extractors: [
    {
      extractor: class {
        static extract(content) {
          return content.match(/[\w-:/]+(?<!:)/g) || [];
        }
      },
      extensions: ['html']
    }
  ]
};
