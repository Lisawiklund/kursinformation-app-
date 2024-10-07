//Hämtar först de tags och id:s som jag ska använda och ger de ett namn.
const body = document.querySelector("body");
const form = document.getElementById("form");
const username = document.getElementById("username1");
const password = document.getElementById("password1");

//Läger till en eventlyssnare till submit knappen.
/*Genom preventdefault hindrar jag eventet att ske automatiskt vid klick på logga in, 
alltså vi derigeras inte om till nästa sida utan gör det med javascript senare istället*/
form.addEventListener('submit', (event) => {
        event.preventDefault()
    /*Deklarerar värdet av username och password till signIn. Och säger att username ska vara värdet av username 
    och password ska vara värdet av password*/
    const signIn = {
        username: username.value,
        password: password.value,
    }

//Hämtar studen datan genom fetch GET metoden.
    fetch('http://webbred2.utb.hb.se/~fewe/api/api.php?data=students', {
        method: 'GET',
        headers: {
            accept: 'application/json',
        },
        

    })

//Skickar in och tar emot data i json format.
        .then((response) => response.json())
        .then((data) => {
            data.forEach((item) => {
                /* Kollar om username och password stämmer med if och else och tar användaren till Kursinformations
                sidan om påståendet stämmer. Om påståendet inte stämmer körs innehållet i else. */
                if (item.login.username === signIn.username && item.login.password === signIn.password) {
    ////Username doesnt show up when logged into "Kursinformation.html" page. It only shows when I go back to the previous page.
                    body.innerHTML = `<div>
                
                 Inloggad som: ${item.login.username} 
                </div>`

                location.assign('Kursinformation.html')
            
            }
                   // När username eller password är fel visas den här texten.
                 else { 
              
                    document.getElementById("fel").innerText ="Fel användarnamn eller lösenord. Försök igen."; 
                   
                }   
        
                   
                console.log(item.login.username)
                console.log(item.login.password)
            })
            console.log(data)
        })
     //Om det blir något fel i koden visas detta meddelande i console.log "error".
   .catch(error => console.log("Error: ", error));

    console.log(username.value, password.value)
})
