var queue;
var rear,front;
rear=-1;
front=-1;
function enqueue(i) //function to enqueue the processes waiting
{
	 rear+=1;
	 queue[rear]=i;
	 if(front==-1)
     front=0;
}
function dequeue()  //function to dequeue the processes from queue
{
	  let temp=queue[front];
	  if(front==rear)
		 front=-1,rear=-1;
      else
        front+=1;
    return temp;
}
 function InQueue(i)  // checking whether a process is in queue
 {
     let j;
     for(j=front;j<=rear;j++)
	 {
      if(queue[j]==i)
        return 1;
	 }
     return 0;
 }
 function sortbyArrival(process) //sorting the processes by arrival time
 {
     let temp_pro,n=process.length;
      let i,j;
         for(i=0;i<n;i++)
		 {
            for(j=0;j<n-i-1;j++)
			{
                if(process[j].arr>process[j+1].arr)
				{
                  temp_pro=process[j];
                   process[j]=process[j+1];
                   process[j+1]=temp_pro;
				}
			}
         }
 }		 
 function roundrobin(process,quantum)
 {
 let time=0;
 let n=process.length;
 let avgWait_rr=0.0,avgTurn_rr=0.0;
 let count;
 let i,j;
 
 sortbyArrival(process);
 enqueue(0);        //enqueueing the first process
 for(time=process[0].arr;count>0;)
 {
	    if(count>0 && front==-1)
		{
			time++;
			     for(j=0;j<n;j++)
				 {
					 if(process[j].arr<=time && process[j].complete!=1 && InQueue(j)!=1) //checking whether a process is already in queue and whether it is completed or not.
						 enqueue(j);
				 }
		}
        else
		{
           i=dequeue();
             if(process[i].rt<=quantum)
		 {
                    time+=process[i].rt;
                    process[i].rt=0;
                    process[i].complete=1;
                    count--;
                    process[i].wait=time-process[i].arr-process[i].burst;
					avgWait_rr+=process[i].wait;
                    process[i].tat=time-process[i].arr;
					avgTurn_rr+=process[i].tat;
			 console.log("The waiting time of the process is"+process[i].wait);
			 console.log("The turnaound time of the process is"+process[i].tat);
			       for(j=0;j<n;j++)
				   {
					  if(process[j].arr<=time && process[j].complete!=1 && InQueue(j)!=1)
			 			 enqueue(j);
			     	 }
		 }		
               else 
               { 
                time+=quantum;
                 process[i].rt-=quantum;
                   for(j=0;j<n;j++)
				    {
					 if(process[j].arr<=time && process[j].complete!=1 && InQueue(j)!=1)
						 enqueue(j);
			     	 }
			   }
		}
 }
avgTurn_rr=avgTurn_rr/n;
avgWait_rr=avgWait_rr/n;
console.log("The avg. waiting time is "+ avgWait_rr); //printing the avg. waiting time of all the processes.
console.log("The avg. turnaroundtime time is "+ avgTurn_rr);//printing the avg. turnaround time of all the processes.
}
		   
