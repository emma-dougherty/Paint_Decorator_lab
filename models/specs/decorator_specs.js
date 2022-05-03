const assert = require('assert');
const Decorator = require('../decorator.js')
const PaintCan = require('../paint_can.js')

describe ('Decorator' , function(){
    let decorator;
    let paintcan;

    this.beforeEach(function (){
        decorator = new Decorator()
        paintcan = new PaintCan(5)
    })

    it('Should start with an empty paint stock', function(){
        const actual = decorator.stock
        assert.deepEqual (actual, [])
    })

    it('Should be able a can of paint to the paint stock' ,function (){
        decorator.addPaintCan(paintcan)
        const actual = decorator.stock

    } )

}
)