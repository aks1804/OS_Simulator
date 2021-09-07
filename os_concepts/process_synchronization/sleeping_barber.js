


var q, bufferSize, delay, intervalID, occupied,n;

function refreshQ(){
    // TODO : Empty q and add q number of children
    console.log("Refreshing queue q= "+q);
    $('#queue').empty();
    for (var i = 0; i < q; ++i) {
        $('#queue').append('<div class="customer">Customer '+(n - q + 1 + i)+'</div>');
    }

}

function initialize(){
    n=0;
    q=0;
    bufferSize = 10;
    delay = 2000;
    occupied = 0;
    $('#chair').attr('src', '../images/barberchair.png');
    $('#barber').attr('src', '../images/sleeping.png');
    console.log("Barber going to sleep");
}

function add() {
    if(q < bufferSize){
        q++;
        n++;
        console.log("People may enter q = " + q);
        toast("#"+q+" entered")
    }
    else{
        // alert("No empty chairs in queue")
        toast("Chairs Full");
    }
    refreshQ();
}
function start(){
    // initialize();
    intervalID = setInterval(function () {
        if(q>0){
            $('#barber').attr('src', '../images/barber.png');
            console.log("Wake Up barber");
            //if occupied may or may not remove
            occupied = Math.round(Math.random() - 0.3) + 0;
            console.log(occupied?"Chair full":"Chair empty");
            // toast(occupied?"Chair full":"Chair empty");


            $('#chair').attr('src', occupied === 1 ? '../images/haircut.png' : '../images/barberchair.png');

            //If not occupied remove from q and add
            if(occupied===0 && q>0){
                $('#no').text('CURRENT CUSTOMER NO:  ' + (n - q + 1));
                q--;
                //TODO : Add customer to chair
                $('#chair').attr('src', '../images/haircut.png');
                occupied = q>0 ? 1:0;
                console.log("Dequed q = "+q);
            }
        }
        else {
            $('#chair').attr('src', '../images/barberchair.png');
            $('#barber').attr('src', '../images/sleeping.png');
            console.log("Barber going to sleep");
            // toast("Barber going to sleep");
        }
        // if(q < bufferSize){
        //     q = q + Math.round(Math.random()+0.1);
        //     n++;
        //     console.log("People may enter q = " + q);
        // }
        refreshQ();
    },delay);
}

function stop() {
    initialize();
    clearInterval(intervalID);
}
initialize();

// Test
// start();