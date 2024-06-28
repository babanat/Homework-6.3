const array = [29, 14, 45, 21, 15, 23, 99, 34] ;
const itemToRemove = 3;//
function removeElement(arr, item) {
if (item >= 0 && item < arr.length) {
arr.splice(item, 1);
}
return  arr;
}
console.log(removeElement(array,itemToRemove));