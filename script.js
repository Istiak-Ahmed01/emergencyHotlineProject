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

    })

})
