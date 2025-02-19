export function loadMenu() {
    const content = document.querySelector("#content");

    const title = document.createElement("h1");

    title.textContent = "Menu";

    const firstItem = document.createElement("h5");
    const firstItemDescription = document.createElement("p");

    firstItem.textContent = "Bouillabaisse à la Provençale";
    firstItemDescription.textContent = "A Mediterranean seafood stew with a French saffron-infused broth";

    content.appendChild(title);
    content.appendChild(firstItem);
    content.appendChild(firstItemDescription);
}

