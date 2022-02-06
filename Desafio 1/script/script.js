window.onload = function(){
    let frutas = [
        {descricao:'Mamão Papaia', preco: 3.10},
        {descricao:'Laranja', preco: 2.20},
        {descricao:'Manga', preco: 1.50},
        {descricao:'Melão', preco: 2.50},
        {descricao:'Melancia', preco: 3.20}
    ]

    const listaProdutos = document.querySelector("#produtos");
    const listaCompras  = document.querySelector("#cestaDoCliente");
    const percorrerLista = document.querySelectorAll("#produtos");
    const totalAPagar = document.querySelector("#mostrTotalCompra");
    
    let cesta = [];
        
    for(let fru of frutas){
        let li = document.createElement('li');
        listaProdutos.appendChild(li).textContent = fru.descricao;
        for(valor in fru){
            if (valor == 'preco'){
                listaProdutos.appendChild(li).setAttribute('data-preco', fru[valor]);
            }
        }
    }    

       percorrerLista.forEach(function(itens){
        itens.addEventListener('click', function(item){
            if (cesta.indexOf(item.target.innerHTML) === -1 ){
                cesta.push(item.target.innerHTML);
                let liFilho = document.createElement('li');
                listaCompras.appendChild(liFilho).textContent = item.target.innerHTML;
            } else {
                alert(`${item.target.innerHTML} já se encontra na cesta`)
            }
            
        })
    })
    

}

    