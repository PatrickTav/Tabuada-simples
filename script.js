function tabuada(){
  let numero = document.getElementById('numtxt')
  let tab = document.getElementById('seltab')
  let res = document.getElementById('res')
   if (numero.value.length == ' '){
       window.alert('Digite algum numero')
   }else  {
        let val = Number(numero.value)
        let c = 1
        
        tab.innerHTML = ''
       /*
        while(c <= 10 ) {
            let item = document.createElement('option')
            item.text = `${val} x ${c} = ${val*c} `
            tab.appendChild(item)
            c++
        }*/

        for (let c = 1  ; c <= 10  ; c ++ ){
            let v = val * c
            let item = document.createElement('option')
            item.text = `${val} x ${c} = ${v}`
            tab.appendChild(item)


        }
   }
}