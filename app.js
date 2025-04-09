
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
            <i class="fa-solid fa-circle-xmark fa-lg" id="del" style="color: #ff0000;"onclick="del(this.parentElement)"></i>
            <h3 class="historyListText">${bankName}</h3>
            <h3 class="historyListNumber" >฿${moneyValue}</h3>
            <p class="line-3" id="line-3"></p>
        </li>
    `;  
        moneyValuefinal1 += parseFloat(moneyValue) 
        earnText.innerHTML=`
        ฿${moneyValuefinal1}

    `;  
        totalMoneyValuefinal += parseFloat(moneyValue) 
        totalMoneyValue.innerHTML=`
        ฿${totalMoneyValuefinal}
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
        <li class="animate__animated animate__bounceIn" id="historyList">
        <i class="fa-solid fa-circle-xmark fa-lg" id="del" style="color: #ff0000;"onclick="del(this.parentElement)"></i>
        <h3 class="historyListText">${bankName}</h3>
        <h3 class="historyListNumber" >฿${moneyValue}</h3>
        <p class="line-4" id="line-4"></p>
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
        ฿${Math.abs(moneyValuefinal2)}
    `;  
        totalMoneyValuefinal += parseFloat(moneyValue); 
        totalMoneyValue.innerHTML=`
        ฿${totalMoneyValuefinal}
    `;  
    }
    else if(!bankName || !moneyValue){
        Swal.fire({
            title: "กรุณาระบุข้อมูลให้ครบ",
            icon: "error",
            draggable: true
          });
    }
}
function del(list){
    
    let earnText = document.getElementById('earntext');
    let payText = document.getElementById('paytext');
    let totalMoneyValue = document.getElementById('totalmoney');
    let moneyValue = parseFloat(list.querySelector(".historyListNumber").textContent.replace("฿", ""));
    Swal.fire({
        title: "คุณแน่ใจที่จะลบรายการนี้ใช่ไหม?",
        text: "",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "ใช่",
        cancelButtonText: "ยกเลิก"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "ลบสำเร็จ",
            text: "รายการถูกลบ",
            icon: "success"
          });
          if(moneyValue>0){
            moneyValuefinal1 -= moneyValue;
            earnText.innerHTML = `
            ฿${moneyValuefinal1}
        `;  
        totalMoneyValuefinal -= moneyValue;
        totalMoneyValue.innerHTML = `
            ฿${totalMoneyValuefinal}
        `;  
        }
        else {
            moneyValuefinal2 -= moneyValue;
            payText.innerHTML = `
            ฿${Math.abs(moneyValuefinal2)}
        `;  totalMoneyValuefinal -= moneyValue;
            totalMoneyValue.innerHTML = `
            ฿${totalMoneyValuefinal}
        `;  
        }
        
        list.remove();
        }
      });
    
    
}