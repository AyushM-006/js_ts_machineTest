
function print(){
    console.log(i);
}

function errorPropagator(){
    print()
}

function errorHandler(){
    try {
        errorPropagator()
    } catch (error) {
      console.log(error.name+" : "+error.message);
        
    }
}

errorHandler()

