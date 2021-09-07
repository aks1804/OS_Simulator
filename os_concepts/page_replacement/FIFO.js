var input = [];

var FIFO = (size)=>{
    var output = [];
    var hit = [];
    var j = 0;
    var FIFO = [];
    var index = 0;

    for(var i = 0; i < input.length; i++){
        if(output[i-1])
          x = [...output[i-1]];
        else 
          x = [];
          
        output[i] = [];
        
        console.log(x,input[i]);

        if(x.indexOf(input[i])+1){
            hit[i] = 0; 
        }
        else if(x.length<size){
            x.push(input[i]);
            FIFO[x.length-1] = i;
            hit[i] = 1;
        }
        else{
            hit[i] = 1;
            x[index] = input[i];
            index = (index+1)%size;
        }
        output[i] = [...x];
    }
    return {
        output : output,
        hit : hit
    };
}
