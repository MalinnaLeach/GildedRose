describe ("StandardItem", function() {

  it("should set the instance variables correctly", function() {
    item = new StandardItem("cheddar", 6, 20);
    expect(item.name).toEqual("cheddar");
    expect(item.sell_in).toEqual(6);
    expect(item.quality).toEqual(20);
  });

  it("should reduce quality before sell by date", function() {
    item = new StandardItem("cheddar", 6, 20);
    item.update_quality();
    expect(item.quality).toEqual(19);
    expect(item.sell_in).toEqual(5);
  });

  it("should reduce quality faster after sell by date", function() {
    item = new StandardItem("cheddar", 0, 20);
    item.update_quality();
    expect(item.quality).toEqual(18);
  });

  it("should never have a quality less than zero", function() {
    item = new StandardItem("cheddar", 0, 0);
    item.update_quality();
    expect(item.quality).toEqual(0);
  });

});
