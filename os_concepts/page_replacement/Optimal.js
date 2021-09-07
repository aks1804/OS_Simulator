var OPT = (size)=>{
    var output = [];
    var hit = [];
    var j = 0;
    for(var i = 0; i < input.length; i++){
        if(output[i-1])
            x = output[i-1].slice()
        else
            x=[];

        output[i] = [];

        if(x.indexOf(input[i])+1){
            hit[i] = 0;
        }
        else if(x.length<size){
            x.push(input[i]);
            hit[i] = 1;
        } 
        else{
            var op = [];
            var y = input.slice();
            y = y.slice(i+1);
            for(var j = 0; j < size ; j++){
                if(y.indexOf(x[j])==-1){
                    op[j] = Infinity;
                }
                else{
                    op[j] = y.indexOf(x[j]);
                }
            }
            x[op.indexOf((Math.max(...op)))] = input[i];  
            hit[i] = 1;    
        }
        for(var k = 0; k<x.length; k++){
            output[i].push(x[k]);
        }
    }
    return {
        output : output,
        hit : hit
    };
}
