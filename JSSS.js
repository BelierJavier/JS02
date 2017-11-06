// Initialize CloudBoost
CB.CloudApp.init('etygjdgekomx', '5fc32d37-5d9b-41fb-9f82-f7e1d75d1677');

function validateForm() {
	const username = document.forms["Form"]["user"].value;
	const password = document.forms["Form"]["pass"].value;

	if ((username  == null || username == "") && (password == null || password == "")) {
		alert("Error: Please Fill All Required Fields...");
		return false;
	}

	createUser(username, password);
};

function createUser(username, password) {
	const obj = new CB.CloudObject("User");
	obj.set("username", username);
	obj.set("password", password);
	obj.save({
		success: (obj) => {
			console.log(obj);
			alert("Successfully created data.");
			window.location.href = "Get.html";
		}, error: (error) => {
			console.log(error);
			alert("Error: Unable to post data...");
		}
	});
};

function login() {
	const username = document.forms["Form"]["user"].value;
	const password = document.forms["Form"]["pass"].value;

	const user = new CB.CloudUser();
	user.set("username", username);
	user.set("password", password);
	user.logIn({
		success: (user) => {
			alert("success");
			console.log(user);
		},
		error: (error) => {
			//Error.
		}
	})
};

// On load fetch the user data
CB.CloudUser.getCurrentUser({
  success: (user) => {
		// If the user is already logged in, hide the registration form
		// and display the logout form
		if (user.id) {
			$(".register").hide();
			$(".logout").show();
		}
  },
  error: function(error) {
   console.log(error);
  }
});

// Clicking the logout button should log the user out
$("a#logout").click(() => {
	CB.CloudUser.current.logOut({
		success : (user) => {
			window.location = window.location;
		}, error : function(error){
			//error
		}
	});
});
