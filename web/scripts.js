login = localStorage.getItem('login')
password = localStorage.getItem('password')
namef = localStorage.getItem('namef')
name = localStorage.getItem('name')

function allcloseblock() {
    document.getElementById("header_mini").style.display = "none";
    document.getElementById("predmet_block").style.display = "none";
    document.getElementById("block_schedulespredmet").style.display = "none";
    document.getElementById("block_classmates").style.display = "none";
    document.getElementById("block_teachers").style.display = "none";
    document.getElementById("block_homework").style.display = "none";
    document.getElementById("navigat_predmet_ponel").style.display = "none";
    document.getElementById("naz_block").style.display = "none";
    document.getElementById("naz_block_mini").style.display = "none";
    document.getElementById("homework_block_predmet").style.display = "none";
    document.getElementById("itog_evel_table").style.display = "none";
    document.getElementById("evel_evel_table").style.display = "none";
    document.getElementById("header").setAttribute("style","");
}

if (login != null) {
    var p1 = name.substring(0, 1)
    var p2 = namef.substring(0, 1)
    document.getElementById("logo_user_text").innerHTML = p1+"."+p2
    predmeticlick();
    document.getElementById("header").style.display = "block";
    document.getElementById("logo_block").style.display = "none";

    //document.getElementById("name_account_block").innerHTML = namef;
}
else {
    allcloseblock();
    document.getElementById("predmet_block").style.display = "none";
    document.getElementById("header").style.display = "none";
    document.getElementById("logo_block").style.display = "block";
}
async function login_fun() {
    var logo_block_input_login = document.getElementById("logo_block_input_login").value;
    var logo_block_input_password = document.getElementById("logo_block_input_password").value;

    await eel.login_fun(logo_block_input_login,logo_block_input_password);
}
async function login_fun_mini() {
    var logo_block_input_login = document.getElementById("logo_block_input_login").value;
    var logo_block_input_password = document.getElementById("logo_block_input_password").value;

    await eel.login_fun_mini(logo_block_input_login,logo_block_input_password);
}
eel.expose(login_fun_js);
function login_fun_js(text) {
    for (let index = 0; index < text.length; index++) {
        console.log(text[index]['cod'])
        if (text[index]['cod'] == "good") {
        //document.getElementById("status_text_").innerHTML = ""
        localStorage.setItem('login', text[index]['name']);
//        localStorage.setItem('password', text[index]['password']);
        var name = text[index]['namef'].split(" ")
        var p1 = name[0].substring(0, 1)
        var p2 = name[1].substring(0, 1)
        localStorage.setItem('name', name[0]);
        localStorage.setItem('namef', name[1]);
        document.getElementById("logo_user_text").innerHTML = p1+"."+p2
        predmeticlick();
        document.getElementById("header").style.display = "block";
        document.getElementById("logo_block").style.display = "none"; 
        //document.getElementById("name_account_block").innerHTML = text[index]['namef']
        }
        else if (text[index]['cod'] == "error1") {
            document.getElementById("status_text_").innerHTML = "Логин или пароль неверный!"
        }
        else if (text[index]['cod'] == "error2") {
            document.getElementById("status_text_").innerHTML = "Вы вели не все поля!"
        }
    }
}
eel.expose(login_fun_mini_js);
function login_fun_mini_js(text) {
    for (let index = 0; index < text.length; index++) {
        console.log(text[index]['cod'])
        if (text[index]['cod'] == "good") {
        //document.getElementById("status_text_").innerHTML = ""
        localStorage.setItem('login', text[index]['name']);
//        localStorage.setItem('password', text[index]['password']);
        var name = text[index]['namef'].split(" ")
        var p1 = name[0].substring(0, 1)
        var p2 = name[1].substring(0, 1)
        localStorage.setItem('name', name[0]);
        localStorage.setItem('namef', name[1]);
        document.getElementById("logo_user_text").innerHTML = p1+"."+p2
        predmeticlick();
        //document.getElementById("header").style.display = "none";
        document.getElementById("logo_block").style.display = "none"; 
        //document.getElementById("name_account_block").innerHTML = text[index]['namef']
        }
        else if (text[index]['cod'] == "error1") {
            document.getElementById("status_text_").innerHTML = "Логин или пароль неверный!"
        }
        else if (text[index]['cod'] == "error2") {
            document.getElementById("status_text_").innerHTML = "Вы вели не все поля!"
        }
    }
}
function bmenu() {
    document.getElementById("header_mini").style.display = "block";
}
function nazblockclick(a) {
    type = a.getAttribute('type');
    if (type == "nazppredmet") {
        document.getElementById("title").innerHTML = "Дневник";
//        document.getElementById("naz_block").setAttribute("type","nazpredmet");

        document.getElementById("predmet_block").style.display = "block";
        document.getElementById("navigat_predmet_ponel").style.display = "none";
        document.getElementById("naz_block").style.display = "none";
        document.getElementById("naz_block_mini").style.display = "none";

        document.getElementById("header").setAttribute("style","");

    }
    else if (type == "nazitogpredmet") {
        document.getElementById("itog_evel_table").style.display = "none";
        document.getElementById("evel_evel_table").style.display = "none";
        document.getElementById("homework_block_predmet").style.display = "none";
        document.getElementById("navigat_predmet_ponel").style.display = "block";
        document.getElementById("naz_block").setAttribute("type","nazppredmet");
        document.getElementById("naz_block_mini").setAttribute("type","nazppredmet");
    }
}
function block_bleck_() {
    document.getElementById("block_ubd_schedulestitle_").style.display = "none";
    document.getElementById("block_bleck_").style.display = "none";
    document.getElementById("block_homework_click").style.display = "none";
    document.getElementById("block_homework_click_predmet").style.display = "none";
}
function predmeticlick() {
    allcloseblock();
    document.getElementById("predmet_block").style.display = "block";
    login = localStorage.getItem('login')
    detectpredmet(login);
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
    login = localStorage.getItem('login')
    detectuser_py(login);
}
function Teachersclick() {
    document.getElementById("block_teachers_content").innerHTML = "";
    allcloseblock();
    document.getElementById("block_teachers").style.display = "block";
    login = localStorage.getItem('login')
    detectteach_py(login);
}
function Homework() {
    allcloseblock(); 
    document.getElementById("block_homework").style.display = "block";
    login = localStorage.getItem('login')
    detecthomework(login);
}
async function butt_classmates_click_py() {
    document.getElementById("butt_classmates_click_py").innerHTML = "Загрузка...";
    login = localStorage.getItem('login')
    await eel.butt_classmates_click_py(login);
}
async function butt_teachers_click_py() {
    document.getElementById("butt_teachers_click_py").innerHTML = "Загрузка...";
    login = localStorage.getItem('login')
    await eel.butt_teachers_click_py(login);
}
async function detectpredmet(login) {
    await eel.detectpredmet(login);
}
async function detectschedules() {
    login = localStorage.getItem('login')
    await eel.detectschedules(login);
}
async function detectuser_py(login) {
    await eel.detectuser_py(login);
}
async function detectteach_py(login) {
    await eel.detectteach_py(login);
}
async function detecthomework(login) {
    await eel.detecthomework(login);
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
        if (index+1 == text.length) {
        block = '<div class="block_navigator_schedules mini_navigator_r"><div class="block_navigator_schedules_ponel_center_end"><p class="block_navigator_ponel_text" style="width: 100%;margin-left: 0px;border-radius:25px;">'+element+'</p></div><div class="ubd_butt_schedulestitle" id='+ide+' onclick="ubd_butt_schedulestitle(this)"><h3>✏️</h3></div>'+textp+'</div>'
        document.getElementById("block_schedulespredmet_content").innerHTML += block;
        }
        else {
        block = '<div class="block_navigator_schedules"><div class="block_navigator_schedules_ponel_center_end"><p class="block_navigator_ponel_text" style="width: 100%;margin-left: 0px;border-radius:25px;">'+element+'</p></div><div class="ubd_butt_schedulestitle" id='+ide+' onclick="ubd_butt_schedulestitle(this)"><h3>✏️</h3></div>'+textp+'</div>'
        document.getElementById("block_schedulespredmet_content").innerHTML += block;
        }
    }
}
eel.expose(detectuser_js);
function detectuser_js(text) {
    for (let index = 0; index < text.length; index++) {
        if (index+1 == text.length) {
        textp = "<div class='classmates_list_block mini_navigator'><img src='"+text[index]['ava']+"' alt='ava'><p>"+text[index]['name']+"</p></div>";
        document.getElementById("block_classmates_content").innerHTML += textp;
        }
        else {
        textp = "<div class='classmates_list_block'><img src='"+text[index]['ava']+"' alt='ava'><p>"+text[index]['name']+"</p></div>";
        document.getElementById("block_classmates_content").innerHTML += textp;     
        }
    }
}
eel.expose(detectteach_js);
function detectteach_js(text) {
    for (let index = 0; index < text.length; index++) {
        if (index+1 == text.length) {
            textp = "<div class='classmates_list_block mini_navigator'><img src='"+text[index]['ava']+"' alt='ava'><p>"+text[index]['name']+"</p></div>";
            document.getElementById("block_teachers_content").innerHTML += textp;
        }
        else {
            textp = "<div class='classmates_list_block'><img src='"+text[index]['ava']+"' alt='ava'><p>"+text[index]['name']+"</p></div>";
            document.getElementById("block_teachers_content").innerHTML += textp;
        }
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
function timeteachersclickjs() {
    document.getElementById("butt_teachers_click_py").innerHTML = "Обновить";
}
eel.expose(butt_teachers_click_js);
function butt_teachers_click_js(text) {
    if (text == "good") {
        document.getElementById("butt_teachers_click_py").innerHTML = "Успех!";
        Teachersclick();
        setTimeout(timeteachersclickjs, 1000);
    }
}
function timeclassmatesclickjs() {
    document.getElementById("butt_classmates_click_py").innerHTML = "Обновить";
}
eel.expose(butt_classmates_click_js);
function butt_classmates_click_js(text) {
    if (text == "good") {
        document.getElementById("butt_classmates_click_py").innerHTML = "Успех!";
        Classmatesclick();
        setTimeout(timeclassmatesclickjs, 1000);
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
function predmet_ponel_click(a) {
    var img = a.getAttribute("img");
    var id = a.getAttribute("idpost");
    var title = a.getAttribute("title");

    document.getElementById("title").innerHTML = "Дневник - ( "+title+" )"
    document.getElementById("naz_block").style.display = "flex";
    document.getElementById("naz_block_mini").style.display = "flex";
    document.getElementById("naz_block").setAttribute("type","nazppredmet");
    document.getElementById("naz_block_mini").setAttribute("type","nazppredmet");

    document.getElementById("header").setAttribute("style","background-image: url('"+img+"');");
    document.getElementById("navigat_predmet_ponel_title").innerHTML = title;

    document.getElementById("predmet_block").style.display = "none";
    document.getElementById("navigat_predmet_ponel").style.display = "block";

    document.getElementById("navigat_predmet_ponel_block_o1").setAttribute("onclick","itog_o_click("+id+")");
    document.getElementById("navigat_predmet_ponel_block_o2").setAttribute("onclick","eval_o_click("+id+")")
    document.getElementById("navigat_predmet_ponel_block_o3").setAttribute("onclick","homework_o_click("+id+")")
}
async function itog_o_click(id) {

    login = localStorage.getItem('login')

    await eel.itog_o_click(id,login);

    document.getElementById("butt_itog_click_py").setAttribute("idp", id)
    document.getElementById("itog_evel_table").style.display = "block";
    document.getElementById("navigat_predmet_ponel").style.display = "none";
    document.getElementById("naz_block").setAttribute("type","nazitogpredmet");
    document.getElementById("naz_block_mini").setAttribute("type","nazitogpredmet");

}
eel.expose(itog_o_click_js);
function itog_o_click_js(text) {
    document.getElementById("itog_evel_table_tbody").innerHTML = ""
    for (let index = 0; index < text.length; index++) {
        //document.getElementById("itog_evel_table_tbody").innerHTML += "<tr><td>Предмет</td><td>1 Четверть</td><td>2 Четверть</td><td>3 Четверть</td><td>4 Четверть</td><td>Итог</td></tr><tr><td>"+text[index]['title']+"</td><td>"+text[index]['p1']+"</td><td>"+text[index]['p2']+"</td><td>"+text[index]['p3']+"</td><td>"+text[index]['p4']+"</td><td>"+text[index]['outi']+"</td></tr>"
        document.getElementById("itog_evel_table_tbody").innerHTML += "<div class='block_itog_o_content'><h2>1 Четверть</h2><h1>"+text[index]['p1']+"</h1></div><div class='block_itog_o_content'><h2>2 Четверть</h2><h1>"+text[index]['p2']+"</h1></div><div class='block_itog_o_content'><h2>3 Четверть</h2><h1>"+text[index]['p3']+"</h1></div><div class='block_itog_o_content'><h2>4 Четверть</h2><h1>"+text[index]['p4']+"</h1></div><div class='block_itog_o_content'><h2>Итог</h2><h1>"+text[index]['outi']+"</h1></div>"
    }
}
async function eval_o_click(id) {

    login = localStorage.getItem('login')

    await eel.eval_o_click(id,login);

    document.getElementById("butt_evel_click_py").setAttribute("idp", id)
    document.getElementById("evel_evel_table").style.display = "block";
    document.getElementById("navigat_predmet_ponel").style.display = "none";
    document.getElementById("naz_block").setAttribute("type","nazitogpredmet");
    document.getElementById("naz_block_mini").setAttribute("type","nazitogpredmet");

}
eel.expose(eval_o_click_js);
function eval_o_click_js(text) {
    document.getElementById("evel_evel_table_tbody").innerHTML = ""
    for (let index = 0; index < text.length; index++) {
        document.getElementById("evel_evel_table_tbody").innerHTML += "<tr><td>Предмет</td><td>Оценки</td></tr><tr><td>"+text[index]['title']+"</td><td>"+text[index]['eval']+"</td></tr>"
    }
}
async function homework_o_click(id) {

    login = localStorage.getItem('login')
    //login = 'stanislavkirichenko'

    await eel.homework_o_click(id,login);

    document.getElementById("butt_classmates_click_py_predmet").setAttribute("idp",id);

    document.getElementById("homework_block_predmet").style.display = "block";
    document.getElementById("navigat_predmet_ponel").style.display = "none";
    document.getElementById("naz_block").setAttribute("type","nazitogpredmet");
    document.getElementById("naz_block_mini").setAttribute("type","nazitogpredmet");

}
eel.expose(homework_o_click_js);
function homework_o_click_js(text) {
    document.getElementById("table_homework_predmet").innerHTML = "";
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
async function block_homework_predmet_click(a) {


    document.getElementById("block_bleck_").style.display = "block";
    document.getElementById("block_homework_click_predmet").style.display = "block";
}
async function add_homework_predmet_click() {
    data = document.getElementById("homework_input_data_predmet").value;
    text = document.getElementById("homework_input_text_predmet").value;
    items = document.getElementById("butt_classmates_click_py_predmet").getAttribute("idp");
    login = localStorage.getItem('login')

    await eel.add_homework_predmet_click(data,text,items,login);
}
eel.expose(goodhomework_predmet_click_js);
function goodhomework_predmet_click_js(text,items) {
    document.getElementById("table_homework_predmet").innerHTML = "";
    document.getElementById("block_homework_click_predmet").style.display = "none";
    document.getElementById("block_bleck_").style.display = "none";
    //login = localStorage.getItem('login')
    homework_o_click(items);
}
async function fgoodhomework_click(id) {
    await eel.fgoodhomework_click_py(id);
}
eel.expose(fgoodhomework_click_js);
function fgoodhomework_click_js(text,idp) {
    document.getElementById("table_homework_predmet").innerHTML = "";
    document.getElementById("block_homework_click").style.display = "none";
    document.getElementById("block_bleck_").style.display = "none";
    //login = localStorage.getItem('login')
    homework_o_click(idp);
}
async function fdelethomework_click(a) {

    id = a.getAttribute("id")
    idp = a.getAttribute("idpredmet")

    await eel.fdelethomework_click(id,idp);
}
eel.expose(fgoodhomework_click_js);
function fgoodhomework_click_js(text,idp) {
    document.getElementById("table_homework_predmet").innerHTML = "";
    document.getElementById("block_homework_click").style.display = "none";
    document.getElementById("block_bleck_").style.display = "none";
    //login = localStorage.getItem('login')
    homework_o_click(idp);
}
async function butt_itog_click_py(a) {
    document.getElementById("butt_itog_click_py").innerHTML = "Загрузка...";
    id = a.getAttribute("idp")
    login = localStorage.getItem('login')
    await eel.butt_itog_click_py(id,login);
}
function timeitogclickjs() {
    document.getElementById("butt_itog_click_py").innerHTML = "Обновить";
}
eel.expose(butt_itog_click_js);
function butt_itog_click_js(text,id) {
    if (text == "good") {
        document.getElementById("butt_itog_click_py").innerHTML = "Успех!";
        itog_o_click(id)
        setTimeout(timeitogclickjs, 1000);
    }
}

async function butt_evel_click_py(a) {
    document.getElementById("butt_evel_click_py").innerHTML = "Загрузка...";
    id = a.getAttribute("idp")
    login = localStorage.getItem('login')
    await eel.butt_evel_click_py(id,login);
}
function timeevelclickjs() {
    document.getElementById("butt_evel_click_py").innerHTML = "Обновить";  
}
eel.expose(butt_evel_click_js);
function butt_evel_click_js(text,id) {
    if (text == "good") {
        document.getElementById("butt_evel_click_py").innerHTML = "Успех!";
        eval_o_click(id)
        setTimeout(timeevelclickjs, 1000);
    }
}
function exit() {
    localStorage.clear();
    login = localStorage.getItem('login')
    password = localStorage.getItem('password')
    namef = localStorage.getItem('namef')

    if (login != null) {
        predmeticlick();
        document.getElementById("header").style.display = "block";
        document.getElementById("logo_block").style.display = "none";

        //document.getElementById("name_account_block").innerHTML = namef;
    }
    else {
        allcloseblock();
        document.getElementById("predmet_block").style.display = "none";
        document.getElementById("header").style.display = "none";
        document.getElementById("logo_block").style.display = "block";
    }
}