


/*
function menuItem(name, price, kcal, gluten, lactose, image)
{
    this.name = name;
    this.price = price;
    this.kcal = kcal;
    this.gluten = gluten;
    this.lactose = lactose;
    this.image = image;
    this.product = function() {
        return this.name;
    };
    this.containsGluten = function () {
        if(this.gluten = true) {
            return 'Contains Gluten';
        }
    };
    this.containsLactose = function (){
        if(this.lactose = true) {
            return 'Contains Lactose';
        }
    };
}
*/
/*

function show_image(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;

    // This next line will just add it to the <body> tag
    return img;
}



let burgername = document.getElementById("Products");
let menu = [goodBurger, badBurger, uglyBurger, goodBurger2, badBurger2]
var burger;
for (burger in menu)
{
    let foodItem = document.createElement("div");
    let listItem = document.createElement("li");
    let glutenItem = document.createElement("li");
    let lactoseItem = document.createElement("li");
    let calories = document.createElement("p");
    let listValue = document.createTextNode(menu[burger].product());
    let glutenAllergy = document.createTextNode(menu[burger].containsGluten());
    let lactoseAllergy = document.createTextNode(menu[burger].containsLactose());
    lactoseItem.style.fontWeight = "bold";
    glutenItem.style.fontWeight = "bold";

    calories.innerHTML = menu[burger].kcal + ' Calories';
    listItem.appendChild(listValue);
    listItem.appendChild(show_image(menu[burger].image, 200, 150, menu[burger].name));
    glutenItem.appendChild(glutenAllergy);
    lactoseItem.appendChild(lactoseAllergy);


    foodItem.appendChild(listItem);
    foodItem.appendChild(calories);
    foodItem.appendChild(glutenItem);
    foodItem.appendChild(lactoseItem);
    burgername.appendChild(foodItem);
    */
 */
  /*  if(menu[burger].gluten)
    {
        let listValue = document.createTextNode("Contains gluten");
        listItem.appendChild(listValue);
        burgername.appendChild(listItem);
    }
    if(menu[burger].lactose)
    {
        let listValue = document.createTextNode(" Contains lactose");
        listItem.appendChild(listValue);
        burgername.appendChild(listItem);
    }
*/
}
/*
const vm = new Vue({
  el: '#myID',
  data: {
    gb: goodBurger.product(),
    bb:	badBurger.product(),
    ub: uglyBurger.product(),
    gb2: goodBurger2.product(),
    bb2: badBurger2.product(),
  }
})
*/
