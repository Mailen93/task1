// Componente Card : _id, name, image, price, description

const cardComponent = [];
const detailComponent = [];
const pastEvents = [];
const upComing = [];

function cardInfoCreator (data) {
    for(let event of data.events){
        cardComponent.push({
            id: event._id,
            name: event.name,
            image: event.image,
            price: event.price,
            description: event.description
        })
    }
}

// cardInfoCreator(data)
// console.log(cardComponent);

function detailInfoCreator (data) {
    for(let event of data.events){
        detailComponent.push( {
            id: event._id,
            name: event.name,
            image: event.image,
            date: event.date,
            price: event.price,
            description: event.description,
            place: event.place,
            capacity: event.capacity,
            category: event.category,
            assistance: event.assistance
        })
    }
}

// detailInfoCreator(data)
// console.log(detailComponent);

function pastAndUpcomingEvents (data) {
    for(let event of data.events){
        if (event.date < data.currentDate) {
            pastEvents.push(event)
        }
        if (event.date > data.currentDate) {
            upComing.push(event)
        }
    }
}

// pastAndUpcomingEvents(data)

// console.log('Soy los upcoming', upComing);
// console.log('So los past', pastEvents);