function calculateSalary() {
    const basicSalary = parseFloat(document.getElementById("basicSalary").value);

    if (isNaN(basicSalary)) {
        alert("Please enter a valid Basic Salary.");
        return;
    }

    const DA = 0.8 * basicSalary;
    const HRA = 0.3 * basicSalary;
    const TA = 0.1 * basicSalary;

    const finalSalary = basicSalary + DA + HRA + TA;

    const resultMessage = `
        Basic Salary: Rs${basicSalary.toFixed(2)}<br>
        DA (80% of Basic Salary): Rs${DA.toFixed(2)}<br>
        HRA (30% of Basic Salary): Rs${HRA.toFixed(2)}<br>
        TA (10% of Basic Salary): Rs${TA.toFixed(2)}<br>
        Final Salary: Rs${finalSalary.toFixed(2)}
    `;

    document.getElementById("result").innerHTML = resultMessage;
}