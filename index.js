function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(){
   return document.querySelector("#nested .target")
}

function increaseRankBy(n){
   return document.querySelectorAll(".ranked-list li").forEach( function(unit) {

     unit.innerHTML = parseInt(unit.innerHTML)+n;
   })
}

/*iterative solution*/
function deepestChild(){

  var levelContainer = document.querySelectorAll("#grand-node div");

  for (var i = 0; i < levelContainer.length; i++) {

        if (levelContainer[i].querySelectorAll("div").length === 1) {
          return levelContainer[i].querySelector("div")
        }}}

/*recursive solution*/
let levelContainer = "div#grand-node div"
function deepestChild(){
  if (document.querySelectorAll(levelContainer).length > 1) {
    levelContainer = levelContainer + "> div";
    return deepestChild(levelContainer);
  } else {
    return document.querySelector(levelContainer);
  }
}
