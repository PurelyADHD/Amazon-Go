function startup() {
  // adding form verification
    document.forms.Contact.onsubmit = verifyContactForm;
 // turning off form validation
 document.forms.Contact.noValidate = true;
}
function fixContactDefaults() {
}
// list of required fields
required = ["fname","lname","email"];
function verifyContactForm(e) {
 //prevent submission
    e.preventDefault();
 
 //loops through the inputs
 for(var i=0;i<required.length;i++) {
  //  finds the input using the BROM
  var name = required[i];
  var tag =e. target[name];
  // Promps if the input is empty
  if (tag.value == "") {
   tag.value = prompt("What is your "+tag.parentElement.innerText+"?");
  }
 }
}