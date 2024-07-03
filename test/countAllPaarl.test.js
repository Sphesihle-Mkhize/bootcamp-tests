describe ("The countAllPaarl function test status :", function() {
    it("The countAllPaarl counts reg no. starts with CJ: which are 3 in the list.", function () {
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));
    })

    it("The countAllPaarl counts reg no. starts with CJ: which are 2 in the list.", function() {
        assert.equal(2, countAllPaarl('CJ 345 123, CK 345, CJ 123'));
    })
})