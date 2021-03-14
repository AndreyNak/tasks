function isPalindrome(str){
  if (str === " ")
    return false;
  str = str.toLowerCase();
  if(str.length === 1)
    return true;
  if(str.length === 2) 
    return str[0] === str[1];
  if(str[0] === str.slice(-1)) 
    return isPalindrome(str.slice(1,-1))
  return false;
}


function substr(text,num = 0,len = text.length) {
  let result = '';
  if (num > text.length-1){
    return result;
  }
  text = text.slice(num,text.length);
  for (let index = 0 ; index < len; index++){
    if (text[index] === undefined){
      continue;
    }
    result+=text[index];
   
  }
  if (result === '')
    return '';
   return result;
 }


function ownApply(n,func1wsaf,value) {
  if (n === 0) {
    return value;
  }
  value = func(value);
  return ownApply(n-1, func1wsaf,value);
}
