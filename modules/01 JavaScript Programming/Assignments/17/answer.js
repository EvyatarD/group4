//Question:
//Create an object to store the following information about your favorite movie: title (a string),
// duration (a number), and stars (an array of strings).<br />
//Create a function to print out the movie information like so:
// "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

//Answer:

var favoriteMovie = {
    title: "Spiderman",
    duration: 120,
    stars: ["Peter","Merry","Moses"]
};

console.log(`${favoriteMovie.title} lasts for ${favoriteMovie.duration} minutes. Stars: ${favoriteMovie.stars}`)