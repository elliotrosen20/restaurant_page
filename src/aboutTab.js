export function loadAbout() {
    const content = document.querySelector("#content");

    const title = document.createElement("h1");

    title.textContent = "About";

    const fromStatement = document.createElement("p");
    const statement = document.createElement("p");

    fromStatement.textContent = "A word from the Chef de Cuisine, Elliot R.";
    statement.textContent = "We hope you enjoy. Every dish is crafted with the utmost respect to French and Mediterranean culture and cuisine."

    content.appendChild(title);
    content.appendChild(fromStatement);
    content.appendChild(statement);
}

