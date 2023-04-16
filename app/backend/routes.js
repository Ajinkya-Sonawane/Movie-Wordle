const express = require("express");
const moviesModel = require("./models");
const app = express();

//MondoDB Atlas
app.get("/insert", (req, res) => {
    
    var movie = new moviesModel()
    movie.name = "Pathaan"

    movie.save((err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).send({"msg": "Inserted successfully!"});
        }
    })
    
})

//MondoDB Atlas
app.get("/getMovieName", async (req, res) => {
    try {
        const movies = await moviesModel.aggregate([ { $sample: { size: 1} } ]);
        
        //Logic to make the input movie as list of lists.
        movieName = movies[0].name;
        spaceSplitName = movieName.split(" ");
        let result = [];
        for (let i = 0; i < spaceSplitName.length; i++) {
            let word = spaceSplitName[i];
            let temp = []
            for (let j = 0; j < word.length; j++) {
                temp.push(word.charAt(j).toUpperCase())
            }
            result.push(temp)
        }
        
        console.log("Result is ", result);
        return res.json({movies});
    } catch (error) {
        return res.status(400).json({message: error});
    }
})

// MongoDB Compass
app.post("/add_movie", async (request, response) => {
    console.log("Reached here!");
    const movies = new moviesModel(request.body);
    console.log("Movies Info ", movies);
    try {
      await movies.save();
      response.send(movies);
    } catch (error) {
      response.status(500).send(error);
    }
});

//MondoDB Compass
app.get("/movies", async (request, response) => {
    const movies = await moviesModel.find({});
  
    try {
      response.send(movies);
    } catch (error) {
      response.status(500).send(error);
    }
  });

  module.exports = app;