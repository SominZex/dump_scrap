const eanSection = document.querySelector("#tab6");

if (eanSection) {
    const description = eanSection.querySelector(".tabs__description");

    if (description) {
        const eanTag = Array.from(description.querySelectorAll("b")).find(tag => tag.textContent.trim() === "EAN:");
        
        if (eanTag && eanTag.nextSibling) {
            const eanNumber = eanTag.nextSibling.textContent.trim();
            console.log("EAN Number:", eanNumber);
        } else {
            console.log("EAN Number not found.");
        }
    } else {
        console.log("Description container not found.");
    }
} else {
    console.log("EAN section not found.");
}