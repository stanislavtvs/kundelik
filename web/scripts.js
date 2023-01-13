function allcloseblock() {
    document.getElementById("predmet_block").style.display = "none";
    document.getElementById("block_schedulespredmet").style.display = "none";
    document.getElementById("block_classmates").style.display = "none";
    document.getElementById("block_teachers").style.display = "none";
    document.getElementById("block_homework").style.display = "none";
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
function Classmatesclick() {
    document.getElementById("block_classmates_content").innerHTML = "";
    allcloseblock();
    document.getElementById("block_classmates").style.display = "block";
    detectuser_py();
}
function Teachersclick() {
    document.getElementById("block_teachers_content").innerHTML = "";
    allcloseblock();
    document.getElementById("block_teachers").style.display = "block";
   detectteach_py();
}
function Homework() {
    allcloseblock(); 
    document.getElementById("block_homework").style.display = "block";
    detecthomework();
}
async function detectpredmet(login) {
    await eel.detectpredmet(login);
}
async function detectschedules() {
    await eel.detectschedules();
}
async function detectuser_py() {
    await eel.detectuser_py();
}
async function detectteach_py() {
    await eel.detectteach_py();
}
async function detecthomework() {
    await eel.detecthomework();
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
eel.expose(detectuser_js);
function detectuser_js(text) {
    for (let index = 0; index < text.length; index++) {
        textp = "<div class='classmates_list_block'><img src='"+text[index]['ava']+"' alt='ava'><p>"+text[index]['name']+"</p></div>";
        document.getElementById("block_classmates_content").innerHTML += textp;
        //console.log(text[index])
    }
}
eel.expose(detectteach_js);
function detectteach_js(text) {
    for (let index = 0; index < text.length; index++) {
        textp = "<div class='classmates_list_block'><img src='"+text[index]['ava']+"' alt='ava'><p>"+text[index]['name']+"</p></div>";
        document.getElementById("block_teachers_content").innerHTML += textp;
    }
}
eel.expose(detecthomework_js);
function detecthomework_js(text) {
    document.getElementById("table_homework").innerHTML = "";
    var status = ""
    title = "<tr><th>Дата</th><th>Задания</th><th>Предметы</th><th>Статус</th></tr>"
    textp = title
    document.getElementById("table_homework").innerHTML = textp;
    for (let index = 0; index < text.length; index++) {
        if (text[index]['status'] == "True") {
            status = "Выполнено"
            textp = "<tr><td>"+text[index]['data']+"</td><td>"+text[index]['text']+"</td><td>"+text[index]['items']+"</td><td>"+status+"</td><td style='text-align: center;background: #1E1E1E;cursor: pointer;' onclick='delethomework_click("+text[index]['id']+")'>Удалить</td><td></td></tr>";
        }
        else if (text[index]['status'] == "False") {
            status = "Не выполнено"
            textp = "<tr><td>"+text[index]['data']+"</td><td>"+text[index]['text']+"</td><td>"+text[index]['items']+"</td><td>"+status+"</td><td style='text-align: center;background: #1E1E1E;cursor: pointer;' onclick='goodhomework_click("+text[index]['id']+")'>Выполнить</td><td style='text-align: center;background: #1E1E1E;cursor: pointer;' onclick='delethomework_click("+text[index]['id']+")'>Удалить</td></tr>";
        }
        document.getElementById("table_homework").innerHTML += textp;
        //console.log(text[index])
    }
}