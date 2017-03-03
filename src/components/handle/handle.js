'use strict';

class Handle {
    constructor(){
        this.element = element;
        this.target = document.querySelector('[data-thing]');
        this.attachListeners();
    }
    attachListeners() {
        var that = this;
        this.element.addEventListener('click', function (event) {
            var foo = 'bar';
            that.handleClickEvent(event);
        });
    }
    handleClickEvent(event) {
        var that = this;
        if(event.type === 'click'){
            setTimeout(function () {
                // hint: is this what it's supposed to be??
                that.target.thing.doStuff();
            }, 500)
        }
    }
}

export default Handle;
