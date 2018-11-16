function testNum (num) {
  return new Promise (function(resolve, reject) {
    if (num < 10) {
      resolve (num + " is less than 10.")
    } else if (num > 10) {
      resolve (num + " is more than 10.")
    } else {
      throw new Error("This is the number " + num)
    }
  }).then(ans => {
    alert(ans);
  }).catch(error => {
    alert(error)
  });
}

testNum(10)
Promise {<resolved>: undefined}
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
  }).then(ans => {
    alert(ans);
  }).catch(error => {
    alert(error)
  });
}

testNum(10)
function testNum (num) {
  return new Promise (function(resolve, reject) {
    if (num < 10) {
      resolve (num + " is less than 10.")
    } else if (num > 10) {
      resolve (num + " is more than 10.")
    } else {
      throw new Error("This is the number " + num)
    }
  }).then(ans => {
    alert(ans);
  }).catch(error => {
    alert(error)
  });
}

testNum(15)
Promise {<resolved>: undefined}
Promise {<resolved>: undefined}
function testNum (num) {
  return new Promise (function(resolve, reject) {
    if (num < 10) {
      resolve (num + " is less than 10.")
    } else if (num > 10) {
      resolve (num + " is more than 10.")
    // } else {
    //   reject("This is the number " + num + ".")
    //   // throw new Error("This is the number " + num + ".")
    }
  }).then(ans => {
    alert(ans);
  }).catch(error => {
    alert(error)
  });
}

testNum(15)
Promise {<resolved>: undefined}
function testNum (num) {
  return new Promise (function(resolve, reject) {
    if (num < 10) {
      resolve (num + " is less than 10.")
    } else if (num > 10) {
      resolve (num + " is more than 10.")
    // } else {
    //   reject("This is the number " + num + ".")
    //   // throw new Error("This is the number " + num + ".")
    }
  }).then(ans => {
    alert(ans);
  }).catch(error => {
    alert(error)
  });
}

testNum(10)
Promise {<pending>}
function testNum (num) {
  return new Promise (function(resolve, reject) {
    if (num < 10) {
      resolve (num + " is less than 10.")
    } else if (num > 10) {
      resolve (num + " is more than 10.")
    // } else {
    //   reject("This is the number " + num + ".")
    //   // throw new Error("This is the number " + num + ".")
    }
  }).then(ans => {
    alert(ans);
  }).catch(error => {
    alert(error + new Error("This is the number " + num))
  });
}

testNum(10)

Promise {<pending>}
function testNum (num) {
  return new Promise (function(resolve, reject) {
    if (num < 10) {
      resolve (num + " is less than 10.")
    } else if (num > 10) {
      resolve (num + " is more than 10.")
    } else {
      // reject("This is the number " + num + ".")
     throw new Error("This is the number " + num + ".")
    }
  })
}

testNum(10)
.then(ans => {
  alert(ans);
}).catch(error => {
  alert(error)
});
Promise {<resolved>: undefined}
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
Promise {<resolved>: undefined}
