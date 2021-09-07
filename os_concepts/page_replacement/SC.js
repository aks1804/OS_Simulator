var SC = (size)=>{
    var output = [];
    var ref = [];
    var hit = [];
    var pos = -1;

    for(var i=0;i<size;i++){
        ref[i] = 0;
    }

    for(var i=0; i<input.length; i++){
        if(output[i-1])
            x = output[i-1].slice()
        else
            x=[];

		if(x.indexOf(input[i])+1){
            hit[i] = 0;
            ref[x.indexOf(input[i])] = 1;
        }
        else{
            pos = (pos +1)%size;
			while(ref[pos] == 1){
				ref[pos] = 0;
				pos = (pos+1)%size;
			}
            x[pos] = input[i];
            hit[i] = 1;
        }
        output.push(x);
    }
    return{
        output : output,
        hit : hit
    };
}