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
  exams: {
    // PRUEBA A: Caso práctico contextualizado (Lucas y Valentina en el Humedal)
    testA: {
      title: "Prueba A: La Gran Expedición al Humedal y el Pinar",
      description: "Acompaña a Lucas y Valentina en su jornada científica con cuaderno de campo, prismáticos y microscopio.",
      context: "Lucas y Valentina están pasando el día en una reserva natural que combina laguna de agua dulce y bosque de pinos. Llevan prismáticos para aves, lupas para el suelo y botes estériles para recoger agua y examinarla en el laboratorio del centro de visitantes.",
      questions: [
        {
          id: "ta_1",
          question: "Lucas y Valentina ven una bandada de flamencos y garzas comiendo en el centro de la laguna. ¿Qué instrumento deben usar para observarlas con detalle sin espantarlas?",
          options: [
            "Una lupa de aumento.",
            "Un microscopio de campo.",
            "Unos prismáticos.",
            "Un periscopio sumergible."
          ],
          correct: 2,
          explanation: "Los prismáticos permiten observar animales lejanos a gran distancia con total nitidez y sin perturbarlos."
        },
        {
          id: "ta_2",
          question: "¿A qué reino de la vida pertenecen los flamencos, peces y ranas que observan en la laguna?",
          options: [
            "Al reino de las plantas.",
            "Al reino animal.",
            "Al reino protoctistas.",
            "Al reino de los hongos."
          ],
          correct: 1,
          explanation: "Son pluricelulares, se alimentan de otros seres vivos y se desplazan activamente: son animales."
        },
        {
          id: "ta_3",
          question: "Valentina toma una muestra de agua verdosa con un frasco y la coloca bajo el microscopio. Observa seres diminutos que se mueven rápido y otros verdes que flotan. ¿Qué ha encontrado?",
          options: [
            "Pequeños peces recién nacidos y hojas de pino.",
            "Protozoos (como paramecios) y algas unicelulares microscópicas (del reino protoctistas).",
            "Crías de rana y semillas flotantes.",
            "Cristales de sal marina y granos de arena."
          ],
          correct: 1,
          explanation: "En una gota de agua estancada habitan infinidad de protoctistas microscópicos (protozoos y microalgas)."
        },
        {
          id: "ta_4",
          question: "Caminando por el pinar, Lucas encuentra varias setas creciendo en la base de un pino caído y dice: '¡Qué plantas tan curiosas!'. ¿Por qué la afirmación de Lucas es incorrecta?",
          options: [
            "Porque las setas son animales venenosos que muerden.",
            "Porque las setas pertenecen al reino de los hongos: no tienen hojas ni clorofila y no hacen fotosíntesis.",
            "Porque las setas son minerales que crecen con la lluvia.",
            "Porque las setas no tienen agua en su interior."
          ],
          correct: 1,
          explanation: "Los hongos no son plantas porque son heterótrofos (se nutren de materia orgánica en descomposición) y carecen de clorofila."
        },
        {
          id: "ta_5",
          question: "Valentina usa su lupa de mano para examinar la parte inferior del sombrero de una seta. ¿Qué estructuras busca y para qué sirven?",
          options: [
            "Pequeñas flores microscópicas para dar fruto.",
            "Láminas o poros donde se forman las esporas para reproducirse.",
            "Pelos absorbentes que beben agua de la lluvia.",
            "Dientes diminutos para morder insectos."
          ],
          correct: 1,
          explanation: "Bajo el sombrero de la seta se forman millones de esporas, que al volar por el viento formarán nuevos hongos."
        },
        {
          id: "ta_6",
          question: "Para merendar, los dos exploradores abren sus mochilas: Lucas come un bocadillo de jamón con pan crujiente y Valentina toma un yogur con fruta. ¿Qué seres vivos intervinieron en la elaboración de estos alimentos?",
          options: [
            "Para el pan se usaron algas marinas y para el yogur protozoos.",
            "Para el pan se usaron levaduras (hongos) y para el yogur bacterias lácticas.",
            "Para ambos se utilizaron hojas de plantas aromáticas.",
            "Ninguno de los dos requiere la intervención de seres vivos."
          ],
          correct: 1,
          explanation: "¡Pregunta clásica de examen! El pan fermenta con levaduras (hongos unicelulares) y el yogur cuaja gracias a bacterias."
        },
        {
          id: "ta_7",
          question: "En un tronco viejo observan una capa blanquecina de moho y madera que se desmorona como tierra fértil. ¿Por qué es positivo esto para el ecosistema del pinar?",
          options: [
            "Porque los hongos y bacterias descomponen la madera y reciclan nutrientes minerales que las plantas aprovecharán.",
            "Porque así el tronco no molesta para que los coches pasen.",
            "Porque el moho elimina el aire del bosque para que no haya viento.",
            "Porque las setas queman el tronco con ácido concentrado."
          ],
          correct: 0,
          explanation: "Son los recicladores de la biosfera: devuelven la materia orgánica al suelo en forma de sales minerales nutritivas."
        },
        {
          id: "ta_8",
          question: "Al cruzar un arroyo, Lucas se raspa la espinilla con una rama seca. La monitora le lava la herida con agua y jabón y le aplica un desinfectante. ¿Por qué es importante este paso?",
          options: [
            "Para evitar que bacterias patógenas del entorno entren en la piel y provoquen una infección.",
            "Para cambiar el color de la piel a rojo brillante.",
            "Para enfriar los huesos de la pierna.",
            "Para que las plantas del bosque no huelan la sangre."
          ],
          correct: 0,
          explanation: "La piel nos protege; cuando se corta, desinfectar impide que bacterias patógenas penetren y se multipliquen."
        },
        {
          id: "ta_9",
          question: "En la orilla de una cala cercana observan lechugas de mar (algas verdes) y grandes algas pardas. ¿En qué se diferencian estas algas de los pinos del bosque?",
          options: [
            "Las algas comen peces vivos y los pinos solo comen tierra.",
            "Las algas viven en el agua y no tienen raíces, tallos, hojas verdaderas ni flores como los pinos.",
            "Los pinos hacen la fotosíntesis pero las algas marinas no pueden hacerla.",
            "Las algas no tienen células vivas."
          ],
          correct: 1,
          explanation: "Aunque ambas hacen fotosíntesis, las algas tienen una estructura sencilla sin órganos vegetales diferenciados (sin raíz ni tallo)."
        },
        {
          id: "ta_10",
          question: "Al final del día, Valentina repasa su libreta con todos los seres vivos identificados: garzas, pinos, níscalos, amebas y bacterias lácticas. ¿Cuál de estos grupos está formado ÚNICAMENTE por organismos unicelulares?",
          options: [
            "Los hongos.",
            "Las plantas.",
            "Los animales.",
            "Las bacterias."
          ],
          correct: 3,
          explanation: "El reino de las bacterias es el único donde TODOS sus miembros son exclusivamente unicelulares."
        }
      ]
    },

    // PRUEBA B: Control Oficial de Conceptos Clave (Rigor Curricular Santillana)
    testB: {
      title: "Prueba B: Dominio Curricular y Saberes Básicos",
      description: "Evaluación formal con preguntas conceptuales y preguntas trampa de examen oficial de 4.º de Primaria.",
      context: "Pon a prueba tus conocimientos sobre definiciones científicas, semejanzas y diferencias entre reinos y características biológicas fundamentales.",
      questions: [
        {
          id: "tb_1",
          question: "¿Qué afirmación describe de forma COMPLETA y EXACTA a los seres vivos y sus células?",
          options: [
            "Todos los seres vivos están formados por células; según su número se clasifican en unicelulares (una sola célula) y pluricelulares (muchas células).",
            "Solo los animales grandes tienen células, las plantas están hechas de madera compacta.",
            "Los seres unicelulares tienen diez células y pueden verse fácilmente a simple vista.",
            "Las células son minerales inertes que no realizan funciones vitales."
          ],
          correct: 0,
          explanation: "Definición curricular exacta: la célula es la unidad de vida y divide a los seres en unicelulares o pluricelulares."
        },
        {
          id: "tb_2",
          question: "¿Cuáles son los cinco reinos en los que la ciencia clasifica a los seres vivos?",
          options: [
            "Vertebrados, Invertebrados, Árboles, Arbustos y Hierbas.",
            "Reino Animal, Reino de las Plantas, Reino de los Hongos, Reino Protoctistas y Reino de las Bacterias.",
            "Carnívoros, Herbívoros, Omnívoros, Descomponedores y Parásitos.",
            "Reino del Aire, de la Tierra, del Agua Dulce, del Mar y Subterráneo."
          ],
          correct: 1,
          explanation: "Los cinco reinos fundamentales de la naturaleza son: Animales, Plantas, Hongos, Protoctistas y Bacterias."
        },
        {
          id: "tb_3",
          question: "Compara el Reino Animal y el Reino Vegetal: ¿En qué se PARECEN y en qué se DIFERENCIAN?",
          options: [
            "Se parecen en que ambos se desplazan; se diferencian en que los animales tienen hojas verdes.",
            "Se parecen en que ambos son pluricelulares; se diferencian en que las plantas fabrican su alimento y están fijas, y los animales toman alimento y se desplazan.",
            "No tienen ningún parecido biológico porque las plantas no son seres vivos.",
            "Se parecen en que ambos hacen la fotosíntesis y se diferencian en el número de patas."
          ],
          correct: 1,
          explanation: "Semejanza: ambos son pluricelulares. Diferencia: nutrición autótrofa vs heterótrofa y movilidad activa vs fijos."
        },
        {
          id: "tb_4",
          question: "Indica qué tipos de hongos son UNICELULARES y cuáles son PLURICELULARES:",
          options: [
            "Las setas son unicelulares y las levaduras son pluricelulares.",
            "Las levaduras son unicelulares; los mohos y los hongos que forman setas son pluricelulares.",
            "Todos los hongos son pluricelulares sin excepción.",
            "Todos los hongos son unicelulares y microscópicos."
          ],
          correct: 1,
          explanation: "¡Pregunta clave! Las levaduras son unicelulares microscópicas; los mohos y setas son pluricelulares."
        },
        {
          id: "tb_5",
          question: "¿Qué parte de algunos hongos pluricelulares interviene directamente en su reproducción?",
          options: [
            "La raíz leñosa subterránea.",
            "La seta, donde se producen y liberan las esporas.",
            "Los pétalos de colores vivos.",
            "El peciolo de sus hojas verdes."
          ],
          correct: 1,
          explanation: "La seta es el órgano reproductor del hongo; en sus láminas se fabrican las esporas reproductoras."
        },
        {
          id: "tb_6",
          question: "Los hongos son muy importantes para las personas y para la naturaleza. Señala el ejemplo VERDADERO:",
          options: [
            "Para las personas dan antibióticos (penicilina) y alimento (setas, pan); para las plantas reciclan nutrientes en el suelo.",
            "Para las personas sirven para fabricar cemento y para las plantas son las encargadas de polinizar sus flores.",
            "Los hongos no aportan ningún beneficio y solo causan venenos.",
            "Los hongos producen gasolina vegetal para los tractores agrícolas."
          ],
          correct: 0,
          explanation: "Beneficio doble: antibióticos y gastronomía para nosotros, y abono orgánico reciclado para el suelo fértil."
        },
        {
          id: "tb_7",
          question: "¿Qué dos tipos de seres vivos tan distintos forman el reino de los PROTOCTISTAS?",
          options: [
            "Los gusanos y los caracoles.",
            "Los protozoos y las algas.",
            "Las bacterias y los mohos.",
            "Los líquenes y los musgos."
          ],
          correct: 1,
          explanation: "El reino protoctistas reúne a los protozoos (heterótrofos) y a las algas (autótrofas fotosintéticas)."
        },
        {
          id: "tb_8",
          question: "Señala la afirmación FALSA sobre los protozoos:",
          options: [
            "Son seres vivos pluricelulares visibles a simple vista paseando por el bosque.",
            "Viven en medios acuáticos o en ambientes muy húmedos.",
            "Algunos protozoos, como las amebas, pueden causarnos enfermedades.",
            "Se parecen a los animales en que se alimentan de otros seres vivos."
          ],
          correct: 0,
          explanation: "¡La falsa es la A! Los protozoos son UNICELULARES y microscópicos, jamás son pluricelulares gigantes."
        },
        {
          id: "tb_9",
          question: "Recuerda las características de las BACTERIAS y compáralas con los protozoos. ¿Qué tienen en común?",
          options: [
            "Ambos son pluricelulares y tienen flores.",
            "Ambos son seres vivos unicelulares y microscópicos.",
            "Ambos vuelan en el cielo nocturno.",
            "Ambos son siempre de color verde fosforescente."
          ],
          correct: 1,
          explanation: "Semejanza: tanto las bacterias como los protozoos son unicelulares y solo pueden verse con microscopio."
        },
        {
          id: "tb_10",
          question: "¿Qué beneficios y perjuicios comparten las BACTERIAS con los HONGOS respecto a las personas?",
          options: [
            "Ninguno, las bacterias y hongos son exactamente lo mismo.",
            "Beneficio: ambos se emplean en la alimentación (yogur / pan y setas); perjuicio: ambos pueden causar enfermedades e infecciones.",
            "Beneficio: ambos fabrican ropa de abrigo; perjuicio: ambos comen madera de muebles.",
            "Beneficio: ambos hacen fotosíntesis; perjuicio: ambos se comen a las mascotas."
          ],
          correct: 1,
          explanation: "Ambos reinos aportan alimentos fermentados esenciales para el ser humano y ambos cuentan con especies patógenas infecciosas."
        }
      ]
    }
  },

  // ===========================================================================
  // BANCO DE DESAFÍO EXPRESS (TEST INFINITO RÁPIDO)
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
