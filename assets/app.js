const displayImage = document.getElementById('random-image');
const randomButton = document.getElementById('random-button');

const getRandomImage = async () => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    console.log(response);
    console.log(data.message);

    displayRandomImage(data.message);
}

const displayRandomImage = (randomImage) => {
    displayImage.src = "";    
    displayImage.src = `"${randomImage}"`;
}


randomButton.addEventListener("click", getRandomImage);