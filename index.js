// ============== pirveli amocana==============

const negativeAndPositive = [1, 2, 3, -4, -5, -6];

// filter-it vuvlit negativeAndPositive masivs da vabrunebt mxolod im elementebs romlebic nulze metia
//filter abrunebs axal masivs amitomac cvladi positive gaxdeba dadebiti cifrebis masivi

const positives = negativeAndPositive.filter((item) => {
  return item > 0;
});
console.log(positives);

//reduce-it gadavuvlit positives masivs da gavigebt jams
const sumOfPositives = positives.reduce((total, element) => {
  return total + element;
});



console.log(sumOfPositives, "line17 - dadebiti rixevbis jami");
//status(200).json(ok) :)





//=========meore amocana============================================
// cota ocnebebshi wavedi...
let stringsArray = [
  "i",
  "will",
  "become",
  "senior",
  "react",
  "developer",
  "react",
  "and",
  "i",
  "will",
  "become",
  "bros",
];


//es xerxi cota hardcoded gamovida

let reducedDreams = stringsArray.reduce(
  (total, current) => {
    if (current === "i") {
      total.i += 1;
      return total;
    } else if (current === "will") {
      total.will += 1;
      return total;
    } else if (current === "become") {
      total.become += 1;
      return total;
    } else {
      return total;
    }
  },
  {
    i: 0,
    will: 0,
    become: 0,
  }
);

console.log(reducedDreams, " meore amocana - 64line ");

//funcqcia romelic parametrad igebs masivs da values romelsac vamowmebt gameorebaze da abrunebs tu ramdenjer meordeba es value masivshi

const countRepetition = (array, value) => {
  return array.reduce((total, item) => {
    return value === item ? total + 1 : total;
  }, 0);
};
const getRepetitionNum = countRepetition(stringsArray, "will");
console.log(getRepetitionNum, "---meroe amocana function xerxi  - line 74");

//


const tryingSomething = stringsArray.reduce((total, val, i, arr) => {


  //ratomgac es masivi carielia problema memgoni valueshia magram ver gavige
  let checkIf_Repetition_Exist = arr.filter(  item => item === val );

  

  //tu checkIf_Repetition_Exist.length 1 ze metia nishnavs rom araishi gvaqvs gameoreba
  if (checkIf_Repetition_Exist.length > 1) {
    //davibeni magarad   -_-
    let objKey  = checkIf_Repetition_Exist[0]
    let obj={
     objKey: checkIf_Repetition_Exist.length
    }
    return total = {...total, ...obj}
    
  }
  return total;
  //ragacas arasworad vaketeb magram ver vxvdebi
}, {});
console.log(tryingSomething, "problem");

//status(500).json(error) :)

//js class amocana====================================================

class Car {
  constructor(brand, model, speed = 0, motion = "მანქანა გაჩერებულია") {
    this.brand = brand;
    this.model = model;
    this.speed = speed;
    this.motion = motion;
  }

  accelerate(speed) {
    this.speed += speed;
    this.check_motion();
  }
  brake(speed) {
    this.speed > speed ? (this.speed -= speed) : (this.speed = 0);

    this.check_motion();
  }
  emergency_brake() {
    this.speed = 0;
    this.check_motion();
  }
  check_motion() {
    this.motion = this.speed === 0 ? "მანქანა გაჩერებულია" : "მანქანა მოძრაობს";
  }
  status() {
    let carStatus = `car ${this.brand + this.model} is moving ${
      this.speed
    } km/h speed and status is ${this.motion}`;
    return carStatus;
  }
}

const car = new Car("eleanor", "1969");

car.accelerate(10);

console.log(car.status());
car.brake(10);
console.log(car.status());
//status(200).json(ok) :)

// async js amocana=============================================
const addasync = (x = 0, y = 0) => {
  return new Promise((res, rej) => {
    if (x * y > 20) {
      res("got data succsesfuly");
    } else {
      rej("low numbers");
    }
  });
};
addasync(5, 5)
  .then((value) => console.log(value))
  .catch((err) => console.log(err));
addasync(3, 5)
  .then((value) => console.log(value))
  .catch((err) => console.log(err));
addasync()
  .then((value) => console.log(value))
  .catch((err) => console.log(err));

//status(200).json(ok) :)
