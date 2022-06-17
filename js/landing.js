// 获取要操作的元素
let login_title=document.querySelector('.dlk-dl-title');
let register_title=document.querySelector('.dlk-zc-title');
let login_box=document.querySelector('.dlk-dl');
let register_box=document.querySelector('.dlk-zc');

// 绑定标题点击事件
login_title.addEventListener('click',()=>{
    // 判断是否收起，收起才可以点击
    if(login_box.classList.contains('slide-up')){
        register_box.classList.add('slide-up');
        login_box.classList.remove('slide-up');
    }
})
register_title.addEventListener('click',()=>{
    if(register_box.classList.contains('slide-up')){
        login_box.classList.add('slide-up');
        register_box.classList.remove('slide-up');
    }
})