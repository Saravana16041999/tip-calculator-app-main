`use strcit`;

const billInputEl = document.getElementById(`bill_input`);
const pplInputEl = document.getElementById(`num_of_ppl_input`);
const totalEl = document.getElementById(`total`);
const tipAmtEl = document.getElementById(`tip_amt`);
const customEl = document.getElementById(`custom`);
const errorEl1 = document.getElementById(`error1`);
const errorEl2 = document.getElementById(`error2`)

//make total and tip amt is zero ;
//display total amount based on bill and number of ppl;
//claculate based on the button 5% etc.. ;
//display the tip amt in total tip in tip amt;

let total = 0;
let tip = 0;


function init(){
    totalEl.innerText = 0; 
    tipAmtEl.innerText = 0;
    billInputEl.value = null;
    pplInputEl.value = null;
}


function five(){
    if(billInputEl.value === `` || pplInputEl.value === ``){
        errorEl1.classList.add('select');
        errorEl2.classList.add(`new`);
    }else{
        total = Number(billInputEl.value) / Number(pplInputEl.value);
        let fiveper = Math.trunc(5 / total * 100);
        tipAmtEl.innerText = fiveper;
        totalEl.innerText = Math.floor(total);
    }
    
}


function ten(){
    if(billInputEl.value === `` || pplInputEl.value === ``){
        errorEl1.classList.add('select');
        errorEl2.classList.add(`new`);
    }else{
    total = Number(billInputEl.value) / Number(pplInputEl.value); 
    let fiveper = Math.trunc(10 / total * 100);
    tipAmtEl.innerText = fiveper;
    totalEl.innerText = Math.floor(total);
    }
}

function fifteen(){
    if(billInputEl.value === `` || pplInputEl.value === ``){
        errorEl1.classList.add('select');
        errorEl2.classList.add(`new`);
    }else{
    total = Number(billInputEl.value) / Number(pplInputEl.value); 
    let fiveper = Math.trunc(15 / total * 100);
    tipAmtEl.innerText = fiveper;
    totalEl.innerText = Math.floor(total);
    }
}

function twentyfife(){
    if(billInputEl.value === `` || pplInputEl.value === ``){
        errorEl1.classList.add('select');
        errorEl2.classList.add(`new`);
    }else{
    total = Number(billInputEl.value) / Number(pplInputEl.value); 
    let fiveper = Math.trunc(25 / total * 100);
    tipAmtEl.innerText = fiveper;
    totalEl.innerText = Math.floor(total);
    }
}

function fifty(){
    if(billInputEl.value === `` || pplInputEl.value === ``){
        errorEl1.classList.add('select');
        errorEl2.classList.add(`new`);
    }else{
    total = Number(billInputEl.value) / Number(pplInputEl.value); 
    let fiveper = Math.trunc(50 / total * 100);
    tipAmtEl.innerText = fiveper;
    totalEl.innerText = Math.floor(total);
    }
}


//event listeners;

customEl.addEventListener('change',()=>{
    total = Number(billInputEl.value) / Number(pplInputEl.value); 
    let fiveper = Math.trunc(Number(customEl.value) / total * 100);
    tipAmtEl.innerText = fiveper;
    totalEl.innerText = Math.floor(total);
    customEl.value = null
})



function reset(){
    init()
}


init()
