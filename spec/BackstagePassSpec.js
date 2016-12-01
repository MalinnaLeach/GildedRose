describe ("BackstagePass", function() {

  it("should set the instance variables correctly", function() {
    item = new BackstagePass ("priority", 6, 20);
    expect(item.name).toEqual("priority");
    expect(item.sell_in).toEqual(6);
    expect(item.quality).toEqual(20);
  });

  it("should increase in quality when concert is over 10 days away", function(){
    item = new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 20, 10);
    item.update_quality();
    expect(item.quality).toEqual(11);
  });

  it("should double quality increase if between 6 and 10 days away", function(){
    item = new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 8, 10);
    item.update_quality();
    expect(item.quality).toEqual(12);
  });

  it("should triple quality increase if less than 6 days away", function(){
    item = new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 5, 10);
    item.update_quality();
    expect(item.quality).toEqual(13);
  });

  it("should always set quality to zero after concert", function(){
    item = new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 0, 30);
    item.update_quality();
    expect(item.quality).toEqual(0);
  });

  it("should not have quality of more than 50", function(){
    item = new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 4, 49);
    item.update_quality();
    expect(item.quality).toEqual(50);
  });

});
