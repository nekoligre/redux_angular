(()=>{
  angular.
  module('app')
  .run(run)
  .factory('reduxFct',reduxFct);
  
  run.$inject = ["reduxFct"]
  function run(reduxFct){
    let reducers = (state,action)=>{
        let newState = Object.assign({}, state);
        switch (action.type) {
          case "SUMAR":
            newState.COUNT +=1;
            break;
          case "RESTAR":
            newState.COUNT -=1;
            break;
        }
      return newState
    }
    reduxFct.init(reducers,{COUNT:50})
  }

  function reduxFct($rootScope){

    let factory ={
      init,
      getState,
      dispatch,
      subscribe,
    }
    let state;
    let reducer;
    let subscribers = [];

    function init(reducerInit,initState){
      state = initState;
      reducer = reducerInit; 
    }
    function getState(){return state};
    function dispatch(action){
      state = reducer(state, action);
      subscribers.forEach(function(subscriber){subscriber()});
      return action; 
    }
    function subscribe(listener){
      subscribers.push(listener);
      return function(){
        subscribers = subscribers.slice(subscribers.indexOf(listener) + 1, 1);
      };
    }



    
    
    return factory

  }
})();