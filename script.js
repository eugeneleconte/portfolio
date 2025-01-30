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

// Récupération du nom du fichier
const fileName = window.location.pathname.split('/').pop();

// Ajout d'un événement clic à chaque bouton
if (toggleButtons) {
    toggleButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            menus[index].classList.toggle('open');

            // Définition du texte du bouton en fonction du fichier et de l'état du menu
            let showMoreText = "-- voir plus --";
            let showLessText = "-- voir moins --";

            if (fileName === "about.html") {
                showMoreText = "-- show more --";
                showLessText = "-- show less --";
            }

            button.textContent = menus[index].classList.contains('open') ? showLessText : showMoreText;
        });
    });
}



document.addEventListener('DOMContentLoaded', () => {
  const burgerImg = document.querySelector('.burger-icon img');

  if (burgerImg) {
    const updateImageOnScroll = () => {
      const viewportWidth = window.innerWidth;
      const scrollY = window.scrollY;

      // Récupérer l'URL actuelle de l'image
      const currentSrc = burgerImg.src;

      // Extraire la partie après 'image/'
      const baseUrl = currentSrc.split('image/')[0] + 'image/';
      let newImage = '';

      if (viewportWidth <= 800 && viewportWidth > 649 && scrollY >= 416) {
        newImage = 'emoji_burger_flashblue.png';
      } else if (viewportWidth <= 649 && scrollY >= 456) {
        newImage = 'emoji_burger_flashblue.png';
      } else {
        newImage = 'emoji_burger.png';
      }

      // Mettre à jour uniquement la partie de l'image
      if (currentSrc.split('image/')[1] !== newImage) {
        burgerImg.src = baseUrl + newImage;
      }
    };

    // Écoute les événements de scroll et de redimensionnement
    window.addEventListener('scroll', updateImageOnScroll);
    window.addEventListener('resize', updateImageOnScroll);
  }
});


