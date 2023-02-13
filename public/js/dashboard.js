const ticketStatus = document.querySelector("#ticket-btns");

ticketStatus.addEventListener("click", function(event) {
  var status = event.target;

  if (status.matches("button")) {
    var filter = status.getAttribute("id");
    if (filter === "all") {
     return window.location.replace(`/`)
    }
    window.location.replace(`/${filter}`)
  }
  
});

const showClaimBtn = (status) => {
// .claim
}