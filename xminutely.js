const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
let activitynameslist = [
  `Chase Atlantic`,
  `The Neighbourhood`,
  `Arctic Monkeys`,
]
let ActivityChoice = Math.floor(Math.random() * activitynameslist.length);
let activity = activitynameslist[ActivityChoice];

// Do not add some random Things from this part. Discord has limited activity type and status.
// ONLINE, DND, IDLE.
// Activity Type List 
let activitytypelist = [
  `LISTENING`,
]
let ActypeChoice = Math.floor(Math.random() * activitytypelist.length);
let activitytype = activitytypelist[ActypeChoice];
// End of Activity Type
//Start of status
let status = [
  `ONLINE`,
  `DND`,
]
let statusChoice = Math.floor(Math.random() * status.length);
let statustype = status[statusChoice];

let result = await lib.discord.users['@0.1.1'].me.status.update({
  activity_name: `${activity}`,
  activity_type: `${activitytype}`,
  status: `${statustype}`
});
