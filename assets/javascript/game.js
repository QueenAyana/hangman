src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"

 var words=["steve, alex, enderman, pickaxe, diamond, zombievillager, silverfish, neather, ghast, wither, enderpearl, emerald, mending,"];
 var hints = ["Our male hero's name., Our female hero's name., A very tall mob that's quite shy., Isnt it iron ... ?, Ooooh! shiny! This poor guy needs a golden apple., Why must their eggs look like stone, Ummm ... where is the brimstone and sulfer?, These mobs sound like a dying cat., Run or hide my three heads will see you!, Throw me and enjoy the ride!, Villagers love these!, This enchantment will help keep your gear all fixed up."]; 
$("#btn").on("click", function() {
console.log("START BUTTON CLICKED")
document.onkeyup = gameStart();
});
var getRandomWord = words[Math.floor(Math.random() * words.length)];
$("#word").appendTo(getRandomWord)

























   //for (let i = 0; i < words.length; i++) {
    //var = wordChoice = $("<")
    










//creeper explodes at css right 500px hid both images then display boom.png