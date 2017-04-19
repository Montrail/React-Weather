
// location === California, callback === anonymous function defined below
function getTempCallBack (location, callback) {
  // call anonymous function with undefined, 78
  callback(undefined, 78);

  // call anonymous function with error
  callback('City not found');
}

// Call getTempCallBack with two params: location(san jose)
// and anonymous function(callback) with two params (err, temp)
getTempCallBack('California', function (err, temp) {
  if (err) {
    // logs "Error -- city not found"
    console.log('error', err);
  } else {
    // logs "Success - 78"
     console.log('success', temp);
    }
});

function getTempPromise (location) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
     resolve('City found');
     reject('City not found')
    }, 1000);
  });
}

getTempPromise('Philidelphia').then(function (temp) {
 console.log('Promise success', temp)
}, function (err) {
    console.log('Promise error', err)
   })

function addPromise(a, b) {
  // return either resolve or reject if...
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('Error: NaN')
    }
  });
}

// Call above function with 5, 4,
// then pass result to this anonymous CALLBACK function below
addPromise(5,4).then(function (result) {
  // if sum has result(resolved), print success
  console.log('Promise success: ', result)
}, function (err) {
    // Else sum has result(reject), print Error
    console.log('Promise error: ', err)
  })
