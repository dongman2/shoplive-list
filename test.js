document.addEventListener('DOMContentLoaded', () => {
    const productTitles = document.querySelectorAll('.product__title');
    productTitles.forEach(title => {
        console.log(title.innerText);
    });
});
