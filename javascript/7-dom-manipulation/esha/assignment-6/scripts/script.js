function updateList() {
    let listItems = document.querySelectorAll("#myList li");
    if (listItems[1]) listItems[1].textContent = "Updated Item";
    if (listItems[3]) listItems[3].textContent = "Updated Item";
}