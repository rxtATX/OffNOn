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

/////////////////////////
const claimBtn = document.querySelectorAll('.claim');

const handleClaimEvent = async (event) => {
  event.preventDefault();
  const ID = await event.target.getAttribute('id');

  const response = await fetch(`/api/ticket/${ID}`, {
    method: 'PUT',
    body: JSON.stringify({
      status: 'Claimed'
    })
  });

  if (response.ok) {
    window.location.reload();
  } else {
    alert('Your claim was unsucessful. Try again or contact support.');
  }
}

claimBtn.forEach(event => event.addEventListener('click', handleClaimEvent));
