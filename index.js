function scuberGreetingForFeet(ride){

  // Write your code here!
  if(ride <= 400){
    return 'This one is on me!'
  }else if (ride >= 400 && ride <= 2000){
    return 'That will be twenty bucks.'
  }else if(ride >= 2000 && ride < 2500){
    return 'I will gladly take your thirty bucks.'
  } else if (ride >= 2500) {
    return 'No can do.'
  }

  // gives customers a free sample if the ride is less than or equal to 400 feet', function () {
  //   expect(scuberGreetingForFeet(199)).to.equal('This one is on me!');
  // });

  // it('charges 20 dollars for a distance between 400 and 2000 feet', function () {
  //   expect(scuberGreetingForFeet(1500)).to.equal('That will be twenty bucks.');
  // });

  // it('charges 30 dollars for a distance over 2000 feet', function () {
  //   expect(scuberGreetingForFeet(2001)).to.equal('I will gladly take your thirty bucks.');
  // });

  // it('does not allow rides over 2500 feet', function () {
  //   expect(scuberGreetingForFeet(2501)).to.equal('No can do.');

// if (199){
//     return 'This one is on me!'
//   } else if (1500){
//     return 'That will be twenty bucks.'
//   } else if (2001){
//     return 'I will gladly take your thirty bucks.'
//   } else if (2501){
//     return 'No can do.'
//   }
}
scuberGreetingForFeet(10);
function ternaryCheckCity(city){
  // Write your code here!
  if (city == 'NYC'){
    return "Ok, sounds good."
  } else{
    return "No go."
  }
}

function switchOnCharmFromTip(mulla){
  // Write your code here!
  if (mulla == 'generous'){
    return "Thank you so much."
  }else if (mulla == 'not as generous' ){
    return "Thank you."
  }else {
    return "Bye."
  }
}