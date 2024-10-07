//Hämtar data till console.log
fetch("http://webbred2.utb.hb.se/~fewe/api/api.php?data=quiz")
.then(res => res.json())
.then(data => console.log(data))

//Hämtar data till console.log
fetch("http://webbred2.utb.hb.se/~fewe/api/api.php?data=courses")
.then(res => res.json())
.then(data => console.log(data))

//Courses
//Hämtar data i json format och skriver ut den i en tabell.
fetch("http://webbred2.utb.hb.se/~fewe/api/api.php?data=courses", {
    method: "GET"
})
   .then(res => res.json())
   .then(data => {
     data.forEach(courses => {
       const kurser = `<tr> 
       <td>${courses.courseName}</td> 
       <td> ${courses.credit}</td>
        <td> ${courses.startWeek}</td> 
        <td> ${courses.endWeek}</td>
        <td> ${courses.teachers}</td>
      </tr>`;
       document.querySelector("#output > tbody").insertAdjacentHTML("beforeend", kurser)
     })
   }) //Om det blir något fel i koden visas detta meddelande i console.log "error".
      .catch(error => console.log("Error: ", error));

   //Quiz
   //Hämtar data i json format och skriver ut den i i form av en lista med hjälp av div element.
   fetch("http://webbred2.utb.hb.se/~fewe/api/api.php?data=quiz", {
    method: "GET"
})
   .then(res => res.json())
   .then(data => {
     data.forEach(quiz => { //Skapar en lista av datan för att visa
       const lista = `<div> 
    <div> Fråga: <br>  ${quiz.question}? </div> <br>
    <div> Svar: <br>  ${quiz.correct_answer }   ${quiz.incorrect_answers}</div> <br>
                    </div>`; //Anger position om hur texten i listan ska visas, alltså varje stycke efter varandra.
       document.querySelector("#output2 > div").insertAdjacentHTML("beforeend", lista)
     })
   })  //Om det blir något fel i koden visas detta meddelande i console.log "error".
   .catch(error => console.log("Error: ", error));