const introScreen = document.getElementById("intro-screen");
const mainContent = document.getElementById("main-content");
const ropeBackground = document.getElementById("rope-background");
const animals = [
   "Bramble Cay Melomys", "Sumatran Rhino (Western)", "Northern White Rhinoceros", 
    "Catarina Pupfish", "Pinta Giant Tortoise", "Western Black Rhinoceros", 
    "Caribbean Monk Seal", "Saudi Gazelle", "Chinese Paddlefish", "Golden Toad", 
    "Poouli Bird", "Pyrenean Ibex", "Mariana Mallard", "Nestor productus (Norfolk Island Parrot)", 
    "Javan Tiger", "Caspian Tiger", "Mexican Grizzly Bear", "Little Swan Island Hutia", 
    "Toolache Wallaby", "Schomburgk's Deer", "Bali Tiger", "Tylacine", "Desert Rat-kangaroo", 
    "Lesser Stick-nest Rat", "Heath Hen", "Paradise Parrot", "Carolina Parakeet", 
    "Passenger Pigeon", "Laughing Owl", "Newfoundland Wolf", "Japanese Wolf", 
    "Rocky Mountain Locust", "Kona Grosbeak", "Sea Mink", "Quagga", "Labrador Duck", 
    "Falkland Islands Wolf", "Atlas Bear", "Cape Lion", "Great Auk", "Amsterdam Island Duck", 
    "Steller's Sea Cow", "Rodriguez Solitaire", "Dodo", "Ascension Flightless Crake", 
    "Elephant Bird"
];

// Transition to the main content
introScreen.addEventListener("click", function () {
    const gunshotSound = document.getElementById("gunshot-sound");
    gunshotSound.currentTime = 0;
    gunshotSound.play();

    introScreen.style.display = "none";
    mainContent.style.display = "block";

    // Generate tags after transition
    createHangingTags();
});

// Generate hanging tags
function createHangingTags() {
    animals.forEach((animal, index) => {
        const line = document.createElement("div");
        line.classList.add("hanging-line");
        
        // Assigning fixed short and long lines
        const lineLength = index % 2 === 0 ? '50vh' : '80vh';  // Alternating between short and long lines
        line.style.height = lineLength;

        const tag = document.createElement("div");
        tag.classList.add("tag");
        tag.textContent = animal;

        line.appendChild(tag);
        ropeBackground.appendChild(line);
    });
}



