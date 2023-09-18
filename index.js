let text=document.getElementsByClassName('text')[0];
let task=document.querySelector('.task');


let light=document.querySelector('.light');
let dark=document.querySelector('.dark');
let wrapped=document.querySelector('.wrapped');
light.addEventListener('click', function(){
    
    console.log(wrapped);
    wrapped.classList.add('change');
    console.log('hiii');
});
dark.addEventListener('click', function(){
    
    wrapped.classList.remove('change');
    console.log(('hellooo'));
});

function addtask(){
    if(text.value===''){
        alert('kuch likh le, likhta kyu nhi , likhna');
    }
    else{
    var val=text.value;
    var taskitem = document.createElement("div");
    var para = document.createElement("div");
    var paraText= document.createElement("p");
    var checked = document.createElement('span');
    var trashed = document.createElement('span');
    var icon = document.createElement('span');

    taskitem.setAttribute('class' , 'taskitem');
    checked.setAttribute('class' , 'check');
    trashed.setAttribute('class' , 'trash');
    icon.setAttribute('class', 'icon');
    para.setAttribute('class', 'para');

    paraText.innerHTML=val;
    checked.innerHTML = '<i class="fa-solid fa-check"></i>';
    trashed.innerHTML = '<i class="fa-solid fa-trash"></i>';

    icon.appendChild(checked);
    icon.appendChild(trashed);

    para.appendChild(paraText);

    taskitem.appendChild(para);
    taskitem.appendChild(icon);

    task.appendChild(taskitem);

    }
    text.value='';
    storeData();
}

task.addEventListener('click',function(eve){
    if(eve.target.className==='check' || eve.target.className==='fa-solid fa-check'){
        if(eve.target.className==='check'){
            let child=eve.target.getElementsByClassName('fa-solid fa-check')[0];
            if(child.style.opacity==='0'){
                child.style.opacity='1';
                eve.target.parentElement.parentElement.classList.add('line');
                storeData();
            }
            else{
                child.style.opacity='0';
                eve.target.parentElement.parentElement.classList.remove('line');
                storeData();
            }
            
        }
        else if(eve.target.className==='fa-solid fa-check'){
            if(eve.target.style.opacity==='0'){
                eve.target.style.opacity='1';
                eve.target.parentElement.parentElement.parentElement.classList.add('line');
                storeData();
            }
            else{
                eve.target.style.opacity='0';
                eve.target.parentElement.parentElement.parentElement.classList.remove('line');
                storeData();
            }
        
            console.log('hiii');
        }
        
    }
    else if(eve.target.className==='trash' || eve.target.className==='fa-solid fa-trash'){
            if(eve.target.className==='trash'){
                eve.target.parentElement.parentElement.remove();
                storeData();
            }
            else{
                eve.target.parentElement.parentElement.parentElement.remove();
                storeData();
            }
            
}
});

function dynamicdateTime(){
    let date=new Date();
    let dateString=date.toLocaleDateString();
    let timeString=date.toLocaleTimeString();
    let concat=dateString.concat(' '+timeString);
    let datime=document.querySelector('.dt');
    datime.innerHTML=concat;
}

setInterval(dynamicdateTime,1000);

function storeData(){
    localStorage.setItem('data', task.innerHTML);
}

function getiData(){
    task.innerHTML=localStorage.getItem('data');
}
getiData();





