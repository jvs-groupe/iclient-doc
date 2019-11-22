/**
 * JVS-Mairistem, Pôle Omega, classe de liaison
 *
 * @version 1.0.1
 */
var mainLoader = false;

/**
 * ############################################################################################################
 *
 * JvsPartnerReleve : classe de base de gestion de l'interface relevés
 *
 * ############################################################################################################
 * Paramètres
 * ------------------------------------------------------------------------------------------------------------
 * options :
 *     * selector   : identifiant de la div permettant l'affichage
 *     * auth       : objet authentification de l'utilisateur
 *     * authSave   : fonction à appeller pour sauvegarder l'authentification
 *                    il faut passer en paramètre l'objet qui sera restitué via auth
 *                    retourne une promesse.
 *     * authRemove : pour supprimer le lien
 *     * serial     : le numéro de série du compteur demandé
 *     * token      : le token JWT de l'utilisateur connecté
 *
 * ############################################################################################################
 * Injections :
 * ------------------------------------------------------------------------------------------------------------
 * logger : Les logs seront consultable sur notre plateforme à condition que le niveau correct soit activé
 *     * critical(message) (tout le temps) : déclenche un log critique
 *     * error(message) (niveau >= 2) : déclenche un log d'erreur
 *     * info(message) (niveau >= 7) : déclenche un log d'information
 *     * debug(message) (niveau >= 9) : déclenche un log de debug`
 *
 * moment : https://momentjs.com/
 *
 * jQuery : https://jquery.com/
 *
 * chartJs : https://www.chartjs.org/
 *
 * ############################################################################################################
 */
JvsPartnerReleve = function (options)
{

  /**
   * Dahboard,
   * Objet permettant de spécifier les paramètres du bloc disponible sur le tableau de bord du portail abonné
   * On peut spécifier des liens internes comme des liens externes
   * Le mieux est de se référer à la version du portail installé chez le client pour la mise en page.
   */
  this.dashboard = {
    // Le titre du bloc
    'title' : 'Ma consommation journalière',
    // La liste des liens, mais en général au moins celui pour afficher les relevés, donc celui ci-dessous
    'links' : [
      {
        'title'   : 'Suivre ma consommation',
        'target'  : 'releve',
        'params'  : 'contrat_id',
        'topmenu' : true
      }
    ],
    // Le commentaire afficher en fin du bloc
    'comments' : '<span>Consultez votre consommation journalière</span><br />...'
  }

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
   * Méthode appelée à chaque changement sur une variables,
   * déconnexion, changement de contrat, ...
   *
   * @see IClient\V1\Basic\Releve
   *
   * @return void
   */
  this.updateConfig = function (key, value) {
    this.config[key] = value;
    console.log(this.config);
  }

  /**
   * Render display
   * Il sera possible via une connexion server <> server de retourner la liste
   * des compteur liés au token, donc à l'abonné. Dans cette liste il suffira d'extraire les données
   * du compteur identifié par serial et prendre en compte les dates de contrats retournées.
   * Pour cette phase il est conseillé de faire une requête à notre serveur via le token pour contrôler
   * que le compteur est bien lié à ce dernier. Consulter la documentation "jvs-groupe/omega-api-doc"
   *
   * @see IClient\V1\Basic\Releve
   *
   * @return void
   */
  this.render = function () {
    // J'ai bien un selecteur
    if (this.config.selector) {
      var content = 'Error';
      var self    = this;
      self.logger.debug("Le selecteur n'a pas été passé au composant !");
      if (this.user) {
        content = '<h1>Authentifié ...</h1>';
        self.displayContent(content);
      } else {
        // méthode injectée pour activer l'animation d'attente
        // Le timeout permet de contrôler que l'animation fonctionne
        self.loadingOn();
        setTimeout(
          function() {
            content  = '<h1>Authentification avec :</h1>';
            content += '<h5>Numéro de série : ' + self.config.serial + '</h5>';
            content += '<h5>Token : ' + self.config.token + '</h5>';
            self.displayContent(content);
            // méthode injectée pour couper l'animation d'attente
            self.loadingOff();
          },
          2000
        );
      }
    } else {
      self.logger.error("Le selecteur n'a pas été passé au composant !");
    }
  }

  /**
   * Initialisation
   * Tout traitement d'initialisation, premier chargement
   *
   * @see IClient\V1\Basic\Releve
   *
   * @return void
   */
  this.init = function () {
    // @todo spécial init....
    this.authenticate();
  }

  /**
   * Authenticate user with token
   */
  this.authenticate = function () {
    this.user = false;
    if (this.config.auth) {
      // @todo
    }
  }

  /**
   * Display content
   * Affichage du résultat dans la div réservée
   * En cas de changement history, merci de respecter les paramètres existants.
   *
   * @param {String} content
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
