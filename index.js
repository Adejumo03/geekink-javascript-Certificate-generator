const csvFileInput = document.getElementById("csvFile");
const generateCSVBtn = document.getElementById("generateCSVBtn");

const certificate = document.getElementById("certificate");

const previewName = document.getElementById("previewName");
const previewCourse = document.getElementById("previewCourse");
const previewDate = document.getElementById("previewDate");


generateCSVBtn.addEventListener("click", function () {

    const file = csvFileInput.files[0];

    if (!file) {
        alert("Please upload a CSV file first.");
        return;
    }

    const reader = new FileReader();

    reader.onload = function (event) {

        const csvData = event.target.result;

        const rows = csvData.split("\n").slice(1);

        generateCertificates(rows);

    };

    reader.readAsText(file);

});


async function generateCertificates(rows) {

    certificate.classList.remove("hidden");

    for (let i = 0; i < rows.length; i++) {

        if (rows[i].trim() === "") continue;

        const columns = rows[i].split(",");

        const studentName = columns[0];
        const courseName = columns[1];
        const date = new Date(columns[2]).toDateString();

        previewName.textContent = studentName;
        previewCourse.textContent = courseName;
        previewDate.textContent = date;

        await wait(500);

        const canvas = await html2canvas(certificate);

        const image = canvas.toDataURL("image/png");

        downloadImage(image, studentName);

        await wait(500);

    }

}


function downloadImage(image, studentName) {

    const link = document.createElement("a");

    link.href = image;

    link.download = studentName + " Certificate.png";

    link.click();

}


function wait(ms) {

    return new Promise(resolve => setTimeout(resolve, ms));

}
