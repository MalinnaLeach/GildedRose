
function BackstagePass(name, sell_in, quality) {
  Item.call(this, name, sell_in, quality)
}

BackstagePass.prototype.update_quality = function() {
  this.sell_in -= 1;
  this.quality += this.sell_in < 6 ? 3 : (this.sell_in < 11 ? 2 : 1);
  if (this.quality > 50) { this.quality = 50 };
  if (this.sell_in < 0) { this.quality = 0 };
}
