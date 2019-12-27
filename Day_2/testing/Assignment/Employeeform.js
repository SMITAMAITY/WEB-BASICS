function validateForm1(){
    
    var name=document.getElementById("name1").value;
    var ecode=document.getElementById("empcode").value;
  

    if(name==""){
        document.getElementById("name-error").innerHTML="Name is required.";
      }
      else{
        document.getElementById("name-error").innerHTML="";
      }
    if(ecode==""){
        document.getElementById("empcode-error").innerHTML="Employee Code is required.";
    }
    else{
      document.getElementById("empcode-error").innerHTML="";
    }
    
         
    

    var result = document.getElementById("day-error").value;
    var result1 = document.getElementById("mon-error").value;
    var result2 = document.getElementById("year-error").value;

    if(result=="Select" || result1=="Select" || result2=="Select"){
        document.getElementById("date-format").innerHTML="Please Select all of  days or months or year";
    }
    
    else {
        document.getElementById().innerHTML="";
    }
    if((result!="Select" && result1!="Select" && result2!="Select") && (name!="" && ecode!="")){
            document.getElementById("frm").submit();
   }

  
   if ( !document.forms.value[0].checked || !document.forms.value[1].checked || !document.forms.value[2].checked ||!document.forms.value[3].checked)
   {
    document.getElementById("crs").innerHTML="Please choose your course" ;
 
   }
   else{
    document.getElementById().innerHTML="";
   }
  
  
    }