const assert = require('assert');
const Room = require('../room.js')

describe('Room', function(){

    let room;

    this.beforeEach(function (){
        room = new Room (25)
    }
    )

    it('Should have an area in square metres', function(){
        const actual = room.area;
        assert.strictEqual(actual, 25)
    }
    )

    it ('Should start not painted', function(){

    const actual = room.painted;
    assert.strictEqual (actual, false)
    } )

    it ('Should be able to painted', function(){
        room.paintTheRoom ()
        const actual = room.painted
        assert.strictEqual(actual, true)
    })
}
)