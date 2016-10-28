'use strict';

function Handle(element) {
    this.element = element;
    this.target = document.querySelector('[data-thing]');
    this.attachListeners();
}

module.exports = Handle;

Handle.prototype.attachListeners = function () {
    this.element.addEventListener('click', function (event) {
        this.handleClickEvent(event);
    });
}
Handle.prototype.handleClickEvent = function (event) {
    // hint: what's wrong with this event type?
    if(event.type === 'Click'){
        setTimeout(function () {
            // hint: is this what it's supposed to be??
            this.target.thing.doStuff();
        }, 500)
    }
}
