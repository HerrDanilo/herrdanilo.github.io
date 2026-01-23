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
