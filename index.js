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

const metrics = [
  { value: "$65 M", label: "Generate sales" },
  { value: "58%", label: "Grew revenue" },
  { value: "12", label: "Countries" },
  { value: "16k+", label: "Grew customers" },
];

// Function to create a number card
function createNumberCard(value, label) {
  const card = document.createElement("div");
  card.classList.add("number-card");

  const numberElement = document.createElement("div");
  numberElement.classList.add("number");
  numberElement.textContent = value;

  const labelElement = document.createElement("div");
  labelElement.classList.add("label");
  labelElement.textContent = label;

  card.appendChild(numberElement);
  card.appendChild(labelElement);

  return card;
}

const numbersContainer = document.getElementById("numbersContainer");
metrics.forEach((metric) => {
  const card = createNumberCard(metric.value, metric.label);
  numbersContainer.appendChild(card);
});

const testimonials = [
  {
    text: "I'm totally unconvinced that two people can find a person they haven't known previously.",
    name: "Andrew Wilkins",
    role: "Managing Director,Yess Company",
    img: "/assets/Client1.png",
  },
  {
    text: "Easy to use, reasonably priced, and ensures I don't drop the ball on following up with my leads!",
    name: "Daisy Phelps",
    role: " Digital Marketing Manager, Monatc",
    img: "/assets/Client2.png",
  },
  {
    text: "I am extremely satisfied with the quality and performance.Great customer service.",
    name: "Michael Brown",
    role: "CTO, SoftTech",
    img: "/assets/Client1.png",
  },
  {
    text: "Reliable, affordable, and highly efficient!Great customer service and fantastic results!",
    name: "Emily White",
    role: "Director, Innovate Inc",
    img: "/assets/Client1.png",
  },
];

const carousel = document.getElementById("carousel");
const dotsContainer = document.getElementById("dots");
const slidesToShow = window.innerWidth > 768 ? 2 : 1;

testimonials.forEach(({ text, name, role, img }) => {
  const testimonial = document.createElement("div");
  testimonial.classList.add("testimonial");
  testimonial.innerHTML = `<img src="/assets/Qotes.png" alt="quotes"/><p>${text}</p><div class="client"><img src="${img}" alt="${name}"><div><h3>${name}</h3><p class='role'>${role}</p</div></div>`;
  carousel.appendChild(testimonial);
});

const totalSlides = Math.ceil(testimonials.length / slidesToShow);
let currentIndex = 0;

for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  dot.addEventListener("click", () => moveToSlide(i));
  dotsContainer.appendChild(dot);
}

function moveToSlide(index) {
  currentIndex = index;
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
  updateDots();
}

function updateDots() {
  document.querySelectorAll(".dot").forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
}

moveToSlide(0);
