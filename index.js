function receivesAFunction(callback){
  callback();
  return;
}

const returnsANamedFunction = () => function ANamedFunction(){};


const returnsAnAnonymousFunction = () => function(){};