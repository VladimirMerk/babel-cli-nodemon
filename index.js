const { transform } = require('babel-core');
const { Script } = require('vm'); // виртуальная машина
const { createWriteStream: w } = require('fs'); // поток вывода
const f = 'index.js';
(async () => {
  const src = String(await require('fs').promises.readFile(`./src/${f}`));
  const { code } = transform(src, {
  	plugins: ["transform-function-bind"]
  });
  console.log('VM READY!');
  // eval(code);
  const script = new Script(code);
  script.runInThisContext(); // выполнить
  w(`./lib/${f}`).write(code); // записать
})();
