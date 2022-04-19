// for animation of bar and cross in mobile view
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});

// To handle the switching of sections in how it works section of home page
document.querySelectorAll('.how_it_works_button').forEach(function(item) {
    item.addEventListener('click', function() {
        document.querySelectorAll('.how_it_works_button').forEach(function(x){ 
            x.setAttribute("class","how_it_works_button");
        })
        item.setAttribute('class', 'how_it_works_button active');
        document.querySelectorAll('.how_it_works_content').forEach(function(y){ 
            y.setAttribute("class","how_it_works_content d-none");
        })
        document.querySelector('#how_it_works_content' + item.innerHTML).setAttribute("class","how_it_works_content");
    });
});