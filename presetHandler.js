// Use this presets array inside your presetHandler
const presets = require('./presets');

//validPreSet ensures that the preset and index are valid.
const validPreSet = (index) => {
  return presets[index] || null;
};

//createOrUpdatePreset creates a new array or updates an existing one.
const createOrUpdatePreset = (index, array) => {
  if (!presets[index]) {
    return;
  }
  presets[index] = array;
  return presets[index];
};

// Complete this function:
const presetHandler = (reqType, index, newPreArr) => {

  if(reqType === 'GET'){
    //preset is equal to presets[index] if valid and null if not valid
    let preset = validPreSet(index);
    if(preset){
      //return an array with 200 for OK request if index is valid and the preset array.
      return [200, preset];
    }
    else{
      //if index is not valid, return 404 for NOT FOUND.
      return [404];
    }
  }
  else if(reqType === 'PUT'){
    //if 'PUT' is entered create a new array or update an existing one. If the index is valid,
    //put a new drum array in the presets array. If not, return 404 for NOT FOUND.
    let newPreset = createOrUpdatePreset(index, newPreArr);
    if(newPreset){
      return [200, newPreset];
    }
    else{
      return [404];
    }
  }
  else{
    //if either GET or PUT are not entered, return 400 for BAD REQUEST.
    return [400];
  }

};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
