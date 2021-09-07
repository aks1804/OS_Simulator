var LRU = (size)=>{
    var output = [];
    var hit = [];
    var j = 0;
    var used = [];
    for(var i = 0; i < input.length; i++){
        
        if(output[i-1])
          x = [...output[i-1]]
        else
          x= []

        output[i] = [];
        
        if(x.indexOf(input[i])+1){
            used[x.indexOf(input[i])] = -1;
            hit[i] = 0;
        }
        else if(x.length < size){
            x.push(input[i]);
            hit[i] = 1;
            used[x.length-1] = -1;
        }
        else{
            hit[i] = 1;
            var index = used.indexOf(Math.max(...used));
            x[index] = input[i];
            used[index] = -1;           
        }
        output[i] = [...x];
        for(k=0;k<used.length;k++){
            used[k]++;
        }
    }
    return {
        output : output,
        hit : hit
    };
}
