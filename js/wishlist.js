let wishlists = [];

window.onload = function() {
    displayTable();
}

document.getElementById("btnSubmit").addEventListener("click", function() {
    let item = document.getElementById("txtItem").value.trim();
    let description = document.getElementById("txtDes").value.trim();

    if (item && description) {
        let obj = {
            item: item,
            description: description,
        };
        wishlists.push(obj);

        // Clear input fields
        document.getElementById("txtItem").value = "";
        document.getElementById("txtDes").value = "";

        // Update the table
        displayTable();
    } else {
        alert("Please enter both an item and description!");
    }
});

function displayTable() {
    let tableBody = document.getElementById("wishlistTable").getElementsByTagName("tbody")[0];
    tableBody.innerHTML = "";

    wishlists.forEach(function(wishlist) {
        let row = document.createElement("tr");

        let cellItem = document.createElement("td");
        cellItem.textContent = wishlist.item;
        row.appendChild(cellItem);

        let cellDescription = document.createElement("td");
        cellDescription.textContent = wishlist.description;
        row.appendChild(cellDescription);

        tableBody.appendChild(row);
    });
}
