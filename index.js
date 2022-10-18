

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