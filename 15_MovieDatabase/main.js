var movies =[
    {
        title: "ABC",
        rating: 5,
        hasWatched: true
    },{
        title: "DEF",
        rating: 4.2,
        hasWatched: false
    },{
        title: "XYZ",
        rating: 3,
        hasWatched: false
    },{
        title: "AAA",
        rating: 4.8,
        hasWatched: true
    }
];

movies.forEach(function(movie){
    if(movie.hasWatched){
        console.log("You have watched \"" + movie.title + "\" - " + movie.rating + " Stars");
    }else{
        console.log("You have not watched \"" + movie.title + "\" - " + movie.rating + " Stars");
    }
})

