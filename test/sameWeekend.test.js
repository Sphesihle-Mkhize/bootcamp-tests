describe ("The sameWeekday function test status :", function() {
    it("The sameWeekday validates if the input as dates are sameWeekdays: if so, returns true.", function () {
        assert.equal(sameWeekday('2016-11-19', '2016-11-26'), true);
    })

    it("The sameWeekday validates if the input as dates are sameWeekdays: if not, returns false.", function(){
        assert.equal(sameWeekday('2016-11-19', '2016-11-28'), false);
    })
})