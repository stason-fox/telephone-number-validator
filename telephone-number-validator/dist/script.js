function telephoneCheck(str) {
  let regex = /^1?-?\s?(\d{3}|\(\d{3}\))-?\s?\d{3}-?\s?\d{4}$/gm;
  
  if (str.match(regex)) {
    return true;
  }
  else {
    return false;
  }
}

telephoneCheck("555-555-5555");