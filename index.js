

function fullscreenImg (url) {
    var img = document.createElement('img')
    img.src = url
    img.style.position = 'fixed'
    img.style.top = 0
    img.style.left = 0
    img.style.width = '100%'
    img.style.height = '100%'
    img.style.zIndex = 9999
    img.style.pointerEvents = 'none'
    document.body.appendChild(img)
}


document.addEventListener('click', function (e) {
    var target = e.target
    if (target.tagName === 'IMG') {
        Swal.fire({
            html: `<img src=${target.src}>`,
            showCloseButton: true,
            showCancelButton: false,
            showConfirmButton: false,
            customClass: 'swal-wide',
          })
    }
})



/// click event listener on hoverSection class
let section11 = document.getElementById('11');
let section12 = document.getElementById('12');
let section13 = document.getElementById('13');


section11.addEventListener('click', function() {
    Swal.fire({
        html: `<img src="/images/cartilla.jpg" class='imgFull'>`,
        showCloseButton: true,
        showCancelButton: false,
        showConfirmButton: false,
        customClass: 'swal-wide',

    })
});

section12.addEventListener('click', function() {
    Swal.fire({
        html: `<img src="/images/cartilla.jpg" class='imgFull'>`,
        showCloseButton: true,
        showCancelButton: false,
        showConfirmButton: false,
        customClass: 'swal-wide',

    })
});

section13.addEventListener('click', function() {
    Swal.fire({
        html: `<img src="/images/cartilla.jpg" class='imgFull'>`,
        showCloseButton: true,
        showCancelButton: false,
        showConfirmButton: false,
        customClass: 'swal-wide',

    })
});

