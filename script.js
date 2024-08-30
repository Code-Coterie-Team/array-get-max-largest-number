function ArrayGetMaxLargestNumber() {
    let arrayGet = document.getElementById("maxArray").value;
    let showResult = document.getElementById("showResult");
    let array = arrayGet.split(",");
    //let avregeArray = 0;
    let muxNumber = 0;

    console.log("array : " + array);
    for (let i = 0; i < array.length; i++) {
        if (Number(array[i]) > muxNumber) {
            muxNumber = Number(array[i]);
            console.log("mux Number is : }"+ array[i]+ ":" + muxNumber);
            console.log("-----------------------------------------");
        } 
        console.log("mux Number is : " + muxNumber);
         showResult.innerHTML = "mux Number is " + muxNumber;
    }
}