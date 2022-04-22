const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('activo')
    })
    tabs.forEach(tab => {
      tab.classList.remove('activo')
    })
    tab.classList.add('activo')
    target.classList.add('activo')
  })
})