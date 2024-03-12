const cardMusic = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json()
    console.log(data)
    return data.results
}

const createCardMusic = async () => {
    const cards = await cardMusic();
    const container = document.getElementById('cards');
    
    cards.forEach((results) => {
        const boxMusic = document.createElement('div');
        boxMusic.innerHTML = ` 
        <div class="card-group" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
             <div class="card-body">
                <h5 class="card-title">${results.name}</h5>
                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
             </div>
        </div>`
        container.appendChild(boxMusic);
    });
}

createCardMusic();