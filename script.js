let chave = 'cebcd482eda57fa9a6714c1c2ba91885'
const input = document.querySelector('.input-cidade')
const date = new Date()
const horas = date.getHours()


input.addEventListener('keypress', function(e){
    const keyCode = (e.keyCode ? e.keyCode : e.wich)
    if(keyCode > 47 && keyCode < 58){
        e.preventDefault()
        alert('Apenas letras')
    }
})

function colocarNaTela(dados){

    document.querySelector('.cidade').innerHTML = 'Tempo em ' + dados.name
    document.querySelector('.temp').innerHTML = Math.floor(dados.main.temp) + '°C'
    document.querySelector('.icone').src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    document.querySelector('.umidade').innerHTML = 'Umidade: ' + dados.main.humidity + '%'
    
    
    let temperatura = dados.main.temp
    let nuvens = dados.clouds.all

    if(nuvens > 50){
        let ceu = document.querySelector('.ceu').innerHTML = 'Céu: Nublado'  
    }else {
        let ceu = document.querySelector('.ceu').innerHTML = 'Céu: Limpo'
    }

    
    if(6 < horas && horas < 17 && temperatura > 10 && nuvens >= 50){
        
        document.body.style.backgroundImage = 'url(src/img/CalorDiaNublado.jpg)'
    }
    else if(18 < horas && horas < 24 && temperatura > 10 && nuvens >= 50){
        
        document.body.style.backgroundImage = 'url(src/img/CalorNoiteNublado.jpg)'
    }
    else if(18 < horas && horas < 24 && temperatura > 10 && nuvens < 50){
        
        document.body.style.backgroundImage = 'url(src/img/CalorNoiteLimpo.jpg)'
    }
    else if(horas > -1 && horas < 6 && temperatura > 10 && nuvens >= 50){
        
        document.body.style.backgroundImage = 'url(src/img/CalorNoiteNublado.jpg)'
    }
    else if(horas > -1 && horas < 6 && temperatura > 10 && nuvens < 50){
        
        document.body.style.backgroundImage = 'url(src/img/CalorNoiteLimpo.jpg)'
    }
    else if(6 < horas && horas < 17 && temperatura > 10 && nuvens < 50){
        
        document.body.style.backgroundImage = 'url(src/img/CalorDiaLimpo.jpg)'
    }
    else if(6 < horas && horas < 17 && temperatura < 10 && nuvens >= 50){
        
        document.body.style.backgroundImage = 'url(src/img/FrioDiaNublado.jpg)'
    }
    else if(18 < horas && horas < 24 && temperatura < 10 && nuvens >= 50){
        
        document.body.style.backgroundImage = 'url(src/img/FrioNoiteNublado.jpg)'
    }
    else if(18 < horas && horas < 24 && temperatura < 10 && nuvens < 50){
        
        document.body.style.backgroundImage = 'url(src/img/FrioNoiteLimpo.jpg)'
    }
    else if(horas > -1 && horas < 6 && temperatura < 10 && nuvens >= 50){
        
        document.body.style.backgroundImage = 'url(src/img/FrioNoiteNublado.jpg)'
    }
    else if(horas > -1 && horas < 6 && temperatura < 10 && nuvens < 50){
        
        document.body.style.backgroundImage = 'url(src/img/FrioNoiteLimpo.jpg)'
    }
    else if(6 < horas && horas < 17 && temperatura < 10 && nuvens < 50){
        
        document.body.style.backgroundImage = 'url(src/img/FrioDiaLimpo.jpg)'
    }

}

async function buscarCidade(cidade){
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + cidade +"&appid="+ chave +"&units=metric"

    let dados = await fetch(url).then(resposta => resposta.json())

    console.log(dados)

    if(dados.cod === '404'){
        alert('Não encontrei esse local')
    }
    else{
        colocarNaTela(dados)
    }
}

function cliqueiNoBotao() {

    let cidade = document.querySelector('.input-cidade').value

    buscarCidade(cidade)
}
