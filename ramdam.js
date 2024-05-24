const SLOT_ARRAY = ['てやんでい','バーロー','ちきしょー'] //スロットの中身
let slot_cnt = 0 //スロットの回数
let slot_result_array = [] //獲得したスロットの値

//スロットを止める
function stop_slot(slot_num){
    ram_int = Math.floor(Math.random() * (2 + 1))
    slot_result_array[slot_num] = SLOT_ARRAY[ram_int]
    ram_int = ram_int + 1
    console.log(slot_result_array)
    slot_cnt = slot_cnt + 1
}

//スロットの結果を表示
function slot_limit_chk(){
    //スロットをすべて回していた場合実行
    if (slot_cnt === 3){
        //江戸っ子が完成している場合
        if (JSON.stringify(SLOT_ARRAY) === JSON.stringify(slot_result_array)) {
            console.log("せいこう")
            result = ('江戸っ子!!!!!')
            result_img_path = '<img src="img/江戸っ子.jpg" alt="江戸っ子ガチャ"></img>'

        //同じ単語が揃っている場合
        }else if(slot_result_array[0] === slot_result_array[1] && slot_result_array[0]=== slot_result_array[2]){
                result = ('江戸っ子？')
                console.log("おしい")
                false_num = Math.floor(Math.random() * (2 + 1))
                if(false_num === 0){
                    result_img_path ='<img src="img/おしい1.png" alt="江戸っ子ガチャ"></img>'
                    }else if(false_num === 1){
                        result_img_path ='<img src="img/おしい2.jpg" alt="江戸っ子ガチャ"></img>'
                    }else if(false_num === 2){
                        result_img_path ='<img src="img/おしい3.png" alt="江戸っ子ガチャ"></img>'
                    }

        //はずれの場合
        }else{
            false_num = Math.floor(Math.random() * (2 + 1))
            console.log(false_num)
            result = ('江戸っ子失敗')
                //ランダムで失敗画像を表示
             if(false_num === 0){
                result_img_path ='<img src="img/失敗1.png" alt="江戸っ子ガチャ"></img>'
                }else if(false_num === 1){
                    result_img_path ='<img src="img/失敗2.png" alt="江戸っ子ガチャ"></img>'
                }else if(false_num === 2){
                    result_img_path ='<img src="img/失敗3.png" alt="江戸っ子ガチャ"></img>'
                }

    }
    //結果を表示
    view_result()
    }

}

//スロットの値をそれぞれ表示
function slot_view(div_nm,i){
    var resultDiv = document.getElementById(div_nm);
    resultDiv.innerHTML = slot_result_array[i]
}

//スロットの結果を表示
function view_result(){
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = result
    var resultDiv = document.getElementById("result_img")
    resultDiv.innerHTML = result_img_path
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
    document.getElementById('result').textContent = "結果がここに表示されます";
    document.getElementById('result_img').textContent = "";

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