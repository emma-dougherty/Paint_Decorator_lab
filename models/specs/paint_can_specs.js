const assert = require('assert');
const PaintCan = require('../paint_can.js')

describe ('PaintCan', function (){
    let paintcan;

    this.beforeEach(function(){
        paintcan = new PaintCan(5)
    })

    it('Should have a number of litres of paint', function(){
        const actual = paintcan.volume
        assert.strictEqual (actual, 5)
    })

    it ('Should be able to check if it is empty', function(){
        const actual = paintcan.checkIfEmpty()
        assert.strictEqual (actual, false)
        })
    
    it('Should be able to empty itself of paint', function(){
        const actual = paintcan.emptyItself(5)
        assert.strictEqual (actual,0)
    })
}
)

