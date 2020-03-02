// assert.js

var assert = {
    isTrue: function(assertionToCheck) {
      if (!assertionToCheck) {
        throw new Error("Assertion FAILED: " + assertionToCheck + " is not truthy");
      }
      else console.log("TEST IS PASSING OMG YAY")
    }
  };