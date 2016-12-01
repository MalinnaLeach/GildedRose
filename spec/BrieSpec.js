describe ("Brie", function() {

  it("should set the instance variables correctly", function() {
    item = new Brie("special stinky", 6, 20);
    expect(item.name).toEqual("special stinky");
    expect(item.sell_in).toEqual(6);
    expect(item.quality).toEqual(20);
  });

  it("should increase in quality", function(){
    item = new Brie("special stinky", 0, 0);
    item.update_quality();
    expect(item.quality).toEqual(2);
  });

  it("should not have a quality of over 50", function(){
    item = new Brie("special stinky", 0, 50);
    item.update_quality();
    expect(item.quality).toEqual(50);
  });

});
