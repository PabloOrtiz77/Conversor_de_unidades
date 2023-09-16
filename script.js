// este es la seleccion de la parte donde se imprimiran los resultados
result = document.getElementById("resultado");
//Por defecto esto dibujara la parte de longitud
window.addEventListener("load", init);
function init() {
  console.log("Esto se ejecuta solo cuando se carga la pagina web");
  let contenedor1 = document.getElementById("grid1"); //aca seleccionamos dos contenedores que creamos
  //para crear los elementos del select
  let contenedor2 = document.getElementById("grid2");
  var opciones = [
    //aca creo las opciones
    "metro",
    "centi",
    "km",
    "milla",
    "milimetro",
    "yarda",
    "pie",
    "pulgada",
  ];
  //cree esta opcion tambien porque anteriormente habia creado solo las opciones uno pero en
  //algunos nombres no estaba completa la frase y ya habia creado el programa
  //por eso cree uno nuevo para que se visualizara mejor
  var opciones2 = [
    "metro",
    "centimetro",
    "kilometro",
    "milla",
    "milimetro",
    "yarda",
    "pie",
    "pulgada",
  ];
  let select1 = document.createElement("select"); //creamos el select1
  select1.id = "select1";
  for (let i = 0; i < opciones.length; i++) {
    //aca le damos sus valores del select1
    var opcion = document.createElement("option");
    opcion.value = opciones[i];
    opcion.text = opciones2[i];
    select1.appendChild(opcion); //le agregamos al select
  }

  // Crear el segundo elemento select y agregando opciones
  let select2 = document.createElement("select"); //creamos el select2
  select2.id = "select2";
  for (let i = 0; i < opciones.length; i++) {
    //aca le damos sus valores del select2
    let opcion = document.createElement("option");
    opcion.value = opciones[i];
    opcion.text = opciones2[i];
    select2.appendChild(opcion); //le agregamos al select
  }
  //aca le pasamos al contenedor que creamos
  contenedor1.appendChild(select1);
  contenedor2.appendChild(select2);
  //el resto de las creaciones es el mismo proceso pero con diferentes datos
  //para crear los demas select
}

//esta parte a medida que queremos pasar de un metodo de conversion a otro va a cambiar su contenido
function dibujar() {
  if (opc.value == "longitud") {
    let contenedor1 = document.getElementById("grid1");
    let contenedor2 = document.getElementById("grid2");
    contenedor1.innerHTML = "";
    contenedor2.innerHTML = "";
    var opciones = [
      "metro",
      "centi",
      "km",
      "milla",
      "milimetro",
      "yarda",
      "pie",
      "pulgada",
    ];
    var opciones2 = [
      "metro",
      "centimetro",
      "kilometro",
      "milla",
      "milimetro",
      "yarda",
      "pie",
      "pulgada",
    ];
    let select1 = document.createElement("select");
    select1.id = "select1";
    for (let i = 0; i < opciones.length; i++) {
      var opcion = document.createElement("option");
      opcion.value = opciones[i];
      opcion.text = opciones2[i];
      select1.appendChild(opcion);
    }

    // Crear el segundo elemento select y agregando opciones
    let select2 = document.createElement("select");
    select2.id = "select2";
    for (let i = 0; i < opciones.length; i++) {
      let opcion = document.createElement("option");
      opcion.value = opciones[i];
      opcion.text = opciones2[i];
      select2.appendChild(opcion);
    }

    contenedor1.appendChild(select1);
    contenedor2.appendChild(select2);
  } else if (opc.value == "volumen") {
    let contenedor1 = document.getElementById("grid1");
    let contenedor2 = document.getElementById("grid2");
    contenedor1.innerHTML = "";
    contenedor2.innerHTML = "";
    var opciones = ["litro", "mililitro", "galon", "cuarto", "taza"];

    let select1 = document.createElement("select");
    select1.id = "select1";
    for (let i = 0; i < opciones.length; i++) {
      var opcion = document.createElement("option");
      opcion.value = opciones[i];
      opcion.text = opciones[i];
      select1.appendChild(opcion);
    }

    // Crear el segundo elemento select y agregando opciones
    let select2 = document.createElement("select");
    select2.id = "select2";
    for (let i = 0; i < opciones.length; i++) {
      let opcion = document.createElement("option");
      opcion.value = opciones[i];
      opcion.text = opciones[i];
      select2.appendChild(opcion);
    }

    contenedor1.appendChild(select1);
    contenedor2.appendChild(select2);
  } else if (opc.value == "masa") {
    let contenedor1 = document.getElementById("grid1");
    let contenedor2 = document.getElementById("grid2");
    contenedor1.innerHTML = "";
    contenedor2.innerHTML = "";
    var opciones = ["tonelada", "kilogramo", "gramo", "libra", "onza"];

    let select1 = document.createElement("select");
    select1.id = "select1";
    for (let i = 0; i < opciones.length; i++) {
      var opcion = document.createElement("option");
      opcion.value = opciones[i];
      opcion.text = opciones[i];
      select1.appendChild(opcion);
    }

    // Crear el segundo elemento select y agregando opciones
    let select2 = document.createElement("select");
    select2.id = "select2";
    for (let i = 0; i < opciones.length; i++) {
      let opcion = document.createElement("option");
      opcion.value = opciones[i];
      opcion.text = opciones[i];
      select2.appendChild(opcion);
    }

    contenedor1.appendChild(select1);
    contenedor2.appendChild(select2);
  } else if (opc.value == "tiempo") {
    let contenedor1 = document.getElementById("grid1");
    let contenedor2 = document.getElementById("grid2");
    contenedor1.innerHTML = "";
    contenedor2.innerHTML = "";
    var opciones = ["milisegundo", "segundo", "minuto", "hora"];

    let select1 = document.createElement("select");
    select1.id = "select1";
    for (let i = 0; i < opciones.length; i++) {
      var opcion = document.createElement("option");
      opcion.value = opciones[i];
      opcion.text = opciones[i];
      select1.appendChild(opcion);
    }

    // Crear el segundo elemento select y agregando opciones
    let select2 = document.createElement("select");
    select2.id = "select2";
    for (let i = 0; i < opciones.length; i++) {
      let opcion = document.createElement("option");
      opcion.value = opciones[i];
      opcion.text = opciones[i];
      select2.appendChild(opcion);
    }

    contenedor1.appendChild(select1);
    contenedor2.appendChild(select2);
  }
}
//aca es donde seleccionamos para hacer el llamado del evento dibujar
let opc = document.getElementById("opc"); //selecionamos la opcion general para hacer los calculos
opc.addEventListener("change", dibujar); //la seleccion llama al evento que ejecutara la funcion

//este es el boton que llamara a la funcion calcular
let BOTON = document.getElementById("calcular"); //seleccionamos el boton
BOTON.addEventListener("click", calcular); //este seria el evento de boton calcular

function calcular() {
  //esta es la funcion que ejecutara la logica
  let val = document.getElementById("dato").value; //lo obtenemos de un input texto
  //creamos las variables para extraer las opciones
  let opc1 = document.getElementById("select1").value;
  let opc2 = document.getElementById("select2").value;
  let opc = document.getElementById("opc").value;
  if (val == "") {
    //como es texto si esta vacio ejecuta esta opcion
    result.innerHTML = "";
    return;
  }
  val = parseFloat(val); //aca lo convertimos a tipo flotante
  console.log(`valor${val} select1: ${opc1} select1: ${opc2}`);
  //aca llamamos a las funciones para hacer los calculos
  if (opc == "longitud") {
    //aca dependiendo que sea llamamos a las funciones y le pasamos el valor
    //del input con las dos opciones
    longitud(val, opc1, opc2);
  } else if (opc == "masa") {
    masa(val, opc1, opc2);
  } else if (opc == "volumen") {
    volumen(val, opc1, opc2);
  } else if (opc == "tiempo") {
    tiempo(val, opc1, opc2);
  }
}

//creamos una funcion especifica para longitud y lo llamamos desde la funcion calcular
function longitud(val, opc1, opc2) {
  //Calculo de los metros a
  if (opc1 == "metro" && opc2 == "metro") {
    result.innerHTML = `${val} metros es igual a ${val} metros`;
  } else if (opc1 == "metro" && opc2 == "km") {
    result.innerHTML = `${val} metros es igual a ${
      Math.round((val / 1000) * 100) / 100
    } kilometros`;
  } else if (opc1 == "metro" && opc2 == "centi") {
    result.innerHTML = `${val} metros es igual a ${val * 100} centimetros`;
  } else if (opc1 == "metro" && opc2 == "milimetro") {
    result.innerHTML = `${val} metros es igual a ${val * 1000} milimetros`;
  } else if (opc1 == "metro" && opc2 == "milla") {
    result.innerHTML = `${val} metros es igual a ${
      Math.round((val / 1609) * 100) / 100
    } millas`;
  } else if (opc1 == "metro" && opc2 == "yarda") {
    result.innerHTML = `${val} metros es igual a ${
      Math.round(val * 1.094 * 100) / 100
    } yardas`;
  } else if (opc1 == "metro" && opc2 == "pie") {
    result.innerHTML = `${val} metros es igual a ${val * 3.281} pies`;
  } else if (opc1 == "metro" && opc2 == "pulgada") {
    result.innerHTML = `${val} metros es igual a ${
      Math.round(val * 39.37 * 100) / 100
    } pulgadas`;
  }
  //Calculo de los centimetros a
  if (opc1 == "centi" && opc2 == "centi") {
    result.innerHTML = `${val} centimetros es igual a ${val} centimetros`;
  } else if (opc1 == "centi" && opc2 == "km") {
    result.innerHTML = `${val} centimetros es igual a ${
      Math.round((val / 100000) * 100) / 100
    } kilometros`;
  } else if (opc1 == "centi" && opc2 == "metro") {
    result.innerHTML = `${val} centimetros es igual a ${
      Math.round((val / 100) * 100) / 100
    } metros`;
  } else if (opc1 == "centi" && opc2 == "milimetro") {
    result.innerHTML = `${val} centimetros es igual a ${val * 10} milimetros`;
  } else if (opc1 == "centi" && opc2 == "milla") {
    result.innerHTML = `${val} centimetros es igual a ${val / 160900} millas`;
  } else if (opc1 == "centi" && opc2 == "yarda") {
    result.innerHTML = `${val} centimetros es igual a ${val / 91.44} yardas`;
  } else if (opc1 == "centi" && opc2 == "pie") {
    result.innerHTML = `${val} centimetros es igual a ${
      Math.round((val / 30.48) * 100) / 100
    } pies`;
  } else if (opc1 == "centi" && opc2 == "pulgada") {
    result.innerHTML = `${val} centimetros es igual a ${
      Math.round((val / 2.54) * 100) / 100
    } pulgadas`;
  }
  //Calculo de los kilometros a
  if (opc1 == "km" && opc2 == "km") {
    result.innerHTML = `${val} kilometros es igual a ${val} kilometros`;
  } else if (opc1 == "km" && opc2 == "centi") {
    result.innerHTML = `${val} kilometros es igual a ${
      Math.round(val * 100000 * 100) / 100
    } centimetros`;
  } else if (opc1 == "km" && opc2 == "metro") {
    result.innerHTML = `${val} kilometros es igual a ${val * 1000} metros`;
  } else if (opc1 == "km" && opc2 == "milimetro") {
    result.innerHTML = `${val} kilometros es igual a ${val * 1e6} milimetros`;
  } else if (opc1 == "km" && opc2 == "milla") {
    result.innerHTML = `${val} kilometros es igual a ${
      Math.round((val / 1.609) * 100) / 100
    } millas`;
  } else if (opc1 == "km" && opc2 == "yarda") {
    result.innerHTML = `${val} kilometros es igual a ${val * 1094} yardas`;
  } else if (opc1 == "km" && opc2 == "pie") {
    result.innerHTML = `${val} kilometros es igual a ${val * 3281} pies`;
  } else if (opc1 == "km" && opc2 == "pulgada") {
    result.innerHTML = `${val} kilometros es igual a ${val * 39370} pulgadas`;
  }
  //Calculo de millas a
  if (opc1 == "milla" && opc2 == "milla") {
    result.innerHTML = `${val} millas es igual a ${val} millas`;
  } else if (opc1 == "milla" && opc2 == "centi") {
    result.innerHTML = `${val} millas es igual a ${val * 160900} centimetros`;
  } else if (opc1 == "milla" && opc2 == "metro") {
    result.innerHTML = `${val} millas es igual a ${val * 1609} metros`;
  } else if (opc1 == "milla" && opc2 == "milimetro") {
    result.innerHTML = `${val} millas es igual a ${
      Math.round(val * 1.609e6 * 100) / 100
    } milimetros`;
  } else if (opc1 == "milla" && opc2 == "km") {
    result.innerHTML = `${val} millas es igual a ${val * 1.609} kilometros`;
  } else if (opc1 == "milla" && opc2 == "yarda") {
    result.innerHTML = `${val} millas es igual a ${val * 1760} yardas`;
  } else if (opc1 == "milla" && opc2 == "pie") {
    result.innerHTML = `${val} millas es igual a ${val * 5280} pies`;
  } else if (opc1 == "milla" && opc2 == "pulgada") {
    result.innerHTML = `${val} millas es igual a ${val * 63360} pulgadas`;
  }

  //Calculo de Milimetro a
  if (opc1 == "milimetro" && opc2 == "milimetro") {
    result.innerHTML = `${val} milimetros es igual a ${val} milimetros`;
  } else if (opc1 == "milimetro" && opc2 == "centi") {
    result.innerHTML = `${val} milimetros es igual a ${
      Math.round((val / 10) * 100) / 100
    } centimetros`;
  } else if (opc1 == "milimetro" && opc2 == "metro") {
    result.innerHTML = `${val} milimetros es igual a ${
      Math.round((val / 1000) * 100) / 100
    } metros`;
  } else if (opc1 == "milimetro" && opc2 == "milla") {
    result.innerHTML = `${val} milimetros es igual a ${
      Math.round((val / 1.609e6) * 100) / 100
    } millas`;
  } else if (opc1 == "milimetro" && opc2 == "km") {
    result.innerHTML = `${val} milimetros es igual a ${
      Math.round((val / 1e6) * 100) / 100
    } kilometros`;
  } else if (opc1 == "milimetro" && opc2 == "yarda") {
    result.innerHTML = `${val} milimetros es igual a ${
      Math.round((val / 914.4) * 100) / 100
    } yardas`;
  } else if (opc1 == "milimetro" && opc2 == "pie") {
    result.innerHTML = `${val} milimetros es igual a ${
      Math.round((val / 304.8) * 100) / 100
    } pies`;
  } else if (opc1 == "milimetro" && opc2 == "pulgada") {
    result.innerHTML = `${val} milimetros es igual a ${
      Math.round((val / 25.4) * 100) / 100
    } pulgadas`;
  }

  //Calculo de Yardas a
  if (opc1 == "yarda" && opc2 == "yarda") {
    result.innerHTML = `${val} yardas es igual a ${val} yardas`;
  } else if (opc1 == "yarda" && opc2 == "centi") {
    result.innerHTML = `${val} yardas es igual a ${val * 91.44} centimetros`;
  } else if (opc1 == "yarda" && opc2 == "metro") {
    result.innerHTML = `${val} yardas es igual a ${
      Math.round((val / 1.094) * 100) / 100
    } metros`;
  } else if (opc1 == "yarda" && opc2 == "milla") {
    result.innerHTML = `${val} yardas es igual a ${
      Math.round((val / 1760) * 100) / 100
    } millas`;
  } else if (opc1 == "yarda" && opc2 == "km") {
    result.innerHTML = `${val} yardas es igual a ${
      Math.round((val / 1094) * 100) / 100
    } kilometros`;
  } else if (opc1 == "yarda" && opc2 == "milimetro") {
    result.innerHTML = `${val} yardas es igual a ${val * 914.4} milimetros`;
  } else if (opc1 == "yarda" && opc2 == "pie") {
    result.innerHTML = `${val} yardas es igual a ${val * 3} pies`;
  } else if (opc1 == "yarda" && opc2 == "pulgada") {
    result.innerHTML = `${val} yardas es igual a ${val * 36} pulgadas`;
  }

  //Calculo de Pie a
  if (opc1 == "pie" && opc2 == "pie") {
    result.innerHTML = `${val} pies es igual a ${val} pies`;
  } else if (opc1 == "pie" && opc2 == "centi") {
    result.innerHTML = `${val} pies es igual a ${
      Math.round(val * 30.48 * 100) / 100
    } centimetros`;
  } else if (opc1 == "pie" && opc2 == "metro") {
    result.innerHTML = `${val} pies es igual a ${val * 3.281} metros`;
  } else if (opc1 == "pie" && opc2 == "milla") {
    result.innerHTML = `${val} pies es igual a ${
      Math.round((val / 5280) * 100) / 100
    } millas`;
  } else if (opc1 == "pie" && opc2 == "km") {
    result.innerHTML = `${val} pies es igual a ${
      Math.round((val / 3281) * 100) / 100
    } kilometros`;
  } else if (opc1 == "pie" && opc2 == "milimetro") {
    result.innerHTML = `${val} pies es igual a ${val * 304.8} milimetros`;
  } else if (opc1 == "pie" && opc2 == "yarda") {
    result.innerHTML = `${val} pies es igual a ${
      Math.round((val / 3) * 100) / 100
    } yardas`;
  } else if (opc1 == "pie" && opc2 == "pulgada") {
    result.innerHTML = `${val} pies es igual a ${val * 12} pulgadas`;
  }

  //Calculo de Pulgada a
  if (opc1 == "pulgada" && opc2 == "pulgada") {
    result.innerHTML = `${val} pulgadas es igual a ${val} pulgadas`;
  } else if (opc1 == "pulgada" && opc2 == "centi") {
    result.innerHTML = `${val} pulgadas es igual a ${val * 2.54} centimetros`;
  } else if (opc1 == "pulgada" && opc2 == "metro") {
    result.innerHTML = `${val} pulgadas es igual a ${
      Math.round((val / 39.37) * 100) / 100
    } metros`;
  } else if (opc1 == "pulgada" && opc2 == "milla") {
    result.innerHTML = `${val} pulgadas es igual a ${
      Math.round((val / 63360) * 100) / 100
    } millas`;
  } else if (opc1 == "pulgada" && opc2 == "km") {
    result.innerHTML = `${val} pulgadas es igual a ${
      Math.round((val / 39370) * 100) / 100
    } kilometros`;
  } else if (opc1 == "pulgada" && opc2 == "milimetro") {
    result.innerHTML = `${val} pulgadas es igual a ${val * 25.4} milimetros`;
  } else if (opc1 == "pulgada" && opc2 == "yarda") {
    result.innerHTML = `${val} pulgadas es igual a ${
      Math.round((val / 36) * 100) / 100
    } yardas`;
  } else if (opc1 == "pulgada" && opc2 == "pie") {
    result.innerHTML = `${val} pulgadas es igual a ${
      Math.round((val / 12) * 100) / 100
    } pies`;
  }
}

//Para calcular la masa
function masa(val, opc1, opc2) {
  //Toneladas a
  if (opc1 == "tonelada" && opc2 == "tonelada") {
    result.innerHTML = `${val} toneladas es igual a ${val} toneladas`;
  } else if (opc1 == "tonelada" && opc2 == "kilogramo") {
    result.innerHTML = `${val} toneladas es igual a ${val * 1000} kilogramos`;
  } else if (opc1 == "tonelada" && opc2 == "gramo") {
    result.innerHTML = `${val} toneladas es igual a ${val * 1e6} gramos`;
  } else if (opc1 == "tonelada" && opc2 == "libra") {
    result.innerHTML = `${val} toneladas es igual a ${val * 2205} libras`;
  } else if (opc1 == "tonelada" && opc2 == "onza") {
    result.innerHTML = `${val} toneladas es igual a ${val * 35270} onzas`;
  }
  //kilogramo a
  else if (opc1 == "kilogramo" && opc2 == "kilogramo") {
    result.innerHTML = `${val} kilogramos es igual a ${val} kilogramos`;
  } else if (opc1 == "kilogramo" && opc2 == "tonelada") {
    result.innerHTML = `${val} kilogramos es igual a ${
      Math.round((val / 1000) * 100) / 100
    } toneladas`;
  } else if (opc1 == "kilogramo" && opc2 == "gramo") {
    result.innerHTML = `${val} kilogramos es igual a ${val * 1000} gramos`;
  } else if (opc1 == "kilogramo" && opc2 == "libra") {
    result.innerHTML = `${val} kilogramos es igual a ${val * 2.205} libras`;
  } else if (opc1 == "kilogramo" && opc2 == "onza") {
    result.innerHTML = `${val} kilogramos es igual a ${val * 35.274} onzas`;
  }
  //gramo a
  else if (opc1 == "gramo" && opc2 == "gramo") {
    result.innerHTML = `${val} gramos es igual a ${val} gramos`;
  } else if (opc1 == "gramo" && opc2 == "tonelada") {
    result.innerHTML = `${val} gramos es igual a ${
      Math.round((val / 1e6) * 100) / 100
    } toneladas`;
  } else if (opc1 == "gramo" && opc2 == "kilogramo") {
    result.innerHTML = `${val} gramos es igual a ${
      Math.round((val / 1000) * 100) / 100
    } kilogramos`;
  } else if (opc1 == "gramo" && opc2 == "libra") {
    result.innerHTML = `${val} gramos es igual a ${
      Math.round((val / 453.6) * 100) / 100
    } libras`;
  } else if (opc1 == "gramo" && opc2 == "onza") {
    result.innerHTML = `${val} gramos es igual a ${
      Math.round((val / 28.35) * 100) / 100
    } onzas`;
  }
  //libras a
  else if (opc1 == "libra" && opc2 == "libra") {
    result.innerHTML = `${val} libras es igual a ${val} libras`;
  } else if (opc1 == "libra" && opc2 == "tonelada") {
    result.innerHTML = `${val} libras es igual a ${
      Math.round((val / 2205) * 100) / 100
    } toneladas`;
  } else if (opc1 == "libra" && opc2 == "kilogramo") {
    result.innerHTML = `${val} libras es igual a ${
      Math.round((val / 2.205) * 100) / 100
    } kilogramos`;
  } else if (opc1 == "libra" && opc2 == "gramo") {
    result.innerHTML = `${val} libras es igual a ${val * 453.6} gramos`;
  } else if (opc1 == "libra" && opc2 == "onza") {
    result.innerHTML = `${val} libras es igual a ${val * 16} onzas`;
  }

  //onza a
  else if (opc1 == "onza" && opc2 == "onza") {
    result.innerHTML = `${val} onzas es igual a ${val} onzas`;
  } else if (opc1 == "onza" && opc2 == "tonelada") {
    result.innerHTML = `${val} onzas es igual a ${
      Math.round((val / 35270) * 100) / 100
    } toneladas`;
  } else if (opc1 == "onza" && opc2 == "kilogramo") {
    result.innerHTML = `${val} onzas es igual a ${
      Math.round((val / 35.274) * 100) / 100
    } kilogramos`;
  } else if (opc1 == "onza" && opc2 == "gramo") {
    result.innerHTML = `${val} onzas es igual a ${val * 28.35} gramos`;
  } else if (opc1 == "onza" && opc2 == "libra") {
    result.innerHTML = `${val} onzas es igual a ${
      Math.round((val / 16) * 100) / 100
    } libras`;
  }
}
//Para calcular volumen
function volumen(val, opc1, opc2) {
  //litro a
  if (opc1 == "litro" && opc2 == "litro") {
    result.innerHTML = `${val} litros es igual a ${val} litros`;
  } else if (opc1 == "litro" && opc2 == "mililitro") {
    result.innerHTML = `${val} litros es igual a ${val * 1000} mililitros`;
  } else if (opc1 == "litro" && opc2 == "galon") {
    result.innerHTML = `${val} litros es igual a ${
      Math.round((val / 3.785) * 100) / 100
    } galones`;
  } else if (opc1 == "litro" && opc2 == "cuarto") {
    result.innerHTML = `${val} litros es igual a ${val * 1.057} cuartos`;
  } else if (opc1 == "litro" && opc2 == "taza") {
    result.innerHTML = `${val} litros es igual a ${val * 4.167} tazas`;
  }
  //mililitro a
  if (opc1 == "mililitro" && opc2 == "mililitro") {
    result.innerHTML = `${val} mililitros es igual a ${val} mililitros`;
  } else if (opc1 == "mililitro" && opc2 == "litro") {
    result.innerHTML = `${val} mililitros es igual a ${
      Math.round((val / 1000) * 100) / 100
    } litros`;
  } else if (opc1 == "mililitro" && opc2 == "galon") {
    result.innerHTML = `${val} mililitros es igual a ${
      Math.round((val / 3785) * 100) / 100
    } galones`;
  } else if (opc1 == "mililitro" && opc2 == "cuarto") {
    result.innerHTML = `${val} mililitros es igual a ${
      Math.round((val / 946.4) * 100) / 100
    } cuartos`;
  } else if (opc1 == "mililitro" && opc2 == "taza") {
    result.innerHTML = `${val} mililitros es igual a ${
      Math.round((val / 240) * 100) / 100
    } tazas`;
  }

  //galon a
  if (opc1 == "galon" && opc2 == "galon") {
    result.innerHTML = `${val} galones es igual a ${val} galones`;
  } else if (opc1 == "galon" && opc2 == "litro") {
    result.innerHTML = `${val} galones es igual a ${val * 3.785} litros`;
  } else if (opc1 == "galon" && opc2 == "mililitro") {
    result.innerHTML = `${val} galones es igual a ${val * 3785} mililitros`;
  } else if (opc1 == "galon" && opc2 == "cuarto") {
    result.innerHTML = `${val} galones es igual a ${val * 4} cuartos`;
  } else if (opc1 == "galon" && opc2 == "taza") {
    result.innerHTML = `${val} galones es igual a ${val * 15.773} tazas`;
  }
  //cuarto a
  if (opc1 == "cuarto" && opc2 == "cuarto") {
    result.innerHTML = `${val} cuartos es igual a ${val} cuartos`;
  } else if (opc1 == "cuarto" && opc2 == "litro") {
    result.innerHTML = `${val} cuartos es igual a ${
      Math.round((val / 1.057) * 100) / 100
    } litros`;
  } else if (opc1 == "cuarto" && opc2 == "mililitro") {
    result.innerHTML = `${val} cuartos es igual a ${val * 946.4} mililitros`;
  } else if (opc1 == "cuarto" && opc2 == "galon") {
    result.innerHTML = `${val} cuartos es igual a ${
      Math.round((val / 4) * 100) / 100
    } galones`;
  } else if (opc1 == "cuarto" && opc2 == "taza") {
    result.innerHTML = `${val} cuartos es igual a ${val * 3.943} tazas`;
  }

  //taza a
  if (opc1 == "taza" && opc2 == "taza") {
    result.innerHTML = `${val} tazas es igual a ${val} tazas`;
  } else if (opc1 == "taza" && opc2 == "litro") {
    result.innerHTML = `${val} tazas es igual a ${
      Math.round((val / 4.167) * 100) / 100
    } litros`;
  } else if (opc1 == "taza" && opc2 == "mililitro") {
    result.innerHTML = `${val} tazas es igual a ${val * 240} mililitros`;
  } else if (opc1 == "taza" && opc2 == "galon") {
    result.innerHTML = `${val} tazas es igual a ${
      Math.round((val / 15.772) * 100) / 100
    } galones`;
  } else if (opc1 == "taza" && opc2 == "cuarto") {
    result.innerHTML = `${val} tazas es igual a ${
      Math.round((val / 3.943) * 100) / 100
    } cuartos`;
  }
}
//Para calcular tiempo
function tiempo(val, opc1, opc2) {
  // milisegundo a
  if (opc1 == "milisegundo" && opc2 == "milisegundo") {
    result.innerHTML = `${val} milisegundos es igual a ${val} milisegundos`;
  } else if (opc1 == "milisegundo" && opc2 == "segundo") {
    result.innerHTML = `${val} milisegundos es igual a ${
      Math.round((val / 1000) * 100) / 100
    } segundos`;
  } else if (opc1 == "milisegundo" && opc2 == "minuto") {
    result.innerHTML = `${val} milisegundos es igual a ${
      Math.round((val / 60000) * 100) / 100
    } minutos`;
  } else if (opc1 == "milisegundo" && opc2 == "hora") {
    result.innerHTML = `${val} milisegundos es igual a ${
      Math.round((val / 3.6e6) * 100) / 100
    } horas`;
  }
  // segundo a
  if (opc1 == "segundo" && opc2 == "segundo") {
    result.innerHTML = `${val} segundos es igual a ${val} segundos`;
  } else if (opc1 == "segundo" && opc2 == "milisegundo") {
    result.innerHTML = `${val} segundos es igual a ${val * 1000} milisegundos`;
  } else if (opc1 == "segundo" && opc2 == "minuto") {
    result.innerHTML = `${val} segundos es igual a ${
      Math.round((val / 60) * 100) / 100
    } minutos`;
  } else if (opc1 == "segundo" && opc2 == "hora") {
    result.innerHTML = `${val} segundos es igual a ${
      Math.round((val / 3600) * 100) / 100
    } horas`;
  }
  // minuto a
  if (opc1 == "minuto" && opc2 == "minuto") {
    result.innerHTML = `${val} minutos es igual a ${val} minutos`;
  } else if (opc1 == "minuto" && opc2 == "milisegundo") {
    result.innerHTML = `${val} minutos es igual a ${val * 60000} milisegundos`;
  } else if (opc1 == "minuto" && opc2 == "segundo") {
    result.innerHTML = `${val} minutos es igual a ${val * 60} segundos`;
  } else if (opc1 == "minuto" && opc2 == "hora") {
    result.innerHTML = `${val} minutos es igual a ${
      Math.round((val / 60) * 100) / 100
    } horas`;
  }
  // hora a
  if (opc1 == "hora" && opc2 == "hora") {
    result.innerHTML = `${val} horas es igual a ${val} horas`;
  } else if (opc1 == "hora" && opc2 == "milisegundo") {
    result.innerHTML = `${val} horas es igual a ${
      Math.round(val * 3.6e6 * 100) / 100
    } milisegundos`;
  } else if (opc1 == "hora" && opc2 == "segundo") {
    result.innerHTML = `${val} horas es igual a ${val * 3600} segundos`;
  } else if (opc1 == "hora" && opc2 == "minuto") {
    result.innerHTML = `${val} horas es igual a ${val * 60} minutos`;
  }
}
