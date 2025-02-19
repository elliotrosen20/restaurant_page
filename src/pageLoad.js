export function loadPage() {
    const content = document.querySelector("#content");

    const title = document.createElement("h1");

    title.textContent = "Le Méditerranéen";

    const shortDescription = document.createElement("p");
    const longDescription = document.createElement("p");

    shortDescription.textContent = "A spectacular fusion of French and Mediterranean cuisine!";
    longDescription.textContent = "Welcome to Le Méditerranéen, where the timeless elegance of French culinary artistry meets the vibrant, sun-kissed flavors of the Mediterranean. Our menu offers an unexpected yet harmonious fusion of two rich culinary traditions, designed to take your tastebuds on a unique journey. Indulge in dishes like Bouillabaisse à la Provençale, a Mediterranean seafood stew with a French saffron-infused broth, or try Coq au Vin with Olive Tapenade, where tender chicken is slow-cooked in red wine, then paired with a savory Mediterranean olive tapenade. For a bold twist, enjoy Ratatouille-stuffed Lamb Chops, where the classic French vegetable medley is seamlessly blended into a succulent Mediterranean-style lamb. Each dish is crafted with the freshest local ingredients, offering a delightful exploration of flavors that are both familiar and excitingly new.";

    content.appendChild(title);
    content.appendChild(shortDescription);
    content.appendChild(longDescription);
}

