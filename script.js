function adicionarCaracter(caracter){
    const valorInput = document.querySelector('.header4').value

    document.querySelector('.header4').value = valorInput+ caracter
    
}

function limparTela(){

    document.querySelector('.header4').value= ""

}

function calcular(){
    const valorInput = document.querySelector('.header4').value

    document.querySelector('.header4').value= eval(valorInput)
}