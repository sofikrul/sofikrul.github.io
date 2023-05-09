let btn1 = document.querySelector("#summerButton");
let btn2 = document.querySelector("#winterButton");

btn1.addEventListener('click', getSummerActivity);
btn2.addEventListener('click', getWinterActivity);

var summerlinks = [
    /*"https://www.denverunionstation.com/",
    "https://www.telluride.com/discover/the-gondola/",
    "https://www.dmns.org/",
    "https://bachelorsyracusemine.com/",
    "https://www.denverartmuseum.org/en?gad=1&gclid=CjwKCAjwxr2iBhBJEiwAdXECwzU0QIZ_tGSVYF1XdIQfk1RU9R69sp7OMVm9E8G_9ON4rHMg2b1qLBoC8-AQAvD_BwE",
    "https://capitol.colorado.gov/",
    "https://www.mines.edu/museumofearthscience/",
    "https://www.parkmeadows.com/en.html"
    */
    "https://www.nps.gov/dino/learn/nature/paleontology.htm",
    "https://www.nps.gov/hove/learn/historyculture/index.htm",
    "https://www.nps.gov/meve/learn/historyculture/cliff_dwellings_home.htm#:~:text=The%20cliff%20dwellings%20of%20Mesa,built%20into%20natural%20cliff%20alcoves",
    "https://www.nps.gov/romo/index.htm",
    "https://www.nps.gov/grsa/index.htm",
    "https://bouldercolorado.gov/trail/royal-arch",
    "https://www.alltrails.com/trail/us/colorado/lake-isabelle-trail-winter",
    "https://www.fs.usda.gov/recarea/psicc/recarea/?recid=12927",
    "https://www.alltrails.com/trail/us/colorado/eldorado-canyon-state-park"
]

function getSummerActivity(){
    var randLink = parseInt(Math.random() * summerlinks.length);
    location.href = summerlinks[randLink];

}

var winterlinks = [
    "https://www.vail.com/",
    "https://www.aspensnowmass.com/?NCK=8887390842&gclid=CjwKCAjwxr2iBhBJEiwAdXECw5GXKderfYgx2NXnhEAtLzmksX_O8YzC6WfLbGfP7Gr6TlwYInYYpRoCwZcQAvD_BwE&gclsrc=aw.ds",
    "https://www.keystoneresort.com/",
    "https://downtownfortcollins.com/event/skate-rink/",
    "https://www.winterindenver.com/rink",
    "https://www.evergreenrecreation.com/224/Ice-Skating-and-Hockey",
    "https://www.allvail.com/winter_recreation/snow_tubing.php",
    "https://www.steamboat.com/things-to-do/activity-details/snow-tubing",
    "https://www.coppercolorado.com/things-to-do/activities-amenities/tubing-hill",
    "https://ourayhotsprings.com/",
    "https://www.ironmountainhotsprings.com/",
    "https://www.hotspringspool.com/"
]

function getWinterActivity(){
    var randWinterLink = parseInt(Math.random() * winterlinks.length);
    location.href = winterlinks[randWinterLink];
}
