const dogBreed = require('what-dog');
dogBreed('https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12225919/Pembroke-Welsh-Corgi-On-White-01.jpg')
.then(doggyData => {
console.log(doggyData)
})