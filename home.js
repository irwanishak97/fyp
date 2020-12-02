// authentication for firebase
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
    // User is signed in.
    $(".login-cover").hide();
    
    var dialog = document.querySelector('#loginDialog');
    if (! dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
    dialog.close();

    } else {
    // No user is signed in.
    $(".login-cover").show();
    var dialog = document.querySelector('#loginDialog');
    if (! dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
    dialog.showModal();
    }

});

// login button process
$("#loginBtn").click(
    function(){
        var email = $("#loginEmail").val();
        var password = $("#loginPassword").val();
            if(email !="" && password !=""){
                $("#loginProgress").show();
                $("#loginBtn").hide();
                // firebase auth for sign in
                firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error){
                    $("#loginError").show().text(error.message);
                    $("#loginProgress").hide();
                    $("#loginBtn").show();
                });
            }else if(email ==="" || password ===""){
                $("#loginProgress").show();
                $("#loginBtn").hide();
                // firebase auth for sign in
                firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error){
                    $("#loginError").show().text("Please fill all the fields");
                    $("#loginProgress").hide();
                    $("#loginBtn").show();
                });
            }
    }
);   


// logout button process
$("#signOutButton").click(
    function(){
        firebase.auth().signOut().then(function() {
        // Sign-out successful.
        }).catch(function(error) {
        // An error happened.
            alert(error.message);
        });
    }
);

