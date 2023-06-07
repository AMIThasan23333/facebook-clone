

const menuItems = document.querySelectorAll(".menu-item")

  const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active')
    })
  }


  menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem()
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notofications-popup').style.display = 'none'
        }
        else {
            document.querySelector('.notofications-popup').style.display ='block';

            document.querySelector('.notification-count').style.display='none';
            
        }
    })
  })