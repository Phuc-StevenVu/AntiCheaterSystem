var SwitchTime = 0;
document.addEventListener("visibilitychange", () => {
    if(document.hidden) {
        SwitchTime +=1;
    }
    if(SwitchTime>=2) {
        window.location.replace('./camthi.html');
    }
});
