// alert('已调用函数')
function begin() {
    const element = document.getElementById('p2');
    let start, startDeg;
    var timestamp = Date.parse(new Date());
    // 通过随机数引入结束时间
    var endtime = 3600 + 1000 * Math.random();
    // console.log(endtime)
    function step(timestamp) {
        // var declaration = document.styleSheets[0].cssRules[0].style;
        // startDeg = declaration.getPropertyValue('rotate'); // 
        // console.log(startDeg);

        if (start === undefined)
            start = timestamp;
        const elapsed = timestamp - start;

        //设置转速及转动角度
        element.style.transform = 'rotate(' + 0.1 * elapsed + 'deg)';

        if (elapsed < endtime) { // 在指定时间后停止动画
            window.requestAnimationFrame(step);
        }
        // return startDeg
    }
    // element.style.transform = 'rotate(' + startDeg + 'deg)';
    window.requestAnimationFrame(step);
}

