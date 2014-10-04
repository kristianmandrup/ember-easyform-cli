'use strict';

module.exports = {
  name: 'ember-easyform-cli',
  included: function(app) {
    this._super.included(app);    
    this.app.import(app.bowerDirectory + '/ember-easyform/dist/ember-easyform.js');
  }
};

