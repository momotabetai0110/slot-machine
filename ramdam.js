const SLOT_ARRAY = ['てやんでい','バーロー','ちきしょー'] //スロットの中身
let slot_cnt = 0 //スロットの回数
let slot_result_array = [] //獲得したスロットの値
var clear_chk_array =[]

//スロットを止める
function stop_slot(slot_num){
    ram_int = Math.floor(Math.random() * (2 + 1))
    slot_result_array[slot_num] = SLOT_ARRAY[ram_int]
    ram_int = ram_int + 1
    slot_cnt = slot_cnt + 1
}

//スロットの結果を表示
function slot_limit_chk(){
    //スロットをすべて回していた場合実行
    if (slot_cnt === 3){
        //江戸っ子が完成している場合
        if (JSON.stringify(SLOT_ARRAY) === JSON.stringify(slot_result_array)) {
            result = ('江戸っ子!!!!!')
            result_img_path = 'img/江戸っ子.jpg'
            score_num =1

        //同じ単語が揃っている場合
        }else if(slot_result_array[0] === slot_result_array[1] && slot_result_array[0]=== slot_result_array[2]){
                result = ('江戸っ子？')
                false_num = Math.floor(Math.random() * (2 + 1))
                if(false_num === 0){
                    result_img_path ='img/おしい1.png'
                    score_num =2
                    }else if(false_num === 1){
                        result_img_path ='img/おしい2.jpg'
                        score_num =3
                    }else if(false_num === 2){
                        result_img_path ='img/おしい3.png'
                        score_num =4
                    }

        //はずれの場合
        }else{
            false_num = Math.floor(Math.random() * (2 + 1))
            result = ('江戸っ子失敗')
            console.log(false_num)
                //ランダムで失敗画像を表示
             if(false_num === 0){
                result_img_path ='img/失敗1.png'
                score_num =5
                }else if(false_num === 1){
                    result_img_path ='img/失敗2.png'
                    score_num =6
                }else if(false_num === 2){
                    result_img_path ='img/失敗3.png'
                    score_num =7
                }

    }
    //結果を表示
    view_result()
    update_score()
    }

}

//スロットの値をそれぞれ表示
function slot_view(div_nm,i){
    var resultDiv = document.getElementById(div_nm);
    resultDiv.innerHTML = slot_result_array[i]
}

//スロットの結果を表示
function view_result(){
    var resultDiv = document.getElementById("result_str")
    resultDiv.innerHTML = result
    var resultDiv = document.getElementById("result_img")
    resultDiv.setAttribute('src',result_img_path)
}

//戦績を更新する
function update_score(){
    var scoreDiv = document.getElementById("score_" + score_num)
    scoreDiv.setAttribute('src',result_img_path)
    clear_chk_array[score_num] = score_num
    if(clear_chk_array.filter(item => item !== undefined).length === 7){
        document.getElementById('title').textContent = "クリア！！！！！";
    }

}

//リセット機能
function reset(){
    slot_cnt = 0
    slot_result_array = []
    document.getElementById('STOP1').disabled = false;
    document.getElementById('STOP2').disabled = false;
    document.getElementById('STOP3').disabled = false;
    document.getElementById('1st').textContent = "";
    document.getElementById('2nd').textContent = "";
    document.getElementById('3rd').textContent = "";
    document.getElementById('result_str').textContent = "結果がここに表示されます";
    document.getElementById('result_img').setAttribute('src','')

}

//STOP1ボタン
const SLOT_STOP_EVENT_1 = document.getElementById('STOP1');
SLOT_STOP_EVENT_1.addEventListener('click', () => {
    stop_slot(0)
    slot_view("1st",0)
    slot_limit_chk()
});

//STOP2ボタン
const SLOT_STOP_EVENT_2 = document.getElementById('STOP2');
SLOT_STOP_EVENT_2.addEventListener('click', () => {
    stop_slot(1)
    slot_view("2nd",1)
    slot_limit_chk()
});

//STOP3ボタン
const SLOT_STOP_EVENT_3 = document.getElementById('STOP3');
SLOT_STOP_EVENT_3.addEventListener('click', () => {
    stop_slot(2)
    slot_view("3rd",2)
    slot_limit_chk()
});

//リセットボタン
const reset_event = document.getElementById('reset');
reset_event.addEventListener('click', () => {
    reset()
});

//遊び方
const help_event = document.getElementById('help');
help_event.addEventListener('click', () => {
    alert('【てやんでい バーロー ちきしょー】を揃えて江戸っ子を出現させよう！！！');
});

//戦績
const score_event = document.getElementById('score');
score_event.addEventListener('click', () => {
    document.getElementById('title').style.display ='block';
    document.getElementById('score_view').style.display ='block';
    document.getElementById('slot_view').style.display ='none';
    document.getElementById('result_view').style.display ='none';
    document.getElementById('score').style.display ='none';
    document.getElementById('slot').style.display ='block';


});

//戦績
const score2_event = document.getElementById('slot');
score2_event.addEventListener('click', () => {
    document.getElementById('title').style.display ='none';
    document.getElementById('score_view').style.display ='none';
    document.getElementById('slot_view').style.display ='block';
    document.getElementById('result_view').style.display ='block';
    document.getElementById('score').style.display ='block';
    document.getElementById('slot').style.display ='none';
});