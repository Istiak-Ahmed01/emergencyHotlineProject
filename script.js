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

        // coins
        const coins = document.getElementById("coins")
        const currCoins = parseInt(coins.innerHTML)
        const totalCoins = parseInt(currCoins - 20)
        if (totalCoins >= 0) {
            alert(`📞 Calling ${serviceName} ${serviceNumber}...`)

            coins.innerHTML = totalCoins

            //call history functionality
            const callHistory = document.getElementById("carHistory")
            const newHistory = document.createElement("div")

            newHistory.innerHTML = `<div class="flex items-center justify-between bg-[#fafafa] h-20 p-4 mt-4">

         <div  class="p-4">
                        <h3 class="text-lg font-semibold">${serviceName}</h3>
                        <p class="hind text-lg font-normal text-[#5C5C5C]">${serviceNumber}</p>
                    </div>
                    <p class="hind text-lg font-normal ">11:36:58 AM</p>
                    </div>`
            callHistory.appendChild(newHistory)

        } else {
            alert(`❌আপনার পর্যাপ্ত কয়েন নেই, কল করতে কমপক্ষে 20 কয়েন লাগবে।`)
        }


    })

})
