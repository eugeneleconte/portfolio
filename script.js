//SIDENAV

var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 30px */
function openNav() {
  sidenav.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  sidenav.classList.remove("active");
}


//FORMULAIRE
// Show and hide the form
const openForm = document.getElementById("open-form");
const closeForm = document.getElementById("close-form");
const formOverlay = document.getElementById("form-overlay");

openForm.addEventListener("click", (e) => {
    e.preventDefault();
    formOverlay.style.right = "0"; // Display form on the right
});

closeForm.addEventListener("click", () => {
    formOverlay.style.right = "-100%"; // Hide form
});

// Handle form submission
const form = document.getElementById("popupForm");
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    const name = document.getElementById("name").value.trim();
    const firstname = document.getElementById("firstname").value.trim();
    const email = document.getElementById("email").value.trim();

    if (name && firstname && email) {
        // Construct the mailto link
        const subject = encodeURIComponent("Présentation d'un des projets réalisés");
        const body = encodeURIComponent(`Request: ${document.getElementById("request").value}\nNom: ${name}\nPrénom: ${firstname}\nEmail: ${email}`);
        window.location.href = `mailto:eugeneleconte@outlook.com?subject=${subject}&body=${body}`;

        // Hide the form after submission
        formOverlay.style.right = "-100%";
    } else {
        alert("Veuillez remplir tous les champs correctement.");
    }
});