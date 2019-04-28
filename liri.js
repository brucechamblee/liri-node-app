require("dotenv").config();

var fs = require("fs");

var { myConcert, myMovies, mySpotify } = require("./models");

var userCommand = process.argv[2];

var userInput = process.argv.splice(3, process.argv.length).join(" ");

RunLiri(userCommand, userInput);

function RunLiri(command, search) {
  switch (command) {
    case "help":
      console.log(
        "Please type on of these commands\n" +
          "'concert-this': to search your favorite artist concerts\n" +
          "'spotify-this-song': to search your favorite song\n" +
          "'movie-this': to search your favorite movie\n" +
          "'do-what-it-says': using command from random.txt\n"
      );
      break;

    case "concert-this":
      myConcert(search);
      break;
    case "spotify-this-song":
      mySpotify(search);
      break;
    case "movie-this":
      myMovies(search);
      break;
    case "do-what-it-says":
      doWhatItSays();
      break;
    default:
      console.log(
        "LIRI doesn't understand that - Please type 'node liri.js help' for more information"
      );
  }
}
function doWhatItSays() {
  fs.readFile("random.txt", "utf8", function(error, data) {
    if (error) {
      return console.log(error);
    }
    var dataArr = data.split(",");

    for (let i = 0; i < dataArr.length; i++) {
      if (i % 2 === 0) {
        console.log(dataArr[i] + " " + dataArr[i + 1]);
        RunLiri(dataArr[i], dataArr[i + 1]);
      }
    }
  
  });
}
