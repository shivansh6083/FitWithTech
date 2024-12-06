const buttons = document.querySelectorAll('.btn');
const body = document.querySelector('body');

// alert('hello');


buttons.forEach(function(btn) {
    console.log(buttons);
    btn.addEventListener('click', function(e) {
        console.log(e);
        console.log(e.target);
        if (e.target.id === 'white') {
            body.style.backgroundColor = e.target.id;

        }

    });
});