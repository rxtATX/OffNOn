// Start of Code [Evan Towlerton]
const modal = document.querySelector(".hidden-modal-aw");
// Initiliaze the handleClickEvent function
const handleClickEvent = async (event) => {
    //Prevent the page from reloading
    event.preventDefault();

    // Setting variables to the user input data values from the front end form
    const subject = document.querySelector("#subject-input").value.trim();
    const description = document.querySelector("#description-input").value.trim();
    const urgency = document.querySelector("#urgency-input").value.trim();

    // Checks to make sure title / description / urgency 
    if (title && description && urgency) {

        // Make a fetch call to the API endpoint to create a new ticket
        const response = await fetch("/api/ticket", {
            method: 'POST',
            body: JSON.stringify({ subject, description, urgency }),
            headers: { 'Content-Type': "application/json" }
        })
    // Check if the response is successful, then get the data from the response
    if (response.ok) {
        const data = await response.json()
        // Redirect the user to the newly created ticket page
        document.location.replace(`/ticket/${data.id}`)
    } else {
        // If the response is not successful inform the user of the failure to create a ticket
        throw new Error("Failed to create ticket");
    }
    };
};

// Attach an event listener to the form with the id = ("#create")
// which listens for a click event and then calls the handleClickEvent function
// when the form is submitted

document
    .querySelector("#create")
    .addEventListener("click", handleClickEvent);

// Initialize the toggleNewTicket function on button click event
function toggleNewTicket() {
    // Make the newTicket modal visible to user by adding a new class which makes it visible
    modal.classList.toggle("show-modal-aw");
}

// Attach an event listener to the button with id = addBtn
// Listens for click to make the newTicket modal visible
document.getElementById("addBtn").addEventListener("click", toggleNewTicket);
