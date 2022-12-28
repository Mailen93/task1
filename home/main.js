const cardComponent = [];

function cardInfoCreator(data) {
  for (let event of data.events) {
    cardComponent.push({
      id: event._id,
      name: event.name,
      image: event.image,
      price: event.price,
      description: event.description,
    });
  }
}

cardInfoCreator(data)

let cardsContainer = document.querySelector("#cards_container");

function cardCreator(cardComponent, cardsContainer) {
    for(let event of cardComponent){
        cardsContainer.innerHTML += 
        `<div class="col">
        <div class="card" id=${event.id} style="width: 18rem;">
            <img src=${event.image} class="card-img-top" alt="festival">
            <div class="card-body">
                <h5 class="card-title">${event.name}</h5>
                <p class="card-text">${event.description}</p>
                <p>Price: ${event.price}</p>
                <a href="../details/details.html" class="btn btn-dark">See more</a>
            </div>
        </div>
    </div>`
    }
  }

cardCreator(cardComponent, cardsContainer)
