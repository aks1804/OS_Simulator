var timer = 0, avgWait_sjf = 0.0, avgTurn_sjf = 0.0;

function get_min(process)
{
	let n = process.length;
    let i = 0;
    let min = 999, min_index = 0;
	for (i = 0; i < n; i++)
    { 
      if (process[i].arr > timer || process[i].burst == 0)
      	continue;
      if (process[i].burst < min)
      {
      	min = process[i].burst;
      	min_index = i;

      }
    }  

    return min_index;
}

function sjf_preempt(process)
{
   let not_finished = 1;
   let n = process.length, flag_sum = 0;
   let dup = [], i = 0, j = 0;
   for (i = 0; i < n; i++)
   {
      dup.push(process[i].burst);
      process[i].wait = 0;
      process[i].tat = 0;
   }

   //running a loop for every second of timer
   while (not_finished)
   {

   	flag_sum = 0;
    //get process with shortest burst time
   	min = get_min(process);
  
   	process[min].burst -= 1;

   	for (j = 0; j < n; j++)
   	{
   		if (j != min && process[j].burst != 0 && process[j].arr <= timer)
   			process[j].wait += 1;
   		flag_sum += process[j].burst;
   	}
   	timer += 1;

    //checking for finishing condition
   	if (flag_sum == 0)
   		not_finished = 0;

   }

   for (i = 0; i < n; i++)
   {
   	console.log("Waiting time of P ("+ (i+1) + ") is : " + process[i].wait);
   	process[i].tat = process[i].wait + dup[i];
   	console.log("Turnaround time time of P("+ (i+1) + ") is : " + process[i].tat);
   	avgWait_sjf += process[i].wait;
   	avgTurn_sjf += process[i].tat;
   }
    
   avgWait_sjf /= n;
   avgTurn_sjf /= n;
   
   console.log("The avg. waiting time is " + avgWait_sjf);
   console.log("The avg. turnaround time is " + avgTurn_sjf);


}

/* sample input data set
   (copy paste this in console)
   function Process(bt, arr){
      this.burst = bt;
      this.arr = arr;
      this.wait = 0;
      this.tat = 0;
     }
    var p1 = new Process(6,2);
    var p2 = new Process(4,0);
    var p3 = new Process(8,3);
    var p4 = new Process(5,1);
    var p5 = new Process(3,5);
    var process = [];
    process.push(p1);
    process.push(p2);
    process.push(p3);
    process.push(p4);
    process.push(p5);

    sjf_preempt(process);
 */
