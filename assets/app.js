const displayImage = document.getElementById('random-image');
const randomButton = document.getElementById('random-button');

const getRandomImage = async () => {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        console.log(response);
        console.log(data.message);
        
        displayRandomImage(data.message);
    } catch {
        console.log("error");
    }
}

const displayRandomImage = (randomImage) => {
    displayImage.innerHTML = `<img src=${randomImage} alt="">`;
}

randomButton.addEventListener("click", getRandomImage);