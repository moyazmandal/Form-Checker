
const subscribeCheck = document.getElementById("subscribeCheck") ;

const visaCard = document.getElementById("visaCard") ;

const masterCard = document.getElementById("masterCard") ;

const paypalCard = document.getElementById("paypalCard") ;

const submitBtn = document.getElementById("submitBtn") ;

const subscribeOutput = document.getElementById("subscribeOutput") ;

const paymentOutput = document.getElementById("paymentOutput") ;

submitBtn.onclick = function(){
    if(subscribeCheck.checked){
        subscribeOutput.textContent = `You're Subscribed ; Thanks a Lot !!!`
    }else{
        subscribeOutput.textContent = `You have 1st Subscribe ########`
    }

    if(visaCard.checked){
        paymentOutput.textContent = `You are paying with Visa Card`
    }
    else if(masterCard.checked){
        paymentOutput.textContent = `You are paying with Master Card`
    }
    else if(paypalCard.checked){
        paymentOutput.textContent = `You are paying with Pay pal`
    }
    else{
         paymentOutput.textContent = `You have to select the payment method 1st`
    }
}

