

function onHamburgerMenuClick(isOpen) {
  const menuElement = document.querySelector(".hamburger-backdrop");
  if (isOpen) {
    menuElement.classList.add("show");
  } else {
    menuElement.classList.remove("show");
  }
}

const benefits = [
  {
    img: "/assets/benifits1.png",
    alt: "Happy Customers",
    title: "Happy Customers",
    description:
      "Productive agents are happy agents. Give them all the support tools and information they need to best serve your customers.",
  },
  {
    img: "/assets/benifits2.png",
    alt: "Best Integrations",
    title: "Best Integrations",
    description:
      "Our software is powerful enough to handle complex businesses yet flexible to scale with you grow.",
  },
  {
    img: "assets/benifits3.png",
    alt: "Grow Without Problems",
    title: "Grow Without Problems",
    description:
      "With evaluating in depth data sets and including the speed of tech  adaptation we build bridges between any companies and customers.",
  },
];

const benefitContainer = document.getElementById("benefitContainer");

benefits.forEach((benefit) => {
  const card = document.createElement("div");
  card.classList.add("benefit-card");
  card.innerHTML = `
                <img src="${benefit.img}" alt="${benefit.alt}">
                <h3>${benefit.title}</h3>
                <p>${benefit.description}</p>
            `;
  benefitContainer?.appendChild(card);
});

