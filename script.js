document.getElementById("bookingForm").addEventListener("submit", function(event){

event.preventDefault();

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let phone=document.getElementById("phone").value;
let destination=document.getElementById("destination").value;

if(name=="" || email=="" || phone=="" || destination==""){

alert("Please fill all required fields.");

return;

}

alert("Your booking request has been submitted successfully!");

this.reset();

});