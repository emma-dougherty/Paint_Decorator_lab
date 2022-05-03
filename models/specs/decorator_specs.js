const assert = require('assert');
const Decorator = require('../decorator.js')
const PaintCan = require('../paint_can.js')
const Room = require('../room.js')

describe ('Decorator' , function(){
    let decorator;
    let paintcan;
    let room;

    this.beforeEach(function (){
        decorator = new Decorator()
        paintcan = new PaintCan(5)
        room = new Room (25)
    })

    it('Should start with an empty paint stock', function(){
        const actual = decorator.stock
        assert.deepEqual (actual, [])
    })

    it('Should be able a can of paint to the paint stock' ,function (){
        decorator.addPaintCan(paintcan)
        const actual = decorator.stock
        assert.deepEqual (actual,[paintcan])
    } )

    it ('Should be able to calculate total litres of paint in stock', function (){
        decorator.addPaintCan(paintcan)
        decorator.addPaintCan(paintcan)
        const actual = decorator.totalLitres()
        assert.strictEqual (actual, 10)
    })

    it('Should be able to if there is enough paint to paint a room', function (){
        decorator.addPaintCan(paintcan)
        decorator.addPaintCan(paintcan)
        const actual = decorator.enoughPaint(room)
        assert.strictEqual (actual, false)
    })
}
)