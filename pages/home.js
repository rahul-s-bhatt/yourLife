$(document).ready(function(){
      $('btnLogout').hide();


// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBhSH_Tc6SUKrAKI4BnymBhIugI0-1Ncms",
    authDomain: "yourlife-2288a.firebaseapp.com",
    databaseURL: "https://yourlife-2288a.firebaseio.com",
    projectId: "yourlife-2288a",
    storageBucket: "yourlife-2288a.appspot.com",
    messagingSenderId: "507565998571"
  };
  firebase.initializeApp(config);

	var db= firebase.database().ref();

	var ref = db.child('todosList');


	var item;
	
	var uList = document.getElementById('todo-list-items');


	var listItems = [];

	 //Logout Button


    btnLogout.addEventListener('click', e => {
      firebase.auth().signOut();

    });

	//Add a real time listner
  firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser){
        // alert(firebaseUser);
        btnLogout.classList.remove('hide');
      } else {
        // alert('not logged in');
        btnLogout.classList.add('hide');
        // redirectToIndex();
      }
  });

 function redirectToIndex() {
      window.location.assign("../index.html")
  }

// ref.on('child_changed', snap => {
// 	const liChanged = document.createElement(snap.key);
// 	liChanged.innerText = snap.val();
// 	uList.appendChild(liChanged);
// });


ref.on('child_removed' , snap => {
	const liToRemove = document.createElement(snap.key);
	liToRemove.remove();
});

});

// function todoListfun() {

// 	var db= firebase.database().ref();

// 	var ref = db.child('todosList');

// 	item = document.getElementById("inputTodo").value;
// 	uList = document.getElementById('todo-list-items');

// 	ref.child('todosContent').push({
// 	    	todoItem: item
// 	    });

// 	var newRef = ref.child('todosContent').push();
// 	newRef.set({
// 		todoItem: item
// 	});

// 	newRef.on('child_added', snap => {
// 		const li = document.createElement('li');
// 		li.className = "list-item";
// 		li.innerText =JSON.stringify(snap.val()).replace(/"/g,"");;
// 		uList.appendChild(li);
// 	});
	
// }

function addGJ() {

	var gjText = document.getElementById('addGJ');

	db.child('gratitudeJournal').push({
	    	gJlist: gjText
	    });

}
  