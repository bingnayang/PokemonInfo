document.querySelector('.getInfo').addEventListener('click',getInfo);

function getInfo(e){
    const pokemonName = document.querySelector('input[type="text"]').value;
    // console.log(pokemonName);

    const xhr = new XMLHttpRequest();
    xhr.open('GET',`https://pokeapi.co/api/v2/pokemon/${pokemonName}`,true);

    xhr.onload = function(){
        if(this.status === 200){
            const response = JSON.parse(this.responseText);
            // console.log(response);
            let output = '';

            if(response.name === pokemonName){
                output += `
                        <li> Pokemon Name: ${response.name}</li>
                        <li> Pokemon #: ${response.id}</li>
                        <li> Pokemon Height: ${response.height}</li>
                        <li> Pokemon Weight: ${response.weight}</li>
                `;
                response.types.forEach(function(e){
                    output += `<li>Pokemon Type: ${e.type.name}</li>`;
                });
                response.abilities.forEach(function(e){
                    output += `<li>Pokemon Abilities: ${e.ability.name}</li>`;
                });
                document.getElementById('displayInfo').innerHTML = output;
            }
        }
    }
    xhr.send();

    e.preventDefault();
}