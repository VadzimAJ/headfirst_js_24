function phoneNuberChecker (phoneNumber) {
  if ( phoneNumber.length > 8 || phoneNumber.length < 7) {
    console.log("Phone number too short or to long");
    return false;
  } 
  for ( var i = 0; phoneNumber.length > i; i++) {
    console.log(phoneNumber[i]);
    if ( i === 3){
      if (phoneNumber.length === 8 && phoneNumber[i] !== "-"){
        console.log("Fourth position must be a '-'. We caught an error because the position contains elem '" + phoneNumber[i] +"'")
        return false;
      }
    } else if (isNaN(phoneNumber[i])) {
      console.log("all elemnts must be a number. Error becouse " + i + " position contains " + phoneNumber[i] +"'")
      return false;
    }

    };
  };

  phoneNuberChecker ("123-5678");