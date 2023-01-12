function allcloseblock() {
    document.getElementById("predmet_block").style.display = "none";
    document.getElementById("block_schedulespredmet").style.display = "none";
}
function predmeticlick() {
    allcloseblock();
    document.getElementById("predmet_block").style.display = "block";
    detectpredmet("stanislavkirichenko");
}
function Schedulesclick() {
    allcloseblock();
    document.getElementById("block_schedulespredmet").style.display = "block";
    detectschedules();
}
async function detectpredmet(login) {
    await eel.detectpredmet(login);
}
async function detectschedules() {
    await eel.detectschedules();
}
eel.expose(detectpredmetout);
function detectpredmetout(text) {
    document.getElementById("block_predmet_content").innerHTML = "";
    for (let index = 0; index < text.length; index++) {
        var element = text[index]['title'];
        var elementimg = text[index]['title'].replace(/ /g,'');
        block = '<div class="block_navigator" style="background-image: url(img/pimg/'+elementimg+'.jpg);" img="img/pimg/'+elementimg+'.jpg" title="'+element+'" idpost="'+text[index]['id']+'" onclick="predmet_ponel_click(this)"><div class="block_navigator_ponel_center_end"><p class="block_navigator_ponel_text">'+element+'</p></div></div>'
        document.getElementById("block_predmet_content").innerHTML += block;
    }
}
eel.expose(detectschedulesout);
function detectschedulesout(text) {
    document.getElementById("block_schedulespredmet_content").innerHTML = "";
    for (let index = 0; index < text.length; index++) {
        var element = text[index]['title'];
        var ide = text[index]['id'];
        pred = text[index]['pridmet'];
        textp = ""
        for (let predi = 0; predi < pred.length; predi++) {
            l = predi+1
            textp += "<p class='block_navigator_ponel_text_predmet'>"+l+" . "+pred[predi]+"</p>"

        }

        block = '<div class="block_navigator_schedules"><div class="block_navigator_schedules_ponel_center_end"><p class="block_navigator_ponel_text" style="width: 100%;margin-left: 0px;border-radius:25px;">'+element+'</p></div><div class="ubd_butt_schedulestitle" id='+ide+' onclick="ubd_butt_schedulestitle(this)"><h3>✏️</h3></div>'+textp+'</div>'
        document.getElementById("block_schedulespredmet_content").innerHTML += block;
    }
}