const accordions = document.querySelectorAll('.faq__accordion-btn');

accordions.forEach((acc) => {
    acc.addEventListener('click', () => {
        acc.classList.toggle('faq__accordion-btn--active')

        let panel = acc.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
          }
    })
})