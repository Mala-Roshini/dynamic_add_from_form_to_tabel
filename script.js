var table = document.querySelector("table");

var addRow = document.querySelector("button");

var rowcount = 1;

addRow.addEventListener("click", () =>{
   event.preventDefault();
   const detailsObj = {};




   



   const checkBoxes = document.querySelectorAll('input[type=checkbox]');
   for(var j=0; j<checkBoxes.length; j++){
      console.log("hello");
   checkBoxes[j].addEventListener("change", function(){
      console.log("better");
      checkBoxes[0].setCustomValidity("Please select atleast two food type");
      console.log("good");
   });
   }
   


   const checkboxCount = document.querySelectorAll('input[type=checkbox]')[0];
   console.log(checkboxCount);
   
   const checkedCount = document.querySelectorAll('input[type=checkbox]:checked');
   console.log(checkedCount.length);
   // const checkboxLength = checkedCount.length;
   var checkboxValues = "";
   if(checkedCount.length >= 2){
      for(i=0; i<checkedCount.length; i++){
         checkboxValues = checkboxValues + checkedCount[i].value + ",";
      }
   }
   else {
      alert("Please select atleast 2 food items of your choices");
      return;
   }

   // else{
   //    alert("Please check atleast 2 food Items of your choice");
   // }
   detailsObj["firstnamekey"] = document.getElementById("fname").value;
   detailsObj["lastnamekey"] = document.getElementById("lname").value;
   detailsObj["addresskey"] = document.getElementById("address").value;
   detailsObj["pincodekey"] = document.getElementById("pincode").value;

   if(document.getElementById("malegender").checked){
      detailsObj["genderKey"] = document.getElementById("malegender").value;
   }
   else if(document.getElementById("femalegender").checked){
      detailsObj["genderKey"] = document.getElementById("femalegender").value;
   }
   else if(document.getElementById("othergender").checked){
      detailsObj["genderKey"] = document.getElementById("othergender").value;
   }
   else{
      detailsObj["genderKey"] = "";
   }

   detailsObj["selectFoodkey"] = checkboxValues;
   detailsObj["statekey"] = document.getElementById("state").value;
   detailsObj["countrykey"] = document.getElementById("country").value;

   var newRow = table.insertRow(rowcount);
 
   var fnameCell = newRow.insertCell(0);
   var lnameCell = newRow.insertCell(1);
   var addressCell = newRow.insertCell(2);
   var pincodeCell = newRow.insertCell(3);
   var genderCell = newRow.insertCell(4);
   var selectFoodCell = newRow.insertCell(5);
   var stateCell = newRow.insertCell(6);
   var cityCell = newRow.insertCell(7);
  
   fnameCell.innerText = detailsObj.firstnamekey;
   lnameCell.innerText = detailsObj.lastnamekey;
   addressCell.innerText = detailsObj.addresskey;
   pincodeCell.innerText = detailsObj.pincodekey;
   selectFoodCell.innerText = detailsObj.selectFoodkey;
   genderCell.innerText = detailsObj.genderKey;
   stateCell.innerText = detailsObj.statekey;
   cityCell.innerText = detailsObj.countrykey;



   rowcount++;
})




