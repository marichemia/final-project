


fetch('https://zoo-animal-api.herokuapp.com/animals/rand/2')
    .then(response => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
    })
    .then(data => {
        console.log(data)
    })
    .catch(error => document.querySelector("#isValid").textContent = error);
