 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});


const selectList = document.getElementById("selectList");

selectList.addEventListener("change", function () {
    const selectedOption = selectList.options[selectList.selectedIndex].value;
    alert("You selected: " + selectedOption);
});



// Sample data as an array of objects
const cardData = [
    {
      title: "Mozzarella Pizza",
      description: "Secret homemade spicy sauce, with curly cuts pepperoni and fresh mozzarella",
      imageUrl: "https://www.foodandwine.com/thmb/7BpSJWDh1s-2M2ooRPHoy07apq4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/mozzarella-pizza-margherita-FT-RECIPE0621-11fa41ceb1a5465d9036a23da87dd3d4.jpg",
    },
    {
      title: "Vegetarian Pizza",
      description: "Tomato Sauce, Mozzarella, Green Pepper, Onions, Fresh Mushrooms, Tomatoes, and Black Olives.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPQ9Qm9sYq_bsnMJBjdlMIMkNS23FahsSDGw&usqp=CAU",
    },
    
    {
      title: "Chicken Pizza",
      description: "Another card description. You can have as many cards as you need in your list.",
      imageUrl: "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/216054.jpg?resize=1200:*",
    },
    {
        title: "Hot Brown Pizza",
        description: "Roasted turkey, bacon, tomato over creamy cheddar alfredo sauce",
        imageUrl: "https://www.thismomsmenu.com/wp-content/uploads/2020/06/Hot-Brown-Pizza-6.jpg",
      },
  ];
  
 
  function createCard(card) {
    const cardContainer = document.getElementById("card-container");
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
  
    const cardImage = document.createElement("img");
    cardImage.src = card.imageUrl;
    cardImage.alt = card.title;
  
    const cardTitle = document.createElement("h2");
    cardTitle.textContent = card.title;
  
    const cardDescription = document.createElement("p");
    cardDescription.textContent = card.description;
  
    cardElement.appendChild(cardImage);
    cardElement.appendChild(cardTitle);
    cardElement.appendChild(cardDescription);
  
    cardContainer.appendChild(cardElement);
  }
  
  // Loop through the data and create cards
  for (const card of cardData) {
    createCard(card);
  }
  

  // script.js

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');

let currentIndex = 0;

function nextSlide() {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
    updateSlider();
}

function updateSlider() {
    const translateX = currentIndex * -100 + '%';
    slider.style.transform = `translateX(${translateX})`;
}

setInterval(nextSlide, 2000);
