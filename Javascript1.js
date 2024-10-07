//Hämtar data till console.log
fetch("https://webbred2.utb.hb.se/~fewe/api/api.php?data=quiz")
.then(res => res.json())
.then(data => {
    console.log("Quiz data:", data);  // Kontrollera att datan faktiskt hämtas

    //Hämtar data i json format och skriver ut den i i form av en lista med hjälp av div element.
    data.forEach(quiz => {
        // Skapar en lista av datan för att visa
        const lista = `<div>
            <div><strong>Fråga:</strong> ${quiz.question}?</div> 
            <div><strong>Svar:</strong> ${quiz.correct_answer} <br> 
            <em>Felaktiga svar:</em> ${quiz.incorrect_answers.join(', ')}</div><br>
        </div>`;

        // Anger position om hur texten i listan ska visas, alltså varje stycke efter varandra.
        document.querySelector("#output2").insertAdjacentHTML("beforeend", lista);
    });
})
.catch(error => console.log("Error fetching quiz data:", error));
