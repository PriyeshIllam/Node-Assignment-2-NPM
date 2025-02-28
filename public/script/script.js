document.addEventListener("DOMContentLoaded", function () {
    console.log("script.js loaded successfully!"); // Log when script loads

    function scrollRow(rowId, direction) {
        console.log(`Scrolling ${direction} in row: ${rowId}`); // Log scroll event

        const container = document.getElementById(rowId);
        if (!container) {
            console.error(`No element found with ID: ${rowId}`);
            return;
        }

        const scrollAmount = 300; // Adjust scroll step
        container.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        });

        console.log(`Scrolled ${direction} in row: ${rowId}`);
    }

    document.querySelectorAll(".scroll-btn").forEach((button) => {
        console.log("Scroll button found:", button); // Log each button found

        button.addEventListener("click", function () {
            const rowId = this.dataset.row;
            const direction = this.dataset.direction;
            console.log(`Button clicked! Row: ${rowId}, Direction: ${direction}`);
            scrollRow(rowId, direction);
        });
    });
});
