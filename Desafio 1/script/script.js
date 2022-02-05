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
    
        
    for(let fru of frutas){
        let li = document.createElement('li');
        listaProdutos.appendChild(li).textContent = fru.descricao;
        for(valor in fru){
            if (valor == 'preco'){
                listaProdutos.appendChild(li).setAttribute('data-preco', fru[valor]);
            }
        }
    }    

    for it 
    listaProdutos.addEventListener('click', function(){
        alert('oi');
        listaCompras.push(listaProdutos);
        listaCompras.appendChild(listaProdutos).textContent = listaCompras.descricao;
    })
}


    