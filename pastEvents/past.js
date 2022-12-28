let arrPastEvents = []

function eventsInfo (data){
    for (let event of data.events){
        if (event.date < data.currentDate)
        arrPastEvents.push(event);
    }
}

eventsInfo(data);
console.log(arrPastEvents);

let pastEvents = document.querySelector("#past_events");

function cardCreator (arrPastEvents, pastEvents){
    for (let event of arrPastEvents){
        pastEvents.innerHTML += `<div class="col">
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

cardCreator(arrPastEvents, pastEvents);