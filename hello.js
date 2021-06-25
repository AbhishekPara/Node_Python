// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);
const { spawn } = require('child_process');
var lorem = $("#lorem");
lorem.html("");
lorem.append("<p>testing</p>");
const childPython = spawn('py',['--version']);
// const childPython = spawn('py',['codespace.py']);

// childPython.stdout.on('data',(data) => {
//     console.log(`stdout: ${data}`);
//     lorem.append(data);
// });

// childPython.stderr.on('data',(data) => {
//     console.error(`stderr: ${data}`);
// });

// childPython.on('close',(code) => {
//     console.log(`child process exited with code ${code}`);
// });