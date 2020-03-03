// assert.js

var assert = {
    isTrue: function (assertionToCheck) {
        if (!assertionToCheck) {
            throw new Error("Assertion FAILED: " + assertionToCheck + " is not truthy");
        } else console.log("%cTEST IS PASSING", "font-family:monospace;color:green;font-size:1rem")
    }
};