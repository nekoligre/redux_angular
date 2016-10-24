(()=>{ 
  'use strict';
  angular
  .module('dos')
  .controller('DosCrtl',DosCrtl)
  
  DosCrtl.$inject = ['reduxFct', '$log'];
  function DosCrtl(reduxFct, $log) {

    var vm = this;

    /////////////////////////////////////////
    vm.restarUno = restarUno;
    /////////////////////////////////////////
    
    function init(){
      reduxFct.subscribe(()=>{
	      $log.log("Cambios en el modelo --->", reduxFct.getState());
      });
    }

    function restarUno(newValue) {
      reduxFct.dispatch({
        type: "RESTAR",
        name: newValue
      });
    }
  }
})();