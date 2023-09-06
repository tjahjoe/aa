const btn1 = document.getElementById('btn1')
const body = document.getElementsByTagName('body')
const divb = document.getElementsByClassName('divb')

//body[0]
body[0].style.justifyContent = 'center'
body[0].style.alignItems = 'center'

//btn1
btn1.style.border = 'none'
btn1.style.color = 'white'
btn1.style.backgroundColor = 'black'
btn1.style.width = '100px'
btn1.style.height = '100px'
btn1.style.borderRadius = '50%'
btn1.style.fontSize = '100%'
btn1.style.fontWeight = '1000'
btn1.style.textAlign = 'center'

//btn2
btn2.style.border = 'none'
btn2.style.color = 'white'
btn2.style.backgroundColor = 'white'
btn2.style.width = '100px'
btn2.style.height = '100px'
btn2.style.borderRadius = '50%'
btn2.style.fontSize = '100%'
btn2.style.fontWeight = '1000'
btn2.style.textAlign = 'center'

function dark() {
    btn2.style.borderRadius = '50%'
    btn1.style.color = 'black'
    btn2.style.border = 'none'
    body[0].style.backgroundColor = 'black'
    btn2.style.color = 'black'
    divb[0].style.color = 'white'
}
function light() {
    btn2.style.borderRadius = '50%'
    btn2.style.color = 'white'
    btn2.style.border = 'none'
    body[0].style.backgroundColor = 'white'
    btn1.style.color = 'white'
    divb[0].style.color = 'black'
}