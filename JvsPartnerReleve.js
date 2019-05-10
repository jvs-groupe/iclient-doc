/**
 * JVS-Mairistem, pôle eau, classe de liaison
 *
 * @version 1.0.0
 */
var mainLoader = false;

/**
 * JvsPartnerReleve : classe de base de gestion de l'interface relevés
 *
 * options :
 *     * selector   : identifiant de la div permettant l'affichage
 *     * auth       : objet authentification de l'utilisateur
 *     * authSave   : fonction à appeller pour sauvegarder l'authentification
 *                    il faut passer en paramètre l'objet qui sera restitué via auth
 *                    retourne une promesse.
 *     * authRemove : pour supprimer le lien
 *     * serial     : le numéro de série du compteur demandé
 *     * token      : le token JWT de l'utilisateur connecté
 */
JvsPartnerReleve = function (options)
{

  /**
   * Config
   */
  this.config = options;

  /**
   * User if authenticated
   */
  this.user = false;

  /**
   * Config update
   *
   * @see IClient\V1\Basic\Releve
   *
   * Méthode appelée à chaque changement sur une variables,
   * déconnexion, changement de contrat, ...
   *
   * @return void
   */
  this.updateConfig = function (key, value) {
    this.config[key] = value;
    console.log(this.config);
  }

  /**
   * Render display
   *
   * @see IClient\V1\Basic\Releve
   *
   * Il sera possible via une connexion server <> server de retourner la liste
   * des compteur liés au token, donc à l'abonné. Dans cette liste il suffira d'extraire les données
   * du compteur identifié par serial et prendre en compte les dates de contrats retournées.
   * Pour cette phase il est conseillé de faire une requête à notre serveur via le token pour contrôler
   * que le compteur est bien lié à ce dernier. Consulter la documentation "jvs-groupe/omega-api-doc"
   *
   * @return void
   */
  this.render = function () {
    if (this.config.selector) {
      var content = 'Error';
      var self = this;
      if (this.user) {
        content = '<h1>Authentifié ...</h1>';
        self.displayContent(content);
      } else {
        // méthode injectée pour activer l'animation d'attente
        self.loadingOn();
        setTimeout(
          function() {
            content = '<h1>Authentification avec :</h1>';
            content += '<h5>Numéro de série : ' + self.config.serial + '</h5>';
            content += '<h5>Token : ' + self.config.token + '</h5>';
            self.displayContent(content);
            // méthode injectée pour couper l'animation d'attente
            self.loadingOff();
          },
          2000
        );
      }
    }
  }

  /**
   * Initialisation
   *
   * @see IClient\V1\Basic\Releve
   *
   * Tout traitement d'initialisation, premier chargement
   *
   * @return void
   */
  this.init = function ()
  {
    // @todo spécial init....
    this.authenticate();
  }

  /**
   * Authenticate user with token
   */
  this.authenticate = function ()
  {
    this.user = false;
    if (this.config.auth) {
      // @todo
    }
  }

  /**
   * Display content
   *
   * Affichage du résultat dans la div réservée
   * En cas de changement history, merci de respecter les paramètres existants.
   */
  this.displayContent = function (content) {
    if (this.jQuery) {
      // jQuery injecté en local, accessible via this...
      //console.log('via jquery');
      var div2 = this.jQuery('#' + this.config.selector);
      if (div2) {
        div2.html(content);
      }
    } else {
      //console.log('via javascript');
      var div = document.getElementById(this.config.selector);
      if (div) {
        div.innerHTML = content;
      }
    }
  }
}
