function Brie(name, sell_in, quality) {
  Item.call(this, name, sell_in, quality)
}

Brie.prototype.update_quality = function() {
  this.sell_in -= 1;
  this.quality += this.quality === 50 ? 0 : 2;
}
