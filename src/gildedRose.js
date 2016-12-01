function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = []

update_quality = function() {
  items.forEach(function(item) {
    item.update_quality();
  });

};
