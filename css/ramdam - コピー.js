const slot_array = ['てやんでい','バーロー','ちきしょー'] //スロットの中身
let slot_cnt = 0 //スロットの回数
let slot_result_array = [] //スロットの総結果


function stop_slot(slot_num){
    ram_int = Math.floor(Math.random() * (2 + 1))
    slot_result_array[slot_num] = slot_array[ram_int]
    ram_int = ram_int + 1
    console.log(slot_result_array)
    slot_cnt = slot_cnt + 1
    if (slot_cnt === 3){
        if (JSON.stringify(slot_array) === JSON.stringify(slot_result_array)) {
            result = ('江戸っ子!!!!!')
        }else{
            result = ('江戸っ子失敗')
        }
    view_result()
    slot_result_array = []
    slot_limit = 0
    }
}

function slot_limit(){
    if (slot_cnt === 3){
        if (JSON.stringify(slot_array) === JSON.stringify(slot_result_array)) {
            result = ('江戸っ子!!!!!')
        }else{
            result = ('江戸っ子失敗')
        }
    view_result()
    slot_result_array = []
    slot_limit = 0
    }
}
function slot_view(div_nm,i){
    var resultDiv = document.getElementById(div_nm);
    resultDiv.innerHTML = slot_result_array[i]
}

function view_result(){
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = result
}




const SLOT_STOP_EVENT_1 = document.getElementById('STOP1');
SLOT_STOP_EVENT_1.addEventListener('click', () => {
    stop_slot(0)
    slot_view("1st",0)

});

const SLOT_STOP_EVENT_2 = document.getElementById('STOP2');
SLOT_STOP_EVENT_2.addEventListener('click', () => {
    stop_slot(1)
    slot_view("2nd",1)
});

const SLOT_STOP_EVENT_3 = document.getElementById('STOP3');
SLOT_STOP_EVENT_3.addEventListener('click', () => {
    stop_slot(2)
    slot_view("3rd",2)
});

const reset = document.getElementById('reset');
reset.addEventListener('click', () => {
    location.reload
});