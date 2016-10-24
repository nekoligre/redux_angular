(()=>{ 
  'use strict';
  angular
  .module('uno')
  .controller('UnoCrtl',UnoCrtl)
  
  UnoCrtl.$inject = ['reduxFct', '$log'];
  function UnoCrtl(reduxFct, $log) {

    var vm = this;

    /////////////////////////////////////////
    vm.sumarUno = sumarUno;
    /////////////////////////////////////////
    
    function init(){
      reduxFct.subscribe(()=>{
	      $log.log("Cambios en el modelo --->", reduxFct.getState());
      });
    }

    function sumarUno(newValue) {
      reduxFct.dispatch({
        type: "SUMAR",
        name: newValue
      });
    }
  }
})();