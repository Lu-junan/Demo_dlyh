//------------治理时间进度栏
function updateStage(stage){
    const markElement1 = document.getElementById('zlsj-mark1');
    const textElement1 = document.getElementById('zlsj-txt1');
    const dateElement1 = document.getElementById('zlsj-txt-date1');
    const lineElement1 = document.getElementById('zlsj-line1');

    const markElement2 = document.getElementById('zlsj-mark2');
    const textElement2 = document.getElementById('zlsj-txt2');
    const dateElement2 = document.getElementById('zlsj-txt-date2');
    const lineElement2 = document.getElementById('zlsj-line2');

    const markElement3 = document.getElementById('zlsj-mark3');
    const textElement3 = document.getElementById('zlsj-txt3');
    const dateElement3 = document.getElementById('zlsj-txt-date3');
    const lineElement3 = document.getElementById('zlsj-line3');

    const markElement4 = document.getElementById('zlsj-mark4');
    const textElement4 = document.getElementById('zlsj-txt4');
    const dateElement4 = document.getElementById('zlsj-txt-date4');

    // 初始状态
    if(stage == 0){
        markElement1.src = 'asset/zlsj_mark1.svg';
        textElement1.style.fontWeight = 'normal';
        textElement1.style.opacity = '0.5';
        lineElement1.style.color = 'rgb(255, 255, 255)';
        dateElement1.style.display = 'none';

        markElement2.src = 'asset/zlsj_mark2.svg';
        textElement2.style.fontWeight = 'normal';
        textElement2.style.opacity = '0.5';
        lineElement2.style.color = 'rgb(255, 255, 255)';
        dateElement2.style.display = 'none';

        markElement3.src = 'asset/zlsj_mark3.svg';
        textElement3.style.fontWeight = 'normal';
        textElement3.style.opacity = '0.5';
        lineElement3.style.color = 'rgb(255, 255, 255)';
        dateElement3.style.display = 'none';

        markElement4.src = 'asset/zlsj_mark4.svg';
        textElement4.style.fontWeight = 'normal';
        textElement4.style.opacity = '0.5';
        dateElement4.style.display = 'none';
    }

    // 1阶段正在实施
    if(stage == 1){
        markElement1.src = 'asset/zlsj_mark1_fill.svg';
        markElement1.style.opacity = '1';
        textElement1.style.fontWeight = 'bold';
        textElement1.style.opacity = '1';

        dateElement2.style.display = 'none';

        dateElement3.style.display = 'none';

        dateElement4.style.display = 'none';
    }

    // 1阶段完成，2阶段正在实施
    else if(stage == 2){
        markElement1.src = 'asset/zlsj_mark_swoosh.svg';
        markElement1.style.opacity = '1';
        textElement1.style.opacity = '1';
        lineElement1.style.color = 'rgb(69, 171, 255)';

        markElement2.src = 'asset/zlsj_mark2_fill.svg';
        markElement2.style.opacity = '1';
        textElement2.style.fontWeight = 'bold';
        textElement2.style.opacity = '1';

        dateElement3.style.display = 'none';

        dateElement4.style.display = 'none';
    }

    // 2阶段完成，3阶段正在实施
    else if(stage == 3){
        markElement1.src = 'asset/zlsj_mark_swoosh.svg';
        markElement1.style.opacity = '1';
        textElement1.style.opacity = '1';
        lineElement1.style.color = 'rgb(69, 171, 255)';

        markElement2.src = 'asset/zlsj_mark_swoosh.svg';
        markElement2.style.opacity = '1';
        textElement2.style.opacity = '1';
        lineElement2.style.color = 'rgb(69, 171, 255)';

        markElement3.src = 'asset/zlsj_mark3_fill.svg';
        markElement3.style.opacity = '1';
        textElement3.style.fontWeight = 'bold';
        textElement3.style.opacity = '1';

        dateElement4.style.display = 'none';
    }

    // 3阶段完成，4阶段正在实施
    else if(stage == 4){
        markElement1.src = 'asset/zlsj_mark_swoosh.svg';
        markElement1.style.opacity = '1';
        textElement1.style.opacity = '1';
        lineElement1.style.color = 'rgb(69, 171, 255)';

        markElement2.src = 'asset/zlsj_mark_swoosh.svg';
        markElement2.style.opacity = '1';
        textElement2.style.opacity = '1';
        lineElement2.style.color = 'rgb(69, 171, 255)';

        markElement3.src = 'asset/zlsj_mark_swoosh.svg';
        markElement3.style.opacity = '1';
        textElement3.style.opacity = '1';
        lineElement3.style.color = 'rgb(69, 171, 255)';

        markElement4.src = 'asset/zlsj_mark4_fill.svg';
        markElement4.style.opacity = '1';
        textElement4.style.fontWeight = 'bold';
        textElement4.style.opacity = '1';
    }

    // 4阶段完成
    else if(stage == 5){
        markElement1.src = 'asset/zlsj_mark_swoosh.svg';
        markElement1.style.opacity = '1';
        textElement1.style.opacity = '1';
        lineElement1.style.color = 'rgb(69, 171, 255)';

        markElement2.src = 'asset/zlsj_mark_swoosh.svg';
        markElement2.style.opacity = '1';
        textElement2.style.opacity = '1';
        lineElement2.style.color = 'rgb(69, 171, 255)';

        markElement3.src = 'asset/zlsj_mark_swoosh.svg';
        markElement3.style.opacity = '1';
        textElement3.style.opacity = '1';
        lineElement3.style.color = 'rgb(69, 171, 255)';

        markElement4.src = 'asset/zlsj_mark_swoosh.svg';
        markElement4.style.opacity = '1';
        textElement4.style.opacity = '1';
    }

    else{
        markElement1.src = 'asset/zlsj_mark1.svg';
        textElement1.style.fontWeight = 'normal';
        textElement1.style.opacity = '0.5';
        lineElement1.style.color = 'rgb(255, 255, 255)';
        dateElement1.style.display = 'none';

        markElement2.src = 'asset/zlsj_mark2.svg';
        textElement2.style.fontWeight = 'normal';
        textElement2.style.opacity = '0.5';
        lineElement2.style.color = 'rgb(255, 255, 255)';
        dateElement2.style.display = 'none';

        markElement3.src = 'asset/zlsj_mark3.svg';
        textElement3.style.fontWeight = 'normal';
        textElement3.style.opacity = '0.5';
        lineElement3.style.color = 'rgb(255, 255, 255)';
        dateElement3.style.display = 'none';

        markElement4.src = 'asset/zlsj_mark4.svg';
        textElement4.style.fontWeight = 'normal';
        textElement4.style.opacity = '0.5';
        dateElement4.style.display = 'none';
    }

}

updateStage(1); 

//------------图片显示和隐藏
function openImageInNewWindow(imageUrl){  // 打开新窗口查看
    window.open(imageUrl, '_blank', 'width=800,height=600');
}


// function showModal(image){  // 在本窗口内查看
//     var modal = document.getElementById("modal");
//     var modalImage = document.getElementById("modal-image");
//     modal.style.display = "block";
//     modalImage.src = image.src;
// }

// function hideModal(){
//     var modal = document.getElementById("modal");
//     modal.style.display = "none";
// }

//-----------视频播放
function openVideoInNewWindow(videoUrl){   // 打开新窗口播放
    window.open(videoUrl, '_blank', 'width=800,height=600');

}


// function playVideo(){    // 在本窗口内播放
//     var popup = document.getElementById('videoPopup');
//     popup.style.display = 'flex'; // 使用flex以居中对齐
// }

// function hideVideo(){
//     var popup = document.getElementById('videoPopup');
//     popup.style.display = 'none';
// }

//----------按键折叠功能
document.getElementById('fold-icon1').addEventListener('click', function(){
    var content = document.getElementById('stage-ul1');
    var foldIcon = document.getElementById('fold-icon1');

    if (content.style.display === 'none') {
        content.style.display = 'block'; // 显示内容
        foldIcon.src = 'asset/fold_icon2.png';
    } 
    else{
        content.style.display = 'none'; // 隐藏内容
        foldIcon.src = 'asset/fold_icon1.png';
    }
});

document.getElementById('fold-icon2').addEventListener('click', function(){
    var content = document.getElementById('stage-ul2');
    var foldIcon = document.getElementById('fold-icon2');

    if(content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block'; // 显示内容
        foldIcon.src = 'asset/fold_icon2.png';
    } 
    else{
        content.style.display = 'none'; // 隐藏内容
        foldIcon.src = 'asset/fold_icon1.png';
    }
});

document.getElementById('fold-icon3').addEventListener('click', function(){
    var content = document.getElementById('stage-ul3');
    var foldIcon = document.getElementById('fold-icon3');

    if(content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block'; // 显示内容
        foldIcon.src = 'asset/fold_icon2.png';
    } 
    else{
        content.style.display = 'none'; // 隐藏内容
        foldIcon.src = 'asset/fold_icon1.png';
    }
});

//-----------div高亮功能
document.addEventListener('DOMContentLoaded', function(){
    const basicInfoDiv = document.querySelector('.box-basic-info');

    basicInfoDiv.addEventListener('click', function(event){
        event.stopPropagation();                    // 阻止事件冒泡
        basicInfoDiv.classList.toggle('highlight'); // 切换高亮状态
    });

    document.addEventListener('click', function() {
        basicInfoDiv.classList.remove('highlight'); // 点击其他区域时移除高亮
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const basicInfoDiv = document.querySelector('.box-loc-info');

    basicInfoDiv.addEventListener('click', function(event) {
        event.stopPropagation();                    
        basicInfoDiv.classList.toggle('highlight'); 
    });

    document.addEventListener('click', function() {
        basicInfoDiv.classList.remove('highlight');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const basicInfoDiv = document.querySelector('.box-proc-info');

    basicInfoDiv.addEventListener('click', function(event) {
        event.stopPropagation();                    
        basicInfoDiv.classList.toggle('highlight'); 
    });

    document.addEventListener('click', function() {
        basicInfoDiv.classList.remove('highlight'); 
    });
});

//-----------关闭按钮
document.addEventListener('DOMContentLoaded', function() {
    const closeButton = document.querySelector('.close-btn');
    const contDiv = document.querySelector('.page');

    closeButton.addEventListener('click', function(){
        contDiv.style.display = 'none'; // 点击关闭按钮时隐藏整个区域
    });
}); 