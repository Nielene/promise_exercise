function testNum (num) {
  return new Promise (function(resolve, reject) {
    if (num < 10) {
      resolve (num + " is less than 10.")
    } else if (num > 10) {
      resolve (num + " is more than 10.")
    } else {
      reject("This is the number " + num + ".")
     // throw new Error("This is the number " + num + ".")
    }
  })
}

testNum(10)
.then(ans => {
  alert(ans);
}).catch(error => {
  alert(error)
});

//reject and throw new Error do the same thing but reject is an agrument so it goes in the first part of the promise, wheras "throw new Error" can be anywhere.


funciton
