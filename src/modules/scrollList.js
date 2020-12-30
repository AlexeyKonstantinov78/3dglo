const scrollList = () => {
    const anchors = document.querySelector('a[href*="#service-block"]'),
        hasSmoothScroll = 'scrollBehavior' in document.documentElement.style;

    anchors.addEventListener('click', (e) => {
        e.preventDefault();
        const blockID = anchors.getAttribute('href').substr(1);
        document.getElementById(blockID).scrollIntoView({ block: 'start', behavior: 'smooth' });
    });
};

export default scrollList;