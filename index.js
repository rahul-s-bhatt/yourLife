 $("input").blur(function(){
           document.getElementById('dynamic-label').style.left = 150;
        });


$(document).ready(function(){
     
      $('btnLogout').hide();
       

 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBhSH_Tc6SUKrAKI4BnymBhIugI0-1Ncms",
    authDomain: "yourlife-2288a.firebaseapp.com",
    databaseURL: "https://yourlife-2288a.firebaseio.com",
    projectId: "yourlife-2288a",
    storageBucket: "",
    messagingSenderId: "507565998571"
  };
  firebase.initializeApp(config);


  //Get Elements

  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnSignIn = document.getElementById('btnSignIn');
  const btnSignUp = document.getElementById('btnSignUp');

  //Add login event

  btnSignIn.addEventListener('click', e => {
    //Get email n pass
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    //Sign in
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => errorMessages(e.message));

  });

  btnSignUp.addEventListener('click', e => {
    //Get email n pass
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    //Sign in
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => errorMessages(e.message));


  });

  //Add a real time listner
  firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser){
        // alert(firebaseUser);
        // btnLogout.classList.remove('hide');
        redirectToHome();
      } else {
        console.log('not logged in');
      }
  });
  
 });

function errorMessages(error){
        $('#error_message').fadeIn().html(error);
        setTimeout(function() {
          $('#error_message').fadeOut("slow");
        }, 2000 );
      }



  function redirectToHome() {
      window.location.assign("./pages/home.html")
  }

  
var labelID;

$('label').click(function() {
       labelID = $(this).attr('for');
       $('#'+labelID).trigger('click');
});

