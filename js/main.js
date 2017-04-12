var paints = [
   {name:"Purrple Drank", color: "#9b26a5 ", description:"Sit back, relax, and slow things down a bit with this soothing color", price:"10.17", url:"https://s-media-cache-ak0.pinimg.com/236x/c6/91/9e/c6919e4839f9aff0b049b4df13e607db.jpg" },
   {name:"Gucci Lemonade", color:"#fafc7e ", description:"BRR! Chiquita! A lovely shade of yellow designed to brighten your mood while calming the mind", price:"10.17", url:"http://www.everythinggucci.com/wp-content/uploads/2016/08/Gucci-Mane-Lemonade-Official-Music-Video-620x360.jpg"},
   {name:"Ganja Green", color:"#267026 ", description:"Elevate your senses with this bold hue inspired by nature. (consider pairing with Swisher Brown)", price:"10.17", url:"http://www.colorhexa.com/267026.png"},
   {name:"Dirty Fanta", color:"#ff9f23 ", description:" Orange you glad I didn't say banana?? That was a joke. But this color is anything but. Designed to mimic the effects of Purrple Drank, but for those more citrus inclined", price:"10.17", url:"http://www.colorhexa.com/ff9f23.png"},
   {name:"Swisher Brown", color:"#603a07 ", description:"A staple in any modern home, this is a classic color designed to complement anything. Pairs especially well with Ganja Green", price:"10.17", url:"http://www.colorhexa.com/603a07.png"},
   {name:"Whats Bracking Blood Red", color:"#ce3737 ", description:"Wuss brackin blood?? Never get caught lackin' with this bold shade of red", price:"10.17", url:"http://www.colorhexa.com/ce3737.png"},
   {name:"Cripwalk Blue", color:"#4c50c4 ", description:"Aye, Aye, cuz! Put a little pep in your step and really make a statement with this chilling hue", price:"10.17", url:"http://www.colorhexa.com/4c50c4.png"},
   {name:"Gold Grill", color:"#e8c135 ", description:"This is for those that _really_ want to make a statement.The ballers. The shot callers. Go big or go home!", price:"10.17", url:"http://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/3rYAAOSw-CpX9qzV/$_35.JPG?set_id=8800005007"},
   {name:"Straw-BRR-y", color:"#ff6b7c ", description:"Sweet, yet cool. A summertime favorite perfect for exterior furniture", price:"10.17", url:"http://www.colorhexa.com/ff6b7c.png"}
];

 paints.forEach(function(pnt, index) {
   var x = "card" + (index + 1);
   var make = document.getElementById(x);

   make.innerHTML = `<article>
               <header>
                   <h2 style="text-align: center">${pnt.name} </h2>
               </header>
               <section>
                   <img src="${pnt.url}" style="height: 250px; width: 250px">
                   <p class="description">${pnt.description}</p>
               </section>
               <section>
                   <header>
                       <h3>Specifications</h3>
                   </header>
                   <p class="spec bold">color:${pnt.color}</p>
                   <p class="spec bold">Size: 1 gal, 5gal, 10gal</p>
               </section>
               <section>
                   <header>
                       <h3>Pricing</h3>
                   </header>
                   <p class="price bold">${pnt.price}/per gallon</p>
               </section>
           </article>`;

});