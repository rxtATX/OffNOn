const ticketStatus = document.querySelector("#ticket-btns");

ticketStatus.addEventListener("click", function(event) {
  var status = event.target;

  if (status.matches("#unclaimed")) {
    var filter = status.getAttribute("data-state");

    // Use an if statement to conditionally render the number on the card
    if (filter === "visible") {
      // If the card is clicked while the state is "hidden", we set .textContent to the number 
      status.textContent = status.dataset.id;
      // Using the dataset property, we change the state to visible because the user can now see the number
      status.dataset.state = "hidden";
   
    } else {
      // 'Hide' the number by setting .textContent to an empty string
      status.textContent= "";
      // Use .setAttribute() method
      status.setAttribute("data-state", "hidden")
     
    }  
  }
  
});


const Resolved = document.querySelector('#resolved') 
.addEventListener('click', function(event) { 
  console.info(`Button Clicked!}`);
 });

const Claimed = document.querySelector('#claimed') 
.addEventListener('click', function(event) { 
  console.info(`Button Clicked!}`);
 });

const All = document.querySelector('#all') 
.addEventListener('click', function(event) { 
  console.info(`Button Clicked!}`);
 });




 const showClaimBtn = (status) => {
// .claim
 }
 const handleClickEvent = async (event) =>{
  event.preventDefault();

  const Unclaimed = document.querySelector('#unclaimed') 
.addEventListener('click', function(event) { 
  console.info(`Button Clicked!}`);
 });

const Pending = document.querySelector('#pending') 
.addEventListener('click', function(event) { 
  console.info(`Button Clicked!}`);
 });

 }

 document
 .querySelector('#ticket-btns')
 .addEventListener('click', handleClickEvent);