function agregarTarea(){

    //Obtenemos el valor del campo de la tarea
    let nuevaTareaTexto = document.getElementById("nuevaTarea").value;

    //Validamos que el valor no sea vacio
    if (nuevaTareaTexto === ""){
        alert("Por favor, Ingrese una tarea");
        return;
    }

    //Crear elemento en la lista
    let nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = nuevaTareaTexto + " ";

    //Crear un boton Eliminar
    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.onclick = function() { nuevaTarea.remove();}

    //Aregar boton de Eliminar al elemento de la lista
    nuevaTarea.appendChild(botonEliminar);

    //Agregar el elemento/ la tarea a la lista
    document.getElementById("listaTareas").appendChild(nuevaTarea);

    //Limpiar el cuadro de texto del nombre de la tarea
    document.getElementById("nuevaTarea").value = "";

}