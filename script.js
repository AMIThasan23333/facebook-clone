

const menuItems = document.querySelectorAll(".menu-item")

const messagesNotifiacation =document.querySelector("#messages-notifications")

const messages = document.querySelector('.messages')

const message = document.querySelectorAll('.message')


const messageSearch =document.querySelector("#messages-search");








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