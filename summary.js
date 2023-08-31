document.addEventListener("DOMContentLoaded", async function() {
    try {
        const response = await fetch('http://localhost:8000/items/summary');
        if (response.ok) {
            const summaryData = await response.json();
            const totalCostValue = document.getElementById("totalCost");
            const totalCost = summaryData.total_cost || 0;
            totalCostValue.textContent = `${totalCost}`;
        } else {
            console.log("Failed to fetch summary data.");
        }
    } catch (error) {
        console.error('Error:', error);
    }
});
