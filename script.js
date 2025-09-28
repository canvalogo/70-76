let fromValuta = 'USD'
let toValuta = 'UZS'
let valueValuta = 100

let input = document.getElementById('input')

async function convertCurreny(amount, from, to) {
    const api_key = 'cur_live_wCHPDG302PSWzLTGr8sRcvkPLXPjM5sd8aoUCvVx'
    const url = `https://api.currencyapi.com/v3/latest?apikey=${api_key}&base_currency=${from}`
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);

    const rate = data.data[to].value;
    return (amount * rate).toFixed(2);
}

convertCurreny(valueValuta, fromValuta, toValuta).then(result => {
    console.log('100 USD = ' + result + ' UZS');
})

function ImgRegion(item) {
    for (const key2 in item) {
        let nimadan = document.getElementById('nimadan')
        let nimaga = document.getElementById('nimaga')

        let flag_code = key2.slice(0, -1).toLowerCase()
        let img = `https://flagcdn.com/24x18/${flag_code}.png`

        
        let liNmadan = document.createElement('li')
        liNmadan.classList.add('flex', 'flex-row', 'items-center')
        liNmadan.innerHTML = `
           <img src="${img}" alt="" />
           ${key2}
        `
        nimadan.append(liNmadan)
        console.log(img);


        let liNimaga = document.createElement('li')
        liNimaga.classList.add('flex', 'flex-row', 'items-center')
        liNimaga.innerHTML = `
           <img src="${img}" alt="" />
           ${key2}
        `
        liNimaga.addEventListener('click', () => {
            toValuta = key2
            console.log(toValuta)
        })
        nimaga.append(liNimaga)
    }
}

let sentBtn = document.getElementById('sentBtn')

sentBtn.addEventListener("click", () => {
    valueValuta = input.value

    convertCurreny(valueValuta, fromValuta, toValuta).then(result => {
        console.log(`${valueValuta} ${fromValuta} pulidan sizga ${toValuta} ga convert qildim va ${result} ${toValuta}`);
    })
})
