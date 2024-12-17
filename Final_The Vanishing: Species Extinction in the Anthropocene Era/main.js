document.addEventListener("click", function() {
    let gunshotSound = document.getElementById("gunshot-sound");
    gunshotSound.currentTime = 0; // Reset audio to start
    gunshotSound.play(); // Play the gunshot sound
});


const introScreen = document.getElementById("intro-screen");
const mainContent = document.getElementById("main-content");
const ropeBackground = document.getElementById("rope-background");

const animals = [
    "Bramble Cay Melomys", "Sumatran Rhino", "Dodo", "Golden Toad",
    "Carolina Parakeet", "Passenger Pigeon", "Pinta Giant Tortoise"
];

// Add click event to transition from intro screen to main content
document.addEventListener("click", function () {
    const gunshotSound = document.getElementById("gunshot-sound");
    gunshotSound.currentTime = 0; // Reset audio to start
    gunshotSound.play(); // Play gunshot sound

    introScreen.style.display = "none"; // Hide intro screen
    mainContent.style.display = "flex"; // Show main content
});

// Function to create hanging tags
function createHangingTags() {
    animals.forEach(animal => {
        const line = document.createElement("div");
        line.classList.add("hanging-line");
        line.style.setProperty("--position", Math.random().toString());
        line.style.setProperty("--line-length", `${Math.random() * 50 + 50}vh`);

        const tag = document.createElement("div");
        tag.classList.add("tag");
        tag.textContent = animal;

        line.appendChild(tag);
        ropeBackground.appendChild(line);
    });
}

// Initialize hanging tags after transition
createHangingTags();
