const apikey = {
    key: "36eab627-957b-40f3-9684-3c402fd324a2"
}

fetch("https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=" + apikey.key)
    .then((response) => {
        if (!response.ok)
            throw new Error("Erro ao executar requisição, status " + response.status)
        return response.json()
    })
    .then((api) => {
        
        console.log(api)
        let texto = ""

        for (let i = 0; i < 20; i++) {
            let date = new Date(api.data[i].first_historical_data)
            texto += `
                <div class="media">
                    <img src="./img/coin.jpg" class="align-self-center mr-3" alt="coin" width="100" height="60">
                    <div class="media-body">
                        <h5 class="mt-2">${api.data[i].name}</h5>
                        <p>${api.data[i].symbol}</p>
                        <p>Primeira data histórica: ${((date.getDate() )) + "/" + ((date.getMonth() + 1)) + "/" + date.getFullYear()}</p>
                    </div>
                </div>
            `

            document.getElementById("coins").innerHTML = texto
        }

    })
    .catch((error) => {
        console.log(error.message)
    })