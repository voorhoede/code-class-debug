'use strict';

function Thing(element) {
    this.element = element;
    this.element.innerHTML += '.. the thing has been initialized';
    this.element.thing = this;
}

module.exports = Thing;

Thing.instantiate = function (element) {
    if(document.body.classList.contains('bad-things')){
        // return null;
    }
    return new Thing(element);
    // hint: do we even get here?
}
Thing.prototype.doStuff = function (whatever) {
    if(typeof whatever === 'boolean' && whatever){
        this.element.style.backgroundColor = 'green';
    } else {
        this.element.style.backgroundColor = 'red';
    }
}
