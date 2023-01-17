function changePic(imgName) {
    let boxImg = document.getElementById('bigpic')
    boxImg.setAttribute('src', imgName)
}

let likeValue = false

function like() {
    let isLike = document.getElementById("like")
    if (likeValue) {
        isLike.style.backgroundImage = "url('img/heart1.png')"
    } else {
        isLike.style.backgroundImage = "url('img/heart2.png')"
    }
    likeValue = !likeValue
}