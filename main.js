/* modal window for feedback */
const modal = document.getElementById('modal');
const close = document.getElementById('close');
const btn = document.getElementById('btn');

btn.addEventListener('click', function () {
    modal.classList.remove('none');
})

close.addEventListener('click', function () {
    modal.classList.add('none');
})







fetch('https://zoo-animal-api.herokuapp.com/animals/rand/2')
    .then(response => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
    })
    .then(data => {
        console.log(data)
    })
    .catch(error => document.querySelector("#isValid").textContent = error);
