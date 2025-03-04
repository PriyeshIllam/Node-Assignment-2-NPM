document.addEventListener("DOMContentLoaded", function () {

    function scrollRow(rowId, direction) {

        const container = document.getElementById(rowId);
        if (!container) {
            return;
        }

        const scrollAmount = 300; // Adjust scroll step
        container.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        });

    }

    document.querySelectorAll(".scroll-btn").forEach((button) => {

        button.addEventListener("click", function () {
            const rowId = this.dataset.row;
            const direction = this.dataset.direction;
            scrollRow(rowId, direction);
        });
    });
});
