const ShortLi = document.querySelectorAll('.li-short');
const ShortLiV = document.querySelectorAll('.li-short-v');
    if (window.screen.width <= 550) {
        ShortLi.forEach(elem => {
            elem.innerHTML = '<span class="li-short">Эксп. масса</span>';
        }); 
        ShortLiV.forEach(elem => {
        elem.innerHTML = '<span class="li-short-v">Объём ковша п/з</span>';
        }); 
    }
