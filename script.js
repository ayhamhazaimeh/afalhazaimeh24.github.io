function validateForm() {
    var name = document.getElementById("fullname").value.trim();
    var email = document.getElementById("email").value.trim();
    var country = document.getElementById("country").value.trim();
    var comments = document.getElementById("comments").value.trim();

    if (name === "") {
        alert("Please fill in your Full Name");
        return;
    }
    if (email === "") {
        alert("Please fill in your Email");
        return;
    }
    if (country === "") {
        alert("Please fill in your Country");
        return;
    }
    if (comments === "") {
        alert("Please fill in your Comments");
        return;
    }

    // All fields are filled — show the contact modal
    document.getElementById("contactModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("contactModal").style.display = "none";
}