const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
        popupContent = document.querySelector('.popup-content'),
        popupBtn = document.querySelectorAll('.popup-btn');

    popupBtn.forEach((elem) => {
        elem.addEventListener('click', (e) => {
            e.preventDefault();
            popup.style.display = 'block';
            popupContent.style.top = '30%';
            if (document.documentElement.offsetWidth >= 768) {
                let count = 0;
                requestAnimationFrame(function opac() {
                    count++;

                    popupContent.style.opacity = count / 100;

                    if (count < 100) {
                        setTimeout(opac, 2);
                    }
                });
            }

        });
    });

    popup.addEventListener('click', (event) => {
        let target = event.target;

        if (target.classList.contains('popup-close')) {
            popup.style.display = 'none';
        } else {
            target = target.closest('.popup-content');
            if (!target) {
                popup.style.display = 'none';
            }
        }
    });
};

export default togglePopUp;