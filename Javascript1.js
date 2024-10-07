// Hämta kursinformation
fetch("https://webbred2.utb.hb.se/~fewe/api/api.php?data=courses")
.then(res => res.json())
.then(data => {
    data.forEach(course => {
        const row = `
        <tr>
            <td>${course.courseName}</td>
            <td>${course.credit}</td>
            <td>${course.startWeek}</td>
            <td>${course.endWeek}</td>
            <td>${course.teachers}</td>
        </tr>`;
        document.querySelector("#output > tbody").insertAdjacentHTML("beforeend", row);
    });
})
.catch(error => console.error("Error:", error));

// Hämta quiz-data
fetch("https://webbred2.utb.hb.se/~fewe/api/api.php?data=quiz")
.then(res => res.json())
.then(data => {
    data.forEach(quiz => {
        const question = `
        <div>
            <div>Fråga: ${quiz.question}</div>
            <div>Svar: ${quiz.correct_answer}, ${quiz.incorrect_answers.join(", ")}</div>
        </div>`;
        document.querySelector("#output2").insertAdjacentHTML("beforeend", question);
    });
})
.catch(error => console.error("Error:", error));
