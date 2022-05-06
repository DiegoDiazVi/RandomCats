const url = 'https://api.thecatapi.com/v1/images/search'
/* 
Api consumo con fetch y promesas

fetch(url).then(response => response.json()).then(data => {
    const img = document.querySelector('img');
    img.src = data[0].url;
});
} */

// Consumo con de API con Async Await
const getCats = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        const img = document.querySelector('img');
        img.src = data[0].url;
    } catch (error) {
        console.log(error);
    }
}

getCats();

button.addEventListener('click',getCats); 