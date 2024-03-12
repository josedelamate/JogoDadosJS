console.log('Hello World!')

let vRandomJog1 = Math.random()*6 
vRandomJog1 = Math.floor(vRandomJog1)+1

let vRandomJog2 = Math.random()*6 
vRandomJog2 = Math.floor(vRandomJog2)+1

console.log(vRandomJog1)
console.log(vRandomJog2)

const imagens = document.getElementsByTagName('img')
console.log(imagens)


let priImagem = `dados-img/dice${vRandomJog1}.png`
let segImagem = `dados-img/dice${vRandomJog2}.png`

imagens[0].setAttribute('src',priImagem)
imagens[1].setAttribute('src',segImagem)

if (priImagem === segImagem) {
    location.reload()
}

const h1 = document.querySelector('h1')
if (priImagem > segImagem){
    h1.innerText = 'Jogador 1 venceu! 🏆 '
}else {
    h1.innerText = 'Jogador 2 venceu! 🏆 '
}
