let lis = document.querySelectorAll(".valyuta p");
lis.forEach((m)=>{
    m.addEventListener("click", function(){
        m.classList.toggle("chg");
        
    })
})

let a = document.querySelector("#area1");
let b = document.querySelector("#area2");
a.addEventListener("keyup",function(){
fetch(`https://api.exchangerate.host/latest?base=USD&symbols=RUB`)
.then(resp=>resp.json())
.then(res=>{    
        b.innerHTML = this.value*res.rates.RUB;
    })
})

