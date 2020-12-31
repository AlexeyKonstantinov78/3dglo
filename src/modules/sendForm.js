const sendForm = () => {
    const errorMessage = 'Что то пошло не так...',
        successMesage = 'Спсасибо! Мы скоро с вами свяжемся!',
        formAll = document.querySelectorAll('form'),
        preloader = document.createElement('div');

    preloader.classList.add('preloader');
    preloader.innerHTML = `
            <div class="circle circle-1"></div>
            <div class="circle circle-2"></div>
            <div class="circle circle-3"></div>
            <div class="circle circle-4"></div>
            <div class="circle circle-5"></div>                
            `;

    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem; color: #FFFFFF;';

    formAll.forEach((item) => {

        item.addEventListener('input', event => inputVerifi(event.target, item));

        item.addEventListener('submit', (event) => {
            event.preventDefault();
            item.appendChild(statusMessage);
            statusMessage.textContent = '';
            const formData = new FormData(item);

            let body = {};

            formData.forEach((val, key) => {
                body[key] = val;
            });

            if (sendVerify(body)) {
                item.appendChild(preloader);

                postData(body)
                    .then((response) => {
                        if (response.status !== 200) throw new Error('status network not 200');
                        item.removeChild(preloader);
                        statusMessage.textContent = successMesage;
                        removeTheThankYouText(item);
                    })
                    .catch((error) => {
                        item.removeChild(preloader);
                        statusMessage.textContent = errorMessage;
                        removeTheThankYouText(item);
                        console.error(error);
                    })
                    .finally(() => {
                        inputItem(item);
                    });

            } else {
                statusMessage.textContent = errorMessage;
                removeTheThankYouText(item);
            }
        });
    });

    const sendVerify = (body) => {

        if (body.user_name === '' || body.user_email === '' || body.user_phone === '' || (body.user_message !== undefined && body.user_message === '')) return false;

        if (body.user_name.length <= 3) return false;
        if (body.user_email.length <= 3 || !(/^\w+@\w+\.\w{2,}$/g.test(body.user_email))) return false;
        if (body.user_phone.length <= 7 || !(/^\+?[7|8]([-()]*\d){7,10}$/.test(body.user_phone))) return false;
        if (body.user_message !== undefined && body.user_message.length <= 3) return false;

        return true;
    }

    const removeTheThankYouText = (item) => {
        setTimeout(() => {
            item.removeChild(statusMessage);
        }, 5000);
    }

    const inputVerifi = (item, form) => {
        if (item.closest('.form-phone')) {
            item.value = item.value.substring(0, 12).replace(/[^\+0-9]/g, '') + item.value.substring(11,).replace(/./g, '');
            if (/^\+?[7|8]([-()]*\d){7,10}$/.test(item.value) && item.value.length >= 8 && item.value.length <= 12) {
                item.style.border = '';
            } else {
                item.style.border = 'solid red';
            }
        }
        if (item.closest('.form-name') || item.closest('#form2-name')) {
            item.value = item.value.replace(/[^А-Яа-яЁё ]/gi, '');
        }

        if (item.closest('.form-email')) {
            item.value = item.value.replace(/[^\w+@\w+\.\w]/gi, '');
            if (/^\w+@\w+\.\w{2,}$/g.test(item.value) && item.value.length > 3) {
                item.style.border = '';
            } else {
                item.style.border = 'solid red';
            }
        }
        if (item.closest('.mess')) {
            item.value = item.value.replace(/[^А-Яа-яЁё\d .,?!'"]/gi, '');
        }
    }

    const inputItem = (item) => {
        const inputAll = item.querySelectorAll('input');
        inputAll.forEach((elem) => {
            elem.value = '';
        });
    }

    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });
    };

};

export default sendForm;