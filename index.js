// const navToggle = document.querySelector('nav-toggle');


const tog = () => {
    const navLinks = document.querySelectorAll('.nav__item');
    // alert('Yeah JS is working.')
    document.body.classList.toggle('nav-open');
    for (link of navLinks){
        link.addEventListener('click', () => {
            document.body.classList.remove('nav-open');
        })
    }
}

const dark = () => {
    document.body.classList.toggle('dark-theme');
    const btn = document.querySelector('.nav__btn');
    if (btn.textContent == 'Dark'){
        btn.textContent = 'Light';
    } else {
        btn.textContent = 'Dark'
    }
}



