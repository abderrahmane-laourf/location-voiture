addEventListener("DOMContentLoaded", () => {
    const mon = document.getElementById("montant");
    const result = document.getElementById("result");
    const calculer = document.getElementById("calculer")
    function calculerBillets() {
        let montant = parseInt(mon.value);
        if (montant) {
            if (!isNaN(montant) && montant > 0 && montant % 5 == 0) {
                result.innerHTML = `Le montant<div class = "nbCOREECT"> ${montant} </div>  est valide. Calcul en cours...`;
                setTimeout(() => {
                    const billet = calculebillet(montant);
                    result.innerHTML = `Montant: <div class="nbCORRECT">${montant} DH</div><br>${billet}`;
                }, 1000); 
            } else {
                result.innerHTML = `le nombre <div class = "nbINCOREECT"> ${montant} </div> est n rst pas correct Entrer le nombre multiple aux 5`
            }
        }
        else{
            result.innerHTML = ` <div class = "nbINCORRECT"> Entrer un le montant </div> ` 
        }
        mon.value = ""
    }
    function calculebillet(montant){
        const dirhamwra9 = [200,100,50,20,10,5]
        let resulttext = `Billets distribue : <br>`

        for(let demo of dirhamwra9){
            if(montant >= demo){
                const count = Math.floor(montant / demo)
                resulttext += `${count} billet de ${demo} DH<br>`;
                montant = montant % demo
            }
        }
        return resulttext
    }
    calculer.addEventListener("click", calculerBillets)
})