# 🔬 Science 4.º de Primaria · Tema 3: «Los seres vivos y los cinco reinos»

Aplicación web interactiva, pedagógica y lúdica diseñada especialmente para **Olivia (4.º de Educación Primaria)** para repasar, comprender a fondo los conceptos y sacar un 10 en el examen de Ciencias de la Naturaleza / Conocimiento del Medio sobre el **Tema 3: «Los seres vivos y los cinco reinos»** (Colección *CLAVES · Construyendo Mundos*, Grazalema–Santillana).

---

## 🌟 Características Principales

1. **🎒 5 Misiones de Aprendizaje Temático (Paso a Paso):**
   - **Misión 1: Células y Herramientas de Científica:** Qué es una célula (unidad viva más pequeña), unicelulares vs. pluricelulares, y el uso correcto de microscopio, lupa y prismáticos en expediciones científicas.
   - **Misión 2: El Gran Mapa de los 5 Reinos:** Los 5 reinos universales (Animales, Plantas, Hongos, Protoctistas, Bacterias) y los 3 criterios de clasificación (número de células, nutrición autótrofa/heterótrofa y movilidad/desplazamiento).
   - **Misión 3: El Fascinante Reino de los Hongos:** Por qué NO son plantas (carecen de clorofila y son heterótrofos), partes de la seta (órgano reproductor con esporas), micelio subterráneo, levaduras, mohos, penicilina y su rol esencial como recicladores del suelo.
   - **Misión 4: Protoctistas, el Doble Mundo Acuático:** Los protozoos unicelulares heterótrofos móviles (amebas y paramecios) vs. las algas fotosintéticas productoras de oxígeno (sin raíz ni tallo verdaderos) y utilidades humanas (alimentación, agar-agar).
   - **Misión 5: Bacterias y Salud Humana:** Organismos exclusivamente unicelulares presentes en todo el planeta. Bacterias aliadas (fermentación del yogur y flora intestinal/microbiota) vs. bacterias patógenas (enfermedades tratadas con antibióticos).

2. **🏆 Simulador de Examen:**
   - **Prueba A: La Gran Expedición al Humedal y el Pinar (Caso Práctico):** 10 preguntas competenciales aplicadas a una excursión en la naturaleza con Lucas y Valentina, utilizando prismáticos para aves, muestras de agua para microscopio, setas bajo los pinos y la merienda con pan y yogur.
   - **Prueba B: Dominio Curricular y Saberes Básicos:** 10 preguntas de máximo rigor conceptual sobre definiciones formales, semejanzas y diferencias exactas entre reinos, celularidad y preguntas trampa de examen.
   - Desglose formativo de respuestas con explicaciones pedagógicas adaptadas a 9-10 años.

3. **⚡ Desafío Express (Entrenamiento Infinito):**
   - Generador aleatorio de preguntas rápidas con contador de racha y explicaciones instantáneas.

4. **🕹️ Arcade de los Reinos (Juego Contrarreloj de 45 segundos):**
   - Clasificador rápido en 3 modalidades:
     - 👑 *Por los 5 Reinos* (Animal, Planta, Hongo, Protoctista, Bacteria).
     - 🔬 *Por Celularidad* (Solo Unicelular vs. Pluricelular).
     - 🛡️ *Amigo o Peligro* (Beneficioso para la salud/planeta vs. Patógeno/Riesgo).

5. **🧪 Explorador Científico Interactivo:**
   - Panel visual donde Olivia puede explorar en detalle cada uno de los 5 Reinos: celularidad, nutrición, movilidad, hábitat, clave de examen, ejemplos cotidianos y curiosidades asombrosas («¡Ojo al dato!»).

6. **📖 Guía Visual de Repaso (Chuleta Imprimible):**
   - Resumen estructurado en 5 bloques esenciales listo para lectura rápida o impresión en papel antes del examen (`Ctrl + P`).

7. **🎓 Diploma Oficial Imprimible de Olivia:**
   - Diploma personalizable de «Excelencia Científica en los Reinos de la Naturaleza» con nombre, fecha y sellos oficiales.

8. **🔊 Efectos de Sonido y Voz Lectora (SpeechSynthesis):**
   - Efectos sonoros sintetizados nativos con **Web Audio API** (sin dependencias pesadas de audio externo).
   - Lector de preguntas en voz alta en español.
   - Celebración con lluvia de confeti local en notas sobresalientes.

---

## 🚀 Cómo Ejecutar en Local

Funciona de manera nativa en cualquier navegador (Chrome, Edge, Safari, Firefox):

### Opción 1: Con Python (Recomendado)
```bash
cd c:\99_CODIGOFUENTE\Personal\Olivia_4\Science_Tema3
python -m http.server 3000
```
Abre en tu navegador: [http://localhost:3000](http://localhost:3000)

### Opción 2: Doble clic directo
Haz doble clic sobre el archivo `index.html` en cualquier ordenador, portátil o tablet.

---

## ☁️ Despliegue en Vercel

La aplicación está preparada con `vercel.json` para desplegarse automáticamente en la nube:

1. El repositorio está alojado en GitHub en: `https://github.com/franggpt-code/olivia-science-4-tema3`.
2. En [vercel.com](https://vercel.com):
   - Haz clic en **"Add New..."** -> **"Project"**.
   - Conecta tu cuenta de GitHub y selecciona el repositorio `olivia-science-4-tema3`.
   - Vercel detectará automáticamente que es un proyecto estático sin necesidad de configuración adicional.
   - Pulsa **"Deploy"**.
3. ¡Listo! En segundos tendrás una URL pública para acceder desde el iPad, tablet o móvil de Olivia.

---

## 📁 Estructura del Proyecto

```text
├── index.html                           # Interfaz SPA interactiva principal (cabecera opaca protegida)
├── css/
│   ├── tailwind.min.css                 # Framework de diseño visual
│   └── style.css                        # Estilos personalizados y accesibles
├── js/
│   ├── confetti.min.js                  # Motor de partículas de celebración
│   ├── audio.js                         # Web Audio API y síntesis de voz (Text-to-Speech)
│   ├── data.js                          # Banco pedagógico (Misiones, Exámenes A/B, Express, Arcade y Chuleta)
│   └── app.js                           # Lógica de la SPA, navegación, puntuación y diploma
├── Science_4_Tema3_Claves_Santillana.md # Resumen curricular y base conceptual
├── vercel.json                          # Configuración de despliegue y seguridad
├── package.json                         # Metadatos del proyecto
└── README.md                            # Documentación completa
```
