module.exports = function check(str, bracketsConfig) {

    let brackets,
        arr = str;

    brackets = bracketsConfig.map(item => item.reduce((acc, cur) => acc + cur));
  
    for (let i = arr.length; i >= 0 ; i--) {
      brackets.forEach(item => {
        arr = arr.replace(item, '')
      });
      
      if(arr.length === 0) return true;
    }
  
    return false
}
