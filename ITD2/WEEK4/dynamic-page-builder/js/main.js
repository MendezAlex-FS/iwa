// Movies data, array of objects
// DO NOT MODIFY
// Not all data will be used
const MOVIE_DATA = [
  {
    id: "m1",
    title: "Aliens",
    rating: "R",
    duration: 127,
    releaseYear: 1986,
    image: "https://upload.wikimedia.org/wikipedia/en/f/fb/Aliens_poster.jpg",
  },
  {
    id: "m2",
    title: "The Matrix",
    rating: "PG",
    duration: 200,
    releaseYear: 1999,
    image: "https://upload.wikimedia.org/wikipedia/en/9/94/The_Matrix.jpg",
  },
  {
    id: "m3",
    title: "Terminator 2: Judgment Day",
    rating: "R",
    duration: 137,
    releaseYear: 1991,
    image:
      "https://upload.wikimedia.org/wikipedia/en/8/85/Terminator2poster.jpg",
  },
];

class Movie {
  constructor(title, rating, duration, image) {
    this.title = title;
    this.rating = rating;
    this.duration = duration;
    this.image = image;
  }
}

class Main {
  constructor() {
    console.log("Main started");

    // HTML elements to hold movie information (title, rating, duration)
    // Placeholders for now, create them in buildDom()
    this.movieTitle;
    this.movieRating;
    this.movieDuration;

    // Variable to track the current movie being shown
    this.movieNumber = 0;

    // Image object;
    this.image = new Image();

    // Array to hold Movie objects
    this.moviesArray = [];

    // Call functions/methods
    this.createObjects();
    this.buildDom();
    this.showMovie();
  }

  // Function/method to create Movie objects and populate movie array
  createObjects() {
    console.log("Creating objects");
    MOVIE_DATA.forEach(movie => {
      this.moviesArray.push(new Movie(movie.title, movie.rating, movie.duration, movie.image));
    });
  }

  // Function/method to build the DOM and set up an event listener for the next/previous button
  buildDom() {
    console.log("Building DOM");

    // Create the movie title, rating, and duration elements.
    this.title = document.createElement('p');
    this.rating = document.createElement('p');
    this.duration = document.createElement('p');

    /****** START - Create Next Button ******/
    // Create the next button. 
    const nextButton = document.createElement('button');
    nextButton.textContent = "Next";
    nextButton.className = "button";
    nextButton.addEventListener("click", () => this.nextMovie());

    // Create a wrapper div
    const nextWrapperDiv = document.createElement("div");
    nextWrapperDiv.className = "button-wrapper";

    // Create a div inside the wrapper. This makes the thikness
    // of the snake.
    const nextInsideDiv = document.createElement("div");
    nextInsideDiv.className = "inside";

    // Create a div which will be rotated constantly
    // to make the effect of a snake going around the button
    const nextShinyDiv = document.createElement("div");
    nextShinyDiv.className = "shiny";

    // Add the inside div to the container div
    // Then add the shiny div and buttong to the inside div
    nextWrapperDiv.append(nextInsideDiv);
    nextInsideDiv.append(nextShinyDiv, nextButton);
    /****** END - Create Next Button ******/

    // The previous button code could have been avoided 
    // if we were allowed to create a method with parameters 
    // of a label and the arrow handler function. But, function
    // with handler parameters have not been thought.

    /****** START - Create Previous Button ******/
    // Create the previous button
    const previousButton = document.createElement('button');
    previousButton.textContent = "Previous";
    previousButton.className = "button";
    previousButton.addEventListener("click", () => this.previousMovie());

    // Create a wrapper div
    const previousWrapperDiv = document.createElement("div");
    previousWrapperDiv.className = "button-wrapper";

    // Create a div inside the wrapper. This makes the thikness
    // of the snake.
    const previousInsideDiv = document.createElement("div");
    previousInsideDiv.className = "inside";

    // Create a div which will be rotated constantly
    // to make the effect of a snake going around the button
    const previousShinyDiv = document.createElement("div");
    previousShinyDiv.className = "shiny";

    // Add the inside div to the container div
    // Then add the shiny div and buttong to the inside div
    previousWrapperDiv.append(previousInsideDiv);
    previousInsideDiv.append(previousShinyDiv, previousButton);
    /****** END - Create Previous Button ******/

    // Add all the top level elements to the body. 
    // We should have a main tag in html were we insert these. 
    // However, not allowed to modify the page.
    document.body.append(
      this.image,
      this.title,
      this.rating,
      this.duration,
      previousWrapperDiv,
      nextWrapperDiv);
  }

  // Function/method to update the output to show the correct movie information and image
  // It should be called when next button is clicked and also initially so a movie is seen
  // before button is clicked the first time
  showMovie() {
    console.log("Show movie");
    const movie = this.moviesArray[this.movieNumber];
    this.image.src = movie.image;
    this.image.alt = `${movie.title} Poster`;
    this.title.innerHTML = `<strong>Title:</strong> ${movie.title}`;
    this.rating.innerHTML = `<strong>Rating:</strong> ${movie.rating}`;
    this.duration.innerHTML = `<strong>Duration:</strong> ${Utils.convertTime(movie.duration)}`;
  }

  // Function/method to go to previous movie
  previousMovie() {
    console.log("Show previous movie");
    this.movieNumber--;
    if (this.movieNumber < 0) {
      // Using array length - 1. Normally the data changes in length.
      this.movieNumber = this.moviesArray.length - 1;
    }
    this.showMovie();
  }

  // Function/method to go to next movie
  nextMovie() {
    console.log("Show next movie");
    this.movieNumber++;
    if (this.movieNumber >= this.moviesArray.length) {
      this.movieNumber = 0;
    }
    this.showMovie();
  }
}

// IIFE
(() => {
  const main = new Main();
})();