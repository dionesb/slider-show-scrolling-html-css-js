function SliderShow() {
  const arrowLeft = document.querySelector('.slider-arrow-left')
  const arrowRight = document.querySelector('.slider-arrow-right')
  const imagesSlider = document.querySelector('#slider-images')
  const header = document.querySelector('#header')

  const imagesSliderArr = [...imagesSlider.children].map(image => ({
    image,
    container: image.querySelector('.container')
  }))

  let count = 0;

  function changeNavColor() {

    if (imagesSliderArr[count].image.className.includes('nav-dark')) {
      header.classList.toggle('dark', true)
    } else {
      header.classList.toggle('dark', false)
    }
  }

  function scrollImage(x, y) {
    imagesSlider.scrollBy(x, y)
  }

  function hiddenContainer() {
    imagesSliderArr.map(image => image.container.classList.toggle('active', false))
  }

  function handleContainer() {

    if (imagesSliderArr[count].container) {
      hiddenContainer()
      imagesSliderArr[count].container.classList.toggle('active', true)
    }
  }

  function listenForChange() {

    arrowLeft.addEventListener('click', () => {
      if (count <= 0) {
        count = 0
      } else {
        count -= 1
        handleContainer()
      }

      changeNavColor()
      scrollImage(-300, 0)
    })

    arrowRight.addEventListener('click', () => {
      if (count >= imagesSliderArr.length - 1) {
        count = imagesSliderArr.length - 1
      } else {
        count += 1
        handleContainer()
      }

      changeNavColor()
      scrollImage(300, 0)
    })
  }

  function init() {
    handleContainer()
    changeNavColor()
    listenForChange()
  }

  return {
    init
  }
}

window.addEventListener('load', () => {
  const sliderShow = SliderShow()
  sliderShow.init()
})
