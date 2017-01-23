var expect = require("chai").expect;
var testObj = require("./hello");

describe("Returns the correct welcome message", function(){
  it("returns hello", function() {
    testObj(function(e, d){
      expect(d).to.equal('oh hey!');
    });
  })
})
