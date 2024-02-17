console.log('Another customer is approaching');

fetch('https://randomuser.me/api/?results=1')
    .then(response => response.json())
    // .then(data => console.log(data.results[0]));
    .then(data => data.results[0]);

console.log(`Our valued customer, please
    give me a moment while I get some
    information back from the Records Dept`);


function fetchData() {
    return fetch('https://randomuser.me/api/?results=1')
        .then(response => response.json());
}


function fetchManyData(numUsers) {
    return fetch(`https://randomuser.me/api/?results=${numUsers}`)
        .then(response => response.json());
}



function formatUserData(user) {
    return `
        <div>
            <p>Name: ${user.name.first} ${user.name.last}</p>
            <p>Email: ${user.email}</p>
            <p>Phone: ${user.phone}</p>
            <img src="${user.picture.large}" alt="User Picture">
        </div>
    `;
}


function updateUserData() {
    fetchData()
        .then(data => {
            const user = data.results[0];
            const userDataHTML = formatUserData(user);
            document.getElementById('userDataContainer').innerHTML = userDataHTML;
        })
        .catch(error => console.error('Error fetching data:', error));
}


function formatAllUsersData(users) {
    let userDataHTML = '';
    users.forEach(user => {
        userDataHTML += `
            <div>
                <p>Name: ${user.name.first} ${user.name.last}</p>
                <p>Email: ${user.email}</p>
                <p>Phone: ${user.phone}</p>
                <img src="${user.picture.large}" alt="User Picture">
            </div>
        `;
    });
    return userDataHTML;
}

function updateAllUsersData(numUsers) {
    fetchManyData(numUsers)
        .then(data => {
            const userDataHTML = formatAllUsersData(data.results);
            document.getElementById('manyUsersDataContainer').innerHTML = userDataHTML;
        })
        .catch(error => console.error('Error fetching data:', error));
}


function clearUserData() {
    document.getElementById('userDataContainer').innerHTML = '';
    document.getElementById('manyUsersDataContainer').innerHTML = '';   
}


// updateUserData();