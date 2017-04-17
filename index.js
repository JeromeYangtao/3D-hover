var parent = document.querySelector('#parent')
var child = document.querySelector('#child')

parent.addEventListener('mousemove', function(e) {
    let parentWidth = parent.clientWidth
    let parentHeight = parent.clientHeight

    // 中心坐标
    let xCenter = parent.offsetLeft + parentWidth / 2
    let yCenter = parent.offsetTop + parentHeight / 2

    // 以中点为原点的坐标
    let xDiff = e.clientX - xCenter
    let yDiff = e.clientY - yCenter

    // 转换为百分比
    let xPercent = xDiff / (parentWidth / 2)
    let yPercent = yDiff / (parentHeight / 2)

    // 转动的角度
    let xDeg = xPercent * 22
    let yDeg = yPercent * 22

    child.style.transform = `rotateX(${-yDeg}deg) rotateY(${xDeg}deg) translateZ(100px)`
})