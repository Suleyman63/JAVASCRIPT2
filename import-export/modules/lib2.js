function el(cssSelector){
    return document.querySelector(cssSelector);
};
function group(cssSelector){
    return document.querySelectorAll(cssSelector);
};
function create(html){
    return document.createElement(html);
};
const variable = 100;
const obj = {
    a:10,
    b:20,
    add:function(){return this.a * this.b}
}
export { 
    el, 
    group,
    create,
    variable,
    obj
};

