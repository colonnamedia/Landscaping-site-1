const toggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("is-open", !open);
    document.body.classList.toggle("menu-open", !open);
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
      document.body.classList.remove("menu-open");
    });
  });
}

document.querySelectorAll("[data-year]").forEach((node) => {
  node.textContent = new Date().getFullYear();
});

const quoteForm = document.querySelector("[data-quote-form]");

if (quoteForm) {
  const requestedService = new URLSearchParams(window.location.search).get("service");
  const requestedCheckbox = quoteForm.querySelector(`[data-service="${CSS.escape(requestedService || "")}"]`);
  if (requestedCheckbox) requestedCheckbox.checked = true;

  quoteForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!quoteForm.reportValidity()) return;

    const selectedServices = quoteForm.querySelectorAll('[name="services"]:checked');
    const firstService = quoteForm.querySelector('[name="services"]');
    if (!selectedServices.length) {
      firstService.setCustomValidity("Choose at least one type of work.");
      firstService.reportValidity();
      firstService.setCustomValidity("");
      return;
    }

    const honeypot = quoteForm.querySelector('[name="website"]');
    if (honeypot?.value) return;

    const status = quoteForm.querySelector("[data-form-status]");
    const firstName = quoteForm.querySelector('[name="firstName"]')?.value.trim();
    status.textContent = `${firstName ? `${firstName}, t` : "T"}hanks for testing the quote form. This storefront demo validates the complete inquiry; a purchased website is connected to the customer's email or CRM before launch.`;
    status.classList.add("is-visible");
    status.setAttribute("tabindex", "-1");
    status.focus();
    quoteForm.reset();
  });
}
