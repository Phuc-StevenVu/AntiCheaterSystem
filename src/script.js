var returnCode = 3;

document.addEventListener("visibilitychange", function() {

    if(document.visibilityState == "hidden") {
        returnCode =1
    } else if(document.visibilityState == "visible"){
        returnCode = 0;
    }
})
/*
    if user switched to another window
    return code = 1
    else code 0

*/

if(returnCode == 1) {
    alert("cam thi nha ku")
    console.log("da roi web")
} else if(returnCode == 0) {
    console.log("idk");
    console.log("Con tho")
}