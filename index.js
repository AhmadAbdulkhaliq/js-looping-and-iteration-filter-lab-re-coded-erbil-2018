// Code your solution in this file
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching (array , name){
  return array.filter(function(drivername){
    return drivername.toUpperCase()===name.toUpperCase();
  });
}

function fuzzyMatch (array,letter){
 let lengthOfLetter=letter.length;
  return array.filter(function(drivername){
    let length=letter.length;
    return drivername.slice(0,lengthOfLetter)===letter;
  })
}

function matchName  (array , name){
  return array.filter(function(driver){
    return driver.name.toUpperCase()===name.toUpperCase();
  });
}