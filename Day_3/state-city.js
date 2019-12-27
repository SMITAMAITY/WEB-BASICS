function populateCity(){
    var xhr= new XMLHttpRequest();
    xhr.open("GET","state-city.json", true);
    xhr.responseType= "text";
    xhr.send();

    xhr.onload = function(){
        if(xhr.status== 200){
         var data= JSON.parse(xhr.responseText);
         //console.log(data);
         var state = document.getElementById("state").value;

         //console.log(data.Karnataka);
         var cityHtml = "";
         if(state == "Karnataka")
         {
            for(var i=0;i<data.Karnataka.length;i++)
            {
                cityHtml = cityHtml+"<option>"+data.Karnataka[i]+"</option>";
            }
         }

         else if(state == "Maharashtra")
         {
            for(var i=0;i<data.Maharashtra.length;i++)
            {
                cityHtml = cityHtml+"<option>"+data.Maharashtra[i]+"</option>";
            }
         }

         else if(state == "West Bengal")
         {
            for(var i=0;i<data["West Bengal"].length;i++)
            {
                cityHtml = cityHtml+"<option>"+data["West Bengal"][i]+"</option>";
            }
         }

         else if(state == "Jharkhand")
         {
            for(var i=0;i<data.Jharkhand.length;i++)
            {
                cityHtml = cityHtml+"<option>"+data.Jharkhand[i]+"</option>";
            }
         }

         else if(state == "Odisha")
         {
            for(var i=0;i<data.Odisha.length;i++)
            {
                cityHtml = cityHtml+"<option>"+data.Odisha[i]+"</option>";
            }
         }
         document.getElementById("city").innerHTML = cityHtml;
        }
    }
}