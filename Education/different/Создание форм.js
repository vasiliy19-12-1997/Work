function checkform(el) {

    var name = el.name.value;
    var pass = el.pass.value;
    var repass = el.repass.value;
    var state = el.state.value;
   
    if(name == "" || pass == "" || state == "")
        fail = "Заполните все поля";
    else if(name.length <= 1 || name.length > 50)
        fail = "Введите корректное имя";
    else if(pass != repass)
       fail = "Пароли должны совпадать";
    else if(pass.split("&").length > 1)
    fail = "Некорретный пароль";

    if(fail != "") {
        document.getElementById('error').innerHTML = fail;
        return false;
        

    }else {
        alert("Все данные заполннены");
       return true 
    }
       

}