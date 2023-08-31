document.getElementById("itemsForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    const itemName = document.getElementById("itemName").value;
    const itemPrice = parseFloat(document.getElementById("itemPrice").value);

    if (!itemName || isNaN(itemPrice)) {
        alert("Please enter a valid item name and price.");
        return;
    }

    const newItem = {
        name: itemName,
        price: itemPrice
    };

    const dataToSend = {
        items: [newItem]
    };

    console.log(dataToSend);
    console.log(JSON.stringify(dataToSend));

    try {
        const response = await fetch('http://localhost:8000/items/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataToSend),
        });

        if (response.ok) {
            const responseData = await response.json(); // Parse the response body as JSON
            console.log(responseData); // Handle the parsed JSON data
        } else {
            console.log("Failed to add item.");
        }
    } catch (error) {
        console.error('Error:', error);
    }
});


document.addEventListener("DOMContentLoaded", async function() {
    try {
        const response = await fetch('http://localhost:8000/items/list');
        if (response.ok) {
            const items = await response.json();
            const itemsTableBody = document.getElementById("itemsTableBody");

            items.forEach(item => {
                const row = document.createElement("tr");
                row.innerHTML = `<td>${item.name}</td><td>${item.price}</td>`;
                itemsTableBody.appendChild(row);
            });
        } else {
            console.log("Failed to fetch items.");
        }
    } catch (error) {
        console.error('Error:', error);
    }

    document.getElementById("itemsForm").addEventListener("submit", async function(event) {
    });
});

document.addEventListener("DOMContentLoaded", async function() {
    try {
        const response = await fetch('http://localhost:8000/items/summary');
        if (response.ok) {
            const items = await response.json();
            const itemsTableBody = document.getElementById("itemsTableBody");

            items.forEach(item => {
                const row = document.createElement("tr");
                row.innerHTML = `<td>${item.name}</td><td>${item.price}</td>`;
                itemsTableBody.appendChild(row);
            });
        } else {
            console.log("Failed to fetch items.");
        }
    } catch (error) {
        console.error('Error:', error);
    }
    document.getElementById("itemsForm").addEventListener("submit", async function(event) {
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const summaryButton = document.getElementById("summaryButton");
    summaryButton.addEventListener("click", function() {
        window.location.href = "summary.html";
    });
});
