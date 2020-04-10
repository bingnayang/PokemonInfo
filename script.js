document.querySelector('.getInfo').addEventListener('click',getInfo);

function getInfo(e){
    const pokemonName = document.querySelector('input[type="text"]').value;
    // console.log(pokemonName);

    const xhr = new XMLHttpRequest();
    xhr.open('GET',`https://pokeapi.co/api/v2/pokemon/${pokemonName}`,true);

    xhr.onload = function(){
        if(this.status === 200){
            const response = JSON.parse(this.responseText);
            // console.log(response.id);

            if(response.name === pokemonName){
                // console.log(response);
                const output = `
                    <ul>
                        <li> Pokemon Name: ${response.name}</li>
                        <li> Pokemon Height: ${response.height}</li>
                        <li> Pokemon Weight: ${response.weight}</li>
                    </ul>
                `;
                document.getElementById('displayInfo').innerHTML = output;
            }else{
                console.log("No such pokemon")
            }
        }
    }
    xhr.send();

    e.preventDefault();
}