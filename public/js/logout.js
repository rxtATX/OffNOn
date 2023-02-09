console.log ('Logout.js has loaded.')

const logout = async () => {
    const response = await fetch ('/api/user/logout', {
        method: 'POST', 
        headers: {'Content-Type': 'application/json'},
    });

    if (response.ok) {
        document.location.replace('/login');
    } else {
        alert('Log out unsucceful. Please, try again.')
    }
};

document.querySelector('#logout').addEventListener('click', logout);