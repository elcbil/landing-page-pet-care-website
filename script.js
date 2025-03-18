function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }

  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }

const swiper = new Swiper(".Stuff", {
slidesPerView: 3, 
spaceBetween: 10, 
loop: true,
breakpoints: {
  576: {
    slidesPerView: 4, 
    spaceBetween: 10,
  },
  768: {
    slidesPerView: 5, 
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 6, 
    spaceBetween: 20,
  },
  1200: {
    slidesPerView: 7, 
    spaceBetween: 25,
  },
},
});
