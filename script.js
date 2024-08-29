let main= document.getElementsByClassName("main");

const getPokemon= async(id)=> {
    let url= `https://pokeapi.co/api/v2/pokemon/${id}`
    let response = await fetch(url);
    let data = await response.json();
    createPokemon(data);
}


const pokeFunc= async()=> {
    for(let i=1;i<=151;i++){
        await getPokemon(i);
    }
}

const createPokemon = (data) =>{
   
    const id = data.id.toString().padStart(3,"0");
    const type = data.types[0].type.name[0].toUpperCase() + data.types[0].type.name.slice(1);

     let temp = `
        <div class="cardBox">
        <img src=" https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png" alt="#">
        <h4 class="poke-name">${data.name}</h4>
        <p class="poke-id">${data.id}</p>
        <p class="poke-type">${type}</p>
        </div> `

    document.querySelector(".main").innerHTML += temp

}

pokeFunc();
document.getElementById('input').addEventListener('keyup', function() {
    let filter = this.value.toLowerCase();
    let items = document.querySelectorAll('.cardBox');

    items.forEach(function(item) {
        let name = item.querySelector('.poke-name').textContent.toLowerCase();
        let id = item.querySelector('.poke-id').textContent.toLowerCase();
        let type = item.querySelector('.poke-type').textContent.toLowerCase();
        
        if (name.includes(filter) || id.includes(filter) || type.includes(filter)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
});