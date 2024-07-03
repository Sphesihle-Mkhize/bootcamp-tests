describe('The greet function test status :' , function(){
    it('The anticipated result: Hello, Bob', function(){
        assert.equal(greet('Bob'), 'Hello, Bob');
    });

    it('The anticipated result: Hello, Sam', function() {
        assert.equal(greet('Sam'), 'Hello, Sam');
    })
});