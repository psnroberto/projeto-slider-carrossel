        
    let labels = document.getElementsByClassName("labels"); /* variável criada para se referenciar a todos os elementos de classe "labels" */

    for (let i = 0; i <= labels.length - 1; i++) { /* Laço criado para percorrer todos os elementos de classe "labels" e adicionar um "escutador", o qual fará que quando o evento "click" ocorrer, a função "changeBgColor" será acionada */
        labels[i].addEventListener("click", changeBgColor);  
    }

    function changeBgColor() { /* Função para mudar o BG do elemento clicado. Primeiramente, ela fará com que todos os elementos com a classe "labels" tenham o BG transparente. Depois fará com que apenas o elemento clicado "this" tenha o BG alterado para branco. */
        for (let i = 0; i <= labels.length - 1; i++) {
            labels[i].style.backgroundColor = 'transparent'
        }
        this.style.backgroundColor = "white";
    }