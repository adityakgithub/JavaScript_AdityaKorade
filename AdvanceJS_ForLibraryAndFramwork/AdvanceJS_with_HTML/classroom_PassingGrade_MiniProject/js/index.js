const gradesForm = document.querySelector("#grades-form");
const yourGrade = document.querySelector("#your-grade");

const grades = [12, 19, 10, 4, 15, 9];

/** @param {number[]} grades */
const getNumberOfGrades = grades => {
    // TODO: return the number of grades
    console.log(grades.length)
   return grades.length; 
}

/** @param {number[]} grades */
const getSumGrades = grades => {
    // TODO: return the sum of all the grades
    let sum=0;
    grades.forEach((grade)=>sum+=grade)
    return sum;
}

/** @param {number[]} grades */
const getAverageValue = grades => {
    // TODO: return the average value of all grades (sum of all grades divided by the total number of grades)
    let sum=0,avg=0;
    grades.map((grade)=>sum+=grade)
    return sum/grades.length;
    
}

/** @param {number[]} grades */
const getPassingGrades = grades => {
    // TODO: return all passing grades (10 and above)
    return grades.filter(grade=>grade>=10)
}

/** @param {number[]} grades */
const getFailingGrades = grades => {
    // TODO: return all failing grades (9 and below)
    return grades.filter(grade=>grade<10)
}

/** @param {number[]} grades */
const getRaisedGrades = grades => {
    // TODO: return all the grades raised by 1 (grades should not exceed 20)
    return grades.map(gra=>gra<20? gra+1: gra)

}

const renderStats2Table = grades => {
    const tbody = document.querySelector("#stats-table2 tbody");
    tbody.innerHTML = `<tr>
        <td>${getPassingGrades(grades)}</td>
        <td>${getFailingGrades(grades)}</td>
        <td>${getRaisedGrades(grades)}</td>
    </tr>`;
}

const renderStatsTable = grades => {
    const tbody = document.querySelector("#stats-table tbody");
    tbody.innerHTML = `<tr>
        <td>${getNumberOfGrades(grades)}</td>
        <td>${getSumGrades(grades)}</td>
        <td>${getAverageValue(grades)}</td>
    </tr>`;
}

const render = grades => {
    console.log("Grades: " + grades.join(', '));
    renderStatsTable(grades);
    renderStats2Table(grades);
}

gradesForm.addEventListener("submit", event => {
    event.preventDefault();
    const newGrade = Number.parseInt(yourGrade.value, 10);
    grades.push(newGrade);
    yourGrade.value = "";
    render(grades);
});

render(grades);


