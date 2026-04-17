# Pols Cultural Focus- Web Extension
Cronòmetre abstracte creat amb p5.js i Web APIs.
Aquesta és una extensió per a Firefox que transforma el concepte de rellotge creatiu en un cronòmetre visual abstracte. Ajuda a mesurar el temps de descans o focus mitjançant una animació dinàmica generada amb p5.js.

# Instal·lació
1. Descarrega el codi.
2. Obre Firefox i escriu "about:debugging" a la barra d'adreces.
3. Ves a "Aquest Firefox" i clica a "Carrega un complement temporal...".
4. Selecciona el fitxer "manifest.json" de la carpeta del projecte.

# Característiques
- Cronòmetre interactiu: Botons de Start/Pausa i Reset creats amb el DOM.
- Control visual: Slider per ajustar la intensitat de la brillantor neó en temps real.
- Persistència: Les dades (temps i brillantor) es mantenen en tancar el popup gràcies a `localStorage`.
- Disseny: Canvas optimitzat de 300x150px.

# Fitxers principals
- "sketch.js": Lògica de l'animació i gestió del temps.
- "popup.html" i "style.css": Estructura i disseny de la interfície.
- "manifest.json": Configuració de l'extensió. Manifest V3.
