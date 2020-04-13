document.querySelector('.getInfo').addEventListener('click',getInfo);
document.querySelector('.getList').addEventListener('click',getList);

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
            let list = '';
            if(response.name === pokemonName){
                output += `
                <div class="card col-6">
                    <div class="card-body">
                        <h3 class="card-title text-center">${response.name}</h3>
                        <h5 class="card-subtitle text-center">#${response.id}</h5>
                    </div>
                    <div id="list">
                    </div>
                    <br>
                </div>                
                `;
                list += `<li class="list-group-item d-flex justify-content-between align-items-center">Height: <span>${response.height}</span></li>`;
                list += `<li class="list-group-item d-flex justify-content-between align-items-center">Weight: <span>${response.weight}</span></li>`;
                response.types.forEach(function(e){
                    list += `<li class="list-group-item d-flex justify-content-between align-items-center">Type: <span>${e.type.name}</span></li>`;
                });
                response.abilities.forEach(function(e){;
                    list += `<li class="list-group-item d-flex justify-content-between align-items-center">Abilities: <span>${e.ability.name}</span></li>`;
                });
                document.getElementById('displayInfo').innerHTML = output;
                document.getElementById('list').innerHTML = list;
            }
        }
    }
    xhr.send();
    e.preventDefault();
}

function getList(e){
    const xhr = new XMLHttpRequest();
    xhr.open('GET',`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=964`,true);
    xhr.onload = function(){
        if(this.status === 200){
            const response = JSON.parse(this.responseText);

            response.results.forEach(function(e){
                console.log(e.name);
            });
        }
    }
    xhr.send();
    e.preventDefault();
}