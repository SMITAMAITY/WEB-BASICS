function validateForm1(){
    
    var errorStr ="<ul>";
    var empname=document.getElementById("empname").value;
    var empcode=document.getElementById("empcode").value;
  

    if(empname==""){
        errorStr =errorStr + "<li>Employee Name is required</li>";
    }

     if(empcode==""){
        errorStr = errorStr +"<li>Employee Code is required</li>";
    }


    var dept=document.getElementsByName("dept");
    var deptStatus=false;
    for(var i=0;i<dept.length;i++)
    {
        if(dept[i].checked)
        {
                deptStatus=true;
        }
    }

    var day =document.getElementById("day");
        var daySelected=day.options[day.selectedIndex].value;
    var month =document.getElementById("month");
        var monSelected=month.options[month.selectedIndex].value;
    var year =document.getElementById("year");
        var yearSelected=year.options[year.selectedIndex].value;


    if(daySelected==0 || monSelected == 00 || yearSelected == 0000)
        errorStr=errorStr+"<li>Please enter the valid date </li>";
        
    if(!deptStatus){
        errorStr = errorStr +"<li>Please select your Department </li>";
    }
    
    errorStr=errorStr+"</ul>";
    
    document.getElementById("error").innerHTML=errorStr;
}
