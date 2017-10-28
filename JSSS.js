
	function validateForm(){
 {
  var a = document.forms["Form"]["user"].value;
  var c = document.forms["Form"]["pass"].value;


 if (a==null || a=="", c==null || c=="")
  {
    alert("Error: Please Fill All Required Fields...");
    return false;
  }
  if (a==null || a=="")
  {
    alert("Error: Please Fill All Required Fields...");
    return false;
  }
  
   if (c==null || c=="")
  {
    alert("Error: Please Fill All Required Fields...");
    return false;
  }

    createUser(a,c);
  }};

  CB.CloudApp.init('etygjdgekomx', '5fc32d37-5d9b-41fb-9f82-f7e1d75d1677');

function createUser(a,c){

  var obj = new CB.CloudObject('User');
  obj.set('username', a );
  obj.set('password', c);
  obj.save({
    success : function(obj){
     console.log(obj);
     alert("Successfully created data.");
     window.location.href= "Get.html";
     
        //obj saved.
      },error : function(error){
        //error
        console.log(error);
        alert("Error: Unable to post data...")
      }
    });
};
  
  function login(a,c){
  var a = document.forms["Form"]["user"].value;
  var c = document.forms["Form"]["pass"].value;
  
  var user = new CB.CloudUser();
  user.set('username', a);
  user.set('password', c);
  user.logIn({
    success: function(user) {
      alert ("success");

    //Login successfull
    },
    error: function(error) {
    //Error.
    }
  })
};


 