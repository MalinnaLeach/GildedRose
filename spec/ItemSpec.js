describe("Item", function() {

    it("should set the instance variables correctly", function() {
      item = new Item("cheddar", 6, 20);
      expect(item.name).toEqual("cheddar");
      expect(item.sell_in).toEqual(6);
      expect(item.quality).toEqual(20);
    });


  describe ("when item is standard type", function() {

      it("should reduce quality before sell by date", function() {
        item = new Item("cheddar", 6, 20);
        item.update_quality();
        expect(item.quality).toEqual(19);
        expect(item.sell_in).toEqual(5);
      });

      it("should reduce quality faster after sell by date", function() {
        item = new Item("cheddar", 0, 20);
        item.update_quality();
        expect(item.quality).toEqual(18);
      });

      it("should never have a quality less than zero", function() {
        item = new Item("cheddar", 0, 0);
        item.update_quality();
        expect(item.quality).toEqual(0);
      });

    });

    describe ("when item is aged brie", function() {

      it("should increase in quality", function(){
        item = new Item("Aged Brie", 0, 0);
        item.update_quality();
        expect(item.quality).toEqual(2);
      });

      it("should not have a quality of over 50", function(){
        item = new Item("Aged Brie", 0, 50);
        item.update_quality();
        expect(item.quality).toEqual(50);
      });

    });

    describe ("when item is sulfuras", function() {

      it("should not decrease in quality", function(){
        item = new Item("Sulfuras, Hand of Ragnaros", 0, 10);
        item.update_quality();
        expect(item.quality).toEqual(10);
      });

    });

    describe ("when item is a backstage pass", function() {

      it("should increase in quality when concert is over 10 days away", function(){
        item = new Item("Backstage passes to a TAFKAL80ETC concert", 20, 10);
        item.update_quality();
        expect(item.quality).toEqual(11);
      });

      it("should double quality increase if between 6 and 10 days away", function(){
        item = new Item("Backstage passes to a TAFKAL80ETC concert", 8, 10);
        item.update_quality();
        expect(item.quality).toEqual(12);
      });

      it("should triple quality increase if less than 6 days away", function(){
        item = new Item("Backstage passes to a TAFKAL80ETC concert", 5, 10);
        item.update_quality();
        expect(item.quality).toEqual(13);
      });

      it("should always set quality to zero after concert", function(){
        item = new Item("Backstage passes to a TAFKAL80ETC concert", 0, 30);
        item.update_quality();
        expect(item.quality).toEqual(0);
      });

    });


});
