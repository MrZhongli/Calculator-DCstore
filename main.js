const btnplus = document.getElementById('btnplus');
const camisaInput = document.getElementById('camisaInput');
const priceElement = document.getElementById('priceElement');
const totalPrice = document.getElementById('totalPrice');
const mainContainer = document.querySelector('.mainContainer')
const btnAdd = document.querySelector('.addBtn')
const calcularTotal = document.querySelector('#calcularTotal')
const MontoTotal = document.querySelector('#MontoTotal')

const listaCount = {};
const arrayGuardado = [];
const arrayCantidad = {};
const arrayValor = []


MontoTotal.setAttribute('class', 'TotalPrice')
btnplus.addEventListener('click', sumarValorInput);
btnplus.addEventListener('click', sumaPrecioTotal); 


let numero = 0;

function sumarValorInput(){
    numero++
    // console.log(camisaInput.value)
    return camisaInput.value = numero
}



function sumaPrecioTotal(){
    const precioElemento = productos[0].price
    // console.log(precioElemento)
    let montoTotal = 0
    montoTotal = precioElemento * numero;
    totalPrice.innerText = montoTotal
    console.log(montoTotal)
    return montoTotal
}


// creacion de los demas elemento segun el array de productos

const container = document.createElement('div');

function crearElement(){
        
        let elemento = document.createElement('div');
        elemento.setAttribute('class', 'doDivContainer')
       

        for(let i = 0; i < productos.length; i++){
            // crear divs
            let div = document.createElement('div')
            div.setAttribute('class','divContainer')
            let img = document.createElement('img')
            img.setAttribute('src', `${productos[i].img}`)
            // img.setAttribute('class', `${productos[i].img}`)
            let item = document.createElement('p')
            item.setAttribute('class','itemDiv')
            let priceDiv = document.createElement('p')
            priceDiv.setAttribute('class','precioElemento')
            div.append(img)
            elemento.append(div)
            div.append(item)
            item.setAttribute('class', 'itemContainer')
            item.innerHTML = productos[i].name;
            priceDiv.innerHTML = productos[i].price + '$'
            item.append(priceDiv)
            let addbtn = document.createElement('button')
            addbtn.setAttribute('class','addBtn')
            addbtn.innerHTML = '+'
            div.appendChild(addbtn)
            
            let inputDiv = document.createElement('input')
            inputDiv.setAttribute('type','text')
            inputDiv.setAttribute('class','inputDiv')
            inputDiv.setAttribute('id','inputDiv')
            let inputLabel = document.createElement('label')
            inputLabel.setAttribute('For','inputDiv')
            inputLabel.innerHTML= 'cantidad'
            div.appendChild(inputDiv)
            div.appendChild(inputLabel)

           
            
            let sumaTotal = document.createElement('p');
            sumaTotal.setAttribute('class','precioTotalCard')
            sumaTotal.innerHTML = 'precio total:'
            div.appendChild(sumaTotal)
            // termina creacion de divs


            addbtn.addEventListener('click',sumarCantidadInput)
            addbtn.addEventListener('click',sumarValorCantidad)
            addbtn.addEventListener('click',guardarEnArray)
            calcularTotal.addEventListener('click',sumaDeTodosElementos, guardarEnArray); 



           
            let numero = 0;
       
            function sumarCantidadInput(){
                numero ++;
                const resultado = inputDiv.value = numero
                // console.log(valor)
                return resultado
            }

            function sumarValorCantidad(){
                let precioElemento = productos[i].price
                let precioTotal = precioElemento * numero;
        
                sumaTotal.innerHTML = `precio total: ${precioTotal}$`
                return precioTotal
            }
            
           
    

          

            
            function guardarEnArray(){
            // console.log(productos[i])
            const elemento = Object.entries(productos[i])
            // console.log(elemento)
            const sumarListaCount = listaCount[elemento[0][1]]++
            if(listaCount[elemento[0][1]]){
                sumarListaCount 
            }else{
                listaCount[elemento[0][1]] = 1;
            }
            console.log(listaCount)
            // console.log(Object.entries(listaCount))
            // sumaDeTodosElementos(listaCount)
            
         
            

            
            return listaCount
        }
        
        
    }
    function reducirArray(valor){
        arrayValor.push(valor)
        console.log(arrayValor)
        const sumaDeTodo = arrayValor.reduce(sumarTodosMontos)
        console.log(sumaDeTodo)
        MontoTotal.innerHTML = `El monto total es de ${sumaDeTodo}$`;

    }
    function sumarTodosMontos(valorAcumulado , nuevoValor){
        return valorAcumulado + nuevoValor;
    }
    
    function sumaDeTodosElementos(){
        // console.log(listaCount)
        let listaTotal = {}
        for (listaTotal in listaCount){
            for(let i = 0; i < productos.length; i++){
            
            let valor = listaCount[listaTotal] * productos[i].price
            if(listaTotal == productos[i].name){
               reducirArray(valor)
           
            }
           

            
            
        }
    }
   

}




mainContainer.append(elemento)
}




crearElement()


