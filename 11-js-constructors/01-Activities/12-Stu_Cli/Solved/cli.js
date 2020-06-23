// Grabbing the search type argument
var search = process.argv[2];
// Joining the remaining arguments since an actor or tv show name may contain spaces
var term = process.argv.slice(3).join(" ");
// > node cli show Big Brother
// term = "Big Brother"
// > node cli show How I met Your Mother
// term = "How I met Your Mother"

// By default, if no search type is provided, search for a tv show
if (!search) {
  search = "show";
}

// By default, if no search term is provided, search for "Andy Griffith"
if (!term) {
  term = "Andy Griffith";
}

// Print whether searching for a show or actor, print the term as well
if (search === "show") {
  console.log("Searching for TV Show");
} else if (search === "actor") {
  console.log("Searching for TV Actor");
} else {
  return console.error("The command you entered is not a valid command: " + search);
}

console.log(search + " " + term);
