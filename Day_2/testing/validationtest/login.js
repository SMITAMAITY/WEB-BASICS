function validateForm(){
    
    var user=document.getElementById("username").value;
    var pass=document.getElementById("password").value;
    if(user !="" && pass !="")
    {
     document.getElementById("frm").submit(); 
    }
    else
    {
      alert("users and passwords are required values please enter them");
    }
}