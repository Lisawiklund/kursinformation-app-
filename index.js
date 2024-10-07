const form = document.getElementById("form");
const username = document.getElementById("username1");
const password = document.getElementById("password1");

// Eventlistener för formulärets inlämning
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const signIn = {
        username: username.value,
        password: password.value,
    };

    // Fetch-anrop för att hämta studentdatan
    fetch('https://webbred2.utb.hb.se/~fewe/api/api.php?data=students', {
        method: 'GET',
        headers: {
            accept: 'application/json',
        },
    })
    .then((response) => response.json())
    .then((data) => {
        let isLoggedIn = false;

        data.forEach((item) => {
            if (item.login.username === signIn.username && item.login.password === signIn.password) {
                isLoggedIn = true;
                localStorage.setItem('loggedInUser', item.login.username);
                location.assign('Kursinformation.html');
            }
        });

        if (!isLoggedIn) {
            document.getElementById("fel").innerText = "Fel användarnamn eller lösenord. Försök igen.";
        }
    })
    .catch((error) => {
        console.error("Error:", error);
    });
});

// Logga ut-funktion
function loggaUt() {
    localStorage.removeItem('loggedInUser'); // Tar bort inloggningsdata
    location.assign('index.html'); // Omdirigerar till login-sidan
}
