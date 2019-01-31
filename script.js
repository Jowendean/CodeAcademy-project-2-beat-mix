// Drum Arrays
let kicks = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let snares = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let hiHats = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let rideCymbals = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

/*toggleDrum takes an arguement of an array name string and and index variable.
  Checks to make sure that values exist, has an index that is non negative and not greaters than 16.
  Then flips the values of the specified array according to index.*/
const toggleDrum = (arrName, index) => {

  const drums = getDrums(arrName);
  if(!drums || index < 0 || index > 15){
    return;
  }

  drums[index] = !drums[index];

}

//Helper functions for toggleDrums

//Functions sets drums variable to valid drum arrays
const getDrums = arrName => {

  switch(arrName){
    case 'kicks':
      return kicks;
    case 'snares':
      return snares;
    case 'hiHats':
      return hiHats;
    case 'rideCymbals':
      return rideCymbals;
    default:
      return;
  }
}

//clear resets all values in an array back to false.
const clear = arrName => {

  const drums = getDrums(arrName);
  if(!drums){
    return;
  }
  else{
    for(let i = 0; i < drums.length; i++){
      drums.fill(false);
    }
  }
}
//For each value in the array, invert each boolean value;
const invert = arrName => {

  const drums = getDrums(arrName);
  if(!drums){
    return;
  }
  else{
    for(let i = 0; i < drums.length; i++){
        drums[i] = !drums[i];
    }
  }
}
