document.getElementById("search").addEventListener("click", () => {
    displayCharacter();
  });
  
  async function displayCharacter() {
    const characterId = document.getElementById("character-id").value;
    const character = await getCharacter(characterId);
    addCharacterUI(character);
  }
  
  async function getCharacter(name) {
    try{
        const response = await fetch(`https://rickandmortyapi.com/api/character/${name}`);
        console.log(response);
        return await response.json();
    }catch(err){
        console.log("Error: "+err);
    }
  }
  
  function addCharacterUI(character) {
    const characterList = document.getElementById("character-container");
    const element = document.createElement("div");
    element.innerHTML = `
      <strong>ID: </strong> ${character.id}
      <strong>Name: </strong> ${character.name}
      <strong>Status: </strong> ${character.status}
      <strong>Specie: </strong> ${character.species}
      <strong>Gender: </strong> ${character.gender}
    `;
    characterList.appendChild(element);
  }