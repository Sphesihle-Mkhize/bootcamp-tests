describe ("The transportFee function test status :", function() {
    it("The transportFee uses condition statement to charge for different shifts: Morning is for R20", function () {
        assert.equal(transportFee('morning'), 'R20');
    })

    it("The transportFee uses condition statement to charge for different shifts: Afternoon is for R10", function() {
        assert.equal(transportFee('afternoon'), 'R10');
    })

    it("The transportFee uses condition statement to charge for different shifts: Nightshift is for free", function() {
        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');
    })
})