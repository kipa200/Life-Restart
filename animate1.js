
// alert('yidiaoyong')
const element = document.getElementById('p2');
let start;
var timestamp = Date.parse(new Date());
var endtime = 3000 + 1000 * Math.random();
function step(timestamp) {
    if (start === undefined)
        start = timestamp;
    const elapsed = timestamp - start;

    //这里使用`Math.min()`确保元素刚好停在200px的位置。
    element.style.transform = 'rotate(' + 0.1 * elapsed+ 'deg)';

    if (elapsed < endtime) { // 在两秒后停止动画
        window.requestAnimationFrame(step);
    }

}

window.requestAnimationFrame(step);
