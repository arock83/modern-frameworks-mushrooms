"use strict";

// Initialize Firebase
// var config = {
//   apiKey: "AIzaSyArYWvTLlv14_qPziEu52uZ9wZvdePUwJE",
//   authDomain: "mushroom-mania-9fcd6.firebaseapp.com",
//   databaseURL: "https://mushroom-mania-9fcd6.firebaseio.com",
//   projectId: "mushroom-mania-9fcd6",
//   storageBucket: "mushroom-mania-9fcd6.appspot.com",
//   messagingSenderId: "442695995950"
// };
//firebase.initializeApp(config);

app.factory("MushroomFactory", function($q, $http) {
  let getShrooms = () => {
    let stuff = [];
    return $q((resolve, reject) => {
      $http.get('https://mushroom-mania-9fcd6.firebaseio.com/.json')
      .then((object)=>{
        for(let item in object.data.mushrooms) {
          stuff.push(object.data.mushrooms[item]);
        }
        console.log("data from FB", stuff);
        resolve(stuff);
      })
      .catch((error) => {
          reject(error);
      });
    });
  };
  return {getShrooms};
});