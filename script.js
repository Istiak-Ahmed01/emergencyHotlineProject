const addFavNumber = () => {
const favNumber = document.getElementById("favNumber")
const currFavNumber = parseInt(favNumber.innerHTML)
const totalFavNumber = currFavNumber + 1
favNumber.innerHTML = totalFavNumber
}
