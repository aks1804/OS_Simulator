var delay = 1000;
var currCount = 0;
//Index 0 -> reader, 1->writer
var queueCount = [0, 0];
var intervalID;
var maxSlots = 10;

function initialize() {
    delay = 3000;
    currCount = 0;
    //Index 0 -> reader, 1->writer
    queueCount = [0, 0];
}

function add(x) {
    //Update queueCount onClick in GUI
    if (queueCount[0] + queueCount[1] < maxSlots) {
        queueCount[x]++;
        toast((x == 0 ? "Reader" : "Writer") + " added");
    } else
        toast("Buffer Full");

    refreshQueue();
}

function updateBox() {
    // if currCount==-1, add writer, if 0 nothing, else currcount amt of readers
    $('#space').empty();
    if (currCount == -1) {
        $('#space').append('<div class="writer"> &nbsp;Writer</div>');
    } else {
        for (var i = 0; i < currCount; ++i) {
            $('#space').append('<div class="reader"> &nbsp;Reader</div>');
        }
    }
    console.log(currCount);
}

function refreshQueue() {
    //TODO : change GUI here make div empty (delete children)
    //TODO : add queueCount[1] wr to  bottom of queue
    //TODO : add queueCount[0] rd read to  top of queue
    $('#queue').empty();
    for (var i = 0; i < queueCount[1]; ++i) {
        $('#queue').append('<div class="writer"> &nbsp;Writer</div>');
    }

    for (var i = 0; i < queueCount[0]; ++i) {
        $('#queue').append('<div class="reader"> &nbsp;Reader</div>');
    }
    console.log(queueCount);

}

function solve() {
    // refreshQueue();
    // Remove random amount of current readers or writer in box
    if (currCount == -1) {
        //Writer present
        if (Math.round(Math.random() + 0.2)) {
            // Remove writer from box UI
            currCount = 0;
            toast("Write Complete");

        } else
            toast("Writer using Document");
    } else {
        // Remove some or all readers from boxes
        currCount -= Math.round(Math.random() * currCount + 0.3);
        // TODO : Update
    }
    updateBox();
    // Add from queue to box
    if (currCount >= 0) {
        if (queueCount[1] && currCount == 0) {
            toast("Single Writer");
            queueCount[1]--;
            currCount = -1;
        } else {
            toast("Reading...");
            currCount += queueCount[0]
            queueCount[0] = 0;
        }
        updateBox();
        refreshQueue();
    }
}

function start() {
    intervalID = setInterval(function () {
        // Reduce box readers from readCount to random no. from 0 to readCount
        // If front is not a writer add all readers from queue to box

        //bias to produce more readers
        // var rw = Math.round(Math.random()-0.2) + 0;
        // queueCount[rw]++;
        solve();
        // Else check if box is free. If yes add
    }, delay);

}

function stop() {
    initialize();
    clearInterval(intervalID);
}

// function test(){
//     currCount = -1;
//     queueCount = [3,1];
// }
// test();