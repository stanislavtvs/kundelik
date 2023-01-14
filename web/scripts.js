function bmenu() {
    document.getElementById("header_mini").style.display = "block";
}
function allcloseblock() {
    document.getElementById("header_mini").style.display = "none";
    document.getElementById("predmet_block").style.display = "none";
    document.getElementById("block_schedulespredmet").style.display = "none";
    document.getElementById("block_classmates").style.display = "none";
    document.getElementById("block_teachers").style.display = "none";
    document.getElementById("block_homework").style.display = "none";
}
function block_bleck_() {
    document.getElementById("block_ubd_schedulestitle_").style.display = "none";
    document.getElementById("block_bleck_").style.display = "none";
    document.getElementById("block_homework_click").style.display = "none";
    //document.getElementById("block_homework_click_predmet").style.display = "none";
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
async function butt_classmates_click_py() {
    document.getElementById("butt_classmates_click_py").innerHTML = "Загрузка...";
    await eel.butt_classmates_click_py();
}
async function butt_teachers_click_py() {
    document.getElementById("butt_teachers_click_py").innerHTML = "Загрузка...";
    await eel.butt_teachers_click_py();
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
async function goodhomework_click(id) {
    await eel.goodhomework_click_py(id);
}
async function delethomework_click(id) {
    await eel.delethomework_click(id);
}
async function block_homework_click() {
    await eel.ubd_homework_click();

    document.getElementById("block_bleck_").style.display = "block";
    document.getElementById("block_homework_click").style.display = "block";
}
async function add_homework_click() {
    data = document.getElementById("homework_input_data").value;
    text = document.getElementById("homework_input_text").value;
    items = document.getElementById("homework_input_items").value;

    await eel.add_homework_click(data,text,items,'stanislavkirichenko');
}
eel.expose(detectpredmetout);
function detectpredmetout(text) {
    document.getElementById("block_predmet_content").innerHTML = "";
    for (let index = 0; index < text.length; index++) {
        var element = text[index]['title'];
        var elementimg = text[index]['title'].replace(/ /g,'');
        if (index+1 == text.length) {
            block = '<div class="block_navigator mini_navigator" style="background-image: url(img/pimg/'+elementimg+'.jpg);" img="img/pimg/'+elementimg+'.jpg" title="'+element+'" idpost="'+text[index]['id']+'" onclick="predmet_ponel_click(this)"><div class="block_navigator_ponel_center_end"><p class="block_navigator_ponel_text">'+element+'</p></div></div>'
            document.getElementById("block_predmet_content").innerHTML += block;
        }
        else {
            block = '<div class="block_navigator" style="background-image: url(img/pimg/'+elementimg+'.jpg);" img="img/pimg/'+elementimg+'.jpg" title="'+element+'" idpost="'+text[index]['id']+'" onclick="predmet_ponel_click(this)"><div class="block_navigator_ponel_center_end"><p class="block_navigator_ponel_text">'+element+'</p></div></div>'
            document.getElementById("block_predmet_content").innerHTML += block;
        }
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
eel.expose(goodhomework_click_js);
function goodhomework_click_js(text) {
    document.getElementById("table_homework").innerHTML = "";
    //document.getElementById("block_homework_click").style.display = "none";
    //document.getElementById("block_bleck_").style.display = "none";
    Homework();
}
eel.expose(goodhomework_click_js);
function goodhomework_click_js(text) {
    document.getElementById("table_homework").innerHTML = "";
    //document.getElementById("block_homework_click").style.display = "none";
    //document.getElementById("block_bleck_").style.display = "none";
    Homework();
}
eel.expose(butt_teachers_click_js);
function butt_teachers_click_js(text) {
    if (text == "good") {
        document.getElementById("butt_teachers_click_py").innerHTML = "Успех!";
        Teachersclick();
        document.getElementById("butt_teachers_click_py").innerHTML = "Обновить";
    }
}
eel.expose(butt_classmates_click_js);
function butt_classmates_click_js(text) {
    if (text == "good") {
        document.getElementById("butt_classmates_click_py").innerHTML = "Успех!";
        Classmatesclick();
        document.getElementById("butt_classmates_click_py").innerHTML = "Обновить";
    }
}
eel.expose(ubd_homework_click_js);
function ubd_homework_click_js(text) {
    document.getElementById("homework_input_items").innerHTML = ""
    for (let index = 0; index < text.length; index++) {
        document.getElementById("homework_input_items").innerHTML += "<option value="+text[index]['id']+">"+text[index]['title']+"</option>"
    }
}
eel.expose(goodhomework_click_js);
function goodhomework_click_js(text) {
    document.getElementById("table_homework").innerHTML = "";
    document.getElementById("block_homework_click").style.display = "none";
    document.getElementById("block_bleck_").style.display = "none";
    Homework();
}
function ubd_butt_schedulestitle (a) {
    var id = a.getAttribute("id");
    ubd_butt_schedulestitle_py(id);
}
async function ubd_butt_schedulestitle_py(id) {
    await eel.ubd_butt_schedulestitle_py(id);
}
eel.expose(ubd_butt_schedulestitle_js);
function ubd_butt_schedulestitle_js(text) {
    document.getElementById("block_ubd_schedulestitle_").style.display = "block";
    document.getElementById("block_bleck_").style.display = "block";
    document.getElementById("block_ubd_schedulestitle_").innerHTML = "";
    //console.log(text.length)
    //console.log(text)
    for (let index = 0; index < text.length; index++) {
        pred = text[index]['pridmet'];
        predd = text[index]['id'];
        idp = text[index]['idp'];
        if (predd == "") {
            document.getElementById("block_ubd_schedulestitle_").innerHTML += "";
            textp = "<input placeholder='Заголовок' class='input' id='add_schedulestitle_input'><h3 class='butt' id='add_schedulestitle_butt' onclick='add_schedulestitle_butt(this);'>Добавить</h3><hr>";
            document.getElementById("block_ubd_schedulestitle_").innerHTML += textp;
            document.getElementById("add_schedulestitle_input").setAttribute("idp",idp);
        }
        else {
        textp = "";
        for (let predi = 0; predi < pred.length; predi++) {
            id = predd[predi]
            //textp += "<p class='block_navigator_ponel_text_predmet'>"+l+" . "+pred[predi]+"</p>";
            textp += "<div class='block_ubd_schedulestitle_list'><h2>"+pred[predi]+"</h2><h3 id="+id+" onclick='delschedulestitlefun(this)'>✖</h3></div>";
        }
        inp = "<input placeholder='Заголовок' class='input' id='add_schedulestitle_input'><h3 class='butt' id='add_schedulestitle_butt' onclick='add_schedulestitle_butt(this);'>Добавить</h3><hr>"
        textp = inp + textp; 
        document.getElementById("block_ubd_schedulestitle_").innerHTML += textp;
        document.getElementById("add_schedulestitle_input").setAttribute("idp",idp);
    }
    }
}
function add_schedulestitle_butt(a) {
    text = document.getElementById("add_schedulestitle_input").value;
    idp = document.getElementById("add_schedulestitle_input").getAttribute("idp");
    add_schedulestitle_butt_py(idp,text);
}
async function add_schedulestitle_butt_py(idp,text) {
    await eel.add_schedulestitle_butt_py(idp,text);
}
eel.expose(add_schedulestitle_butt_js);
function add_schedulestitle_butt_js(text) {
    ubd_butt_schedulestitle_py(text)
    Schedulesclick();
}
function delschedulestitlefun(a) {
    id = a.getAttribute("id");
    delschedulestitlefun_py(id);
}
async function delschedulestitlefun_py(id) {
    await eel.delschedulestitlefun_py(id);
}
eel.expose(delschedulestitlefun_js);
function delschedulestitlefun_js(text) {
    if (text != "") {
        ubd_butt_schedulestitle_py(text)
        Schedulesclick();
    }
}