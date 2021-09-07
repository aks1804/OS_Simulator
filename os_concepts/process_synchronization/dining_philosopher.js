var phils = [0, 0, 0, 0, 0];
var forks = [0, 0, 0, 0, 0];
var owner = [-1, -1, -1, -1, -1];

var arr = ["one", "two", "three", "four", "five"];
var arrFork = ["first", "second", "third", "fourth", "fifth"];

function initiate() {
    toast("Philosophers are thinking");
    var num = Math.random();
    var n = Math.floor(num * 5);

    if (phils[n] == 0) {
        phils[n] = 1;
        toast("Philosopher " + n + " is Hungry");
    } else if (phils[n] == 1) {
        if (forks[n] == 0 && forks[(n + 1) % 5] == 0) {
            forks[n] = 1;
            owner[n] = n;
            // forks[(n + 1) % 5] = 1;
            // phils[n] = 2;
            toast(n + " picked right chop");
        } else if (owner[n] == n && forks[(n + 1) % 5] == 0) {
            forks[(n + 1) % 5] = 1;
            owner[(n + 1) % 5] = n;            
            phils[n] = 2;
            toast(n + " is Eating");
        } else {
            // alert("He can't start eating now!");
            toast(n+" cannot eat");  
            console.log("Cant Eat");
        }
    } else if (phils[n] == 2) {
        phils[n] = 0;
        forks[n] = 0;
        forks[(n + 1) % 5] = 0;

        owner[n] = -1;
        owner[(n + 1) % 5] = -1;     
        toast(n+" released chops");
    }

    for (var z = 0; z < 5; ++z) {
        if (phils[z] == 0)
            document.getElementById(arr[z]).style.backgroundColor = '#DCDCDC';
        if (phils[z] == 1) {
            document.getElementById(arr[z]).style.backgroundColor = '#f0ad4e';
        }
        if (phils[z] == 2) {
            document.getElementById(arr[z]).style.backgroundColor = '#d43f3a';
        }
        if (forks[z] == 0)
            document.getElementById(arrFork[z]).style.backgroundColor = '#DCDCDC';
        if (forks[z] == 1) {
            document.getElementById(arrFork[z]).style.backgroundColor = owner[z] == z   ?'#d43f3a':'#f47442';
        }
    }
}

function automate() {
    setInterval(function () {
        initiate();
    }, 2000);
}