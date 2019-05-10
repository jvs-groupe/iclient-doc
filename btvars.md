Variables bootstrap
---

Pour information, voici les surcharges et variables spécifiques du IClient. Nous pouvons vous fournir les valeurs spécifiques pour chaque client, qui font parties du paramétrage de ce dernier et qui n'évoluent que très peu.

```
/* Couleur par défaut du fond du site */
$iclientSibgColor: jvsFullColor('sibg-color');
/* Couleur par défaut du texte du site */
$iclientSitxColor: jvsFullColor('sitx-color');
/* Couleur de l'ombre de l'écran de login */
$iclientLogiColor: jvsFullColor('logi-color');
$iclientLogiOpacity: get('logi-color-opac');
/* Couleur de fond du bandeau haut */
$iclientHeabColor: jvsFullColor('heab-color');
/* Couleur de texte du bandeau haut */
$iclientHeatColor: jvsFullColor('heat-color');
/* Couleur de fond bas du bandeau haut */
$iclientHe2bColor: jvsFullColor('he2b-color');
/* Couleur de texte bas du bandeau haut */
$iclientHe2tColor: jvsFullColor('he2t-color');
/* Couleur de fond de sélection du bandeau haut */
$iclientHesbColor: jvsFullColor('hesb-color');
/* Couleur de texte de sélection du bandeau haut */
$iclientHestColor: jvsFullColor('hest-color');
/* Couleur par défaut du fond dashboardbox type 1 */
$iclientD1bgColor: jvsFullColor('d1bg-color');
/* Couleur par défaut du texte dashboardbox type 1 */
$iclientD1txColor: jvsFullColor('d1tx-color');
/* Couleur par défaut des liens dashboardbox type 1 */
$iclientD1taColor: jvsFullColor('d1ta-color');
/* Couleur par défaut du fond dashboardbox type 2 */
$iclientD2bgColor: jvsFullColor('d2bg-color');
/* Couleur par défaut du texte dashboardbox type 2 */
$iclientD2txColor: jvsFullColor('d2tx-color');
/* Couleur par défaut des liens dashboardbox type 2 */
$iclientD2taColor: jvsFullColor('d2ta-color');
/* Couleur de fond des objets de type bouton, ... */
$iclientBgColor: jvsFullColor('bg-color');
/* Couleur de fond légère des objets associés, .. */
$iclientBlColor: jvsFullColor('bl-color');
/* Couleur de texte des balises h* */
$iclientHhColor: jvsFullColor('hh-color');
/* Couleur de fond des boutons information */
$iclientBiColor: jvsFullColor('bi-color');
/* Couleur de fond des boutons success */
$iclientBsColor: jvsFullColor('bs-color');
/* Couleur de fond des boutons default */
$iclientBdColor: jvsFullColor('bd-color');
/* Couleur du graphique Annee */
$iclientGraphAColor: jvsFullColor("graphA-color");
/* Couleur du graphique Periode */
$iclientGraphAColor: jvsFullColor("graphP-color");
/* Couleur de fond du pied de page */
$iclientFoobColor: jvsFullColor("foob-color");
/* Couleur de texte du pied de page */
$iclientFootColor: jvsFullColor("foot-color");
/* Couleur de texte des liens du pied de page */
$iclientFoolColor: jvsFullColor("fool-color");

/* BT4 overides */
$theme-colors: (
  "primary": $iclientBiColor,
  "info": $iclientBiColor,
  "default": $iclientBdColor
);
$grid-breakpoints: (
  xs: 0,
  sm: 768px,
  md: 1024px,
  lg: 1200px,
  xl: 1600px
);
$container-max-widths: (
  sm: 640px,
  md: 840px,
  lg: 1140px,
  xl: 1340px
) !default;
$grid-columns:                36;
$grid-gutter-width:           20px;

// Menu gauche
$left-menu-width: 90px;
$left-menu-item-height: 70px;

// Menu gauche
$header-login-height : 500px;
$header-logged-height: 120px;
$footer-max-height : 120px;
$footer-link-height: 120px;

// Carousel
$carousel-control-color: $iclientHhColor;
$carousel-indicator-active-bg : $iclientHhColor;

// Navs-tabs
$nav-tabs-link-active-color : lighten($iclientBdColor, 40);
$nav-tabs-link-active-bg : $iclientBdColor;
$nav-tabs-link-active-border-color : lighten($iclientBdColor, 40);
```
