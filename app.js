//console.dir(document.all);
/*var headerTittle= document.getElementById('header-title');
var heade = document.getElementById('main-header');

headerTittle.textContent='Hola';

var items= document.getElementsByClassName('list-group-item');//classname

var item= document.getElementsByTagName('li')//tag
item.forEach( function(elemento,indice,array){
    item[indice].textContent='prueba';
});*/

//query selector
//el query selector trae el primer elemento que consigue
    /*var boton= document.querySelector('input[type="submit"]');
    boton.value= 'Enviar';

    var item= document.querySelector('.list-group-item');
    item.style.color= 'red';*/

    //query selector all
    //el query selectorall trae todos los elementos en forma de arreglo
    /*var items= document.querySelectorAll('.list-group-item');
    items[2].style.color= 'red';

    var titulo= document.querySelectorAll('.title');
    console.log(titulo);
    var impar = document.querySelectorAll('li:nth-child(odd)');
    var par = document.querySelectorAll('li:nth-child(even)');
    for (let i = 0; i < impar.length; i++) {
        impar[i].style.backgroundColor= '#ccc';
        par[i].style.backgroundColor='#f4f4f4';  
    }

    var items = document.querySelector('#items');
    var li= items.firstElementChild;
    li.textContent='prueba';*/

    //agregar cosas al DOM
    /*var newItem= document.createElement('li');
    newItem.className='list-group-item';

    var text= document.createTextNode('Item 5');
    newItem.appendChild(text);

    var contenedor= document.querySelector('#items');
    contenedor.insertBefore(newItem,contenedor.lastChild);
*/
    //eventos
    /*
    document.getElementById('boton').addEventListener('click',hacerclick);
    var i=0;
    function hacerclick(){
        
        i++;
        document.getElementById('header-title').textContent='Cambie ' + i + ' veces' ;
    }*/

    var form= document.getElementById('formAgregar');
    var lista= document.getElementById('items');
    var filtro= document.getElementById('filtro');

    //evento submit del formulario
    form.addEventListener('submit',agregarItem);
    //evento click del li
    lista.addEventListener('click',eliminar);
    //evento del enter
    filtro.addEventListener('keyup',filtrarItems)

    function agregarItem(e){
        e.preventDefault();
        
        //creando el elemento
        let item=document.getElementById('newItem').value; //obtener el texto del input
        let li= document.createElement('li');
        li.className='list-group-item';
        //agregar texto al elemento
        li.appendChild(document.createTextNode(item));

        //creacion del boton de borrado
        let botDel= document.createElement('button');
        botDel.className='btn btn-danger btn-sm float-right eliminar';
        botDel.appendChild(document.createTextNode('x'));//agregar x al li

        li.appendChild(botDel);//agregar boton al li

        lista.appendChild(li);//agregar li a la lista
        document.getElementById('newItem').value=null;
    }

    function eliminar(e){
        if(e.target.classList.contains('eliminar')){
            if(confirm('desea eliminar el item?')){
                let li= e.target.parentElement;
                lista.removeChild(li);
            }      
        }
    }
    function filtrarItems(e){
       var texto=e.target.value.toLowerCase();
       var items = lista.getElementsByTagName('li');
     
       Array.from(items).forEach(function(item){
            var itemNombre= item.firstChild.textContent;
            if(itemNombre.toLowerCase().indexOf(texto)!= -1){
                item.style.display='block';
            }else{
                item.style.display='none';
            }
       });
    }