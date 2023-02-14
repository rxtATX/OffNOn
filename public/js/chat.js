// Start of Code 

/////////////////////////////////////////////////////////////////////////////////////////
// Hidden Span Toggle Listener [Evan Towlerton]

// Selects all elements with class of "hide-eye"
const hideEyeElements = document.querySelectorAll('.hide-eye');

// Define the toggleHidden function, which will be called in response to a click event
// on the any elements with the class 'hide-eye'
const toggleHidden = async (event) => {
    // Get the current value of the "hidden" property from the clicked elements
    // "data-hidden" attribute
    const hidden = event.target.dataset.hidden === 'true';

    // Get the "id" property from the clicked elements "data-id" attribute
    const id = event.target.dataset.id;

    // Send a POST request to the server to update the hidden value for the
    // selected chat log
    const response = await fetch(`/api/ticket/${id}`, {
        method: 'POST',
        body: JSON.stringify({ is_hidden: !hidden }),
        headers: { 'Content-Type': 'application/json' }
    });

    // If the response is successful, reload the page
    if (response.ok) {
        location.reload();
    // Otherwise inform the user that the request failed
    } else {
        alert('Failed to update the chat logs visibility');
    }
};

// Add an event listener to each of the "hide-eye" elements
hideEyeElements.forEach(element => {
    element.addEventListener('click', toggleHidden);
});
//////////////////////////////////////////////////////////////////////////////////////////
// Submitting Chat Messages [Evan Towlerton]

// Target the chat log with a query selector
const form = document.querySelector('#chat-log-form');

// Define the submitNewMessage function which will be called in response to a click event
// on the element with the class 'submit-message'
const submitNewMessage = async (event) => {
    // Prevent the page from reloading
    event.preventDefault();

    // Find the ticketId from the window
    const ticketId = window.location.pathname.split('/').pop()

    // Capture the input field and checkbox values from the checkbox values from the form
    const input = form.querySelector('#message-input');
    const checkbox = form.querySelector('#is-hidden-input');

    // Checks to make sure the input value has any length
    if (input.value.length) {
        // Make a fetch call of the type POST
        const response = await fetch(`/api/log/${id}/`, {
            method: 'POST',
            body: JSON.stringify({
                log_text: input.value,
                is_hidden: checkbox.value,
                ticket_id: ticketId 
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        // If the response is successful set the response to the data variable
        // and run the renderNewMessage function on the recieved data
        if (response.ok) {
            const data = await response.json();
            renderNewMessage(data);
        // If unsuccessful alert the user that their message failed to post
        } else {
            alert('Failed to submit the new message');
        }
    };
};
// Add a submit event Listener to the chat log form
form.addEventListener('submit', submitNewMessage);

/////////////////////////////////////////////////////////////////////////////////////////////

// Render Chat Messages

// function renderNewMessage(data) {
   // const messageContainer = document.createElement('div');

    // const hiddenIcon = document.createElement('div');
    
    //if (data.is_hidden) {

    // }

    // const messageText = document.createElement('p');

    // messageText.textcontent = data.log_text;

    // messageContainer.appendChild(messageText);

    // Get the element to append the message container to
    // const messageList = document.querySelector('#message-list');

    // messageList.appendChild(messageContainer);

// }