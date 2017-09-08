var datos = [];

btn_enviar.addEventListener('click',function agregar(){
  var dato = document.getElementById('txt_texto').value;
  
  guardar(dato);
})

function guardar(dato){
  datos.push(dato);
  document.getElementById('txt_texto').value="";
}

btn_enviar.addEventListener('click',function ver(){
   var insertar = document.getElementById('lista');
  var lista = '<select multiple="multiple">';      
    for(i = 0;i<datos.length;i++){
      lista +='<option>'+datos[i]+'</option>';   
    }
    lista+='</select>'
    insertar.innerHTML= ''; 
    insertar.innerHTML= lista; 
})