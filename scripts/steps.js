const stepData = {
    1: {
        title: "Investigation",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        image: "/visuals/investigation.jpg"
    },
    2: {
        title: "Compliance",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        image: "/visuals/compliance.jpg"
    },
    3: {
        title: "Resolution",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        image: "/visuals/resolution.jpg"
    }
};

const buttons = document.querySelectorAll('.steps-nav button');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        // remove active from all buttons, add to clicked one
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const step = btn.dataset.step;

        document.querySelector('.steps-content .text h1').textContent = stepData[step].title;
        document.querySelector('.steps-content .text p').textContent = stepData[step].body;
        document.querySelector('.steps-content img').src = stepData[step].image;
    });
});