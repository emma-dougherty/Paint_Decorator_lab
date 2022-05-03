const Decorator = function () {
    this.stock = []
}

Decorator.prototype.addPaintCan = function (paint_can){
    this.stock.push(paint_can)
}

Decorator.prototype.totalLitres = function(){
    let total = 0
    for (paint of this.stock) {
        total += paint.volume
    }
    return total
}

Decorator.prototype.enoughPaint = function (room){
    if (room.area > this.totalLitres()){
        return false
    } else {
        return true
    }
}

module.exports = Decorator 