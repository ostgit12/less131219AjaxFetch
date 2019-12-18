
let glStr = '';

/*
const timeElement = document.querySelector('.page-loaded');
timeElement.innerText = new Date().toLocaleTimeString();
*/

//AJAX-Fetch get HTML sample
/*
const btnGetHtmlAjax = document.querySelector('.get-html-ajax');
btnGetHtmlAjax.addEventListener('click', getHtmlAjax);
function getHtmlAjax() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.querySelector('.html-container')
                .innerHTML = xhr.responseText;
            glStr = xhr.responseText;
        }
    }
    xhr.open('GET', 'client-data.html', true);
    xhr.send();
}

const btnFetchHtml = document.querySelector('.fetch-html');
btnFetchHtml.addEventListener('click', fetchHtml);

function fetchHtml() {
    fetch('client-data.html')
        .then( response => response.text() )
        .then( html =>  document.querySelector('.html-container')
                .innerHTML = html );
}
*/


//Json Ajax
const btnGetJsonAjax = document.querySelector('.get-json-ajax');
btnGetJsonAjax.addEventListener('click', getJsonAjax);
function getJsonAjax() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            document.querySelector('.client-name').innerText = data.name;
            document.querySelector('.balance').innerText = data.balance;
     
        }
    }
    xhr.open('GET', 'logins.json', true);
    xhr.send();
}


//Json Fetch
const btnFetchJson = document.querySelector('.fetch-json');
btnFetchJson.addEventListener('click', fetchJson);

function fetchJson() {
    fetch('logins.json')
        .then( response => response.json() )
        .then( data =>  {
            document.querySelector('.client-name').innerText = data.name;
            document.querySelector('.balance').innerText = data.balance;            
        } );
}

//Login form Func
document.querySelector('.login-form input[type=submit]')
    .addEventListener('click', login);

function login(e) {
    //e.preventDefault();
    fetch('login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
            name: document.querySelector('.login-form input[name=name]').value,
            //password: document.querySelector('.login-form input[name=password]').value
            balance: shopList
        })
    })
        .then(_ => document.querySelector('.login-form').reset());
}
//end Login Func


const list = document.querySelector('ol');
const input = document.querySelector('input');
const button = document.querySelector('button');
const newItem = document.querySelector('.btnAddItem');

//array shopList
const itemsList = document.querySelectorAll('#shopList li');
let shopList = null;
shopList = [ ];
let productCards = null;
productCards = [];

newItem.addEventListener('click', addNewItem);

function addNewItem() {
  const itemTxt = document.querySelector('.itemName');
  const itemQuantity = document.querySelector('.itemRange');
  const itemColor = document.querySelector('.itemColor');
  const itemSale = document.querySelector('.itemSale');
  const itemPrice = document.querySelector('.itemPrice');
  const itemCalcPrice = document.querySelector('.itemCalcPrice');
    
    
  let myItem = itemTxt.value
  +" (quantity: "+itemQuantity.value
  +", colour: "+itemColor.value
  +", discount: "+itemSale.value+"% Off"
  +", price: $"+(itemSale.value === "0"?itemPrice.value*itemQuantity.value:((itemPrice.value*itemQuantity.value*itemSale.value)/100))
  +")";

  
  //fills array productCards objs
    let productCard = {};
    productCard.name = itemTxt.value;
    productCard.quantity = itemQuantity.value;
    productCard.color = itemColor.value;
    productCard.sale = itemSale.value;
    productCard.price = itemCalcPrice.value;

    productCards.push(productCard);


  //glStr = myItem;
  itemCalcPrice.value = '';
  itemTxt.value = '';
    
itemCalcPrice.value = (itemSale.value === "0"?itemPrice.value*itemQuantity.value:((itemPrice.value*itemQuantity.value*itemSale.value)/100));


const listItem = document.createElement('li');
const listText = document.createElement('span');
const listBtn = document.createElement('button');

listItem.appendChild(listText);
listText.textContent = myItem;
listItem.appendChild(listBtn);
listBtn.textContent = 'Delete';
list.appendChild(listItem);


//add next OL item to array shopList
let addItemStr = list.appendChild(listItem).innerHTML;
alert("added: "+addItemStr);
shopList.push(addItemStr);


listBtn.onclick = function(e) {
let delItemStr = list.removeChild(listItem).innerHTML;


//delete index productCard from array
for(let k=0; k<productCards.length;k++){
  if(delItemStr === productCards[k]){
alert("del cardItem# "+k);
productCards.pop();
}
}

//delete index shopList from array
for(let k=0; k<shopList.length;k++){
  if(delItemStr === shopList[k])
  alert("del listItem# "+k);
  shopList.pop();
}

list.removeChild(listItem);
}
  input.focus();
  
}
