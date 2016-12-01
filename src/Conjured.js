
function Conjured(name, sell_in, quality) {
  Item.call(this, name, sell_in, quality)
}

Conjured.prototype.update_quality = function() {
  this.sell_in -= 1;
  this.quality -= this.sell_in > 0 ? 2 : 4;
  if (this.quality < 0) { this.quality = 0 };
}
