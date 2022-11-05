/* modal window for feedback */
const modal = document.getElementById('modal');
const close = document.getElementById('close');
const btn = document.getElementById('btn');
const submit = document.getElementById('submit');
const feedback = document.getElementsByClassName('feedback')[0];

btn.addEventListener('click', function () {
    modal.classList.remove('none');
})

close.addEventListener('click', function () {
    modal.classList.add('none');
})

submit.addEventListener('click', function () {
    feedback.classList.add('none');
    submit.classList.add('none');
    modal.innerHTML = '<p class="thank-u-txt">Your Feedback Has Been Submitted!<br>Thank You</p>'
    setTimeout(function () {
        modal.classList.add('none');
    }, 1500)
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
