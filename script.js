// Function to navigate between pages
function goToPage(pageNumber) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.add('hidden');
    });

    // Show the selected page
    document.getElementById(`page${pageNumber}`).classList.remove('hidden');
}

// Function to navigate to the home page
function goToHome() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;

    // Here, you can save user data (if needed)
    console.log("User Data:", { name, age, gender });

    // Navigate to the home page
    window.location.href = "homepage.html";
}

// Automatically transition from the logo page to onboarding Page 2
window.onload = function () {
    setTimeout(() => {
        goToPage(2); // Automatically move to Page 2 after 5 seconds
    }, 5000); // 5 seconds delay
};
