// to add data to firebase
// var mainText = document.getElementById("mainText");
// var submitBtn = document.getElementById("submitBtn");
// function submitClick(){
//     var firebaseRef = firebase.database().ref();
//     var messageText = mainText.value;

//     firebaseRef.push().set(messageText);
// }
//

// to retrive data ph
var PhHeading = document.getElementById("PhHeading"); //data ph

var firebaseHeadingRef = firebase.database().ref().child("Ph"); //"Ph is the key and value"

firebaseHeadingRef.on("child_added", snap=>{
    PhHeading.innerText = snap.val();
});
 


// to retrive data temperature
var TempHeading = document.getElementById("TempHeading"); // data temperature

var firebaseHeadingRef = firebase.database().ref().child("Temperature"); //"tubridity is the key and value"

firebaseHeadingRef.on("child_added", snap=>{
    TempHeading.innerText = snap.val();
});


// to retrive data turbidity
var TurbHeading = document.getElementById("TurbHeading"); // data tubridity

var firebaseHeadingRef = firebase.database().ref().child("Turbidity"); //"tubridity is the key and value"

firebaseHeadingRef.on("child_added", snap=>{
    TurbHeading.innerText = snap.val();
});

