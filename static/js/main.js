let doc = document.getElementById('js_tag')

const randInt = (min,max) => {
    return Math.random() * (max - min) + min
}

doc.onclick = () => {
    doc.style.color = `rgb(${randInt(0,255)},${randInt(0,255)},${randInt(0,255)})`
}