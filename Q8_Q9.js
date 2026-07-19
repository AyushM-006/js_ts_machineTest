class ValueNotSet extends Error{

    constructor(msg) {
        super(msg)
        this.name = "ValueNotSet"
    }
}

function name(){
    try{
        console.log(name);
        throw new ValueNotSet("value is not given")
    }catch(err){
        console.log(err.name + " : "+err.message);
        
    }
    
    
}
name()