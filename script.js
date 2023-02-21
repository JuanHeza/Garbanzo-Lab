var preguntas = [
  {
    pregunta: "Si Juan necesita preparar 10 mL de una solución valorada de K2Cr2O7, ¿Qué instrumento sería su mejor opción a utilizar?",
    respuestas: [
      {
        valor: "Matraz aforado de 10 mL",
        verdadera: true
      },
      {
        valor: "Pipeta volumétrica de 10 mL",
        verdadera: false
      },
      {
        valor: "Matraz Erlenmeyer",
        verdadera: false
      },
      {
        valor: "Vaso de precipitados de 10 mL",
        verdadera: false
      },
    ]
  },
  {
    pregunta: "Para realizar una prueba de pérdida por secado ¿Qué material de laboratorio es el más adecuado? ",
    respuestas: [
      {
        valor: "Caja petri",
        verdadera: false
      },
      {
        valor: "Crisol",
        verdadera: false
      },
      {
        valor: "Pesafiltros",
        verdadera: true
      },
      {
        valor: "Cápsula de porcelana",
        verdadera: false
      },
    ]
  },
  {
    pregunta: "Tobías realizó una titulación ácido-base utilizando un indicador, sin embargo, olvido anotar el nombre de dicho indicador. Al inicio la solución a valorar era transparente y conforme se añadía el titulante se tornó de un color rosa claro. ¿Qué indicador utilizó Tobías?",
    respuestas: [
      {
        valor: "Azul de metileno",
        verdadera: false
      },
      {
        valor: "Rojo de cresol",
        verdadera: false
      },
      {
        valor: "Anaranjado de metilo",
        verdadera: false
      },
      {
        valor: "Fenolftaleína",
        verdadera: true
      },
    ]
  },
  {
    pregunta: "Mari realizó una rección química, de dicha reacción obtuvo: Una fase orgánica y una fase acuosa. Su producto de interés se encuentra en la fase orgánica, ¿Qué material de laboratorio debería utilizar para obtener la fase de interés?",
    respuestas: [
      {
        valor: "Embudo de separación",
        verdadera: true
      },
      {
        valor: "Cromatografía de intercambio iónico",
        verdadera: false
      },
      {
        valor: "Embudo de vidrio con papel Whatman",
        verdadera: false
      },
      {
        valor: "Matraz Kitasato",
        verdadera: true
      },
    ]
  },
  {
    pregunta: "¿Cuál es la forma correcta de diluir un ácido?",
    respuestas: [
      {
        valor: "Agregar el agua al volumen de ácido deseado",
        verdadera: false
      },
      {
        valor: "Agregar el ácido al volumen de agua deseado",
        verdadera: true
      },
      {
        valor: "Los ácidos no se diluyen",
        verdadera: false
      },
      {
        valor: "Agregar al mismo tiempo ambos compuestos",
        verdadera: false
      },
    ]
  },
  {
    pregunta: "¿Los vasos de precipitados se pueden utilizar para medir volúmenes con una buena precisión?",
    respuestas: [
      {
        valor: "Solo vasos de 50 ml",
        verdadera: false
      },
      {
        valor: "Depende del vaso",
        verdadera: false
      },
      {
        valor: "Falso",
        verdadera: true
      },
      {
        valor: "Verdadero",
        verdadera: false
      },
    ]
  },
  {
    pregunta: "Si se desea quitar una impureza (por ejemplo: color) en una reacción orgánica, ¿Qué compuesto añadirías?",
    respuestas: [
      {
        valor: "Cloruro de plata",
        verdadera: false
      },
      {
        valor: "Dicromato de potasio",
        verdadera: false
      },
      {
        valor: "Sulfato de sodio anhidro",
        verdadera: false
      },
      {
        valor: "Carbón activado",
        verdadera: true
      },
    ]
  },
  {
      pregunta: "Qué instrumento de laboratorio es el de la siguiente imagen ?  <img src='./imagenes/kitasato.jpg'></img>",
      respuestas: [
          {
              valor: "Un norteño",
              verdadera: false
          },
          {
              valor: "Pipeta volumétrica",
              verdadera: false
          },
          {
              valor: "Matraz Erlenmeyer",
              verdadera: false
          },
          {
              valor: "Matraz Kitasato",
              verdadera: true
          }, 
      ]
  },
  {
      pregunta: "Cynthia obtuvo un extracto de una planta endémica de México, para conocer los componentes que constituían dicha muestra la sometió a cromatografía líquida de alta eficacia (HPLC) acoplado a un _________________ y obtuvo el siguiente espectro. ¿A que técnica corresponde el espectro obtenido? <img src='./imagenes/masas.jpg'></img>",
      respuestas: [
          {
              valor: "Espectro del espacio",
              verdadera: false
          },
          {
              valor: "EspectroscopÍa de resonancia magnética nuclear",
              verdadera: false
          },
          {
              valor: "Espectrometría de masas",
              verdadera: true
          },
          {
              valor: "Espectroscopía infrarroja",
              verdadera: false
          }, 
      ]
  },
  {
      pregunta: "La siguiente imagen muestra <img src='./imagenes/bureta.jpg'></img>",
      respuestas: [
          {
              valor: "A garbanzo",
              verdadera: false
          },
          {
              valor: "Bureta",
              verdadera: true
          },
          {
              valor: "Pipeta volumétrica",
              verdadera: false
          },
          {
              valor: "Probeta",
              verdadera: false
          }, 
      ]
  },
  {
      pregunta: "El uso correcto del siguiente matras es <img src='./imagenes/volumetrico.jpg'></img>",
      respuestas: [
          {
              valor: "Ponerle queso a las quesadillas",
              verdadera: false
          },
          {
              valor: "Realizar titulaciones colorimétricas",
              verdadera: false
          },
          {
              valor: "Medir volúmenes con alta exactitud y precisión",
              verdadera: true
          },
          {
              valor: "Acoplarse a un equipo de destilación",
              verdadera: false
          }, 
      ]
  },
  {
      pregunta: "¿A qué técnica de separación pertenece la siguiente fotografía? <img src='./imagenes/CCP.jpg'></img>",
      respuestas: [
          {
              valor: "Burbuja",
              verdadera: false
          },
          {
              valor: "EspectroscopÍa de resonancia magnética nuclear",
              verdadera: false
          },
          {
              valor: "Western blot",
              verdadera: false
          },
          {
              valor: "Cromatografía en capa fina",
              verdadera: true
          }, 
      ]
  },
  /* 
  INSTRUCCIONES, COPIA Y PEGA ESTO DE ABAJO, TODO EL BLOQUE HASTA ANTES DEL * / METE LAS RESPUESTAS EN DONDE DICE valor Y LA QUE SEA LA CORRECTA CAMBIA verdadero DE false A true
  ESTA CONFIGURADO PARA 9 PREGUNTAS, SI NECESITAS MAS, AGREGA <div class="cuenta"></div> EN EL HTML DONDE HAY VARIOS, TAMBIEN FRASES Y MEMES
  {
      pregunta: "",
      respuestas: [
          {
              valor: "",
              verdadera: false
          },
          {
              valor: "",
              verdadera: false
          },
          {
              valor: "",
              verdadera: false
          },
          {
              valor: "",
              verdadera: false
          },
      ]
  },
  */
]
let frases = {
  correcta: [
    "Frase Correcta 1",
    "Frase Correcta 2",
    "Frase Correcta 3",
    "Frase Correcta 4",
    "Frase Correcta 5",
    "Frase Correcta 6",
    "Frase Correcta 7",
    "Frase Correcta 8",
    "Frase Correcta 9",
  ],
  equivocada: [
    "Frase equivocada 1",
    "Frase equivocada 2",
    "Frase equivocada 3",
    "Frase equivocada 4",
    "Frase equivocada 5",
    "Frase equivocada 6",
    "Frase equivocada 7",
    "Frase equivocada 8",
    "Frase equivocada 9",
  ]
}
let pregunta = 0;
$(".start").click(function() {
  $(".main").addClass("oculto")
  $(".quiz").removeClass("oculto")
  setQuestion()
})
$(".respuesta").click(function() {
  if (!$(this).is(".nula, .equivocada, .correcta")) {
    let resultado
    let contador
    if ($(this).is(".verdadera")) {
      resultado = "correcta"
      contador = $(`.cuenta.${resultado}`).length
    } else {
      resultado = "equivocada"
      contador = $(`.cuenta.${resultado}`).length
      $(".verdadera").addClass("correcta")
    }
    let ruta = `./imagenes/${resultado}/imagen (${contador % 9}).jpg`
    $(".resultado img").attr("src", ruta)
    $(".resultado p").html(frases[resultado][contador % 9])
    $(this).addClass(resultado)
    $(".respuesta:not(.correcta, .equivocada)").addClass("nula")
    $(".resultado").removeClass("oculto")
    $(".cuenta").eq(pregunta).removeClass("correcta equivocada").addClass(resultado)
  }
})
$(".siguiente").click(function() {
  pregunta++
  //pregunta = pregunta % preguntas.length
  $(".resultado").addClass("oculto")
  if (pregunta >= preguntas.length) {
    $(".quiz").addClass("oculto")
    $(".final").removeClass("oculto")
    $(".respuestasCorrectas").html($(".cuenta.correcta").length)
    pregunta = 0;
    $(".correcta, .equivocada").removeClass("correcta equivocada")
  } else {
    setQuestion()
  }
})
$(".reiniciar").click(function() {
  $(".final").addClass("oculto")
  $(".main").removeClass("oculto")
})
function setQuestion() {
  $(".respuesta").removeClass("verdadera falsa correcta equivocada nula")
  let obj = preguntas[pregunta]
  $(".pregunta").html(obj.pregunta)
  $(".respuestaA").html(obj.respuestas[0].valor).addClass(obj.respuestas[0].verdadera ? "verdadera" : "falsa")
  $(".respuestaB").html(obj.respuestas[1].valor).addClass(obj.respuestas[1].verdadera ? "verdadera" : "falsa")
  $(".respuestaC").html(obj.respuestas[2].valor).addClass(obj.respuestas[2].verdadera ? "verdadera" : "falsa")
  $(".respuestaD").html(obj.respuestas[3].valor).addClass(obj.respuestas[3].verdadera ? "verdadera" : "falsa")
}
//http://clinical-laboratory.blogspot.com/2013/10/lab-cat-working.html
//http://clinical-laboratory.blogspot.com/2013/08/lab-cat-pipetting.html