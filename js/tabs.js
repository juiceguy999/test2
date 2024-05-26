const tabItems = document.querySelectorAll('#faqBtn')
const tabContents = document.querySelectorAll('.faq__tab-item')

tabItems.forEach((tabItem) => {
    tabItem.addEventListener('click', (e) => {
        const tabTarget = e.currentTarget;
        const button = tabTarget.dataset.button;

        tabItems.forEach((item) => {
            item.classList.remove('faq__tabs-btn--active')
        })

        tabContents.forEach((item) => {
            item.classList.remove('faq__tab-item--active')
        })

        tabTarget.classList.add('faq__tabs-btn--active');
        document.querySelector(`#${button}`).classList.add('faq__tab-item--active');
    })
})