fetch('https://webbred2.utb.hb.se/~fewe/api/api.php?data=students', {
    method: 'GET',
    headers: {
        accept: 'application/json',
    },
})
    .then((response) => {
        console.log("API Response Status:", response.status); // Logga API-svarstatus
        return response.json();
    })
    .then((data) => {
        console.log("API Data:", data); // Logga API-svar
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
        console.log("Fetch Error:", error); // Logga eventuella fel
    });
