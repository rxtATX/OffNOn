const submitEventHandler = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#ticketSubject').value.trim();
    const text = document.querySelector('#ticketDescription').value.trim();
    const urgency = document.querySelector('#urgencySelect').value.trim();
    const status = document.querySelector('#statusSelect').value.trim();
    const id = document.location.pathname.split("/").pop()
    if ( title && text && urgency && status){

        const response = await fetch(`/api/ticket/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                ticket_title: title,
                ticket_text: text,
                urgency: urgency,
                status: status
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        
        if (response.ok) {
            const data = await response.json()
            window.location.reload(`/ticket/${data.id}`)
        } else {
            alert('Ticket not Submitted. Please, try again.');
        }
    }
};

document
    .querySelector('#ticketInfo')
    .addEventListener('submit', submitEventHandler);


//initialize the function for the button/chat element click event
function chatlogModal () {
    if (modal.classList.contains ("hidden-modal-aw")) {
        modal.classList.remove ("hidden-modal-aw");
        modal.classList.add("show-modal-aw");
    } else{
        modal.classList.add("hidden-modal-aw");
        modal.classList.remove("show-modal-aw");
    }

    }


//
document.getElementById ("viewComment").addEventListener ("click", chatlogModal);

