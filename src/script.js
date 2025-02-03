var SwitchTime = 0;
window.addEventListener("blur", () =>  {
    SwitchTime +=1;
    console.log(SwitchTime);    
});
console.log(SwitchTime)
if(SwitchTime > 2) {
    window.open("./camthi.html");
};