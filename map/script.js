var provinceList = document.querySelectorAll('#nepalmap > *')
var infoElement = document.getElementById('map-hover-info')
var activeProvince = ''

const restAll = () => {
  provinceList.forEach((element) => {
    element.classList.remove('active')
    activeProvince = ''
    infoElement.style.display = 'none'
  })
}

provinceList.forEach((element) => {
  element.addEventListener('mouseenter', (e) => {
    //show info
    if (activeProvince !== element.getAttribute('id')) {
      console.log('mouse enter')
      restAll()
      element.classList.add('active')
      infoElement.style.display = 'block'
      infoElement.style.top = e.y + 50 + 'px'
      infoElement.style.left = e.x + 'px'
      activeProvince = element.getAttribute('id')
    } else {
    }
  })
  element.addEventListener('mouseleave', () => {
    if (activeProvince !== element.getAttribute('id')) {
      console.log('mouse leave')
      restAll()
    }
  })

  element.addEventListener('mousemove', (e) => {
    if (activeProvince == element.getAttribute('id')) {
      console.log('mouse move')
      infoElement.style.top = e.y + 50 + 'px'
      infoElement.style.left = e.x + 'px'
    }
  })
})
