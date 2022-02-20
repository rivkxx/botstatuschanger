# Automatic Discord Bot Status Changer

Hello there! This app contains an endpoint changes your Discord bot's status.
By default, it's triggered automatically every two minutes by the [Autocode scheduler](https://docs.autocode.com/getting-started/creating-your-first-project/the-autocode-scheduler/),
but you can change the interval and/or the trigger after you install it!

<img src="./readme/gallery/status1.png" style="max-width: 60%;">

# How it Works

As mentioned above, the Autocode scheduler triggers the endpoint in this
app every two minutes. To make changes, just open `functions>events>scheduler>xminutely.js` 
after installing. You'll see three arrays that you can customize: 

1. `activitynameslist`, which contains specific activity names you can set for your
bot. You can add just about any activity names you want here!
2. `activitytypelist`, which contains specific activity types. These can only have
a few specific values like **PLAYING**, **WATCHING**, **COMPETING**, etc. For a full
list, check out the [documentation page for the status changing API](https://autocode.com/lib/discord/users/#me-status-update).
3. `status`, which sets what your bot appears as. Again, this can only be
one of a few options like **ONLINE**, **DND**, **INVISIBLE**, etc. For a 
full list, check out the [documentation page for the status changing API](https://autocode.com/lib/discord/users/#me-status-update).

Each time the endpoint runs, it will pick a random value from each of these
three arrays and will use that to update your bot's status.

For example, the default values for `activitynameslist` are:

```javascript
let activitynameslist = [
  `Autocode`,
  `with R3al Drout`,
  `Hello there!`,
]
```

And if you wanted to add another activity, you could change this list to:
```javascript
let activitynameslist = [
  `Autocode`,
  `with R3al Drout`,
  `Hello there!`,
  `This is my super cool fourth activity!`,
]
```

You can set the app to trigger down to a minute by changing the event trigger
at the top of the editor, but just be aware that it can go through your monthly 
request limit quickly.


**ENJOY**
