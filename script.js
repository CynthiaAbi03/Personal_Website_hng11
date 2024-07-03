document.addEventListener('DOMContentLoaded', () => {
     function updateTime() {
        const date = new Date();
        const gmtPlusOne = new Date(date.getTime() + 1 * 60 * 60 * 1000); 
        const hours = String(gmtPlusOne.getUTCHours()).padStart(2, '0'); 
        const minutes = String(gmtPlusOne.getUTCMinutes()).padStart(2, '0'); 
        const seconds = String(gmtPlusOne.getUTCSeconds()).padStart(2, '0'); 
        document.getElementById('current-time').textContent = `${hours}:${minutes}:${seconds}`;
        document.getElementById('current-day').textContent = gmtPlusOne.toLocaleDateString('en-US', { weekday: 'long' });
    }

    updateTime();
    setInterval(updateTime, 1000); // Update time every minute
});

const menuBar = document.querySelector('.menu-bar');

const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menu li')

menuBar.addEventListener('click', ()=> {
    menu.classList.toggle('active');
    menuBar.classList.toggle('active');
})

menuItems.forEach(item => {
    item.addEventListener('click', ()=> {
        menu.classList.remove('active');
        menuBar.classList.remove('active');

    })
})