var inputRvs = document.getElementById("input-rvs");
var btnCalcular = document.getElementById("btn-calcular");
var resultadoRvs = document.getElementById("resulatado-rvs");


btnCalcular.addEventListener("click",evaluar)
inputRvs.addEventListener("click",()=>{
    resultadoRvs.textContent = "";
    inputRvs.value = "";
})


function evaluar(){
   let artefacto = inputRvs.value;

    if(artefacto <= 10000){
        resultadoRvs.textContent = "Valor calculado: rejilla de 100cm2"
    }
    if(artefacto > 10000){
        rvs = calcular(artefacto)
        
        resultadoRvs.textContent = "Valor calculado: " + rvs + " cm2 o superior";
    }
    
    function calcular(){
        let resultado = (artefacto - 10000) / 1000;
        console.log(resultado)
        let adicional = resultado * 3;
        console.log(adicional)
        let rvs = 100 + adicional;
        return rvs
    }
}


// ---------------------BUSCADOR---------------------------------

document.addEventListener("keyup", e=>{

    if (e.target.matches("#buscador")){
  
        if (e.key ==="Escape")e.target.value = ""
  
        document.querySelectorAll(".articulo").forEach(fruta =>{
  
            fruta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
              ?fruta.classList.remove("filtro")
              :fruta.classList.add("filtro")
        })
  
    }
  
  
  })
