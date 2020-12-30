const blockOurTeam = () => {
    const command = document.querySelector('.command>.container>.row');
    let imgoriginal;
    command.addEventListener('mouseover', (event) => {
        if (event.target.matches('img')) {
            imgoriginal = event.target.src;
            event.target.src = event.target.dataset.img;
        }
    });
    command.addEventListener('mouseout', (event) => {
        if (event.target.matches('img')) {
            event.target.src = imgoriginal;
        }
    });
};

export default blockOurTeam;