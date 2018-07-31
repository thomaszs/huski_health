const whatDog = require('what-dog');

whatDog('https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12224408/Shiba-Inu-On-White-03.jpg')
  .then(doggyData => {
        console.log(doggyData);
    })
  