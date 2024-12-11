// Function to check the password and redirect to the second page
function checkPassword() {
  var password = document.getElementById("password").value.trim().toLowerCase();

  // Check if the entered password is correct
  if (password === "ticket to ride") {
    window.location.href = "congratulations.html";  // Redirect to congratulations page
  } else {
    alert("Incorrect password, please try again! You can use the hint.");
  }
}

// Function to show the hint text
function toggleHint() {
  var hintText = document.getElementById("hintText");
  hintText.classList.toggle("hidden");  
}

// Adding event listener for the submit button and hint button
document.getElementById("submitBtn").addEventListener("click", checkPassword);
document.getElementById("hintBtn").addEventListener("click", toggleHint);
