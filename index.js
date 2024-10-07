//Hämtar först de tags och id:s som jag ska använda och ger de ett namn.
const body = document.querySelector("body");
const form = document.getElementById("form");
const username = document.getElementById("username1");
const password = document.getElementById("password1");

//Lägger till en eventlyssnare till submit-knappen.
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const signIn = {
        username: username.value,
        password: password.value,
    };

    //Hämtar studentdatan genom fetch GET metoden.
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
                // Kollar om username och password stämmer och loggar in.
                if (item.login.username === signIn.username && item.login.password === signIn.password) {
                    isLoggedIn = true;
                    localStorage.setItem('loggedInUser', item.login.username); // Spara inloggningen
                    location.assign('Kursinformation.html'); // Skickar användaren till Kursinformation-sidan.
                }
            });

            if (!isLoggedIn) {
                document.getElementById("fel").innerText = "Fel användarnamn eller lösenord. Försök igen.";
            }
        })
        .catch((error) => console.log("Error: ", error));
});

// Logga ut-funktion som rensar sessionen och skickar användaren tillbaka till login-sidan.
function loggaUt() {
    localStorage.removeItem('loggedInUser'); // Tar bort inloggningsinformation
    location.assign('index.html'); // Skickar tillbaka användaren till login-sidan.
}
