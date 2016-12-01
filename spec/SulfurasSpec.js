describe ("Sulfuras", function() {

  it("should set the instance variables correctly", function() {
    item = new Sulfuras("Sulfuras", 6, 20);
    expect(item.name).toEqual("Sulfuras");
    expect(item.sell_in).toEqual(6);
    expect(item.quality).toEqual(20);
  });

  it("should not decrease in quality", function(){
    item = new Sulfuras("Sulfuras, Hand of Ragnaros", 0, 10);
    item.update_quality();
    expect(item.quality).toEqual(10);
  });

});
