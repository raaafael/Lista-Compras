function AddItem() {
    var NameItem = document.getElementById("inputNameItem").value
    const lista = document.getElementById("list")
    var Itens = document.createElement("li")
    
    var delButton = document.createElement("button")
    delButton.textContent = "🗑"
    delButton.addEventListener("click", () => {lista.removeChild(Itens)})
    
    Itens.innerHTML = NameItem
    Itens.appendChild(delButton)
    lista.appendChild(Itens)
    document.getElementById("inputNameItem").value = ''
}