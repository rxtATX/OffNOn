// Start of Code [Evan Towlerton]

// Find the close button for the modal in the DOM with the class "close"
const closeButton = document.querySelector('.close');

// If the close button exists then run the toggleDrawer function
if (closeButton) {
    function toggleDrawer() {
        // Finds the drawer element in the DOM and sets it to a variable
        const drawer = document.querySelector('#modal');
        // If the drawer element exists remove the class show
        // By removing the show class this will close the modal 
        if (drawer) {
            drawer.classList.remove('show');
        }
    }
}

// Attach event listener to close button to run toggleDrawer function when clicked
closeButton.addEventListener('click', toggleDrawer);

// A script source tag will need to be implemented in the dashboard.handlebars 