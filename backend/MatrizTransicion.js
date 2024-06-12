const AS0 = require('./AS0');
const AS1 = require('./AS1');
const AS2 = require('./AS2');
const AS3 = require('./AS3');
const AS4 = require('./AS4');
const AS5 = require('./AS5');
const AS6 = require('./AS6');
const AS7 = require('./AS7');
const ASMultiple = require('./ASMultiple');

class MatrizTransicion {
  constructor() {
    this.as0 = new AS0();
    this.as1 = new AS1();
    this.as2 = new AS2();
    this.as3 = new AS3();
    this.as4 = new AS4();
    this.as5 = new AS5();
    this.as6 = new AS6();
    this.as7 = new AS7();
    this.as6y7 = new ASMultiple(this.as6, this.as7);

    this.errorE = 100;
    this.matrizTransiciones = [    //  { 0     } 1     " 2     : 3     , 4     . 5     - 6     nr7     U-"8    t 9     r 10    u 11    e 12    f 13    a 14    l 15    s 16    Blank 
    /* 0 */ [   1,  this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    0],
    /* 1 */ [this.errorE,   this.errorE,    2,      this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    1],
    /* 2 */ [21,     21,    this.errorE,     21,     21,     21,     21,     21,     21,     21,     21,     21,     21,     21,     21,     21,     21,    this.errorE],
    /* 3 */ [this.errorE,   this.errorE,    this.errorE,    4,      this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    3],
    /* 4 */ [1,     this.errorE,    5,      this.errorE,    this.errorE,    this.errorE,    20,     7,      this.errorE,    10,     this.errorE,    this.errorE,    this.errorE,    14,     this.errorE,    this.errorE,    this.errorE,    4],
    /* 5 */ [5,     5,      6,      5,      5,      5,      5,      5,      5,      5,      5,      5,      5,      5,      5,      5,      5,      5],
    /* 6 */ [this.errorE,   19,     this.errorE,    this.errorE,    1,      this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    6],
    /* 7 */ [this.errorE,   19,     this.errorE,    this.errorE,    1,      8,      this.errorE,    7,      this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    22],
    /* 8 */ [this.errorE,   this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    9,      this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE],
    /* 9 */ [this.errorE,   19,     this.errorE,    this.errorE,    1,      this.errorE,    this.errorE,    9,      this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    22],
    /* 10*/ [this.errorE,   this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    11,     this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE],
    /* 11*/ [this.errorE,   this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    12,     this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE],
    /* 12*/ [this.errorE,   this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    13,     this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE],
    /* 13*/ [this.errorE,   19,     this.errorE,    this.errorE,    1,      this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    13],
    /* 14*/ [this.errorE,   this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    15,     this.errorE,    this.errorE,    this.errorE],
    /* 15*/ [this.errorE,   this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    16,     this.errorE,    this.errorE],
    /* 16*/ [this.errorE,   this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    17,     this.errorE],
    /* 17*/ [this.errorE,   this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    18,     this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE],
    /* 18*/ [this.errorE,   19,     this.errorE,    this.errorE,    1,      this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    18],
    /* 19*/ [this.errorE,   19,     this.errorE,    this.errorE,    1,      this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    19],
    /* 20*/ [this.errorE,   this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    7,      this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE],
    /* 21*/ [21,     21,    3,      21,     21,     21,     21,     21,     21,     21,     21,     21,     21,     21,     21,     21,     21,     this.errorE],
    /* 22*/ [this.errorE,   19,     this.errorE,    this.errorE,    1,      this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    this.errorE,    22]
    
      // Define aquí la matriz de transiciones como en C++
    ];

    this.matrizAcciones = [
        //      { 0     } 1     " 2     : 3     , 4     . 5     - 6     nr7     U-"8    t 09    r 10    u 11    e 12    f 13    a 14    l 15    s 16
        /* 0 */ [this.as0,	null,	null,	null,	null,	null,	null,	null,	null,	null,	null,	null,	null,	null,	null,	null,   null,   null],
        /* 1 */ [null,	    null,	this.as1,	null,	null,	null,	null,	null,	null,	null,	null,	null,	null,	null,	null,	null,	null,   null],
        /* 2 */ [this.as2,	this.as2,   null,   this.as2,	this.as2,	this.as2,	this.as2,	this.as2,	this.as2,	this.as2,	this.as2,	this.as2,	this.as2,	this.as2,	this.as2,	this.as2,	this.as2,   null],
        /* 3 */ [null,	    null,	null,	this.as4,	null,	null,	null,	null,	null,	null,	null,	null,	null,	null,	null,	null,	null,   null],
        /* 4 */ [this.as3,	null,	null,	null,	null,   null,	this.as5,	this.as5,	null,	this.as5,	null,	null,	null,	this.as5,	null,	null,	null,   null],
        /* 5 */ [this.as5,	this.as5,	null,	this.as5,	this.as5,	this.as5,	this.as5,	this.as5,	this.as5,	this.as5,	this.as5,	this.as5,	this.as5,	this.as5,	this.as5,	this.as5,	this.as5,   this.as5],
        /* 6 */ [null,	    this.as6y7,	null,   null,	this.as6,	null,	null,	null,	null,	null,	null,	null,	null,	null,	null,	null,	null,   null],
        /* 7 */ [null,	    this.as6y7,	null,	null,	this.as6,	this.as5,	null,	this.as5,	null,	null,	null,	null,	null,	null,	null,	null,	null,   null],
        /* 8 */ [null,	    null,	null,	null,	null,	null,	null,	this.as5,	null,	null,	null,	null,	null,	null,	null,	null,	null,   null],
        /* 9 */ [null,	    this.as6y7,	null,	null,	this.as6,	null,	null,	this.as5,	null,	null,	null,	null,	null,	null,	null,	null,	null,   null],
        /* 10*/ [null,	    null,	null,	null,	null,	null,	null,	null,	null,	null,	this.as5,   null,	null,	null,	null,	null,	null,   null],
        /* 11*/ [null,	    null,	null,	null,	null,	null,	null,	null,	null,	null,	null,	this.as5,	null,	null,	null,	null,	null,   null],
        /* 12*/ [null,	    null,	null,	null,	null,	null,	null,	null,	null,	null,	null,	null,	this.as5,	null,	null,	null,	null,   null],
        /* 13*/ [null,	    this.as6y7,	null,	null,	this.as6,	null,	null,	null,	null,	null,	null,	null,	null,	null,	null,	null,	null,   null],
        /* 14*/ [null,	    null,	null,	null,	null,	null,	null,	null,	null,	null,	null,	null,	null,	null,	this.as5,	null,	null,   null],
        /* 15*/ [null,	    null,	null,	null,	null,	null,	null,	null,	null,	null,	null,	null,	null,	null,	null,	this.as5,	null,   null],
        /* 16*/ [null,	    null,	null,	null,	null,	null,	null,	null,	null,	null,	null,	null,	null,	null,	null,	null,	this.as5,   null],
        /* 17*/ [null,	    null,	null,	null,	null,	null,	null,	null,	null,	null,	null,	null,	this.as5,	null,	null,	null,	null,   null],
        /* 18*/ [null,	    this.as6y7,	null,	null,	this.as6,	null,	null,	null,	null,	null,	null,	null,	null,	null,	null,	null,	null,   null],
        /* 19*/ [null,	    this.as7,	null,	null,	null,	null,	null,	null,	null,	null,	null,	null,	null,	null,	null,	null,   null,   null],
        /* 20*/ [null,	    null,	null,	null,	null,	null,	null,	this.as5,	null,	null,	null,	null,	null,	null,	null,	null,	null,   null],
        /* 21*/ [this.as2,	this.as2,   null,   this.as2,	this.as2,	this.as2,	this.as2,	this.as2,	this.as2,	this.as2,	this.as2,	this.as2,	this.as2,	this.as2,	this.as2,	this.as2,	this.as2,   null],
        /* 22*/ [null,	this.as6y7,	null,	null,	this.as6,	null,	null,	this.as5,	null,	null,	null,	null,	null,	null,	null,	null,	null,   null]
        
    ];
  }
    // Nos permite traducir un char al valor de columna correspondiente de las matrices
    traducirCharNro(c) {
        if (c >= '0' && c <= '9') return 7;
    
        switch (c) {
          case '\n':
          case ' ':
          case '\t':
            return 17;
          case '{':
            return 0;
          case '}':
            return 1;
          case '"':
            return 2;
          case ':':
            return 3;
          case ',':
            return 4;
          case '.':
            return 5;
          case '-':
            return 6;
          case 't':
            return 9;
          case 'r':
            return 10;
          case 'u':
            return 11;
          case 'e':
            return 12;
          case 'f':
            return 13;
          case 'a':
            return 14;
          case 'l':
            return 15;
          case 's':
            return 16;
          default:
            return 8;
        }
    };

    siguienteEstado(c, estadoActual) {
        const columna = this.traducirCharNro(c);
        const rtn = this.matrizTransiciones[estadoActual][columna];
        return rtn;
    }
    
    ejecutarAccion(i, j, parser) {
        const aux = this.traducirCharNro(j);
        // La transición actual puede no tener acción a realizar, se marca con null en la tabla de Acciones Semánticas
        if (this.matrizAcciones[i][aux] !== null) {
          this.matrizAcciones[i][aux].ejecutarAccion(parser);
        }
      }
    
      
}

module.exports = MatrizTransicion;
