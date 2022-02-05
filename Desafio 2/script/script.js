import { resultadoCep, dadosCep} from "./util.js";

window.onload = function(){
       
    const btnBuscar = document.querySelector("#buscarCep");
    const CEP_      = document.querySelector("#NumeroCep");
   
    btnBuscar.addEventListener('click',function(){
        dadosCep(CEP_.value);
    })
}