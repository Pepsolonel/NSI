function changeStyle(){
    if(document.getElementById('style').checked){
        document.getElementById('css').setAttribute("href","alternatif.css")
    }
    else{
        document.getElementById('css').setAttribute("href","style.css")
    }
}

function NuméroMédecin(){
    numéro=document.getElementById('numéro').value
    numéro=Math.round(numéro)
    if(numéro>10){
        numéro=10
    }
    if(numéro<1){
        numéro=1
    }
    document.getElementById('numéro').value=numéro
}

function estConscient(){
    document.getElementById('nom').innerText='Nom'
    document.getElementById('nomInput').innerHTML='<input id="nomValue">'
    document.getElementById('prénom').innerText='Prénom'
    document.getElementById('prénomInput').innerHTML='<input id="prénomValue">'
    document.getElementById('naissance').innerText='Date de naissance'
    document.getElementById('naissanceInput').innerHTML='<input type="date" id="naissanceValue">'
}

function estInconscient(){
    document.getElementById('nom').innerText=null
    document.getElementById('nomInput').innerHTML=null
    document.getElementById('prénom').innerText=null
    document.getElementById('prénomInput').innerHTML=null
    document.getElementById('naissance').innerText=null
    document.getElementById('naissanceInput').innerHTML=null
}

function température(){
    températureAnormale=document.getElementById('températureAnormale')

    if(températureAnormale.checked){
        document.getElementById('températureInput').innerHTML='<input type="number" id="température" value="38.5" step="0.5"> °C'
    }
    else{
        document.getElementById('températureInput').innerHTML=null
    }
}

function tension(){
    tensionAnormale=document.getElementById('tensionAnormale')
    
    if(tensionAnormale.checked){
        document.getElementById('tensionInput').innerHTML='<input type="number" id="tension" value="141"> mmHg'
    }
    else{
        document.getElementById('tensionInput').innerHTML=null
    }
    }

function valider(){
    conscienceUnchecked=!document.querySelector('input[name="conscience"][value="conscient"]').checked&!document.querySelector('input[name="conscience"][value="inconscient"]').checked
    if(conscienceUnchecked){
        document.getElementById('récapitulatif').innerHTML="<p>Vous n'avez pas tout saisi<p>"
        return null
    }

    sexeUnchecked=!document.querySelector('input[name="sexe"][value="masculin"]').checked&!document.querySelector('input[name="sexe"][value="féminin"]').checked
    if(sexeUnchecked){
        document.getElementById('récapitulatif').innerHTML="<p>Vous n'avez pas tout saisi<p>"
        return null
    }

    ventilationUnchecked=!document.querySelector('input[name="ventilation"][value="spontanée"]').checked&!document.querySelector('input[name="ventilation"][value="mécanique"]').checked
    if(ventilationUnchecked){
        document.getElementById('récapitulatif').innerHTML="<p>Vous n'avez pas tout saisi<p>"
        return null
    }

    numéro=document.getElementById('numéro').value
    a=`<p>Numéro du médecin : ${numéro}`

    conscience=document.querySelector('input[name="conscience"]:checked').value
    if(conscience=='conscient'){
        nom=document.getElementById('nomValue').value
        prénom=document.getElementById('prénomValue').value
        date=document.getElementById('naissanceValue').value
        b=`<p>État du patient : ${conscience}</p><p>Nom : ${nom}</p><p>Prénom : ${prénom}</p><p>Date : ${date}</p>`
    }
    else{
        b=`<p>État du patient : ${conscience}</p>`
    }

    sexe=document.querySelector('input[name="sexe"]:checked').value
    c=`<p>Sexe : ${sexe}</p>`

    if(document.getElementById('températureAnormale').checked){
        température=document.getElementById('température').value
        d=`<p>Température : ${température} °C</p>`
    }
    else{
        d=''
    }

    if(document.getElementById('tensionAnormale').checked){
        tension=document.getElementById('tension').value
        e=`<p>Tension : ${tension} mmHg</p>`
    }
    else{
        e=''
    }

    ventilation=document.querySelector('input[name="ventilation"]:checked').value
    f=`<p>Ventilation : ${ventilation}</p>`

    description=document.getElementById('description').value
    g=`<p>Description : ${description}</p>`

    récapitulatif='<h2>Récapitulatif :</h2>'+a+b+c+d+e+f+g

    document.getElementById('récapitulatif').innerHTML=récapitulatif
}