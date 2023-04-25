const outdoorActivities = ['Hiking in the Rocky Mountains', 'Rafting on the Arkansas River', 'Biking in Garden of the Gods', 'Camping in the Great Sand Dunes National Park'];
const culturalActivities = ['Visiting the Denver Art Museum', 'Touring the U.S. Air Force Academy', 'Attending a concert at the Red Rocks Amphitheater', 'Exploring the Colorado State Capitol'];
const foodActivities = ['Trying craft beer at a local brewery', 'Sampling farm-to-table cuisine in Boulder', 'Eating a Colorado-style burrito in Denver', 'Enjoying a farm-fresh breakfast in Fort Collins'];

function randomActivity(activityType) {
  return activityType[Math.floor(Math.random() * activityType.length)];
}

function generateDay() {
  const outdoorActivity = randomActivity(outdoorActivities);
  const culturalActivity = randomActivity(culturalActivities);
  const foodActivity = randomActivity(foodActivities);

  console.log('Here is your plan for the day:');
  console.log(`- ${outdoorActivity}`);
  console.log(`- ${culturalActivity}`);
  console.log(`- ${foodActivity}`);
}

generateDay();