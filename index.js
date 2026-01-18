// Requirement: Import datejs outside of the function
require('datejs');

// Step 1: Create the function with a rest argument (...args)
function combineUsers(...args) {
    
    // Step 2: Initialize the Return Object
    let combinedObject = {
        users: []
    };

    // Step 3: Loop through args to isolate each array
    for (let i = 0; i < args.length; i++) {
        // Step 4: Merge Arrays using spread operator
        // We take the existing users and spread the current array (args[i]) into it
        combinedObject.users = [...combinedObject.users, ...args[i]];
    }

    // Step 5: Get today's date formatted as M/d/yyyy using datejs
    // Note: datejs extends the Date object, allowing .today() and .toString(format)
    combinedObject.merge_date = Date.today().toString('M/d/yyyy');

    // Step 7: Return object
    return combinedObject;
}

// Starter code provided in the lab
module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};