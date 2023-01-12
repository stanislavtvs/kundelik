//localStorage.setItem('login', "stas");

login = localStorage.getItem('login')
password = localStorage.getItem('password')
namef = localStorage.getItem('namef')

if (login != null) {
    document.getElementById("content").style.display = "block";
    document.getElementById("logo_block").style.display = "none";

    document.getElementById("name_account_block").innerHTML = namef;
}
else {
    document.getElementById("content").style.display = "none";
    document.getElementById("logo_block").style.display = "grid";
}


function accountfun()  {
    document.getElementById("account_block").style.display = "flex";
    document.getElementById("naz_block").style.display = "none";
}
function nazblockfun() {
    document.getElementById("account_block").style.display = "none";
    document.getElementById("naz_block").style.display = "flex";
}
function predmeticlick() {
    document.getElementById("block_navigator").style.display = "none";
    document.getElementById("block_pridmet").style.display = "block";
    document.getElementById("naz_block").setAttribute("type","nazpredmet");
    login = localStorage.getItem("login")
    detectpredmet(login);
    nazblockfun();
}
function Schedulesclick() {
    document.getElementById("block_navigator").style.display = "none";
    document.getElementById("block_schedulespredmet").style.display = "block";
    document.getElementById("naz_block").setAttribute("type","nazpredmet");
    detectschedules();
    nazblockfun();
}
function Homework() {
    document.getElementById("block_navigator").style.display = "none";
    document.getElementById("block_homework").style.display = "block";
    document.getElementById("naz_block").setAttribute("type","nazpredmet");
    detecthomework();
    nazblockfun(); 
}
function Classmatesclick() {
    document.getElementById("block_classmates_list").innerHTML = "";
    document.getElementById("block_navigator").style.display = "none";
    document.getElementById("block_classmates").style.display = "block";
    document.getElementById("naz_block").setAttribute("type","nazpredmet");
    detectuser_py();
    nazblockfun();
}
function Teachersclick() {
    document.getElementById("block_teachers_list").innerHTML = "";
    document.getElementById("block_navigator").style.display = "none";
    document.getElementById("block_teachers").style.display = "block";
    document.getElementById("naz_block").setAttribute("type","nazpredmet");
    detectteach_py();
    nazblockfun();
}
function nazblockclick(a) {
    type = a.getAttribute('type');
    if (type == "nazpredmet") {
        document.getElementById("block_navigator").style.display = "flex";
        document.getElementById("block_pridmet").style.display = "none";
        document.getElementById("block_schedulespredmet").style.display = "none";
        document.getElementById("block_classmates").style.display = "none";
        document.getElementById("block_teachers").style.display = "none";
        document.getElementById("block_homework").style.display = "none";
        document.getElementById("naz_block").setAttribute("type","")

        document.getElementById("header").setAttribute("style","");

        accountfun();

    }
    else if (type == "nazppredmet") {
        document.getElementById("title").innerHTML = "Дневник";
        document.getElementById("naz_block").setAttribute("type","nazpredmet");

        document.getElementById("block_pridmet").style.display = "block";
        document.getElementById("navigat_predmet_ponel").style.display = "none";

        document.getElementById("header").setAttribute("style","");

    }
    else if (type == "nazitogpredmet") {
        document.getElementById("itog_evel_table").style.display = "none";
        document.getElementById("evel_evel_table").style.display = "none";
        document.getElementById("homework_block_predmet").style.display = "none";
        document.getElementById("navigat_predmet_ponel").style.display = "block";
        document.getElementById("naz_block").setAttribute("type","nazppredmet");
    }
}
async function detectpredmet(login) {
    await eel.detectpredmet(login);
}
async function detectschedules() {
    await eel.detectschedules();
}
async function detecthomework() {
    await eel.detecthomework();
}
eel.expose(detectpredmetout);
function detectpredmetout(text) {
    document.getElementById("block_predmet").innerHTML = "";
    for (let index = 0; index < text.length; index++) {
        var element = text[index]['title'];
        var elementimg = text[index]['title'].replace(/ /g,'');
        block = '<div class="block_navigator" style="background-image: url(img/pimg/'+elementimg+'.jpg);" img="img/pimg/'+elementimg+'.jpg" title="'+element+'" idpost="'+text[index]['id']+'" onclick="predmet_ponel_click(this)"><div class="block_navigator_ponel_center_end"><p class="block_navigator_ponel_text">'+element+'</p></div></div>'
        document.getElementById("block_predmet").innerHTML += block;
    }
}
eel.expose(detectschedulesout);
function detectschedulesout(text) {
    document.getElementById("block_navigator_schedules").innerHTML = "";
    for (let index = 0; index < text.length; index++) {
        var element = text[index]['title'];
        var ide = text[index]['id'];
        pred = text[index]['pridmet'];
        textp = ""
        for (let predi = 0; predi < pred.length; predi++) {
            l = predi+1
            textp += "<p class='block_navigator_ponel_text_predmet'>"+l+" . "+pred[predi]+"</p>"

        }

        block = '<div class="block_navigator_schedules"><div class="block_navigator_schedules_ponel_center_end"><p class="block_navigator_ponel_text">'+element+'</p></div><div class="ubd_butt_schedulestitle" id='+ide+' onclick="ubd_butt_schedulestitle(this)"><h3>✏️</h3></div>'+textp+'</div>'
        document.getElementById("block_navigator_schedules").innerHTML += block;
    }
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
function block_bleck_() {
    document.getElementById("block_ubd_schedulestitle_").style.display = "none";
    document.getElementById("block_bleck_").style.display = "none";
    document.getElementById("block_homework_click").style.display = "none";
    document.getElementById("block_homework_click_predmet").style.display = "none";
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
async function detectuser_py() {
    await eel.detectuser_py();
}
async function detectteach_py() {
    await eel.detectteach_py();
}
eel.expose(detectuser_js);
function detectuser_js(text) {
    console.log(text)
    for (let index = 0; index < text.length; index++) {
        textp = "<div class='classmates_list_block'><img src='"+text[index]['ava']+"' alt='ava'><p>"+text[index]['name']+"</p></div>";
        document.getElementById("block_classmates_list").innerHTML += textp;
        //console.log(text[index])
    }
}
eel.expose(detectteach_js);
function detectteach_js(text) {
    console.log(text)
    for (let index = 0; index < text.length; index++) {
        textp = "<div class='classmates_list_block'><img src='"+text[index]['ava']+"' alt='ava'><p>"+text[index]['name']+"</p></div>";
        document.getElementById("block_teachers_list").innerHTML += textp;
        //console.log(text[index])
    }
}
async function butt_classmates_click_py() {
    document.getElementById("butt_classmates_click_py").innerHTML = "Загрузка...";
    await eel.butt_classmates_click_py();
}
eel.expose(butt_classmates_click_js);
function butt_classmates_click_js(text) {
    if (text == "good") {
        document.getElementById("butt_classmates_click_py").innerHTML = "Успех!";
        Classmatesclick();
        document.getElementById("butt_classmates_click_py").innerHTML = "Обновить";
    }
}
async function butt_teachers_click_py() {
    document.getElementById("butt_teachers_click_py").innerHTML = "Загрузка...";
    await eel.butt_teachers_click_py();
}
eel.expose(butt_teachers_click_js);
function butt_teachers_click_js(text) {
    if (text == "good") {
        document.getElementById("butt_teachers_click_py").innerHTML = "Успех!";
        Teachersclick();
        document.getElementById("butt_teachers_click_py").innerHTML = "Обновить";
    }
}
eel.expose(detecthomework_js);
function detecthomework_js(text) {
    document.getElementById("table_homework").innerHTML = "";
    console.log(text);
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
async function goodhomework_click(id) {
    await eel.goodhomework_click_py(id);
}
async function fgoodhomework_click(id) {
    await eel.fgoodhomework_click_py(id);
}
async function delethomework_click(id) {
    await eel.delethomework_click(id);
}
async function fdelethomework_click(a) {

    id = a.getAttribute("id")
    idp = a.getAttribute("idpredmet")

    await eel.fdelethomework_click(id,idp);
}
eel.expose(goodhomework_click_js);
function goodhomework_click_js(text) {
    document.getElementById("table_homework").innerHTML = "";
    document.getElementById("block_homework_click").style.display = "none";
    document.getElementById("block_bleck_").style.display = "none";
    Homework();
}
eel.expose(goodhomework_predmet_click_js);
function goodhomework_predmet_click_js(text,items) {
    document.getElementById("table_homework_predmet").innerHTML = "";
    document.getElementById("block_homework_click_predmet").style.display = "none";
    document.getElementById("block_bleck_").style.display = "none";
    login = localStorage.getItem('login')
    homework_o_click(items,login);
}
eel.expose(fgoodhomework_click_js);
function fgoodhomework_click_js(text,idp) {
    document.getElementById("table_homework_predmet").innerHTML = "";
    document.getElementById("block_homework_click").style.display = "none";
    document.getElementById("block_bleck_").style.display = "none";
    login = localStorage.getItem('login')
    homework_o_click(idp,login);
}
async function add_homework_click() {
    data = document.getElementById("homework_input_data").value;
    text = document.getElementById("homework_input_text").value;
    items = document.getElementById("homework_input_items").value;

    await eel.add_homework_click(data,text,items);
}
async function add_homework_predmet_click() {
    data = document.getElementById("homework_input_data_predmet").value;
    text = document.getElementById("homework_input_text_predmet").value;
    items = document.getElementById("butt_classmates_click_py_predmet").getAttribute("idp");
    login = localStorage.getItem('login')

    await eel.add_homework_predmet_click(data,text,items,login);
}
async function block_homework_click() {
    await eel.ubd_homework_click();

    document.getElementById("block_bleck_").style.display = "block";
    document.getElementById("block_homework_click").style.display = "block";
}
async function block_homework_predmet_click(a) {


    document.getElementById("block_bleck_").style.display = "block";
    document.getElementById("block_homework_click_predmet").style.display = "block";
}

eel.expose(ubd_homework_click_js);
function ubd_homework_click_js(text) {
    document.getElementById("homework_input_items").innerHTML = ""
    for (let index = 0; index < text.length; index++) {
        document.getElementById("homework_input_items").innerHTML += "<option value="+text[index]['id']+">"+text[index]['title']+"</option>"
    }
}
function predmet_ponel_click(a) {
    var img = a.getAttribute("img");
    var id = a.getAttribute("idpost");
    var title = a.getAttribute("title");

    document.getElementById("title").innerHTML = "Дневник - ( "+title+" )"

    document.getElementById("naz_block").setAttribute("type","nazppredmet");

    document.getElementById("header").setAttribute("style","background-image: url('"+img+"');");
    document.getElementById("navigat_predmet_ponel_title").innerHTML = title;

    document.getElementById("block_pridmet").style.display = "none";
    document.getElementById("navigat_predmet_ponel").style.display = "block";

    document.getElementById("navigat_predmet_ponel_block_o1").setAttribute("onclick","itog_o_click("+id+")");
    document.getElementById("navigat_predmet_ponel_block_o2").setAttribute("onclick","eval_o_click("+id+")")
    document.getElementById("navigat_predmet_ponel_block_o3").setAttribute("onclick","homework_o_click("+id+")")
}
async function itog_o_click(id) {

    login = localStorage.getItem('login')

    await eel.itog_o_click(id,login);

    document.getElementById("itog_evel_table").style.display = "block";
    document.getElementById("navigat_predmet_ponel").style.display = "none";
    document.getElementById("naz_block").setAttribute("type","nazitogpredmet");

}
async function eval_o_click(id) {

    login = localStorage.getItem('login')

    await eel.eval_o_click(id,login);

    document.getElementById("evel_evel_table").style.display = "block";
    document.getElementById("navigat_predmet_ponel").style.display = "none";
    document.getElementById("naz_block").setAttribute("type","nazitogpredmet");

}
async function homework_o_click(id,login) {

    login = localStorage.getItem('login')

    await eel.homework_o_click(id,login);

    document.getElementById("butt_classmates_click_py_predmet").setAttribute("idp",id);

    document.getElementById("homework_block_predmet").style.display = "block";
    document.getElementById("navigat_predmet_ponel").style.display = "none";
    document.getElementById("naz_block").setAttribute("type","nazitogpredmet");

}
eel.expose(itog_o_click_js);
function itog_o_click_js(text) {
    document.getElementById("itog_evel_table_tbody").innerHTML = ""
    for (let index = 0; index < text.length; index++) {
        document.getElementById("itog_evel_table_tbody").innerHTML += "<tr><td>Предмет</td><td>1 Четверть</td><td>2 Четверть</td><td>3 Четверть</td><td>4 Четверть</td><td>Итог</td></tr><tr><td>"+text[index]['title']+"</td><td>"+text[index]['p1']+"</td><td>"+text[index]['p2']+"</td><td>"+text[index]['p3']+"</td><td>"+text[index]['p4']+"</td><td>"+text[index]['outi']+"</td></tr>"
    }
}
eel.expose(eval_o_click_js);
function eval_o_click_js(text) {
    document.getElementById("evel_evel_table_tbody").innerHTML = ""
    for (let index = 0; index < text.length; index++) {
        document.getElementById("evel_evel_table_tbody").innerHTML += "<tr><td>Предмет</td><td>Оценки</td></tr><tr><td>"+text[index]['title']+"</td><td>"+text[index]['eval']+"</td></tr>"
    }
}
eel.expose(homework_o_click_js);
function homework_o_click_js(text) {
    document.getElementById("table_homework_predmet").innerHTML = "";
    console.log(text);
    var status = ""
    title = "<tr><th>Дата</th><th>Задания</th><th>Предметы</th><th>Статус</th></tr>"
    textp = title
    document.getElementById("table_homework_predmet").innerHTML = textp;
    for (let index = 0; index < text.length; index++) {
        if (text[index]['status'] == "True") {
            status = "Выполнено"
            textp = "<tr><td>"+text[index]['data']+"</td><td>"+text[index]['text']+"</td><td>"+text[index]['items']+"</td><td>"+status+"</td><td style='text-align: center;background: #1E1E1E;cursor: pointer;' onclick='fdelethomework_click(this)' id='"+text[index]['id']+"' idpredmet='"+text[index]['itemsid']+"'>Удалить</td><td></td></tr>";
        }
        else if (text[index]['status'] == "False") {
            status = "Не выполнено"
            textp = "<tr><td>"+text[index]['data']+"</td><td>"+text[index]['text']+"</td><td>"+text[index]['items']+"</td><td>"+status+"</td><td style='text-align: center;background: #1E1E1E;cursor: pointer;' onclick='fgoodhomework_click("+text[index]['id']+")'>Выполнить</td><td style='text-align: center;background: #1E1E1E;cursor: pointer;' onclick='fdelethomework_click(this)' id='"+text[index]['id']+"' idpredmet='"+text[index]['itemsid']+"'>Удалить</td></tr>";
        }
        document.getElementById("table_homework_predmet").innerHTML += textp;
        //console.log(text[index])
    }
}
async function login_fun() {
    var logo_block_input_login = document.getElementById("logo_block_input_login").value;
    var logo_block_input_password = document.getElementById("logo_block_input_password").value;

    await eel.login_fun(logo_block_input_login,logo_block_input_password);
}
eel.expose(login_fun_js);
function login_fun_js(text) {
    for (let index = 0; index < text.length; index++) {
        console.log(text[index]['cod'])
        if (text[index]['cod'] == "good") {
        //document.getElementById("status_text_").innerHTML = ""
        localStorage.setItem('login', text[index]['name']);
//        localStorage.setItem('password', text[index]['password']);
        localStorage.setItem('namef', text[index]['namef']);
        document.getElementById("content").style.display = "block";
        document.getElementById("logo_block").style.display = "none"; 
        document.getElementById("name_account_block").innerHTML = text[index]['namef']
        }
        else if (text[index]['cod'] == "error1") {
            document.getElementById("status_text_").innerHTML = "Логин или пароль неверный!"
        }
        else if (text[index]['cod'] == "error2") {
            document.getElementById("status_text_").innerHTML = "Вы вели не все поля!"
        }
    }
}