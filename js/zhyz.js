function dl(){
    let username = document.getElementById('yhm').value;
    let password = document.getElementById('mm').value;
    if (username == '15213096615' && password == 'ly123456' || username == '13658270126' && password == 'pjl123456'){
        document.getElementById('dl-href').href = '../html/index.html';
    }else{
        document.getElementById('dl-href').href = '../html/landing.html';
        window.alert("账号或密码错误！")
    }
}