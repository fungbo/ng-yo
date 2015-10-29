describe('MyJasminSuite', function () {
  'use strict';
  var a;
  it('should_equal', function () {
    a = {a1: 1, a2: 2};
    var b = {a1: 1, a2: 2};
    expect(a).toEqual(b);
    expect(a).not.toBe(b);
  });

  it("The 'toMatch' matcher is for regular expressions", function() {
    var message = "foo bar baz";

    expect(message).toMatch(/bar/);
    expect(message).toMatch("bar");
    expect(message).not.toMatch(/quux/);
  });

  it('should_not_equal', function () {
    a = 2;
    expect(a).not.toBe(1);
  });

  it('contain', function () {
    var s = 'abcdef';
    expect(s).toContain('a');
  });

  describe("A spec using the fail function", function() {
    var foo = function(x, callBack) {
      if (x) {
        callBack();
      }
    };

    it("should not call the callBack", function() {
      foo(false, function() {
        fail("Callback has been called");
      });
    });
  });

  describe("A spy", function() {
    var foo, bar = null;

    beforeEach(function() {
      foo = {
        setBar: function(value) {
          bar = value;
        }
      };

      spyOn(foo, 'setBar');

      foo.setBar(123);
      foo.setBar(456, 'another param');
    });

    it("tracks that the spy was called", function() {
      expect(foo.setBar).toHaveBeenCalled();
    });

    it("tracks all the arguments of its calls", function() {
      expect(foo.setBar).toHaveBeenCalledWith(123);
      expect(foo.setBar).toHaveBeenCalledWith(456, 'another param');
    });

    it("stops all execution on a function", function() {
      expect(bar).toBeNull();
    });
  });

  it("takes a long time", function(done) {
    setTimeout(function() {
      done();
    }, 3000);
  }, 5000);

});
