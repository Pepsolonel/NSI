function estConscient(){
    document.getElementById('nom').innerText='Nom';
    document.getElementById('nomInput').innerHTML='<input type="text">';
    document.getElementById('prénom').innerText='Prénom';
    document.getElementById('prénomInput').innerHTML='<input type="text">';
    document.getElementById('prénom').innerText='Prénom';
    document.getElementById('prénomInput').innerHTML='<input type="text">';
    document.getElementById('naissance').innerText='Date de naissance';
    document.getElementById('naissanceInput').innerHTML='<input type="date">';
}

function estInconscient(){
    document.getElementById('nom').innerText=null;
    document.getElementById('nomInput').innerHTML=null;
    document.getElementById('prénom').innerText=null;
    document.getElementById('prénomInput').innerHTML=null;
    document.getElementById('naissance').innerText=null;
    document.getElementById('naissanceInput').innerHTML=null;
}

function température(){
const températureAnormale=document.getElementById('températureAnormale')

if(températureAnormale.checked){
    document.getElementById('températureInput').innerHTML='<input type="number" value="38.5" step="0.5"> °C'
}
else{
    document.getElementById('températureInput').innerHTML=null
}
}

function tension(){
    const températureAnormale=document.getElementById('tensionAnormale')
    
    if(températureAnormale.checked){
        document.getElementById('tensionInput').innerHTML='<input type="number" value="141"> mmHg'
    }
    else{
        document.getElementById('tensionInput').innerHTML=null
    }
    }