
var Spotify = require('node-spotify-api');

var keys = require("../services/keys");

var spotify = new Spotify(keys.spotify);
var fs = require("fs");

function mySpotify(userInput) {
    var song = userInput;
    if (!song) {
        song = "natural Imagine Dragons"
    }
    spotify.search({ type: 'track', query: song}, function(err, data) {
        if (err) {
            return console.log('Error occured: ' + err);
        }    
    
        console.log("\n---------------------\nSong Name: " + data.tracks.items[0].name);
        console.log("Artist(s) Name: "+ data.tracks.items[0].artists[0].name);
        console.log("Album Name: "+ data.tracks.items[0].album.name);
        console.log("Preview URL: " + data.tracks.items[0].preview_url+"\n----------------\n");

        fs.appendFileSync('log.txt', "\r\n" + "Song Search Log---------------------------------------"+ "\r\n", 'utf8');
        fs.appendFileSync('log.txt', "\r\n" + "Song Name: " + data.tracks.items[0].name + "\r\n", 'utf8' );
        fs.appendFileSync('log.txt', "\r\n" + "Artist(s): " + data.tracks.items[0].artists[0].name + "\r\n", 'utf8');
        fs.appendFileSync('log.txt', "\r\n" + "Album: " + data.tracks.items[0].album.name+ "\r\n", 'utf8');
        fs.appendFileSync('log.txt', "\r\n" + "Preview Link: " + data.tracks.items[0].preview_url + "\r\n", 'utf8' );
        fs.appendFileSync('log.txt', "\r\n" + "-------------------------------------------------------"+ "\r\n", 'utf8');
    
    });
}

module.exports = mySpotify;