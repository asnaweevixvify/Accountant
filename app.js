

function addToHistory(){
    let bankName = document.getElementById('bankname').value;
    let moneyValue = document.getElementById('moneyvalue').value;
    let historyAll = document.getElementById('history');
    let addItems = document.createElement('li')
    let earnText = document.getElementById('earntext');
    let payText = document.getElementById('paytext');
    if(moneyValue>0){
        addItems.innerHTML=`
        <li class="animate__animated animate__bounceIn" id="historyList">
            <h3 class="historyListText">${bankName}</h3>
            <h3 class="historyListText">฿${moneyValue}</h3>
            <p class="line-3"></p>
        </li>
    `;
        historyAll.appendChild(addItems);
    }
    else{
        addItems.innerHTML=`
        <li class="animate__animated animate__bounceIn" id="historyList" >
            <h3 class="historyListText">${bankName}</h3>
            <h3 class="historyListText">฿${moneyValue}</h3>
            <p class="line-4"></p>
        </li>
    `;
        historyAll.appendChild(addItems);
        payText += moneyValue
    }
}