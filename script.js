const navMenu = document.getElementById("nav-menu");
navToggle = document.getElementById("nav-toggle");
navClose = document.getElementById("nav-close");

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav_link");

function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*==================== SKILLS ====================*/
const skillsContent = document.getElementsByClassName("skills_content");

skillsHeader = document.querySelectorAll(".skills_header");

function toggleSkills() {
    let itemClass = this.parentNode.className;

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = "skills_content skills_close";
    }
    if (itemClass == "skills_content skills_close") {
        this.parentNode.className = "skills_content skills_open";
    }
}

skillsHeader.forEach((element) => {
    element.addEventListener('click', toggleSkills);
})

/*==================== QUALIFICATION ====================*/
const tabs = document.querySelectorAll('[data-target]')
tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {

        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification_active')
        })
        target.classList.add('qualification_active')

        tab.forEach(tab => {
            tab.classList.remove('qualification_active')
        })
        tab.classList.add('qualification_active')
    })
})



/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight

        const sectionTop = current.offsetTop - 50;

        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag

    if (this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL TOP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'
// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')

const selectedIcon = localStorage.getItem('selected-icon')


// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'

const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}
// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)

    themeButton.classList.toggle(iconTheme)





    
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())

    localStorage.setItem('selected-icon', getCurrentIcon())


})

// slider

let container1 = document.getElementById("portfolio_img001");
// container2.style.marginLeft = "80px";

let img1 = document.createElement("img");
img1.style.width = "600px";
img1.style.height = "320px";
img1.style.borderRadius = "0.5rem";

container1.appendChild(img1);


let imageArr = [
  "./images/stayBNB.png",
  "./images/STAYBNimage-1.png",
  "./images/STAYBNBimage-2.png",
  "./images/STAYBNBimage-3.png",
  "./images/STAYBNBimage-10.png",
];

let index = 0;

setInterval(() => {
  if (index >= imageArr.length) {
    index = 0;
  }
img1.src = imageArr[index++];
}, 1500);


// 2nd project

let container2 = document.getElementById("portfolio_img002");
// container2.style.marginLeft = "80px";

let img2 = document.createElement("img");
img2.style.width = "600px";
img2.style.height = "320px";
img2.style.borderRadius = "0.5rem";

container2.appendChild(img2);


let imageArr2 = [
    "./images/project logo.png",
    "./images/sun003.png",
  "./images/sunshine.png",
  "./images/sun004.png",
  "./images/sun001.png",

];

let index2 = 0;

setInterval(() => {
  if (index2 >= imageArr2.length) {
    index2 = 0;
  }
img2.src = imageArr2[index2++];
}, 1500);


// 3rd project

let container3 = document.getElementById("portfolio_img003");
// container2.style.marginLeft = "80px";

let img3 = document.createElement("img");
img3.style.width = "600px";
img3.style.height = "320px";
img3.style.borderRadius = "0.5rem";

container3.appendChild(img3);


let imageArr3 = [
  "./images/clone1.png",
  "./images/clone2.png",
  "./images/clone3.png",
  "./images/clone4.png",
  "./images/clone 5.png",
];

let index3 = 0;

setInterval(() => {
  if (index3 >= imageArr3.length) {
    index3 = 0;
  }
img3.src = imageArr3[index3++];
}, 1500);



// 3nd project

let container4 = document.getElementById("portfolio_img004");
// container2.style.marginLeft = "80px";

let img4 = document.createElement("img");
img4.style.width = "600px";
img4.style.height = "320px";
img4.style.borderRadius = "0.5rem";

container4.appendChild(img4);


let imageArr4 = [
    "./images/navbar.png",
  "./images/Hemburger.png",
  "./images/Body-Figma1.png",
  "./images/Body-Figma2.png",
  "./images/footer.png",
];

let index4 = 0;

setInterval(() => {
  if (index4 >= imageArr4.length) {
    index4 = 0;
  }
img4.src = imageArr4[index4++];
}, 1500);


// resume

document.getElementById('resume-button-1').addEventListener('click', function() {
  window.open(
    "https://drive.google.com/file/d/1H8YSrCP0h9QYALPROIP6dgAaPxa3YQU8/view"
  );
});

document.getElementById('resume-button-2').addEventListener('click', function() {
  window.open(
    "https://drive.google.com/file/d/1H8YSrCP0h9QYALPROIP6dgAaPxa3YQU8/view"
);
});



