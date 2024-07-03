describe ("The totalPhoneBill function test status :", function (){
    it("The totalPhoneBill multiplies all four costs with R7.25", function () {
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
    })

    it("The totalPhoneBill multiplies two costs which are call & sms with R3.40", function() {
        assert.equal('R3.40', totalPhoneBill('call, sms'));
    })

    it("The totalPhoneBill multiplies two costs which are sms & sms with R1.30", function() {
        assert.equal('R1.30', totalPhoneBill('sms, sms'));
    })
})