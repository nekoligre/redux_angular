(function(){ 
  'use strict';
  angular
  .module('app')
  .controller('HomeCtrl',HomeCtrl)
  
  HomeCtrl.$inject = ['reduxFct'];
  function HomeCtrl(reduxFct) {

    var vm = this;

    /////////////////////////////////////////
    vm.dispatchName = dispatchName;
    vm.dispatchAdj = dispatchAdj;
    /////////////////////////////////////////
    
    function init(){
      vm.state = reduxFct.getState();
      reduxFct.subscribe(function(){
        vm.state = reduxFct.getState();
	      console.log("Cambios en el modelo --->", vm.state);
      }); }
      
   
    

    function dispatchName(newValue) {
      reduxFct.dispatch({
        type: "NAME",
        name: newValue
      });}
    function dispatchAdj(newValue) {
      reduxFct.dispatch({
        type: "REDUX",
        adj: newValue
      });}


    init();
  }
}())