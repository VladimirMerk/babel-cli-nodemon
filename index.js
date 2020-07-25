const vm = require('vm');
const { transform } = require('babel-core');
const fs = require('fs').promises;

(async () => {
  const src = String(await fs.readFile('./src/index.js'));
  const { code } = transform(src, {
  	plugins: ["transform-function-bind"]
  });
  const script = new vm.Script(code);
  console.log('READY!');
  const result = script.runInNewContext();
  console.log(result);
  fs.writeFile('./lib/index.js', code);

})();
