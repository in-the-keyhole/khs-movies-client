##  Movie  now showing application with react + redux 

  ## Installation

Prerequisite: 
    Node.js needs to be installed
    Mongo server need to running 
    khs-movies-server project need to checkout and running

1. Clone project
2. npm install from a command shell
3. npm start from a command shell 
4. Browser should open on http://localhost:3000
5. Pre-load movies into mongo collection with this command: 

`
db.MOVIES.insertMany( 
[  
    {  
       "id":"358d0097-afe7-4ee0-98e6-5a1827c01a60",
       "poster_path":"nHXiMnWUAUba2LZ0dFkNDVdvJ1o.jpg",
       "adult":false,
       "overview":"Underworld: Blood Wars follows Vampire death dealer, Selene, as she fends off brutal attacks from both the Lycan clan and the Vampire faction that betrayed her. With her only allies, David and his father Thomas, she must stop the eternal war between Lycans and Vampires, even if it means she has to make the ultimate sacrifice.",
       "release_date":"2016-12-01",
       "genre_ids":[  
          28,
          27
       ],
       "original_language":"en",
       "original_title":"Underworld: Blood Wars",
       "title":"Underworld: Blood Wars",
       "backdrop_path":"PIXSMakrO3s2dqA7mCvAAoVR0E.jpg",
       "popularity":55.589242,
       "vote_count":177,
       "video":false,
       "vote_average":4.2,
       "rating":4
    }
]
)
`
The example movies list is included in "movies.json". 