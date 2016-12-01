function StandardItem(name, sell_in, quality) {
  Item.call(this, name, sell_in, quality)
}

StandardItem.prototype.update_quality = function() {
  this.sell_in -= 1;
  this.quality -= this.sell_in > 0 ? 1 : 2;
  if (this.quality < 0) { this.quality = 0 };
}
