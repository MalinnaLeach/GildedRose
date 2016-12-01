describe ("adding different items to items array and updating quality" , function() {

  it("should call correct function on all items", function(){
    bsp = new BackstagePass ("priority", 6, 20);
    items.push(bsp);
    brie = new Brie("special stinky", 6, 20);
    items.push(brie);
    conj = new Conjured("magic spell", 6, 20);
    items.push(conj);
    item = new StandardItem("cheddar", 6, 20);
    items.push(item);
    sulf = new Sulfuras("Sulfuras", 6, 20);
    items.push(sulf);

    update_quality();

    expect(bsp.quality).toEqual(23);
    expect(brie.quality).toEqual(22);
    expect(conj.quality).toEqual(18);
    expect(item.quality).toEqual(19);
    expect(sulf.quality).toEqual(20);

  });

});
