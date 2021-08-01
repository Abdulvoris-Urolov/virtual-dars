const config = require('config');

module.exports = function(){
    if(!config.get('jwtPrivateKey')){
        throw new Error('jiddy xato jwtPrivateKey muhit topilmadi');
      }
}