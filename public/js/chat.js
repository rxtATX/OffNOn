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
// Render Chat Messages [Evan Towlerton]

// Define the renderNewMessage function which will run on a successful response
// from the submitNewMessage function
 function renderNewMessage(data) {
    // Create a container div to hold the message and the hidden icon
    const messageContainer = document.createElement('div');

    // Create a div to hold the hidden icon
    const hiddenIcon = document.createElement('div');
    
    // If the message is hidden add specific classes to the icon to make its appearance
    // Change to represent hidden
    if (data.is_hidden) {
        hiddenIcon.classList.add('fa-solid', 'fa-eye-slash');

    // If the message is not hidden add specific classes to the icon to make its appearance
    // Change to represent shown
    } else {
        hiddenIcon.classList.add('fa-solid', 'fa-eye')
    }

    // Create a p element to hold the message text
    const messageText = document.createElement('p');

    // Set the text content of the p element to the log_text from the server response
    messageText.textcontent = data.log_text;

    // Append the hidden icon and message text to the message container
    messageContainer.appendChild(hiddenIcon);
    messageContainer.appendChild(messageText);

    // Get the message list element to append the message container to
    const messageList = document.querySelector('#message-list');

    // Append the message container to the message list
    messageList.appendChild(messageContainer);

};