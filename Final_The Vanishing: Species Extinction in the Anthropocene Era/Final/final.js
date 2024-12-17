document.addEventListener('DOMContentLoaded', function() {
    const cardContainer = document.getElementById('card-container');
    const continentFilter = document.getElementById('continentFilter');
    const categoryFilter = document.getElementById('categoryFilter');

    // Species data with additional continent and category fields
   const speciesData = [
        {name: "Bramble Cay Melomys", year: 2021, continent: "Australia", category: "Mammals", location: "Bahamas", description: "Climate change and rising sea levels", imagePath: "image/1.jpeg"},
        {name: "Sumatran Rhino (Western)", year: 2019, continent: "Asia", category: "Mammals", location: "Malaysia", description: "Deforestation and hunting", imagePath: "image/2.jpeg"},
        {name: "Northern White Rhinoceros", year: 2018, continent: "Africa", category: "Mammals", location: "Kenya", description: "Poaching and habitat loss", imagePath: "image/3.jpeg"},
        {name: "Catarina Pupfish", year: 2014, continent: "North America", category: "Fish", location: "Mexico", description: "Water depletion and development", imagePath: "image/4.jpeg"},
        {name: "Pinta Giant Tortoise", year: 2012, continent: "South America", category: "Reptiles", location: "Galapagos Islands", description: "Hunting and invasive species", imagePath: "image/5.jpeg"},
        {name: "Western Black Rhinoceros", year: 2011, continent: "Africa", category: "Mammals", location: "Cameroon", description: "Poaching for horns", imagePath: "image/6.jpeg"},
        {name: "Caribbean Monk Seal", year: 2008, continent: "North America", category: "Mammals", location: "Caribbean Sea", description: "Hunting for oil and meat", imagePath: "image/7.jpeg"},
        {name: "Saudi Gazelle", year: 2008, continent: "Asia", category: "Mammals", location: "Saudi Arabia", description: "Overhunting and habitat loss", imagePath: "image/8.jpeg"},
        {name: "Chinese Paddlefish", year: 2005, continent: "Asia", category: "Fish", location: "Yangtze River, China", description: "Dam construction and overfishing", imagePath: "image/9.webp"},
        {name: "Golden Toad", year: 2004, continent: "North America", category: "Amphibians", location: "Costa Rica", description: "Climate change and fungal disease", imagePath: "image/10.jpeg"},
        {name: "Poouli Bird", year: 2004, continent: "North America", category: "Birds", location: "Hawaii", description: "Disease and habitat loss", imagePath: "image/11.jpeg"},
        {name: "Pyrenean Ibex", year: 2000, continent: "Europe", category: "Mammals", location: "Spain", description: "Hunting and competition with livestock", imagePath: "image/12.jpeg"},
        {name: "Mariana Mallard", year: 1981, continent: "Oceania", category: "Birds", location: "Guam", description: "Hunting and wetland destruction", imagePath: "image/13.jpeg"},
        {name: "Nestor productus (Norfolk Island Parrot)", year: 1851, continent: "Oceania", category: "Birds", location: "Norfolk Island, Australia", description: "Habitat destruction, hunting", imagePath: 'image/0.png'},
        {name: "Javan Tiger", year: 1976, continent: "Asia", category: "Mammals", location: "Java, Indonesia", description: "Hunting and habitat loss", imagePath: "image/14.jpeg"},
        {name: "Caspian Tiger", year: 1970, continent: "Asia", category: "Mammals", location: "Iran", description: "Hunting and habitat destruction", imagePath: "image/15.webp"},
        {name: "Mexican Grizzly Bear", year: 1964, continent: "North America", category: "Mammals", location: "Mexico", description: "Hunting and poisoning", imagePath: "image/16.webp"},
        {name: "Little Swan Island Hutia", year: 1955, continent: "Caribbean", category: "Mammals", location: "Caribbean", description: "Introduced cats", imagePath: "image/17.jpeg"},
        {name: "Toolache Wallaby", year: 1943, continent: "Australia", category: "Mammals", location: "Australia", description: "Hunting and land clearing", imagePath: "image/18.jpeg"},
        {name: "Schomburgk's Deer", year: 1938, continent: "Asia", category: "Mammals", location: "Thailand", description: "Hunting and habitat conversion", imagePath: "image/19.jpeg"},
        {name: "Bali Tiger", year: 1937, continent: "Asia", category: "Mammals", location: "Bali, Indonesia", description: "Hunting and human expansion", imagePath: "image/20.png"},
        {name: "Tylacine", year: 1936, continent: "Australia", category: "Mammals", location: "Tasmania, Australia", description: "Hunting and habitat destruction", imagePath: "image/21.jpeg"},
        {name: "Desert Rat-kangaroo", year: 1935, continent: "Australia", category: "Mammals", location: "Australia", description: "Introduced foxes and cats", imagePath: "image/22.jpeg"},
        {name: "Lesser Stick-nest Rat", year: 1933, continent: "Australia", category: "Mammals", location: "Australia", description: "Introduced predators", imagePath: "image/23.jpeg"},
        {name: "Heath Hen", year: 1932, continent: "North America", category: "Birds", location: "Martha's Vineyard, USA", description: "Hunting and habitat loss", imagePath: "image/24.webp"},
        {name: "Paradise Parrot", year: 1927, continent: "Australia", category: "Birds", location: "Australia", description: "Habitat loss and grazing", imagePath: "image/25.jpeg"},
        {name: "Carolina Parakeet", year: 1918, continent: "North America", category: "Birds", location: "USA", description: "Hunting and deforestation", imagePath: "image/26.jpeg"},
        {name: "Passenger Pigeon", year: 1914, continent: "North America", category: "Birds", location: "Cincinnati, USA", description: "Mass hunting and habitat loss", imagePath: "image/27.jpeg"},
        {name: "Laughing Owl", year: 1914, continent: "Oceania", category: "Birds", location: "New Zealand", description: "Introduced predators", imagePath: "image/28.jpeg"},
        {name: "Newfoundland Wolf", year: 1911, continent: "North America", category: "Mammals", location: "Canada", description: "Hunting and poisoning", imagePath: "image/29.jpeg"},
        {name: "Japanese Wolf", year: 1905, continent: "Asia", category: "Mammals", location: "Japan", description: "Human persecution and disease", imagePath: "image/30.webp"},
        {name: "Rocky Mountain Locust", year: 1902, continent: "North America", category: "Insects", location: "USA", description: "Agricultural development", imagePath: "image/31.jpeg"},
        {name: "Kona Grosbeak", year: 1894, continent: "Oceania", category: "Birds", location: "Hawaii", description: "Habitat destruction and disease", imagePath: "image/32.jpeg"},
        {name: "Sea Mink", year: 1892, continent: "North America", category: "Mammals", location: "North America", description: "Hunting for fur trade", imagePath: "image/33.jpeg"},
        {name: "Quagga", year: 1883, continent: "Africa", category: "Mammals", location: "Amsterdam, Netherlands", description: "Hunting and habitat conversion", imagePath: "image/34.jpeg"},
        {name: "Labrador Duck", year: 1878, continent: "North America", category: "Birds", location: "North America", description: "Overhunting and egg collection", imagePath: "image/35.jpeg"},
        {name: "Falkland Islands Wolf", year: 1876, continent: "South America", category: "Mammals", location: "Falkland Islands", description: "Hunting by settlers", imagePath: "image/36.jpeg"},
        {name: "Atlas Bear", year: 1870, continent: "Africa", category: "Mammals", location: "Morocco", description: "Roman hunting and habitat loss", imagePath: "image/37.jpeg"},
        {name: "Cape Lion", year: 1865, continent: "Africa", category: "Mammals", location: "South Africa", description: "Hunting and human settlement", imagePath: "image/38.webp"},
        {name: "Great Auk", year: 1844, continent: "Europe", category: "Birds", location: "Iceland", description: "Hunting for meat and feathers", imagePath: "image/39.jpeg"},
        {name: "Amsterdam Island Duck", year: 1793, continent: "Europe", category: "Birds", location: "Amsterdam Island", description: "Hunting by sailors", imagePath: "image/40.jpeg"},
        {name: "Steller's Sea Cow", year: 1768, continent: "Asia", category: "Mammals", location: "Bering Sea", description: "Overhunting by sailors", imagePath: "image/41.webp"},
        {name: "Rodriguez Solitaire", year: 1761, continent: "Africa", category: "Birds", location: "Rodriguez Island", description: "Hunting and habitat destruction", imagePath: "image/43.jpeg"},
        {name: "Dodo", year: 1662, continent: "Africa", category: "Birds", location: "Mauritius", description: "Hunting and invasive species", imagePath: "image/44.png"},
        {name: "Ascension Flightless Crake", year: 1656, continent: "Africa", category: "Birds", location: "Ascension Island", description: "Introduced predators", imagePath: "image/45.jpeg"}
      ];


    function displaySpecies(species) {
        cardContainer.innerHTML = '';  // Clear existing cards
        species.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('card');

            const img = document.createElement('img');
            img.src = item.imagePath
            img.alt = item.name;

            const h3 = document.createElement('h3');
            h3.textContent = item.name;

            const yearSpan = document.createElement('span');
            yearSpan.textContent = `Year of Extinction: ${item.year}`;

            const locationSpan = document.createElement('span');
            locationSpan.textContent = `Location of Last Sighting: ${item.location}`;

            const p = document.createElement('p');
            p.textContent = item.description;

            card.appendChild(img);
            card.appendChild(h3);
            card.appendChild(yearSpan);
            card.appendChild(locationSpan);
            card.appendChild(p);
            cardContainer.appendChild(card);
        });
    }

    function filterSpecies() {
        const continentValue = continentFilter.value;
        const categoryValue = categoryFilter.value;

        const filteredSpecies = speciesData.filter(item => {
            const matchesContinent = continentValue ? item.continent === continentValue : true;
            const matchesCategory = categoryValue ? item.category === categoryValue : true;
            return matchesContinent && matchesCategory;
        });

        displaySpecies(filteredSpecies);
    }

    continentFilter.addEventListener('change', filterSpecies);
    categoryFilter.addEventListener('change', filterSpecies);

    // Initial display
    displaySpecies(speciesData);

});

