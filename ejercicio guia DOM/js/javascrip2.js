//agregar item arreglo
var nombre = [];
var valor = [];      

btn_agregar.addEventListener('click',function agregar(){
  var nom = document.getElementById('nombre').value;
  var val = document.getElementById('valor').value;
  
  guardar(nom,val)
})

function guardar(nom,val){
  nombre.push(nom);
  valor.push(val);
  document.getElementById('nombre').value="";
  document.getElementById('valor').value="";
}

btn_mostrar.addEventListener('click',function ver(){
  var insertar = document.getElementById('lista');
  var lista = '<table>';
      lista+='<tr><th>Nombre</th><th>Valor</th></tr>';
    for(i = 0;i<nombre.length;i++){
      lista +='<tr><td>'+nombre[i]+'</td><td>'+valor[i]+'</td></tr>';   
    }
    lista+='</table>'
    insertar.innerHTML= ''; 
    insertar.innerHTML= lista; 
})
