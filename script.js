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

if(openForm && closeForm && formOverlay){
    openForm.addEventListener("click", (e) => {
        e.preventDefault();
        formOverlay.style.right = "0"; // Display form on the right
    });

    closeForm.addEventListener("click", () => {
        formOverlay.style.right = "-100%"; // Hide form
    });
}

// Handle form submission
const form = document.getElementById("popupForm");
if (form){
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
}    

//WHEN SCROLLING
const hiddenHeaders = document.querySelectorAll('.hiddenheader');
const headerLeft = document.querySelectorAll('header-left');

if (hiddenHeaders.length > 0) {
    window.addEventListener('scroll', () => {
        if (window.innerWidth > 800){
           const isNearTop = window.scrollY < 160; // 10rem = 160px

            hiddenHeaders.forEach(headers => {
                // Si ce n'est pas une image, gère la visibilité en fonction du scroll
                if (isNearTop) {
                    headers.classList.remove('hidden');
                } else {
                    headers.classList.add('hidden');
                }
            })
        }
    });
};


// Sélection des boutons et menus
const toggleButtons = document.querySelectorAll('.toggle-button');
const menus = document.querySelectorAll('.cv-menu');

// Ajout d'un événement clic à chaque bouton
if (toggleButtons){
    toggleButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            menus[index].classList.toggle('open');
            // Change le texte du bouton en fonction de l'état du menu
            if (menus[index].classList.contains('open')) {
                button.textContent = ` -- voir moins --`;
            } else {
                button.textContent = `-- voir plus --`;
            }
        });
    });
};



//changement de burger-icon en flashblue
document.addEventListener('DOMContentLoaded', () => {
  const burgerImg = document.querySelector('.burger-icon img');

    if(burgerImg){
        const updateImageOnScroll = () => {
            const viewportWidth = window.innerWidth;
            const scrollY = window.scrollY;

           if (viewportWidth <= 800 && viewportWidth > 649 && scrollY >= 416) {
                if (burgerImg.src !== '../image/emoji_burger_flashblue.png') {
                    burgerImg.src = '../image/emoji_burger_flashblue.png';
                }
            } else if (viewportWidth <= 649 && scrollY >= 456) {
                if (burgerImg.src !== '../image/emoji_burger_flashblue.png') {
                    burgerImg.src = '../image/emoji_burger_flashblue.png';
                }
            } else {
                if (burgerImg.src !== '../image/emoji_burger.png') {
                burgerImg.src = '../image/emoji_burger.png';
                }
            }
        };

      // Écoute les événements de scroll et de redimensionnement
      window.addEventListener('scroll', updateImageOnScroll);
      window.addEventListener('resize', updateImageOnScroll);
    }
});
