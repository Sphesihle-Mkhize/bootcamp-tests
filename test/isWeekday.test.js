describe ("The isWeekday function test status :", function() {
    it("The isWeekday checks if the input is a weekday: if condition met, return true", function () {
        assert.equal(isWeekday('Monday'), true);
        assert.equal(isWeekday('Tuesday'), true);
        assert.equal(isWeekday('Wednesday'), true);
        assert.equal(isWeekday('Thursday'), true);
        assert.equal(isWeekday('Friday'), true);
    })

    it("The isWeekday checks if the input is a weekday: if the condition isn't meet, return false", function() {
        assert.equal(isWeekday('Saturday'), false);
        assert.equal(isWeekday('Sunday'), false);
    })
})