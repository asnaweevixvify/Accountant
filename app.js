
let  moneyValuefinal1 = 0;
let  moneyValuefinal2 = 0;
let  totalMoneyValuefinal = 0;
function addToHistory(){
    let bankName = document.getElementById('bankname').value;
    let moneyValue = document.getElementById('moneyvalue').value;
    let historyAll = document.getElementById('history');
    let addItems = document.createElement('li')
    let earnText = document.getElementById('earntext');
    let payText = document.getElementById('paytext');
    let totalMoneyValue = document.getElementById('totalmoney');
    
    
    if(moneyValue>0){
        addItems.innerHTML=`
        <li class="animate__animated animate__bounceIn" id="historyList">
            <h3 class="historyListText">${bankName}</h3>
            <h3 class="historyListText">฿${moneyValue}</h3>
            <p class="line-3"></p>
        </li>
    `;  
        moneyValuefinal1 += parseFloat(moneyValue) 
        earnText.innerHTML=`
        ฿${moneyValuefinal1}

    `;  
        totalMoneyValuefinal += parseFloat(moneyValue) 
        totalMoneyValue.innerHTML=`
        ฿${totalMoneyValuefinal};
    `;  
        
        historyAll.appendChild(addItems);
        Swal.fire({
            title: "เพิ่มรายการสำเร็จ",
            icon: "success",
            draggable: true
    });      
    }
    else if (moneyValue<0){
        addItems.innerHTML=`
        <li class="animate__animated animate__bounceIn" id="historyList" >
            <h3 class="historyListText">${bankName}</h3>
            <h3 class="historyListText">฿${moneyValue}</h3>
            <p class="line-4"></p>
        </li>
    `;
        historyAll.appendChild(addItems);
        Swal.fire({
            title: "เพิ่มรายการสำเร็จ",
            icon: "success",
            draggable: true
    });  
        moneyValuefinal2 += parseFloat(moneyValue) 
        payText.innerHTML=`
        ฿${-moneyValuefinal2}
    `;  
        totalMoneyValuefinal += parseFloat(moneyValue); 
        totalMoneyValue.innerHTML=`
        ฿${totalMoneyValuefinal}
    `;  
    }
    else if(bankName == ""){
        Swal.fire({
            title: "กรุณาระบุชื่อ",
            icon: "error",
            draggable: true
          });
    }
    else if(moneyValue == ""){
        Swal.fire({
            title: "กรุณาระบุจำนวนเงิน",
            icon: "error",
            draggable: true
          });
    }
    
}