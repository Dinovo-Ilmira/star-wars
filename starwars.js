const fetchBtn = document.getElementById('fetchBtn');
const entityIdInput = document.getElementById('entityId');
const entitySelect = document.getElementById('entity');
const resultDiv = document.getElementById('result');
const errorDiv = document.getElementById('error');

fetchBtn.addEventListener('click', fetchData);

function fetchData() {
  resultDiv.innerHTML = '';
  errorDiv.innerHTML = '';

  const entityType = entitySelect.value;
  const entityId = entityIdInput.value;

  const url = `https://swapi.dev/api/${entityType}/${entityId}/`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Server error');
      }
      return response.json();
    })
    .then(data => {
      let info = '';
      if (entityType === 'people') {
        info = `
          <h2>Character Info</h2>
          <p>Name: ${data.name}</p>
          <p>Height: ${data.height}</p>
          <p>Mass: ${data.mass}</p>
        `;
      } else if (entityType === 'planets') {
        info = `
          <h2>Planet Info</h2>
          <p>Name: ${data.name}</p>
          <p>Climate: ${data.climate}</p>
          <p>Population: ${data.population}</p>
        `;
      } else if (entityType === 'starships') {
        info = `
          <h2>Starship Info</h2>
          <p>Name: ${data.name}</p>
          <p>Model: ${data.model}</p>
          <p>Manufacturer: ${data.manufacturer}</p>
        `;
      } else if (entityType === 'vehicles') {
        info = `
          <h2>Vehicle Info</h2>
          <p>Name: ${data.name}</p>
          <p>Model: ${data.model}</p>
          <p>Manufacturer: ${data.manufacturer}</p>
        `;
      } else if (entityType === 'species') {
        info = `
          <h2>Species Info</h2>
          <p>Name: ${data.name}</p>
          <p>Classification: ${data.classification}</p>
          <p>Average Lifespan: ${data.average_lifespan}</p>
        `;
      }
      resultDiv.innerHTML = info;
    })
    .catch(error => {
      errorDiv.textContent = error.message;
    });
}
