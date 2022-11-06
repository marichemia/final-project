//fetch animal data

fetch('https://zoo-animal-api.herokuapp.com/animals/rand/9')
    .then(response => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
    })
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            document.getElementsByClassName('card-img')[i].style.backgroundImage = `url(${data[i]['image_link']})`;
            document.getElementsByClassName('animal-name')[i].textContent = `${data[i]['name']}`;
            document.getElementsByClassName('geo-range')[i].textContent = `${data[i]['geo_range']}`;
            document.getElementsByClassName('animal-type')[i].textContent = `${data[i]['animal_type']}`;
            document.getElementsByClassName('active-time')[i].textContent = `${data[i]['active_time']}`;
        }

    })
    .catch(error => console.log(error));

window.addEventListener('hashchange', function () {
    location.reload();
})


if (location.hash === '#animals') {
    document.getElementsByClassName('our-animals')[0].classList.remove('none');
    document.getElementsByClassName('section-2')[0].classList.add('none');
    document.getElementsByClassName('section-3')[0].classList.add('none');
    document.getElementsByClassName('banner-img')[0].style.backgroundImage = `url(images/peacock.webp)`
    document.getElementsByClassName('flower-1')[0].classList.add('none');
    document.getElementsByClassName('donate')[0].classList.add('none');

} else if (location.hash === '#donate') {
    document.getElementsByClassName('banner-img')[0].style.backgroundImage = `url(images/lemuri.jpg)`
    document.getElementsByClassName('section-2')[0].classList.add('none');
    document.getElementsByClassName('section-3')[0].classList.add('none');
    document.getElementsByClassName('flower-1')[0].classList.add('none');
    document.getElementsByClassName('our-animals')[0].classList.add('none');
    document.getElementsByClassName('donate')[0].classList.remove('none');

} else {
    document.getElementsByClassName('our-animals')[0].classList.add('none');
    document.getElementsByClassName('section-2')[0].classList.remove('none');
    document.getElementsByClassName('section-3')[0].classList.remove('none');
    document.getElementsByClassName('banner-img')[0].style.backgroundImage = `url(images/banner-img2.jpg)`
    document.getElementsByClassName('donate')[0].classList.add('none');
}

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




