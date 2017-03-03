'use strict';

function allTheThings(a, b){
    // set a conditional breakpoint
    var isALessThanB = a < b;
    // set a DOM breakpoint
    setTimeout(function () {
        document.body.classList.add('foo');
    },100);
    // set an XHR breakpoint
    // fetch('index.json').then(function (response) {
    //     return response.json();
    // }).then(function (json) {
    //     console.log(json)
    // });
    // break on (uncaught) exception
    // throw new Error('BOOM')
}
// allTheThings(1, 2);

var element = document.querySelector('[data-thing]');
var Handle = require('./components/handle/handle');
var handle = new Handle(document.querySelector('[data-handle]'));
