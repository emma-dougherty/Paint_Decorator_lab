const PaintCan = function (volume) {
    this.volume = volume

}

PaintCan.prototype.checkIfEmpty = function (){
    if (this.volume > 0 ){
        return false
    } else {
        return true
    }
}

PaintCan.prototype.emptyItself = function (litres){
        const new_volume = this.volume - litres
        this.volume = new_volume
        return this.volume
}

module.exports = PaintCan