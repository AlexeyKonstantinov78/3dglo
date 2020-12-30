const toggleMenu = () => {

    const menu = document.querySelector('menu'),
        body = document.querySelector('body'),
        menuItems = menu.querySelectorAll('ul>li>a');

    const handlerMenu = () => {
        menu.classList.toggle('active-menu');
    };

    body.addEventListener('click', (event) => {
        let target = event.target;
        if (!target.closest('.active-menu') && menu.classList.contains('active-menu') === true) handlerMenu();
        if (target.closest('.menu')) handlerMenu();
        if (target.closest('.close-btn')) handlerMenu();
        if (target.closest('a') && target.closest('menu') !== null && !target.closest('.close-btn')) {
            handlerMenu();
            event.preventDefault();
            document.getElementById(target.getAttribute('href').substr(1)).scrollIntoView({ block: 'start', behavior: 'smooth' });
        }
    });
};

export default toggleMenu;