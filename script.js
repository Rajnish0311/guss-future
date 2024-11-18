// Form Validation
const input1 = document.getElementsByClassName("i1")[0]; // Access the first element with class "i1"
const input2 = document.getElementsByClassName("i2")[0]; // Access the first element with class "i2"

function validateform() {
    if (input1.value.trim() === "") { // Check if input1 is empty
        alert("naam likh bkl");
        return false;
    }
    if (input2.value.trim() === "") { // Check if input2 is empty
        alert("dob likh bkl");
        return false;
    }
    return true; // Form validation passed
}

document.getElementById("btn").addEventListener("click", function (event) {
    if (!validateform()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});

// Hide Content Initially
document.querySelectorAll(".hide").forEach(element => {
    element.style.visibility = "hidden";
});

// Show Content on Button Click
document.getElementById("kick").addEventListener("click", function () {
    document.querySelectorAll(".hide").forEach(element => {
        element.style.visibility = "visible"; // Show hidden content
    });
});


