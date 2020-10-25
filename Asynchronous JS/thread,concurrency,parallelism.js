// Browser has something called Web Worker that working in the background

// NodeJS has Worker Threads

var worker = new Worker('worker.js') // Window object, it can read js file
worker.postMessage('Helloo')

addEventListener('message') // event listener for worker post message
// Web workers, They dont really have access to windows and dom 

// In Node
const { spawn } = require('child_process') // Generate process, this comes from node
spawn('git', ['stuff']) // So you generate a process