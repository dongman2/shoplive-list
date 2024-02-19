document.addEventListener('DOMContentLoaded', () => {
    // URL에서 파라미터를 파싱하는 함수
    function getParameterByName(name, url = window.location.href) {
        name = name.replace(/[\[\]]/g, '\\$&');
        const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
              results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    // 주어진 선택자에 대한 요소의 텍스트를 출력하는 함수
    function logElementsText(selector) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            console.log(element.innerText.trim());
        });
    }

    // URL 파라미터를 사용하여 선택자 결정
    const titleSelector = getParameterByName('titleSelector');
    const priceSelector = getParameterByName('priceSelector');

    // 선택자가 있으면 해당 요소의 텍스트를 로그
    if (titleSelector) logElementsText(titleSelector);
    if (priceSelector) logElementsText(priceSelector);
});
