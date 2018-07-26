// Code your solution in this file
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching (array , name){
  return array.filter(function(drivername){
    return drivername.toUpperCase()===name.toUpperCase();
  });
}

function toLowerCase(array,letter){
  return array.filter(function(drivername){
    let length=letter.length;
    return drivername.slice(0,length)===letter;
  })
}