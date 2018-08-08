const { transform } = require('babel-core');
(async () => {
  const src = String(await require('fs').promises.readFile('./src/index.js'));
  const { code } = transform(src, {
  	plugins: ["transform-function-bind"]
  });
  console.log('READY!');
  eval(code);
})();
