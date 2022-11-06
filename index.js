function receivesAFunction(giveMe) {
    giveMe()
}

function returnsANamedFunction() {
    return function ANamedFunction (oneLove) {
        console.log(ANamedFunction)
    }

  }

  function returnsAnAnonymousFunction() {
    return () => console.log("One Love")  
  }