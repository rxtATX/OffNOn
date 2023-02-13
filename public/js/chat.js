// Start of Code 

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

    // Send a PUT request to the server to update the hidden value for the
    // selected chat log
    const response = await fetch(`/api/ticket/${data.id}`)
}