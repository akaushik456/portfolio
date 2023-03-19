document.documentElement.style.setProperty('--color',localStorage.getItem('pageColor'));

var colors= document.querySelectorAll('.colors');

colors.forEach(function(color) {
    color.addEventListener('click',function() {
        let hex = color.dataset.color;
        document.documentElement.style.setProperty('--color',hex);

        localStorage.setItem('pageColor',color.dataset.color);
        
    })
})