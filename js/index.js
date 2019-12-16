
/*
const timeElement = document.querySelector('.page-loaded');
timeElement.innerText = new Date().toLocaleTimeString();

///////////AJAX-Fetch get HTML sample
const btnGetHtmlAjax = document.querySelector('.get-html-ajax');
btnGetHtmlAjax.addEventListener('click', getHtmlAjax);
function getHtmlAjax() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.querySelector('.html-container')
                .innerHTML = xhr.responseText;
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


////////JSON Ajax

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
    xhr.open('GET', 'client-data.json', true);
    xhr.send();
}


///////Json Fetch
const btnFetchJson = document.querySelector('.fetch-json');
btnFetchJson.addEventListener('click', fetchJson);

function fetchJson() {
    fetch('client-data.json')
        .then( response => response.json() )
        .then( data =>  {
            document.querySelector('.client-name').innerText = data.name;
            document.querySelector('.balance').innerText = data.balance;            
        } );
}


/*Login form Func
document.querySelector('.login-form input[type=submit]')
    .addEventListener('click', login);

function login(e) {
    e.preventDefault();
    fetch('login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
            product: document.querySelector('.login-form input[name=name]').value,
            price: document.querySelector('.login-form input[name=password]').value
        })
    })
        .then(_ => document.querySelector('.login-form').reset());
}
end Login Func*/


document.querySelector('.login-form input[type=submit]')
    .addEventListener('click', login);

function login(e) {
    e.preventDefault();
    fetch('login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
            product: document.querySelector('.login-form input[name=name]').value,
            quantity: document.querySelector('.login-form input[name=range]').value,
            colour: document.querySelector('.login-form select[name=itmColor]').value,
            sale: document.querySelector('.login-form select[name=itmSale]').value,
            price: document.querySelector('.login-form input[name=password]').value
        })
    })
        .then(_ => document.querySelector('.login-form').reset());
}


/*
const timeElement = document.querySelector('.page-loaded');
timeElement.innerText = new Date().toLocaleTimeString();

//////////////////////
/*Shopping List*/
const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');
const newItem = document.querySelector('.addItem');

newItem.addEventListener('click', addNewItem);

function addNewItem() {
  const itemTxt = document.querySelector('.itemTxt');
  const rngValue = document.querySelector('.rngBar');
  const itemColor = document.querySelector('.color');
  const itemPrice = document.querySelector('.itemPrice');
  const itemDiscount = document.querySelector('.discount'); 
    
  let fullPrice = 0;
    
    function CalcPrice(itmPrice, itmQuantity, itmDiscount){
      const itemOff = document.querySelector('.discount');
    
    if(itemOff.value === itmDiscount)
        return itmPrice * itmQuantity;
    else if(itemDiscount.value === itmDiscount)
    return ((itmQuantity * itemPrice *50)/100);
    else if(itemDiscount.value === itmDiscount)
    return ((itmQuantity * itemPrice *25)/100);
    else if(itemDiscount.value === itmDiscount)
    return ((itmQuantity * itemPrice *10)/100);
    
}
      
  let myItem = itemTxt.value
  +" (quantity: "+rngValue.value
  +", colour: "+itemColor.value
  +", discount: "+itemDiscount.value+"% Off, "
  +", price: $"+(itemDiscount.value === "0"?itemPrice.value*rngValue.value:((itemPrice.value*rngValue.value*itemDiscount.value)/100))
  +")";
  itemTxt.value = '';


const listItem = document.createElement('li');
const listText = document.createElement('span');
const listBtn = document.createElement('button');

listItem.appendChild(listText);
listText.textContent = myItem;
listItem.appendChild(listBtn);
listBtn.textContent = 'Delete';
list.appendChild(listItem);

listBtn.onclick = function(e) {
list.removeChild(listItem);
}
  input.focus();
  
}


////////JSON AJAX Shopping list
/*
const btnGetJsonAjax = document.querySelector('.get-json-ajax');
btnGetJsonAjax.addEventListener('click', getJsonAjax);
function getJsonAjax() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            document.querySelector('.product').innerText = data.product;
            document.querySelector('.quantity').innerText = data.quantity;
            document.querySelector('.colour').innerText = data.colour;
            document.querySelector('.sale').innerText = data.sale;
            document.querySelector('.price').innerText = data.price;
        }
    }
    xhr.open('GET', 'logins.json', true);
    xhr.send();
}

////End JSON AJAX Shopping List


