import AnimatedLinksObjs from "./animatedLink";

[...document.querySelectorAll('a.menu__link')].forEach((el) => {
    const elPosition = [...el.parentNode.children].indexOf(el);
    const fxObj = AnimatedLinksObjs[elPosition];
    fxObj && new fxObj(el);
});
