function shiba() {

    const data = fetch('https://shibe.online/api/shibes?count='+ shibaCount, {
        headers: {
            Accept: "application/json; charset=utf-8",
        },
        mode: "cors"
    })
        .then(response => response.json())
        .then(function (text){
            const body = document.querySelector('body');
            for(let i = 0; i < text.length; i++){
                const woof = document.createElement('div');
                woof.className = 'profile';

                const imageElement = document.createElement('img');
                imageElement.className = 'portfolio'
                imageElement.src = text[i];

                woof.appendChild(imageElement);
                body.appendChild(woof);
            }
        })
        .catch(function(error) {
            // handle error
            console.log(error);
        });
}
window.onload = shiba;

function refreshPageWithRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 50) + 1; // Generate a random number between 1 and 50
  window.location.href = window.location.href.split('?')[0] + "?" + randomNumber; // Refresh the page with the new URL
}
