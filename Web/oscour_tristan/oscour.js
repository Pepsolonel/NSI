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