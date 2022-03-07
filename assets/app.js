const imageDisplay = document.getElementById('display-image');
const randomButton = document.getElementById('random-button');
const displayBreedList = document.getElementById('breed-list');

const getRandomImage = async () => {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        console.log(response);
        console.log(data.message);
        
        displayRandomImage(data.message);
    } catch {
        console.log('error');
    }
}

const displayRandomImage = (randomImage) => {
    imageDisplay.innerHTML = `<img src=${randomImage} alt="">`;
}

const getBreedList = async () => {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/list/all');
        const data = await response.json();
        console.log(data.message);

        createBreedList(data.message);
    } catch {
        console.log('error');
    }
} 

getBreedList();

const createBreedList = (breedList) => {
    displayBreedList.innerHTML = `
        <select onchange="getBreedImage(this.value)">
            <option>Choose a breed!</option>
            ${Object.keys(breedList).map(breed => {
                return `<option>${breed}</option>`
            }).join('')}
        </select>
    `
}

const getBreedImage = async (breed) => {
    try {
        if (breed != 'Choose a breed!') {
            const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
            const data = await response.json();
            console.log(data);
            
            displayBreedImage(data.message);
        } else {
            alert('Please select a breed!');
        }
    } catch {
        console.log('error');
    }
}

displayBreedImage = (breedArray) => {
    const image = breedArray[Math.floor(Math.random()*breedArray.length)];
    imageDisplay.innerHTML = `<img src=${image} alt="">`;
}

randomButton.addEventListener("click", getRandomImage);