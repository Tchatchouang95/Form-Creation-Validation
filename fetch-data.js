async function fetchUserData() {

    //Url which points to the API endpoint from which data will be fetched
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    const dataContainer = document.getElementById('api-data');

    //Fetching data using the try/catch method
    try {
        const response = await fetch(apiUrl);
        const users = await response.json();

        //Clear the loading message
        dataContainer.innerHTML = '';

        //Creating and appending User list
        const userList = document.createElement('ul');

        //Looping through the fetched user's array
        users.forEach(user => {
            const userName = document.createElement('li');//Creating a 'li' element for each user
            userName.textContent = user.name;//Set the textcontent of each element with the user.name
            userList.appendChild(userName); // Appending the 'li' to the 'ul'
        });
        //Appending the 'ul' to the 'div' container
        dataContainer.appendChild(userList);
    }
    //Catching errors that occured occured during the fetching
    catch {
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
    }
};
//eventListener which ensures data fetching logic runs once the HTML document has fully loaded
document.addEventListener('DOMContentLoaded', function () {
    fetchUserData();
})