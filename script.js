const addFavNumber = () => {
    const favNumber = document.getElementById("favNumber")
    const currFavNumber = parseInt(favNumber.innerHTML)
    const totalFavNumber = currFavNumber + 1
    favNumber.innerHTML = totalFavNumber
}



document.querySelectorAll(".cardBtn").forEach((btn) => {
    btn.addEventListener("click", () => {
        const card = btn.closest(".card")
        const serviceName = card.querySelector(".serviceName").innerText
        const serviceNumber = card.querySelector(".serviceNumber").innerText
        alert(`📞 Calling ${serviceName} ${serviceNumber}...`)

        // coins
    const coins = document.getElementById("coins")
    const currCoins = parseInt(coins.innerHTML)
    const totalCoins = parseInt(currCoins - 20)
    if(totalCoins >= 0){
    coins.innerHTML = totalCoins

    }else{
        alert(`❌আপনার পর্যাপ্ত কয়েন নেই, কল করতে কমপক্ষে 20 কয়েন লাগবে।`)
    }

    })

})
