(function(){
  angular.
  module('app')
  .run(run)
  .factory('reduxFct',reduxFct);
  
  run.$inject = ["reduxFct"]
  function run(reduxFct){
    var reducers = function(state,action){
        var newState = Object.assign({}, state);
        switch (action.type) {
          case "NAME":
            newState.name = action.name;
            break;
          case "REDUX":
            newState.redux = action.adj;
            break;
        }
      return newState
    }
    reduxFct.init(reducers,{name:"conor",redux:"mola"})
  }

  function reduxFct(){

    var factory ={
      init:init,
      getState:getState,
      dispatch:dispatch,
      subscribe:subscribe,
      addReducer:addReducer}
    var state;
    var reducer;
    var subscribers = [];

    function init(reducerInit,initState){
      state = initState;
      reducer = reducerInit; }
    function getState(){return state};
    function dispatch(action){
      state = reducer(state, action);
      subscribers.forEach(function(subscriber){subscriber()});
      return action; }
    function subscribe(listener){
      subscribers.push(listener);
      return function(){
        subscribers = subscribers.slice(subscribers.indexOf(listener) + 1, 1);
      };}
    function addReducer(state,action){
      var a = getReducer();
      console.log(getReducer()) }
    function getReducer(){return reducer;}

    return factory
  }

}());