const data = [["Carbs", "17g"], ["Protein", "19g"], ["Fat", "5g"]];

const renderTableRows = rows => {
    console.log(rows);
    let html2 = rows.map(
        row=> `<tr>
                    <td>${row[0]}</td>
                    <td>${row[1]}</td>
              </tr>`
    )
    return html2.join("");

}

const html = renderTableRows(data);

const tbody = document.querySelector("#nutrition-table tbody");
tbody.insertAdjacentHTML("beforeend", html);