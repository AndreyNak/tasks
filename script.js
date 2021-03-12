function isPalindrome(value) {
  alert(checkPalindrome(value));
}

function checkPalindrome(str){
  if(str.length === 1)
    return true;
  if(str.length === 2) 
    return str[0] === str[1];
  if(str[0] === str.slice(-1)) 
    return checkPalindrome(str.slice(1,-1))
  return false;
}


function mySub(text,n1,n2) {
  if (n1 > 0) {
    n2++;
  }
  alert(text.slice(n1,n2));
}


function ownApply(n,func1wsaf,value) {
  if (n === 0) {
    return value;
  }
  value = func(value);
  return ownApply(n-1, func1wsaf,value);
}

const func  = value => Math.sqrt(value);
//const func = v => v + 10;
//const func = v => v ** 2;

 console.log(ownApply(3,func, 256));
 


