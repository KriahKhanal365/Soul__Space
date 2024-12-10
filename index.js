function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for contacting us! We will get back to you soon.");
  });
