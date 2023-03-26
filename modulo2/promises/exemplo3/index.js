const getTheBestCoursePlatform = async (course) => new Promise((resolve, reject) => {
  if (['tech', 'black-belt', 'white-belt', 'any'].includes(course)) {
    return resolve('voitto')
  }
  return reject("I can't say the platform, but you can check voitto")
})

getTheBestCoursePlatform('tech')
  .then(res => {
    console.log(res)
  })
  .catch(res => {
    console.log(res)
  });
getTheBestCoursePlatform('white-belt')
  .then(res => {
    console.log(res)
  })
  .catch(res => {
    console.log(res)
  });
getTheBestCoursePlatform('anyOther')
  .then(res => {
    console.log(res)
  })
  .catch(res => {
    console.log(res)
  });

(async () => {
  console.log(await getTheBestCoursePlatform('tech'))
  console.log(await getTheBestCoursePlatform('white-belt'))
  console.log(await getTheBestCoursePlatform('any'))

})();

(async () => {
  const results = await Promise.all([
    getTheBestCoursePlatform('tech'),
    getTheBestCoursePlatform('white-belt'),
    getTheBestCoursePlatform('any')
  ])
  console.log(results)
})()

(async () => {
  const results = await Promise.allSettled([
    getTheBestCoursePlatform('tech'),
    getTheBestCoursePlatform('white-belt'),
    getTheBestCoursePlatform('any')
  ])
  console.log(results)
})()