function shiba() {
    const data = fetch('http://shibe.online/api/shibes?count='+shibaCount, {
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
