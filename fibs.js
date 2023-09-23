
export function fibs(targetIndex){
    if (targetIndex < 2){
        return targetIndex;
    } 
    return fibs(targetIndex-1) + fibs(targetIndex-2)
}


export const array = [];
export function callFibs(n){
  if (n === 0) return
  let a = fibs(n)
  array.push(a)
  callFibs(n-1)
}

