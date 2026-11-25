const stepData = {
    1: {
        title: "Investigation",
        body: `
            Every case begins with understanding the full scope of the problem. We obtain your IRS transcripts and review your tax history and determine exactly what the IRS believes you owe, what years are involved, and what enforcement actions may be underway.<br><br>
            We analyze:<br>
            • IRS account transcripts<br>
            • Unfiled tax returns<br>
            • Review penalties, balances, and collection activity<br>
            • Eligibility for available resolution options<br><br>

            This investigation allows us to develop a clear strategy tailored to your situation.
                `,
        image: "visuals/investigation.jpg"
    },
    2: {
        title: "Compliance",
        body: `
            Before the IRS will consider any resolution program, taxpayers must first become compliant.
            This means all required tax returns must be filed and current tax obligations must be up to date.<br><br>

            If you have unfiled returns, our firm will work with you to prepare and submit the necessary filings so your account meets IRS compliance requirements. We will also review your current withholding or estimated tax payments to ensure you remain compliant while your case is being resolved.<br><br>

            Bringing your account into compliance is a critical step that allows us to move forward with negotiating a resolution with the IRS.
        `,
        image: "visuals/compliance.jpg"
    },
    3: {
        title: "Resolution",
        body: `
            Once compliance is established, we can pursue the best available resolution based on your financial situation and IRS guidelines.<br><br>

            Depending on your circumstances, this may include:<br>
            • IRS installment agreements<br>
            • Offer in Compromise analysis<br>
            • Penalty abatement requests<br>
            • Currently Not Collectible status<br>
            • IRS collections defense<br><br>

            Our goal is to secure a resolution that stabilizes your situation and helps you move forward with confidence
        `,
        image: "visuals/resolution.jpg"
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
        document.querySelector('.steps-content .text p').innerHTML = stepData[step].body;
        document.querySelector('.steps-content img').src = stepData[step].image;
    });
});