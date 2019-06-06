let maxPath = 0;
let elt = null;

function deepestPath(parent, deep) {
  if (deep > maxPath) {
    maxPath = deep;
    elt = parent;
  }
  for(let i =0;i<parent.childElementCount;i++) {
    deepestPath(parent.children[i], deep+1);
  }  
}