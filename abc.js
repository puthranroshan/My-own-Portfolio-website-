const checkWeight = (kg) => {
    const lbs = kg * 2.2;
    if (lbs > 150) {
    return "obese";
    } else if (lbs >= 100 && lbs <= 150) {
    return "you are ok";
    } else {
    return "underweight";
    }
   }
   console.log(checkWeight(100));
