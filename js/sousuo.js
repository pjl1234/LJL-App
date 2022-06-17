function ss(){
    for (a = 0; a <= 999; a++){
        let key = document.getElementById('key').value;
        if (key == "macos"){
            document.getElementById('href').href = '../html/macos.html';
        }else if (key == "windows"){
            document.getElementById('href').href = '../html/windows.html';
        }else if (key == "Hbuliderx"){
            document.getElementById('href').href = '../html/windows-firstapp.html';
        }else if (key == "Todesk"){
            document.getElementById('href').href = '../html/macos-firstapp.html';
        }
    }

}


