const submitEvenHandler = async (event) => {
    event.preventDefault();

};

document
    .querySelector('#ticketInfo')
    .addEventListener('submit', submitEvenHandler);