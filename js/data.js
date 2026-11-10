// =============================================================================
// BANCO PEDAGÓGICO DE DATOS · SCIENCE 4.º PRIMARIA · TEMA 3
// Proyecto CLAVES / Construyendo Mundos (Grazalema - Santillana)
// "Los seres vivos y los cinco reinos" · Entrenador Personal de Olivia
// =============================================================================

const SCIENCE_DATA = {
  meta: {
    title: "Science 4.º Primaria · Tema 3",
    unit: "Tema 3: Los seres vivos y los cinco reinos",
    subject: "Ciencias de la Naturaleza / Conocimiento del Medio",
    student: "Olivia",
    grade: "4.º Educación Primaria",
    schoolProject: "Proyecto CLAVES · Construyendo Mundos (Santillana)",
    version: "1.0.0"
  },

  // ===========================================================================
  // 5 MISIONES DIDÁCTICAS TEMÁTICAS
  // ===========================================================================
  missions: [
    {
      id: 1,
      title: "Misión 1: Células y Herramientas de Científica",
      icon: "🔬",
      badge: "Lupa de Oro",
      description: "Descubre los ladrillos microscópicos de la vida y qué instrumento usar en cada expedición.",
      questions: [
        {
          id: "m1_1",
          question: "¿Qué es una célula y por qué es tan importante para todos los seres vivos?",
          options: [
            "Es un tipo de hueso microscópico que solo tienen los animales vertebrados.",
            "Es la unidad más pequeña con vida propia capaz de realizar la nutrición, relación y reproducción.",
            "Es una gota de agua con sales que solo se encuentra dentro de las raíces de las plantas.",
            "Es un órgano del cuerpo humano que fabrica la sangre."
          ],
          correct: 1,
          explanation: "¡Exacto! La célula es la unidad viva elemental. Todo ser vivo en la Tierra está formado por una o por millones de células."
        },
        {
          id: "m1_2",
          question: "Si un ser vivo está formado por una sola célula que solo se puede ver con microscopio, decimos que es...",
          options: [
            "Pluricelular y gigante.",
            "Unicelular y microscópico.",
            "Inerte y sin vida.",
            "Un fósil mineral."
          ],
          correct: 1,
          explanation: "¡Brillante! 'Uni-' significa uno: los seres unicelulares (como las bacterias y los protozoos) están compuestos por una única célula."
        },
        {
          id: "m1_3",
          question: "¿Cuál de estos seres vivos es PLURICELULAR y visible a simple vista?",
          options: [
            "Una bacteria del yogur.",
            "Una ameba en una gota de agua.",
            "Un conejo de campo.",
            "Una levadura del pan."
          ],
          correct: 2,
          explanation: "¡Genial! El conejo tiene billones de células organizadas en tejidos y órganos: es pluricelular."
        },
        {
          id: "m1_4",
          question: "Elena quiere ver con gran detalle las antenas y pelos de las patas de una hormiga viva sin lastimarla. ¿Qué instrumento debe utilizar?",
          options: [
            "Un telescopio espacial.",
            "Una lupa de mano o lupa binocular.",
            "Unos prismáticos de larga distancia.",
            "Un termómetro digital."
          ],
          correct: 1,
          explanation: "¡Correcto! La lupa es perfecta para ampliar objetos o seres pequeños que ya son visibles a simple vista."
        },
        {
          id: "m1_5",
          question: "Mateo quiere observar una bandada de cigüeñas que anidan en lo alto de la torre de la iglesia sin molestarlas. ¿Qué herramienta científica es la adecuada?",
          options: [
            "Un microscopio óptico.",
            "Unos prismáticos.",
            "Una lupa de aumento.",
            "Una regla milimetrada."
          ],
          correct: 1,
          explanation: "¡Muy bien! Los prismáticos permiten enfocar y contemplar a distancia animales salvajes en su entorno sin asustarlos."
        }
      ]
    },

    {
      id: 2,
      title: "Misión 2: El Gran Mapa de los 5 Reinos",
      icon: "🗺️",
      badge: "Brújula de la Biodiversidad",
      description: "Aprende los 5 reinos de la vida y los 3 criterios clave que usan los científicos para clasificarlos.",
      questions: [
        {
          id: "m2_1",
          question: "¿Cuáles son los CINCO reinos en los que clasificamos a todos los seres vivos de la Tierra?",
          options: [
            "Mamíferos, Aves, Peces, Reptiles y Anfibios.",
            "Animales, Plantas, Hongos, Protoctistas y Bacterias.",
            "Insectos, Árboles, Flores, Setas y Virus.",
            "Tierra, Mar, Aire, Fuego y Minerales."
          ],
          correct: 1,
          explanation: "¡Eso es! Los 5 reinos universales son: Animales, Plantas, Hongos, Protoctistas y Bacterias."
        },
        {
          id: "m2_2",
          question: "¿Qué dos reinos están formados EXCLUSIVAMENTE por seres pluricelulares?",
          options: [
            "Reino de las Bacterias y Reino de los Hongos.",
            "Reino Animal y Reino de las Plantas.",
            "Reino Protoctistas y Reino de los Animales.",
            "Reino de las Plantas y Reino de las Bacterias."
          ],
          correct: 1,
          explanation: "¡Pregunta trampa dominada! Todos los animales y todas las plantas son pluricelulares sin excepción."
        },
        {
          id: "m2_3",
          question: "¿En qué se DIFERENCIA principalmente una planta de un ciervo?",
          options: [
            "La planta tiene células y el ciervo no.",
            "La planta fabrica su alimento (autótrofa) y vive fija; el ciervo come otros seres vivos (heterótrofo) y se desplaza.",
            "La planta bebe agua y el ciervo no necesita agua para vivir.",
            "El ciervo hace la fotosíntesis y la planta respira oxígeno."
          ],
          correct: 1,
          explanation: "¡Perfecto! Las plantas son autótrofas e inmóviles, mientras que los animales son heterótrofos y se desplazan."
        },
        {
          id: "m2_4",
          question: "¿Qué reino está formado ÚNICAMENTE por seres vivos unicelulares?",
          options: [
            "El reino de los hongos.",
            "El reino de las plantas.",
            "El reino de las bacterias.",
            "El reino animal."
          ],
          correct: 2,
          explanation: "¡Excelente! Todas las bacterias del mundo son unicelulares y microscópicas."
        },
        {
          id: "m2_5",
          question: "¿Qué reinos tienen TANTO seres unicelulares COMO seres pluricelulares?",
          options: [
            "Animales y Plantas.",
            "Hongos y Protoctistas.",
            "Bacterias y Animales.",
            "Plantas y Bacterias."
          ],
          correct: 1,
          explanation: "¡Gran deducción! Los hongos tienen levaduras (unicelulares) y setas (pluricelulares). Los protoctistas tienen protozoos (unicelulares) y grandes algas (pluricelulares)."
        }
      ]
    },

    {
      id: 3,
      title: "Misión 3: El Fascinante Reino de los Hongos",
      icon: "🍄",
      badge: "Micóloga Experta",
      description: "Descubre los secretos de las setas, los mohos, las levaduras y por qué los hongos no son plantas.",
      questions: [
        {
          id: "m3_1",
          question: "¿Por qué un champiñón o una seta NO pertenecen al reino de las plantas?",
          options: [
            "Porque viven en la tierra oscura.",
            "Porque no tienen clorofila, no hacen fotosíntesis y tienen que alimentarse de restos de otros seres vivos.",
            "Porque pueden correr y volar como los pájaros.",
            "Porque están hechos de plástico natural."
          ],
          correct: 1,
          explanation: "¡Clave de examen! Los hongos son heterótrofos: descomponen restos orgánicos. ¡Nunca hacen la fotosíntesis!"
        },
        {
          id: "m3_2",
          question: "Cuando paseamos por el bosque y vemos una seta brotando de la tierra, ¿qué parte del hongo estamos viendo?",
          options: [
            "El tronco principal de la madera.",
            "La parte reproductora encargada de fabricar y dispersar las esporas.",
            "La raíz absorbente de agua.",
            "Una hoja modificada para tomar sol."
          ],
          correct: 1,
          explanation: "¡Exacto! La seta es solo el 'fruto' reproductor. El cuerpo subterráneo del hongo es una gran red llamada micelio."
        },
        {
          id: "m3_3",
          question: "¿Cuál de estos hongos es UNICELULAR y se usa en la cocina para hacer pan y pizza?",
          options: [
            "El níscalo de pinar.",
            "La levadura.",
            "El moho verde de la fruta.",
            "El champiñón silvestre."
          ],
          correct: 1,
          explanation: "¡Fantástico! Las levaduras son hongos unicelulares que fermentan la masa haciendo que el pan sea esponjoso."
        },
        {
          id: "m3_4",
          question: "¿Qué papel ecológico esencial cumplen los hongos en los bosques y campos?",
          options: [
            "Descomponen las hojas muertas y troncos caídos, transformándolos en sales minerales y abono para el suelo.",
            "Cazan insectos voladores con telas invisibles.",
            "Calientan el suelo con fuego subterráneo.",
            "Absorben toda el agua para que los árboles se sequen."
          ],
          correct: 0,
          explanation: "¡Los grandes recicladores! Sin hongos y bacterias descomponedoras, los bosques quedarían sepultados bajo toneladas de hojas y ramas secas."
        },
        {
          id: "m3_5",
          question: "¿Qué gran medicamento que salva millones de vidas se descubrió a partir de un moho (hongo)?",
          options: [
            "La aspirina.",
            "La penicilina (el primer antibiótico).",
            "El jarabe para la tos de eucalipto.",
            "Las vitaminas del zumo de naranja."
          ],
          correct: 1,
          explanation: "¡Historia de la ciencia! Alexander Fleming descubrió la penicilina a partir del hongo Penicillium."
        }
      ]
    },

    {
      id: 4,
      title: "Misión 4: Protoctistas, el Doble Mundo Acuático",
      icon: "🌊",
      badge: "Buceadora Marina",
      description: "Explora los dos grupos de los protoctistas: los protozoos cazadores y las algas productoras de oxígeno.",
      questions: [
        {
          id: "m4_1",
          question: "¿Cuáles son los DOS grupos de seres vivos que conviven en el reino de los protoctistas?",
          options: [
            "Los peces y las medusas.",
            "Los protozoos y las algas.",
            "Las bacterias y los hongos.",
            "Los musgos y los helechos."
          ],
          correct: 1,
          explanation: "¡De memoria! En el reino protoctistas están los protozoos (como amebas) y las algas (marinas o de agua dulce)."
        },
        {
          id: "m4_2",
          question: "¿En qué se parecen los PROTOZOOS a los animales?",
          options: [
            "En que tienen plumas y pico.",
            "En que son heterótrofos (se alimentan de otros seres vivos) y la mayoría pueden desplazarse.",
            "En que fabrican miel en panales acuáticos.",
            "En que respiran por pulmones gigantes."
          ],
          correct: 1,
          explanation: "¡Muy bien! Los protozoos son como 'animalillos' de una sola célula: cazan bacterias o materia orgánica y nadan."
        },
        {
          id: "m4_3",
          question: "¿En qué se parecen las ALGAS a las plantas?",
          options: [
            "En que tienen tronco leñoso con corteza.",
            "En que son autótrofas: hacen la fotosíntesis con la luz del sol y producen oxígeno.",
            "En que tienen flores perfumadas con néctar.",
            "En que dan manzanas y peras."
          ],
          correct: 1,
          explanation: "¡Eso es! Las algas tienen clorofila, aprovechan la luz solar y liberan oxígeno al agua y a la atmósfera."
        },
        {
          id: "m4_4",
          question: "¿Por qué las algas marinas gigantes NO se consideran verdaderas plantas?",
          options: [
            "Porque son de color azul marino.",
            "Porque no tienen verdaderas raíces, tallos, hojas con nervios ni flores.",
            "Porque están hechas de sal pura.",
            "Porque se alimentan comiendo pececillos."
          ],
          correct: 1,
          explanation: "¡Precisión botánica! El cuerpo de un alga no tiene vasos conductores ni hojas ni raíces verdaderas como los árboles."
        },
        {
          id: "m4_5",
          question: "¿Qué utilidad cotidiana tienen las algas para los seres humanos?",
          options: [
            "Se usan como combustible para cohetes espaciales.",
            "Se usan como alimento saludable (sushi, ensaladas) y para hacer gelatina vegetal (agar-agar).",
            "Se usan para fabricar vidrio transparente.",
            "Se usan para hacer baterías eléctricas de coches."
          ],
          correct: 1,
          explanation: "¡Súper útil! Las algas se comen (como el alga nori) y proporcionan agar-agar, utilizado en cocina y en laboratorios."
        }
      ]
    },

    {
      id: 5,
      title: "Misión 5: Bacterias y Salud Humana",
      icon: "🦠",
      badge: "Guardiana de la Salud",
      description: "Conoce a las campeonas de la supervivencia: bacterias aliadas en el yogur y cómo combatir a las patógenas.",
      questions: [
        {
          id: "m5_1",
          question: "¿Dónde viven las bacterias en nuestro planeta?",
          options: [
            "Únicamente en el fondo de los volcanes activos.",
            "En prácticamente todos los lugares: en el agua, tierra, aire, hielo y dentro de otros seres vivos.",
            "Solo dentro de los hospitales y farmacias.",
            "Solo en las nubes altas de tormenta."
          ],
          correct: 1,
          explanation: "¡Son todoterreno! Las bacterias viven en cualquier rincón del planeta, incluso en los más extremos."
        },
        {
          id: "m5_2",
          question: "¿Qué alimento delicioso y saludable se elabora gracias a la fermentación que realizan ciertas bacterias amigas?",
          options: [
            "El yogur y el kéfir.",
            "El chocolate negro en tableta.",
            "El aceite de oliva virgen.",
            "El zumo de naranja exprimido."
          ],
          correct: 0,
          explanation: "¡Rico y sano! Las bacterias lácticas (como Lactobacillus) transforman la leche en cremoso yogur."
        },
        {
          id: "m5_3",
          question: "¿Qué es la 'microbiota' o flora bacteriana de nuestro intestino?",
          options: [
            "Un conjunto de plantas con flor que crecen en el estómago.",
            "Millones de bacterias beneficiosas que nos ayudan a digerir y nos protegen de microbios malos.",
            "Un veneno que produce dolor de barriga.",
            "Una medicina en pastillas que tomamos con agua."
          ],
          correct: 1,
          explanation: "¡Nuestras aliadas! Sin las bacterias intestinales no podríamos absorber muchos nutrientes esenciales."
        },
        {
          id: "m5_4",
          question: "¿Cómo llamamos a las bacterias que nos producen enfermedades (como anginas con pus o caries)?",
          options: [
            "Bacterias amigables.",
            "Bacterias patógenas o perjudiciales.",
            "Bacterias fósiles.",
            "Bacterias fotosintéticas."
          ],
          correct: 1,
          explanation: "'Patógeno' significa que causa enfermedad. Las bacterias patógenas invaden tejidos y causan infecciones."
        },
        {
          id: "m5_5",
          question: "Si el médico confirma que tenemos una infección por BACTERIAS, ¿qué medicamento específico recetará?",
          options: [
            "Un antibiótico.",
            "Un caramelo de menta.",
            "Una vacuna contra la gripe.",
            "Un vaso de agua con gas."
          ],
          correct: 0,
          explanation: "¡Perfecto! Los antibióticos atacan a las bacterias. ¡Recuerda que NUNCA curan los virus de los resfriados!"
        }
      ]
    }
  ],

  // ===========================================================================
  // SIMULADOR DE EXAMEN
    // ===========================================================================
  // SIMULADOR DE EXAMEN (PRUEBA A Y B CON RELLENAR PALABRAS Y TIPOS ESCRITOS)
  // Basado estrictamente en las pág. 16 a 19 del control oficial de Santillana
  // ===========================================================================
  exams: {
    // PRUEBA A: Caso práctico contextualizado (Lucas y Valentina en el Humedal y el Pinar)
    testA: {
      title: "Prueba A: La Gran Expedición al Humedal y el Pinar",
      description: "Acompaña a Lucas y Valentina con su cuaderno de campo: preguntas de rellenar palabras, escribir términos y razonamiento práctico.",
      context: "Lucas y Valentina están explorando una reserva natural que combina laguna de agua dulce y bosque de pinos. Llevan prismáticos para aves, lupas para el suelo y botes para recoger agua y examinarla en el microscopio.",
      questions: [
        {
          id: "ta_1",
          type: "fill_blanks",
          question: "Lucas y Valentina llevan diferentes herramientas en sus mochilas. Rellena los huecos con el instrumento científico adecuado para cada observación:",
          template: "Para observar aves acuáticas a gran distancia en la laguna usan los {0}. Para ver el detalle de los filamentos del musgo y el pie de una seta usan la {1}. Y en el centro de interpretación, para descubrir las células de una gota de agua usan el {2}.",
          blanks: [
            { placeholder: "instrumento...", accepted: ["prismáticos", "prismaticos", "los prismáticos"] },
            { placeholder: "instrumento...", accepted: ["lupa", "la lupa"] },
            { placeholder: "instrumento...", accepted: ["microscopio", "el microscopio"] }
          ],
          wordBank: ["prismáticos", "lupa", "microscopio", "telescopio", "termómetro", "periscopio"],
          explanation: "Los prismáticos se usan para animales lejanos; la lupa para ver detalles pequeños sobre el terreno; y el microscopio para seres unicelulares y células invisibles a simple vista."
        },
        {
          id: "ta_2",
          type: "text_input",
          question: "Lucas anota en su cuaderno de campo los seres vivos que divisa con sus prismáticos: un águila imperial sobre un pino y juncos en la orilla de la laguna. Escribe a qué reino pertenece cada uno:",
          inputs: [
            { label: "Águila imperial", placeholder: "Escribe el reino...", accepted: ["animal", "animales", "reino animal"] },
            { label: "Pino piñonero y Juncos", placeholder: "Escribe el reino...", accepted: ["plantas", "planta", "vegetal", "vegetales", "reino vegetal", "reino plantas", "reino de las plantas"] }
          ],
          wordBank: ["Animal", "Plantas", "Hongos", "Protoctistas", "Bacterias"],
          explanation: "El águila imperial pertenece al reino animal (pluricelular, se desplaza y es heterótrofa). Los pinos y juncos pertenecen al reino de las plantas (pluricelulares y fotosintéticas)."
        },
        {
          id: "ta_3",
          type: "fill_blanks",
          question: "Valentina toma una muestra de agua estancada y la examina al microscopio. Completa los dos tipos de microorganismos del reino protoctistas que ha localizado:",
          template: "Ha observado seres diminutos que se desplazan rápido llamados {0} y microalgas verdes flotantes. Ambos grupos pertenecen al reino de los {1}.",
          blanks: [
            { placeholder: "microorganismo...", accepted: ["protozoos", "protozoo", "paramecios", "amebas"] },
            { placeholder: "reino...", accepted: ["protoctistas", "protoctista", "reino protoctistas"] }
          ],
          wordBank: ["protozoos", "protoctistas", "bacterias", "hongos", "animales", "células"],
          explanation: "En una gota de agua de charca habitan protozoos (heterótrofos que se desplazan) y algas microscópicas (autótrofas). Ambos forman el reino protoctistas."
        },
        {
          id: "ta_4",
          type: "multiple_choice",
          question: "En el pinar, Lucas encuentra setas creciendo sobre madera caída y dice: '¡Qué plantas tan curiosas!'. ¿Por qué las setas NO pertenecen al reino de las plantas?",
          options: [
            "Porque pertenecen al reino de los hongos: carecen de clorofila, no realizan fotosíntesis y se nutren de restos orgánicos.",
            "Porque las setas tienen huesos duros y se desplazan con patas como los escarabajos.",
            "Porque las setas son minerales creados directamente por la lluvia.",
            "Porque las setas son animales venenosos que muerden a los árboles."
          ],
          correct: 0,
          explanation: "Los hongos no son plantas porque no tienen clorofila ni hojas y no fabrican su propio alimento; son heterótrofos descomponedores."
        },
        {
          id: "ta_5",
          type: "text_input",
          question: "Valentina le explica a Lucas que en el reino de los hongos existen seres que JAMÁS podrán ver con la lupa porque son unicelulares. ¿Cómo se llaman estos hongos microscópicos?",
          inputs: [
            { label: "Hongos microscópicos unicelulares", placeholder: "Escribe el nombre...", accepted: ["levaduras", "levadura", "las levaduras"] }
          ],
          wordBank: ["levaduras", "mohos", "setas", "líquenes", "bacterias"],
          explanation: "Las levaduras son hongos unicelulares y microscópicos (a diferencia de los mohos y de los hongos que forman setas, que son pluricelulares)."
        },
        {
          id: "ta_6",
          type: "fill_blanks",
          question: "Para comer a mediodía, Lucas tiene un bocadillo de pan crujiente y Valentina toma un yogur natural. Completa qué microorganismos hicieron posible estos alimentos:",
          template: "Para hacer fermentar la masa del pan del bocadillo se emplearon {0} (del reino de los hongos). Para transformar la leche en yogur fermentado se emplearon {1} (del reino de las bacterias).",
          blanks: [
            { placeholder: "microorganismo del pan...", accepted: ["levaduras", "levadura", "las levaduras"] },
            { placeholder: "microorganismo del yogur...", accepted: ["bacterias", "bacteria", "las bacterias", "lactobacilos"] }
          ],
          wordBank: ["levaduras", "bacterias", "protozoos", "algas", "plantas", "virus"],
          explanation: "El pan se elabora mediante levaduras (hongos unicelulares que desprenden gas al fermentar), y el yogur se elabora gracias a bacterias beneficiosas que fermentan la leche."
        },
        {
          id: "ta_7",
          type: "text_input",
          question: "Existe un reino de seres vivos sumamente diminutos que está presente en todas partes de la expedición (en el aire, en el agua de la charca, en el suelo e incluso en la piel) y que no ven a simple vista. ¿Cuál es?",
          inputs: [
            { label: "Nombre del reino", placeholder: "Escribe el reino...", accepted: ["bacterias", "bacteria", "reino bacterias", "reino de las bacterias", "moneras", "móneras"] }
          ],
          wordBank: ["Bacterias", "Protoctistas", "Hongos", "Animales", "Plantas"],
          explanation: "El reino de las bacterias reúne a los seres vivos más abundantes y extendidos de la Tierra. Todos son unicelulares y microscópicos."
        },
        {
          id: "ta_8",
          type: "classify_inputs",
          question: "Clasifica los seres vivos observados durante la expedición escribiendo 'unicelular' o 'pluricelular':",
          items: [
            { name: "Pino piñonero de 15 metros de altura en el bosque", placeholder: "unicelular o pluricelular...", accepted: ["pluricelular", "pluricelulares"] },
            { name: "Paramecio que nada en la gota de agua de la laguna", placeholder: "unicelular o pluricelular...", accepted: ["unicelular", "unicelulares"] },
            { name: "Bacteria beneficiosa que fermentó el yogur", placeholder: "unicelular o pluricelular...", accepted: ["unicelular", "unicelulares"] }
          ],
          explanation: "El pino está formado por millones de células organizadas (pluricelular). Los paramecios (protozoos) y las bacterias constan de una única célula completa (unicelulares)."
        },
        {
          id: "ta_9",
          type: "fill_blanks",
          question: "En el cartel del parque natural recomiendan lavarse siempre las manos antes de comer. Completa la explicación biológica:",
          template: "Es fundamental lavarse las manos porque en el agua estancada y el suelo pueden habitar {0} o {1} perjudiciales que causarían infecciones si entran en el aparato digestivo.",
          blanks: [
            { placeholder: "microorganismos 1...", accepted: ["bacterias", "bacteria"] },
            { placeholder: "microorganismos 2...", accepted: ["protozoos", "protozoo", "hongos", "microbios", "parásitos", "parasitos"] }
          ],
          wordBank: ["bacterias", "protozoos", "algas", "plantas", "células"],
          explanation: "Lavarse las manos elimina bacterias y protozoos patógenos presentes en el medio natural que podrían causarnos enfermedades digestivas."
        },
        {
          id: "ta_10",
          type: "multiple_choice",
          question: "Al regresar a casa, Valentina resume en su diario la gran lección biológica: ¿Qué tienen en común TODOS los seres vivos de los cinco reinos?",
          options: [
            "Todos están formados por una o más células y realizan las tres funciones vitales: nutrición, relación y reproducción.",
            "Todos tienen plumas y respiran bajo el agua.",
            "Todos fabrican su alimento gracias a la luz del sol.",
            "Todos tienen patas para desplazarse y hojas verdes."
          ],
          correct: 0,
          explanation: "Todos los seres vivos comparten la unidad celular (una o muchas) y llevan a cabo las tres funciones vitales de la vida: nutrición, relación y reproducción."
        }
      ]
    },

    // PRUEBA B: Control Curricular de Saberes Básicos (Estándar Oficial de Evaluación)
    testB: {
      title: "Prueba B: Dominio Curricular y Saberes Básicos",
      description: "Evaluación oficial formal: ejercicios de rellenar texto, clasificar celularidad y nombrar los reinos con rigor científico.",
      context: "Demuestra tu dominio conceptual de los seres vivos completando definiciones exactas, escribiendo términos y clasificando organismos.",
      questions: [
        {
          id: "tb_1",
          type: "fill_blanks",
          question: "1. Completa el siguiente texto fundamental sobre los seres vivos y sus células rellenando las palabras que faltan:",
          template: "Todos los seres vivos están formados por partes sumamente pequeñas denominadas {0}. Según su número, los clasificamos en {1} y {2}. Los unicelulares están formados por una sola célula y únicamente se pueden ver con un {3}, y los pluricelulares están formados por un gran número de células y la mayoría de ellos {4} verse a simple vista.",
          blanks: [
            { placeholder: "palabra...", accepted: ["células", "célula", "celulas", "celula"] },
            { placeholder: "palabra...", accepted: ["unicelulares", "unicelular"] },
            { placeholder: "palabra...", accepted: ["pluricelulares", "pluricelular"] },
            { placeholder: "instrumento...", accepted: ["microscopio", "el microscopio"] },
            { placeholder: "palabra...", accepted: ["pueden", "se pueden", "logran", "suelen"] }
          ],
          wordBank: ["células", "unicelulares", "pluricelulares", "microscopio", "pueden", "tejidos", "lupa"],
          explanation: "Ejercicio oficial de examen: los seres vivos están formados por células. Según su número son unicelulares (1 célula, microscopio) o pluricelulares (muchas células, se pueden ver a simple vista)."
        },
        {
          id: "tb_2",
          type: "text_input",
          question: "2. Para estudiar a los seres vivos los clasificamos en cinco reinos. Escribe el nombre de los 5 reinos de la naturaleza:",
          inputs: [
            { label: "Reino 1", placeholder: "Nombre del reino...", accepted: ["animales", "animal", "reino animal"] },
            { label: "Reino 2", placeholder: "Nombre del reino...", accepted: ["plantas", "planta", "vegetales", "vegetal", "reino plantas", "reino vegetal", "reino de las plantas"] },
            { label: "Reino 3", placeholder: "Nombre del reino...", accepted: ["hongos", "hongo", "fungi", "reino hongos"] },
            { label: "Reino 4", placeholder: "Nombre del reino...", accepted: ["protoctistas", "protoctista", "reino protoctistas"] },
            { label: "Reino 5", placeholder: "Nombre del reino...", accepted: ["bacterias", "bacteria", "moneras", "móneras", "reino bacterias"] }
          ],
          wordBank: ["Animales", "Plantas", "Hongos", "Protoctistas", "Bacterias", "Invertebrados", "Minerales"],
          explanation: "Los cinco reinos fundamentales de la naturaleza son: Animales, Plantas (Vegetales), Hongos, Protoctistas y Bacterias."
        },
        {
          id: "tb_3",
          type: "fill_blanks",
          question: "3. Fíjate en el reino de los animales y el de las plantas. Completa en qué se parecen y en qué se diferencian:",
          template: "En qué se parecen: Ambos reinos están formados por seres vivos {0}. En qué se diferencian: Las plantas fabrican su propio alimento mediante la {1} y viven {2} al suelo, mientras que los animales se alimentan de {3} y pueden {4}.",
          blanks: [
            { placeholder: "semejanza...", accepted: ["pluricelulares", "pluricelular"] },
            { placeholder: "proceso...", accepted: ["fotosíntesis", "fotosintesis"] },
            { placeholder: "posición...", accepted: ["fijas", "fijadas", "sujetas", "inmóviles", "inmoviles"] },
            { placeholder: "nutrición...", accepted: ["otros seres vivos", "otros seres", "otros animales", "alimento", "plantas y animales"] },
            { placeholder: "movilidad...", accepted: ["desplazarse", "moverse", "trasladarse"] }
          ],
          wordBank: ["pluricelulares", "fotosíntesis", "fijas", "otros seres vivos", "desplazarse", "volar", "unicelulares"],
          explanation: "Semejanza: ambos son pluricelulares. Diferencias: las plantas hacen la fotosíntesis y viven fijas; los animales ingieren alimento de otros seres vivos y se desplazan."
        },
        {
          id: "tb_4",
          type: "classify_inputs",
          question: "4. ¿Qué tipos de hongos son, unicelulares o pluricelulares? Escribe la clasificación de cada uno:",
          items: [
            { name: "Levaduras (utilizadas para fermentar el pan)", placeholder: "unicelular o pluricelular...", accepted: ["unicelular", "unicelulares"] },
            { name: "Mohos (que crecen sobre el pan o la fruta húmeda)", placeholder: "unicelular o pluricelular...", accepted: ["pluricelular", "pluricelulares"] },
            { name: "Setas (como los champiñones y níscalos)", placeholder: "unicelular o pluricelular...", accepted: ["pluricelular", "pluricelulares"] }
          ],
          explanation: "¡Pregunta clave del examen oficial! Las levaduras son unicelulares. Los mohos y los hongos que forman setas son pluricelulares."
        },
        {
          id: "tb_5",
          type: "text_input",
          question: "5. ¿Qué parte de algunos hongos pluricelulares aparece en otoño y tiene como función intervenir en su reproducción?",
          inputs: [
            { label: "Parte reproductora del hongo", placeholder: "Escribe el nombre...", accepted: ["la seta", "seta", "setas", "el cuerpo fructífero", "cuerpo fructífero"] },
            { label: "Células reproductoras que libera al aire", placeholder: "Escribe el nombre...", accepted: ["esporas", "espora", "las esporas"] }
          ],
          wordBank: ["la seta", "esporas", "raíz", "semillas", "polen"],
          explanation: "La seta es el órgano reproductor exterior de ciertos hongos; en sus láminas produce millones de esporas que se dispersan con el viento."
        },
        {
          id: "tb_6",
          type: "fill_blanks",
          question: "6. Los hongos son muy importantes para otros seres vivos. Rellena los huecos con ejemplos de su utilidad:",
          template: "Para las personas: Las levaduras se emplean para elaborar el {0} y ciertos mohos permitieron obtener medicamentos antibióticos como la {1}. Para las plantas: Los hongos descomponen restos de hojas y madera muerta en el suelo, aportando sales y {2} esenciales para las raíces.",
          blanks: [
            { placeholder: "alimento...", accepted: ["pan", "el pan"] },
            { placeholder: "medicamento...", accepted: ["penicilina", "la penicilina"] },
            { placeholder: "nutrición vegetal...", accepted: ["minerales", "nutrientes", "sales minerales", "humus"] }
          ],
          wordBank: ["pan", "penicilina", "minerales", "clorofila", "vacunas", "flores"],
          explanation: "Para personas: pan (levaduras) y penicilina (moho). Para plantas: descomponen la materia orgánica liberando minerales en el suelo."
        },
        {
          id: "tb_7",
          type: "text_input",
          question: "7. Nombra los dos tipos de seres vivos que se encuentran dentro del reino de los protoctistas:",
          inputs: [
            { label: "Seres unicelulares heterótrofos (como amebas y paramecios)", placeholder: "Nombre del grupo...", accepted: ["protozoos", "protozoo", "los protozoos"] },
            { label: "Seres fotosintéticos acuáticos (unicelulares o pluricelulares)", placeholder: "Nombre del grupo...", accepted: ["algas", "alga", "las algas"] }
          ],
          wordBank: ["protozoos", "algas", "bacterias", "mohos", "levaduras"],
          explanation: "El reino protoctistas está formado por dos grandes grupos: los protozoos (unicelulares que ingieren alimento) y las algas (que realizan la fotosíntesis)."
        },
        {
          id: "tb_8",
          type: "text_input",
          question: "8. En el examen hay una frase con un error: 'Los protozoos son seres vivos pluricelulares'. ¿Por qué palabra debemos cambiar 'pluricelulares' para que sea totalmente verdadera?",
          inputs: [
            { label: "Palabra correcta", placeholder: "Escribe la palabra...", accepted: ["unicelulares", "unicelular"] }
          ],
          explanation: "Los protozoos (como las amebas y paramecios) son SIEMPRE seres vivos unicelulares y microscópicos."
        },
        {
          id: "tb_9",
          type: "fill_blanks",
          question: "9. Recuerda las características de las bacterias y completa las frases:",
          template: "Las bacterias comparten con los protozoos que ambas son seres {0} y microscópicos. Respecto a su función, comparten con los hongos que muchas son {1} (como las que producen yogur o descomponen restos) y otras son perjudiciales porque pueden provocar {2}.",
          blanks: [
            { placeholder: "celularidad...", accepted: ["unicelulares", "unicelular"] },
            { placeholder: "efecto positivo...", accepted: ["beneficiosas", "buenas", "útiles", "beneficiosos"] },
            { placeholder: "efecto negativo...", accepted: ["enfermedades", "infecciones", "daño"] }
          ],
          wordBank: ["unicelulares", "beneficiosas", "enfermedades", "pluricelulares", "fotosíntesis"],
          explanation: "Bacterias y protozoos son unicelulares. Tanto bacterias como hongos tienen especies beneficiosas (alimentación, reciclaje orgánico) y especies patógenas que causan enfermedades."
        },
        {
          id: "tb_10",
          type: "fill_blanks",
          question: "10. En una comida campestre tenemos pan y yogur. Completa qué seres vivos se emplean para elaborar cada uno:",
          template: "Para elaborar el pan se emplean {0} (del reino de los hongos). Para elaborar el yogur se emplean {1} (del reino de las bacterias).",
          blanks: [
            { placeholder: "organismo del pan...", accepted: ["levaduras", "levadura", "las levaduras"] },
            { placeholder: "organismo del yogur...", accepted: ["bacterias", "bacteria", "las bacterias", "lactobacilos"] }
          ],
          wordBank: ["levaduras", "bacterias", "protozoos", "algas", "plantas"],
          explanation: "El pan se fermenta con levaduras (hongos unicelulares) y el yogur se elabora con bacterias lácticas (reino bacterias)."
        }
      ]
    }
  },

  // ===========================================================================
  expressQuestions: [
    {
      q: "¿Cómo se llama la unidad viva más pequeña que forma a todos los seres vivos?",
      options: ["Átomo", "Célula", "Gránulo", "Poro"],
      correct: 1,
      exp: "La célula es el ladrillo de la vida capaz de realizar las funciones vitales."
    },
    {
      q: "¿Con qué instrumento podemos ver a una bacteria individual?",
      options: ["Prismáticos", "Lupa", "Microscopio", "Gafas de sol"],
      correct: 2,
      exp: "Las bacterias miden milésimas de milímetro; requieren un microscopio óptico potente."
    },
    {
      q: "¿En qué reino clasificarías a una ameba?",
      options: ["Animal", "Bacterias", "Protoctistas", "Hongos"],
      correct: 2,
      exp: "Las amebas son protozoos y pertenecen al reino de los Protoctistas."
    },
    {
      q: "¿Qué ser vivo unicelular se añade a la harina para que la masa del pan suba?",
      options: ["Levadura", "Alga nori", "Champiñón", "Paramecio"],
      correct: 0,
      exp: "La levadura es un hongo unicelular que fermenta los azúcares liberando gas."
    },
    {
      q: "¿Qué seres vivos son los principales descomponedores de materia orgánica en la naturaleza?",
      options: ["Aves y reptiles", "Hongos y bacterias", "Peces y corales", "Helechos y musgos"],
      correct: 1,
      exp: "Los hongos y bacterias transforman la materia muerta en sales minerales fértiles."
    },
    {
      q: "¿Qué reino incluye tanto organismos unicelulares microscópicos como organismos pluricelulares de decenas de metros?",
      options: ["Reino Animal", "Reino de las Plantas", "Reino Protoctistas", "Reino de las Bacterias"],
      correct: 2,
      exp: "En los protoctistas hay microalgas de 1 célula y algas marinas kelp de hasta 50 metros."
    },
    {
      q: "¿Qué tipo de nutrición tienen las plantas y las algas?",
      options: ["Heterótrofa", "Autótrofa", "Carnívora", "Parásita"],
      correct: 1,
      exp: "Son autótrofas: elaboran su propia materia orgánica mediante la fotosíntesis."
    },
    {
      q: "¿Los hongos pueden fabricar su propio alimento mediante fotosíntesis?",
      options: ["Sí, todos los días al mediodía", "No, son heterótrofos y absorben nutrientes orgánicos", "Solo en verano", "Solo cuando llueve mucho"],
      correct: 1,
      exp: "¡Jamás! Los hongos no tienen clorofila y son siempre heterótrofos."
    },
    {
      q: "¿Qué son las esporas de una seta?",
      options: ["Raíces de anclaje", "Estructuras microscópicas de reproducción", "Gotas de savia bruta", "Semillas con fruto carnoso"],
      correct: 1,
      exp: "Las esporas son diminutas partículas que dan origen a nuevos hongos al germinar."
    },
    {
      q: "¿Cómo llamamos a las bacterias que viven en nuestro intestino y nos ayudan a digerir?",
      options: ["Bacterias patógenas", "Flora intestinal o microbiota", "Virus digestivos", "Amebas invasoras"],
      correct: 1,
      exp: "La microbiota intestinal es vital para nuestra digestión e inmunidad."
    },
    {
      q: "¿Cuál de estos seres vivos se desplaza activamente?",
      options: ["Pino piñonero", "Águila imperial", "Boletus edulis", "Lechuga de mar"],
      correct: 1,
      exp: "El águila es un animal y tiene desplazamiento activo rápido."
    },
    {
      q: "¿Qué medicamento bactericida descubrió Alexander Fleming a partir de un moho?",
      options: ["Paracetamol", "Penicilina", "Ibuprofeno", "Insulina"],
      correct: 1,
      exp: "La penicilina proviene del hongo Penicillium chrysogenum."
    },
    {
      q: "¿Las bacterias tienen todas una sola célula?",
      options: ["Sí, todas son unicelulares", "No, algunas tienen millones de células", "Solo en el agua salada", "Tienen células solo al reproducirse"],
      correct: 0,
      exp: "El 100% de las bacterias de nuestro planeta son organismos unicelulares."
    },
    {
      q: "¿Por qué los antibióticos NO curan un resfriado común o la gripe?",
      options: ["Porque son medicinas demasiado dulces", "Porque los resfriados los causan virus y los antibióticos solo destruyen bacterias", "Porque hay que tomarlos con zumo", "Porque son para los animales"],
      correct: 1,
      exp: "¡Regla de oro de la salud! Los antibióticos solo actúan contra bacterias, nunca contra virus."
    },
    {
      q: "¿Qué organismo microscópico produce el yogur al fermentar la leche?",
      options: ["Una bacteria láctica", "Una seta de prado", "Una ameba marina", "Una microalga verde"],
      correct: 0,
      exp: "Las bacterias como Lactobacillus bulgaricus fermentan la lactosa produciendo yogur."
    }
  ],

  // ===========================================================================
  // MÓDULO ARCADE: JUEGO RÁPIDO DE CLASIFICACIÓN
  // ===========================================================================
  arcade: {
    modes: [
      {
        id: "kingdoms",
        name: "Clasificador de los 5 Reinos",
        desc: "Arrastra o pulsa sobre el reino correcto para cada ser vivo.",
        categories: ["Animal", "Planta", "Hongo", "Protoctista", "Bacteria"]
      },
      {
        id: "cellularity",
        name: "¿Unicelular o Pluricelular?",
        desc: "Indica si el organismo tiene una única célula o muchas células.",
        categories: ["Solo Unicelular", "Pluricelular"]
      },
      {
        id: "role",
        name: "Amigo o Peligro para la Salud",
        desc: "Distingue entre microbios beneficiosos y patógenos perjudiciales.",
        categories: ["Beneficioso / Amigo", "Patógeno / Peligroso"]
      }
    ],

    items: [
      { name: "Águila imperial", kingdom: "Animal", cell: "Pluricelular", role: "Beneficioso / Amigo", hint: "Ave rapaz con plumas y visión aguda" },
      { name: "Pino carrasco", kingdom: "Planta", cell: "Pluricelular", role: "Beneficioso / Amigo", hint: "Árbol gimnosperma con acículas verdes" },
      { name: "Champiñón silvestre", kingdom: "Hongo", cell: "Pluricelular", role: "Beneficioso / Amigo", hint: "Seta comestible muy apreciada" },
      { name: "Bacteria del yogur (Lactobacillus)", kingdom: "Bacteria", cell: "Solo Unicelular", role: "Beneficioso / Amigo", hint: "Fermenta la leche para hacer yogur" },
      { name: "Ameba de agua dulce", kingdom: "Protoctista", cell: "Solo Unicelular", role: "Patógeno / Peligroso", hint: "Protozoo que cambia de forma y puede causar diarreas" },
      { name: "Levadura de panadería", kingdom: "Hongo", cell: "Solo Unicelular", role: "Beneficioso / Amigo", hint: "Fermenta la masa del pan haciéndola esponjosa" },
      { name: "Alga nori (de sushi)", kingdom: "Protoctista", cell: "Pluricelular", role: "Beneficioso / Amigo", hint: "Alga comestible marina rica en minerales" },
      { name: "Bacteria del tétanos", kingdom: "Bacteria", cell: "Solo Unicelular", role: "Patógeno / Peligroso", hint: "Causa infecciones graves al clavarse un clavo oxidado" },
      { name: "Oronja verde (Amanita phalloides)", kingdom: "Hongo", cell: "Pluricelular", role: "Patógeno / Peligroso", hint: "Seta mortalmente venenosa si se come" },
      { name: "Moho Penicillium", kingdom: "Hongo", cell: "Pluricelular", role: "Beneficioso / Amigo", hint: "Produce el antibiótico penicilina" },
      { name: "Paramecio de charca", kingdom: "Protoctista", cell: "Solo Unicelular", role: "Beneficioso / Amigo", hint: "Protozoo cubierto de cilios que limpia aguas" },
      { name: "Bacteria de la caries", kingdom: "Bacteria", cell: "Solo Unicelular", role: "Patógeno / Peligroso", hint: "Ataca el esmalte de los dientes con azúcares" },
      { name: "León africano", kingdom: "Animal", cell: "Pluricelular", role: "Beneficioso / Amigo", hint: "Mamífero carnívoro del Serengeti" },
      { name: "Trigo dorado", kingdom: "Planta", cell: "Pluricelular", role: "Beneficioso / Amigo", hint: "Planta herbácea cultivada para harina" },
      { name: "Microbiota intestinal", kingdom: "Bacteria", cell: "Solo Unicelular", role: "Beneficioso / Amigo", hint: "Billones de bacterias protectoras en nuestro vientre" }
    ]
  },

  // ===========================================================================
  // EXPLORADOR CIENTÍFICO INTERACTIVO DE LOS 5 REINOS
  // ===========================================================================
  kingdomsExplorer: [
    {
      id: "animal",
      name: "Reino Animal",
      icon: "🦁",
      tagline: "Seres móviles, sensibles y heterótrofos",
      cellularity: "100% Pluricelulares",
      nutrition: "Heterótrofa (comen otros seres vivos)",
      mobility: "Se desplazan activamente",
      habitat: "Tierra, agua dulce, mar y aire",
      keyExamples: ["Gato doméstico", "Águila imperial", "Pez payaso", "Mariposa monarca", "Ser humano"],
      secrets: "Tienen órganos de los sentidos (ojos, oídos, olfato) y un sistema nervioso que les permite reaccionar a gran velocidad.",
      curiosity: "¡El animal más grande de la Tierra es la ballena azul, que pesa tanto como 30 elefantes adultos juntos!"
    },
    {
      id: "planta",
      name: "Reino de las Plantas",
      icon: "🌳",
      tagline: "Las cocineras solares del planeta",
      cellularity: "100% Pluricelulares",
      nutrition: "Autótrofa (fotosíntesis con luz solar y clorofila)",
      mobility: "Viven fijas al sustrato (no se desplazan)",
      habitat: "Suelo terrestre y orillas húmedas",
      keyExamples: ["Roble centenario", "Margarita silvestre", "Pino piñonero", "Musgo", "Helecho"],
      secrets: "Producen la mayor parte del oxígeno que respiramos y la base de todas las cadenas alimentarias terrestres.",
      curiosity: "¡Algunos árboles como las secuoyas gigantes pueden vivir más de 3.000 años y superar los 100 metros de altura!"
    },
    {
      id: "hongo",
      name: "Reino de los Hongos",
      icon: "🍄",
      tagline: "Los grandes recicladores de la biosfera",
      cellularity: "Unicelulares (levaduras) o Pluricelulares (setas y mohos)",
      nutrition: "Heterótrofa (absorben restos orgánicos en descomposición)",
      mobility: "Viven fijos al sustrato (no se desplazan)",
      habitat: "Lugares húmedos, bosques, materia orgánica y alimentos",
      keyExamples: ["Boletus edulis", "Champiñón", "Levadura del pan", "Moho Penicillium", "Níscalo"],
      secrets: "NO son plantas porque no tienen clorofila ni hacen fotosíntesis. La seta es solo su 'flor' reproductora con esporas.",
      curiosity: "¡El organismo vivo más grande del mundo es un hongo subterráneo en Oregón (EE.UU.) que ocupa casi 1.000 hectáreas de bosque!"
    },
    {
      id: "protoctista",
      name: "Reino Protoctistas",
      icon: "🌊",
      tagline: "El reino doble: Protozoos y Algas",
      cellularity: "Unicelulares (protozoos y microalgas) o Pluricelulares (grandes algas marinas)",
      nutrition: "Mixta: Protozoos (heterótrofos) / Algas (autótrofas fotosintéticas)",
      mobility: "Protozoos se mueven con cilios/flagelos; algas viven sumergidas",
      habitat: "Mares, ríos, charcas y zonas muy húmedas",
      keyExamples: ["Ameba", "Paramecio", "Alga nori", "Alga kelp gigante", "Lechuga de mar"],
      secrets: "Las algas no tienen verdaderas raíces, tallos ni hojas. Los protozoos son como animalillos unicelulares microscópicos.",
      curiosity: "¡Más del 50% del oxígeno del planeta no lo producen los árboles, sino las microalgas fotosintéticas del fitoplancton marino!"
    },
    {
      id: "bacteria",
      name: "Reino de las Bacterias",
      icon: "🦠",
      tagline: "Las pioneras invisibles y más antiguas de la vida",
      cellularity: "100% Unicelulares microscópicas",
      nutrition: "Muy variada: autótrofas o heterótrofas",
      mobility: "Flotan en líquidos o nadan con flagelos microscópicos",
      habitat: "En todas partes (aire, hielo, tierra, mar, estómago humano)",
      keyExamples: ["Lactobacillus del yogur", "Bifidobacterias intestinales", "Bacteria de la caries", "Estreptococo"],
      secrets: "Tienen una estructura celular muy sencilla. Muchas son imprescindibles para fabricar yogur y queso y para la digestión.",
      curiosity: "¡En nuestro cuerpo viven más de 38 billones de bacterias, casi tantas como células humanas tenemos!"
    }
  ],

  // ===========================================================================
  // GUÍA RESUMEN PARA IMPRIMIR (ESQUEMAS OFICIALES DE REPASO)
  // ===========================================================================
  summaryGuide: [
    {
      title: "1. La Célula y su Clasificación",
      content: "• La **célula** es la unidad viva elemental que realiza las 3 funciones vitales (nutrición, relación y reproducción).\n• **Unicelulares:** 1 sola célula. Microscópicos (invisibles a simple vista). Ejemplos: bacterias, protozoos, levaduras.\n• **Pluricelulares:** Millones de células. Visibles a simple vista. Ejemplos: animales, plantas, setas, grandes algas."
    },
    {
      title: "2. Instrumentos de Observación",
      content: "• **Microscopio:** Aumenta miles de veces lo invisible a simple vista (células individuales, bacterias, protozoos).\n• **Lupa de mano / binocular:** Amplía detalles de seres pequeños visibles (patas de insectos, esporas, flores).\n• **Prismáticos / Telescopio:** Observan a distancia sin asustar a los animales salvajes (aves en lagunas, ciervos)."
    },
    {
      title: "3. Tabla de los 5 Reinos",
      content: "• **Animales:** Pluricelulares + Heterótrofos + Se desplazan.\n• **Plantas:** Pluricelulares + Autótrofas (fotosíntesis) + Fijas al suelo.\n• **Hongos:** Unicelulares (levaduras) o Pluricelulares (setas/mohos) + Heterótrofos + Fijos.\n• **Protoctistas:** Protozoos (unicelulares heterótrofos) y Algas (autótrofas fotosintéticas acuáticas sin verdaderas hojas ni raíces).\n• **Bacterias:** 100% Unicelulares sencillas + Habitan en todas partes."
    },
    {
      title: "4. Secretos de los Hongos y la Seta",
      content: "• **¿Por qué NO son plantas?** No hacen fotosíntesis y no tienen clorofila. Se alimentan de materia orgánica caída.\n• **La Seta:** Es el órgano reproductor del hongo que fabrica y expulsa las **esporas** al aire.\n• **Beneficios:** Setas comestibles (champiñón, boletus), levaduras para el pan y pizza, antibiótico penicilina.\n• **Reciclaje natural:** Limpian el bosque descomponiendo hojas y madera muerta en sales minerales fértiles."
    },
    {
      title: "5. Bacterias y Salud (Amigas vs Enemigas)",
      content: "• **Amigas:** Fermentan la leche para hacer yogur (*Lactobacillus*), forman la microbiota intestinal que nos ayuda a digerir.\n• **Enemigas (patógenas):** Provocan caries, anginas bacterianas, infecciones cutáneas o del estómago.\n• **Tratamiento:** Se curan con **antibióticos** (recetados por el médico). ¡Los antibióticos NO sirven contra virus ni catarros!"
    }
  ]
};

// Exportar globalmente en ventana del navegador
if (typeof window !== "undefined") {
  window.SCIENCE_DATA = SCIENCE_DATA;
}
