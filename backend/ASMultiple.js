const AccionSemantica = require('./AccionSemantica');

class ASMultiple extends AccionSemantica {
  constructor(accion1, accion2) {
    super();
    this.accion1 = accion1;
    this.accion2 = accion2;
  }

  ejecutarAccion(parser) {
    this.accion1.ejecutarAccion(parser);
    this.accion2.ejecutarAccion(parser);
  }
}

module.exports = ASMultiple;
