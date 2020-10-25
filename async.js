console.log('1');
setTimeout(() => {
    console.log('2')
}, 1000);

console.log('3')
// 1, 3, 2
// setTimeout is a Web API, moved away from Callstack and go to next line