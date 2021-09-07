var avgWait_fcfs=0.0, avgWait_fcfs=0.0;
function fcfs(processes){
    //Sort on arrival time
    processes.sort(cmp_fcfs);
    console.log(processes);//Check if sorted
    var n = processes.length;
    processes[0].turn = processes[0].burst;

    for(var i=1; i<n; ++i){
        processes[i].wait = processes[i-1].turn + processes[i-1].arrival- processes[i].arrival;
        if(processes[i].wait < 0){
            processes[i].wait = 0;
            processes[i].turn = processes[i].burst;
        }
        else
            processes[i].turn = processes[i-1].turn + processes[i].burst + processes[i-1].arrival- processes[i].arrival;
            
        avgWait_fcfs += processes[i].wait;
        avgWait_fcfs += processes[i].turn;
    }
    avgWait_fcfs /= n;
    avgWait_fcfs /= n;
    //Check by printing
    console.log(processes);
    console.log(avgWait_fcfs);
    console.log(avgWait_turn);
}

function cmp_fcfs(a,b){
    if(a.arrival<b.arrival)
        return -1;
    else
        return 1;
}

//Run and check once
/*
fcfs([
    {pid:1,burst:1,arrival:0,wait:0,turn:0},
    {pid:2,burst:5,arrival:6,wait:0,turn:0},
    {pid:3,burst:3,arrival:7,wait:0,turn:0}
],2);
*/