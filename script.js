

const menuItems = document.querySelectorAll(".menu-item")
const messagesNotifiacation =document.querySelector("#messages-notifications")
const messages = document.querySelector('.messages')
const message = document.querySelectorAll('.message')
const messageSearch =document.querySelector("#messages-search");

/* theme customization */

const theme = document.querySelector("#theme")
const themeModal = document.querySelector('.customize-theme');

const fontSizes = document.querySelectorAll('.choose-size span');

var root =document.querySelector(":root");
console.log(root);














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









  /* =========messages===============*/
  messagesNotifiacation.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)'
    messagesNotifiacation.querySelector('.notification-count').style.display= 'none';


    setTimeout(() => {
        messages.style.boxShadow = 'none'
    }, 3000)

  })


  const searchMessage  = ()  => {

    const val = messageSearch.value.toLowerCase();

    console.log(val);

    message.forEach(chat => {

        console.log(chat);
        let name = chat.querySelectorAll('h5')[0].textContent.toLowerCase();
        console.log(name);

        if(name.indexOf(val) != -1){
            chat.style.display = 'flex';
        }else {
            chat.style.display ='none'
        }
    })
  }

  messageSearch.addEventListener('keyup', searchMessage)





//   theme customization 



const openModal = () => {
    themeModal.style.display ='grid';


}

theme.addEventListener('click', openModal)

// close modal 


const closeThemeModal  = (e) => {


        if(e.target.classList.contains('customize-theme')){

          themeModal.style.display = 'none'
        }

}


themeModal.addEventListener('click', closeThemeModal);


/* ============= font =========== */


fontSizes.forEach((size) => {
  size.addEventListener('click', () => {
    let fontSize;

    if (size.classList.contains('font-size-1')) {
      fontSize = '10px';
      root.style.setProperty('--sticky-top-left', '5.4rem');
      root.style.setProperty('--sticky-top-right', '5.4rem');
    } else if (size.classList.contains('font-size-2')) {
      fontSize = '13px';
      root.style.setProperty('--sticky-top-left', '5.4rem');
      root.style.setProperty('--sticky-top-right', '-7rem');
    } else if (size.classList.contains('font-size-3')) {
      fontSize = '16px';
      root.style.setProperty('--sticky-top-left', '-2rem');
      root.style.setProperty('--sticky-top-right', '-17rem');
    } else if (size.classList.contains('font-size-4')) {
      fontSize = '19px';
      root.style.setProperty('--sticky-top-left', '-5rem');
      root.style.setProperty('--sticky-top-right', '-25rem');
    } else if (size.classList.contains('font-size-5')) {
      fontSize = '22px';
      root.style.setProperty('--sticky-top-left', '-12rem');
      root.style.setProperty('--sticky-top-right', '-35rem');
    }

    document.querySelector('html').style.fontSize = fontSize;
  });
});

