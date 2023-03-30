function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var resu = document.querySelector('div#res')
    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert('[ERROR] Try again')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'photo')
        if (fsex[0].checked) {
            genero = 'male'
            if (idade >= 0 && idade < 1) {
                //bebê
                img.setAttribute('src', 'bebe-menino.png')
            } else if (idade >= 1 && idade < 15) {
                //criança
                img.setAttribute('src', 'crianca-menino.png')
            } else if (idade >= 15 && idade < 18) {
                //jovem
                img.setAttribute('src', 'jovem-homem.png')
            } else if (idade >= 18 && idade < 60) {
                //adulto
                img.setAttribute('src', 'homem-adulto.png')
            } else if (idade > 60) {
                //idoso
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'female'
            if (idade >= 0 && idade < 1) {
                img.setAttribute('src', 'bebe-menina.png')
                //bebê
            } else if (idade >= 1 && idade < 15) {
                //criança
                img.setAttribute('src', 'crianca-menina.png')
            } else if (idade >= 15 && idade < 18) {
                //jovem
                img.setAttribute('src', 'jovem-mulher.png')
            } else if (idade >= 18 && idade < 60) {
                //adulto
                img.setAttribute('src', 'mulher-adulta.png')
            } else if (idade > 60) {
                //idoso
                img.setAttribute('src', 'idosa.png')
            }
        } else if (fsex[2].checked) {
            genero = 'Other'
        }
        resu.style.textAlign = 'center'
        resu.innerHTML = `We've detected ${genero}, ${idade} years old.`
        resu.appendChild(img)
    }
}