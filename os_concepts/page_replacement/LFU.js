var LFU = (size)=>{
    var output = [];
    var hit = [];
    var j = 0;
    var freq = [];
    var FIFO = [];
    for(var i = 0; i < input.length; i++){

        if(output[i-1])
          x = [...output[i-1]]
        else
          x= []

        output[i] = [];
        
        if(x.indexOf(input[i])+1){
            freq[x.indexOf(input[i])]++;
            FIFO[x.indexOf(input[i])] = i;
            hit[i] = 0;
        }
        else if(x.length < size){
            x.push(input[i]);
            hit[i] = 1;
            freq[x.length-1] = 1;
            FIFO[x.length-1] = i;
        }
        else{
            hit[i] = 1;
            var val = Math.min(...freq);
            var index = -1;
            var fifo = Infinity;
            for(var j = 0; j<size; j++){
                if(val == freq[j]&&FIFO[j]<fifo){
                    fifo = FIFO[j];
                    index = j;
                }
            }
            x[index] = input[i];
            freq[index] = 1;
            FIFO[index] = i;        
        }
        output[i] = [...x];
    }
    return {
        output : output,
        hit : hit
    };
}
