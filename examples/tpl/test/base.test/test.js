(function( QUnit, $ ) {

    module( "{{name}}" );
    
    test( "test something", function() {
        var actual = 1,
            result = 1;

        expect(2);
        ok( true, "something message");
        equal( actual, result, "something message" );
    });

})( QUnit, jQuery );
