/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

 export function cookingStatus(time){
    if (time == 0){
      return 'Lasagna is done.';
    } else if (time == undefined){ 
    return "You forgot to set the timer.";
  } else {
      return 'Not done, please wait.';
    }
  }
  
  export function preparationTime(arr, perLayer = 2){
    return arr.length * perLayer;
  }
  
  export function quantities(arr){
      let noodleCounter = 0;
      let sauceCounter = 0;
      for (let key in arr){
        if (arr[key] == 'sauce'){
          sauceCounter++;
        } else if (arr[key] == 'noodles'){
          noodleCounter++;
        }
      }
    const obj = {
      noodles: noodleCounter * 50,
      sauce: sauceCounter * 0.2
    }
      return obj;
  }
  
  export function addSecretIngredient(arr1, arr2){
    arr2.push(arr1[arr1.length-1]);
    console.log(arr2);
  }
  
  export function scaleRecipe(recObj, numPor = 2){
      let newObj = {...recObj};
      for(let key in newObj){
        newObj[key] = recObj[key]*(numPor / 2);  
      }
      return newObj;
  }
  
  
  
  