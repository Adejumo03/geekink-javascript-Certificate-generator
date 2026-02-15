// ==============================
// SELECT ELEMENTS FROM HTML
// ==============================

// Inputs
const studentNameInput = document.getElementById("studentName");
const courseNameInput = document.getElementById("courseName");
const dateInput = document.getElementById("date");

// Buttons
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");

// Certificate preview container
const certificate = document.getElementById("certificate");

// Preview text elements
const previewName = document.getElementById("previewName");
const previewCourse = document.getElementById("previewCourse");
const previewDate = document.getElementById("previewDate");


// ==============================
// GENERATE CERTIFICATE FUNCTION
// ==============================

generateBtn.addEventListener("click", function () {

  // Get values from inputs
  const studentName = studentNameInput.value.trim();
  const courseName = courseNameInput.value.trim();
  const date = dateInput.value;

  // Validate inputs
  if (studentName === "" || courseName === "" || date === "") {
    alert("Please fill all fields");
    return;
  }

  // Convert date to readable format
  const formattedDate = new Date(date).toDateString();

  // Update preview content
  previewName.textContent = studentName;
  previewCourse.textContent = courseName;
  previewDate.textContent = formattedDate;

  // Show certificate preview
  certificate.classList.remove("hidden");

  // Show download button
  downloadBtn.classList.remove("hidden");
});


// ==============================
// DOWNLOAD CERTIFICATE FUNCTION
// ==============================

downloadBtn.addEventListener("click", function () {

  // Use html2canvas to convert certificate to image
  html2canvas(certificate).then(function(canvas) {

    // Convert canvas to image
    const image = canvas.toDataURL("image/png");

    // Create download link
    const link = document.createElement("a");

    link.href = image;
    link.download = "GeekInk Certificate.png";

    // Trigger download
    link.click();

  });

});
