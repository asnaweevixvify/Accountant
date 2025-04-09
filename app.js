
let  moneyValuefinal1 = 0;
let  moneyValuefinal2 = 0;
let  totalMoneyValuefinal = 0;
function addToHistory(){
    let bankName = document.getElementById('bankname').value;
    let moneyValue = parseFloat(document.getElementById('moneyvalue').value);
    let historyAll = document.getElementById('history');
    let addItems = document.createElement('div')
    let earnText = document.getElementById('earntext');
    let payText = document.getElementById('paytext');
    let totalMoneyValue = document.getElementById('totalmoney');
    
    function formatNumber(num) {
        return num.toString().replace(/\d(?=(\d{3})+(?!\d))/g, '$&,');
      }
    
    if(moneyValue>0){
        addItems.innerHTML=`
        <div class="animate__animated animate__bounceIn" id="historyList">
            <i class="fa-solid fa-circle-xmark fa-lg" id="del" style="color: #ff0000;"onclick="del(this.parentElement)"></i>
            <h3 class="historyListText">${bankName}</h3>
            <h3 class="historyListNumber" >฿${formatNumber(moneyValue.toFixed(2))}</h3>
            <p class="line-3" id="line-3"></p>
        </div>
    `;  
        moneyValuefinal1 += parseFloat(moneyValue) 
        earnText.innerHTML=`
        ฿${formatNumber(moneyValuefinal1.toFixed(2))}

    `;  
        totalMoneyValuefinal += parseFloat(moneyValue) 
        totalMoneyValue.innerHTML=`
        ฿${formatNumber(totalMoneyValuefinal.toFixed(2))}
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
        <div class="animate__animated animate__bounceIn" id="historyList">
        <i class="fa-solid fa-circle-xmark fa-lg" id="del" style="color: #ff0000;"onclick="del(this.parentElement)"></i>
        <h3 class="historyListText">${bankName}</h3>
        <h3 class="historyListNumber" >฿${formatNumber(moneyValue.toFixed(2))}</h3>
        <p class="line-4" id="line-4"></p>
    </div>
    `;
        historyAll.appendChild(addItems);
        Swal.fire({
            title: "เพิ่มรายการสำเร็จ",
            icon: "success",
            draggable: true
    });  
        moneyValuefinal2 += parseFloat(moneyValue) 
        payText.innerHTML=`
        ฿${formatNumber(Math.abs(moneyValuefinal2).toFixed(2))}
    `;  
        totalMoneyValuefinal += parseFloat(moneyValue); 
        totalMoneyValue.innerHTML=`
        ฿${formatNumber(totalMoneyValuefinal.toFixed(2))}
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
    let moneyValue = parseFloat(list.querySelector(".historyListNumber").textContent.replace('฿', '').replace(',', '').trim());
    function formatNumber(num) {
        return num.toString().replace(/\d(?=(\d{3})+(?!\d))/g, '$&,');
      }
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
            ฿${formatNumber(moneyValuefinal1.toFixed(2))}
        `;  
        totalMoneyValuefinal -= moneyValue;
        totalMoneyValue.innerHTML = `
            ฿${formatNumber(totalMoneyValuefinal.toFixed(2))}
        `;  
        }
        else {
            moneyValuefinal2 -= moneyValue;
            payText.innerHTML = `
            ฿${formatNumber(Math.abs(moneyValuefinal2).toFixed(2))}
        `;  totalMoneyValuefinal -= moneyValue;
            totalMoneyValue.innerHTML = `
            ฿${formatNumber(totalMoneyValuefinal.toFixed(2))}
        `;  
        }
        
        list.remove();
        }
      });
    
    
}