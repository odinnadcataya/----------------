const route = document.getElementById('route');
const time = document.getElementById('time');
const timeOption = document.querySelectorAll(".timeOption")
const routeDop = document.querySelector('.route-dop');
const dopOptions = routeDop.getElementsByTagName('option');
const arrDopOptions = Array.from(dopOptions);
const arrTimeOption = Array.from(timeOption);
const numberOfTickets = document.getElementById('num');
const btnResult = document.querySelector('.btn-result');
const conclusion = document.querySelector('.conclusion');
let price;
const sumTicket = document.getElementById('sumTicket');
const direction = document.getElementById('direction');
const priceAll = document.getElementById('priceAll');
const startOftheJourney = document.getElementById('start');
const endOftheJourney = document.getElementById('end');
let arrivalTimeFromA;
let strTime;



route.addEventListener('change', function() {
    if (route.value === 'из A в B и обратно в А') {
        routeDop.classList.add('active');
        price = 1200;
    } else {
        routeDop.classList.remove('active');
    }

    if (route.value === 'из A в B') {
        price = 700;
        for (el of arrTimeOption) {
            let elResult = el.value.substring(6, 14);
            if (elResult != 'из A в B') {
                el.classList.add('hide');
            }else {
                el.classList.remove('hide');
            }
        }
    }

    if (route.value === 'из B в A') {
        price = 700;
        for (el of arrTimeOption) {
            let elResult2 = el.value.substring(6, 14);
            if (elResult2 != 'из B в A') {
                el.classList.add('hide');
            } else {
                el.classList.remove('hide');
            }
        }
    }
})

time.addEventListener('change', function() {
    let departureTimeFromA = time.value.substring(0, 5);
    strTime = departureTimeFromA;
    departureTimeFromA = departureTimeFromA.split(':');
    arrivalTimeFromA = +departureTimeFromA[0] * 60 + +departureTimeFromA[1] + 50;
    
    arrDopOptions.forEach((element, index) => {
        let optionTime = element.value.substring(0, 5);
        
        optionTime = optionTime.split(":");
        let optionTimeFromA = +optionTime[0] * 60 + +optionTime[1];
        if (arrivalTimeFromA < optionTimeFromA) {
            element.classList.remove('hide');
        }else {
            element.classList.add('hide');
        }
    })
})

btnResult.addEventListener('click', function () {
    let allIputed = price === 700 && time.value != '-' && numberOfTickets.value;
    let allIputed1 = price === 1200 && time.value != '-' && routeDop.value != 'Выберите время' && numberOfTickets.value;
    if (allIputed || allIputed1) {
        let total = numberOfTickets.value * price;
        conclusion.classList.add('active');
        let ended = getTimeFromMins(arrivalTimeFromA);
        conclusion.innerText = `Вы выбрали ${numberOfTickets.value} билета по маршруту ${route.value} стоимостью ${total}р.
                                Это путешествие займет у вас 50 минут. 
                                Теплоход отправляется в ${strTime}, а прибудет в ${ended}.`
    }else{
        alert('Выберите время и количество билетов');
    }
});

function getTimeFromMins(minus) {
    let hours = Math.trunc(minus / 60);
    let minutes = minus % 60;
    let end = hours + ':' + minutes;
    return end;
};
