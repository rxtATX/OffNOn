const submitEventHandler = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#ticketSubject').value.trim();
    const text = document.querySelector('#ticketDescription').value.trim();
    const urgency = document.querySelector('#urgencySelect').value.trim();
    const status = document.querySelector('#statusSelect').value.trim();

    
    const response = await fetch('/api/ticket/:id', {
        method: 'PUT',
        body: JSON.stringify({
            title,
            text,
            urgency,
            status
        }),
        headers: { 'Content-Type': 'application/json' }
    });
    console.log("Submitted")

    if (response.ok) {
        const data = await response.json()
        document.location.replace(`/ticket/${data.id}`)
    } else {
        alert('Ticket not Submitted. Please, try again.');
    }
};

document
    .querySelector('#ticketInfo')
    .addEventListener('submit', submitEventHandler);