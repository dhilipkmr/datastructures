let root = null;
class LinkedList {
  constructor(val){
    this.data = val;
    this.prev = null;
    this.next = null;
  }
};

function deleteItem(value) {
  let linkedList = root;
  let prev = null;
  while(linkedList) {
    if (linkedList.data === value) {
      if (prev === null) {
        root = linkedList.next;
        return;
      }
      prev.next = linkedList.next;
      return;
    }
    prev = linkedList;
    linkedList = linkedList.next;
  }
}

function callLinkedList() {
  let current = null;
  const ll = [1,2,3,4,5,6];
  for(const i of ll) {
    if (!root) {
      root = new LinkedList(i);
      current = root;
    } else {
      const nextListItem = new LinkedList(i);
      current.next = nextListItem;
      current = current.next;
    }
  }
  deleteItem(9);
  console.log(root);
}
callLinkedList();