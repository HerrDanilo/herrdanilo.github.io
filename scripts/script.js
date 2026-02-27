const footerElement = document.querySelector('.footer');
const headerElement = document.querySelector('.header');

const LoadHTMLElement = (htmlPath, parentElement) => {
    fetch(htmlPath)
        .then(res => {
            if (res.ok) {
                return res.text();
            }
        })
        .then(htmlElement => {
            document.querySelector(`.${parentElement}`).innerHTML = htmlElement;
        })
}

// Facilitado pela IA do google...
function GetJsonData() {
    return fetch('../data.json')
        .then(response => {
            if (response.ok) return response.json();
            else throw new Error("Erro ao carregar");
        });
}

// // Como usar:
// GetJsonData().then(data => {
//     //#region Game Links
//     document.getElementById("DeadAttackLink").setAttribute('href', data.links.games.DeadAttackDEMO);
//     //#endregion
// });
