var bufferSlot, empty, full, emptyCount, delay, intervalID, bufferQueue, fullCount;

function initialize() {
    bufferSlot = 6;
    fullCount = 0;
    empty = Array.from(Array(bufferSlot).keys());
    full = [];
    bufferQueue = [];
    emptyCount = bufferSlot;
    delay = 900; // After every 2000 ms, producer or consumer is called

    //Clear all GUI elements here
    for (var i = 0; i < bufferSlot; i++) {
        $('#' + (i + 1)).css("opacity", "0");
        $('#prod' + (i + 1)).css("background-color", "#fff");
        $('#cons' + (i + 1)).attr("src", "../images/hungrypanda.jpg");
    }
}

function refreshBuffer() {
    for (var i = 1; i <= fullCount; ++i) {
        $('#' + (i)).css("opacity", "1");
    }
    for (var i = fullCount + 1; i <= bufferSlot; ++i) {
        $('#' + (i)).css("opacity", "0");
    }
}

// Array 0-Produce function, 1-Consume Function
var prod_con = [
    function produce() {
        empty.sort(() => Math.random() - 0.5);
        let item = empty[empty.length - 1];

        // $('#prod'+(item+1)).css("background-color", "#000");
        $('#prod' + (item + 1)).css("opacity", "0.5");
        setTimeout(function () {
            // $('#prod' + (item + 1)).css("background-color", "#fff");
            $('#prod' + (item + 1)).css("opacity", "1");
        }, 1000);

        if (emptyCount != 0) {
            //Pick up random
            empty.pop();
            full.push(item);

            // bufferQueue.push(fullCount);
            emptyCount--;
            fullCount++;
            refreshBuffer();
            //Add item to GUI with index = item
            // $('#'+(item+1)).css("opacity", "1");

            console.log("Produced item " + item);
            permToast("Produced by " + item);
            return item;
        } else {
            // Buffer Full

            permToast("Buffer Full  ");
            // alert("Producer tried to produce but, Buffer Full");
        }
    },
    function consume() {

        if (emptyCount != bufferSlot) {
            //Pick up random
            full.sort(() => Math.random() - 0.5);
            let item = full.pop();
            empty.push(item);
            emptyCount++;
            fullCount--;
            refreshBuffer();
            // Remove item from GUI with index = item
            // $('#'+(item+1)).css("opacity", "0");
            $('#cons' + (item + 1)).attr("src", "../images/pandaeating.jpg");
            // $('#prod' + (item + 1)).css("opacity", "1");

            setTimeout(function () {
                $('#cons' + (item + 1)).attr("src", "../images/hungrypanda.jpg");
            }, 1000);
            console.log("Consumed item " + item);
            permToast("Consumed by " + item);
            return item;
        } else {
            // Buffer empty
            permToast("Buffer Empty");
            console.log("Consumer tried to consume but, Buffer Empty");
            // alert("Consumer tried to consume but, Buffer Empty");
        }
    }
];


function start() {
    initialize();
    intervalID = setInterval(function () {
        //Biasing towards producing more than consuming
        var functionIndex = Math.round(Math.random());
        prod_con[functionIndex]();
    }, delay);
}

function stop() {
    initialize();
    clearInterval(intervalID);
}

initialize();