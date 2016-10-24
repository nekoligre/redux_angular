(()=>{ 
  'use strict';
  angular
  .module('view-data')
  .controller('viewData',viewData)
  
  viewData.$inject = ['reduxFct', '$log'];
  function viewData(reduxFct, $log) {

    var vm = this;

    /////////////////////////////////////////
    vm.addSubcribe = addSubcribe;
    /////////////////////////////////////////
    
    function init(){
      vm.state = reduxFct.getState().COUNT;
      vm.addSubcribe();
    }

    function addSubcribe(){
      reduxFct.subscribe(()=>{
	      vm.state = reduxFct.getState().COUNT;
      });
    }
    
    init();
  }
})();