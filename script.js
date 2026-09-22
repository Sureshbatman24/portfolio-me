// ========================================
// EMAILJS INITIALIZATION
// ========================================

emailjs.init({
    publicKey: "XSU15Cek0b2ESRT7A"
});


// ========================================
// THEME BUTTON
// ========================================

const themeButton = document.getElementById("themeButton");

if (themeButton) {

    themeButton.addEventListener("click", () => {

        document.body.classList.toggle("light");

        if (document.body.classList.contains("light")) {
            themeButton.textContent = "☀";
        } else {
            themeButton.textContent = "☾";
        }

    });

}


// ========================================
// CONTACT FORM - EMAILJS
// ========================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();

        // Change button while sending
        const submitButton = contactForm.querySelector("button[type='submit']");

        if (submitButton) {
            submitButton.textContent = "Sending...";
            submitButton.disabled = true;
        }

        // Send form through EmailJS
        emailjs.sendForm(
            "service_wsvvh8h",
            "template_vgoe70n",
            contactForm
        )

        .then(function(response) {

            console.log("SUCCESS!", response.status, response.text);

            alert(
                "Thank you, " + name +
                "!\n\nYour message has been sent successfully."
            );

            contactForm.reset();

        })

        .catch(function(error) {

            console.error("EmailJS Error:", error);

            alert(
                "Sorry! Your message could not be sent.\n\nPlease try again."
            );

        })

        .finally(function() {

            if (submitButton) {
                submitButton.textContent = "Send Message";
                submitButton.disabled = false;
            }

        });

    });

}


// ========================================
// NAVBAR ACTIVE LINK
// ========================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});