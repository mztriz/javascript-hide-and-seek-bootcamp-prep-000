function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const list = document.querySelectorAll('.ranked-list');
  for (let i = 0; i < list.length; i++) {
    let children = list[i].children;
    for (let j = 0; j < children.length; j++){
     children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
}

function deepestChild(){
  let node = document.getElementById('grand-node')
  let next = node.children[0]
  while (next) {
    node = next
    next = node.children[0]
  }
  return node
}
