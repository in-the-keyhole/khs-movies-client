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
5. Optional: Pre-load movies into mongo collection with this command: 

<pre><code>
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
    },
    {  
       "id":"ad82fb41-c327-4b5d-a2af-c76aa6c5c8cc",
       "poster_path":"gri0DDxsERr6B2sOR1fGLxLpSLx.jpg",
       "adult":false,
       "overview":"In 1926, Newt Scamander arrives at the Magical Congress of the United States of America with a magically expanded briefcase, which houses a number of dangerous creatures and their habitats. When the creatures escape from the briefcase, it sends the American wizarding authorities after Newt, and threatens to strain even further the state of magical and non-magical relations.",
       "release_date":"2016-11-16",
       "genre_ids":[  
          10751,
          12,
          14
       ],
       "original_language":"en",
       "original_title":"Fantastic Beasts and Where to Find Them",
       "title":"Fantastic Beasts and Where to Find Them",
       "backdrop_path":"6I2tPx6KIiBB4TWFiWwNUzrbxUn.jpg",
       "popularity":34.284009,
       "vote_count":1029,
       "video":false,
       "vote_average":7,
       "rating":4
    },
    {  
       "id":"6b8a5b63-899b-4a35-9d78-479c9a5c6e98",
       "poster_path":"h6O5OE3ueRVdCc7V7cwTiQocI7D.jpg",
       "adult":false,
       "overview":"On 15 January 2009, the world witnessed the 'Miracle on the Hudson' when Captain 'Sully' Sullenberger glided his disabled plane onto the frigid waters of the Hudson River, saving the lives of all 155 aboard. However, even as Sully was being heralded by the public and the media for his unprecedented feat of aviation skill, an investigation was unfolding that threatened to destroy his reputation and career.",
       "release_date":"2016-08-16",
       "genre_ids":[  
          18,
          36
       ],
       "original_language":"en",
       "original_title":"Sully",
       "title":"Sully",
       "backdrop_path":"vC9H1ZVdXi1KjH4aPfGB54mvDNh.jpg",
       "popularity":28.781362,
       "vote_count":424,
       "video":false,
       "vote_average":6.5,
       "rating":3
    },
    {  
       "id":"cdf73646-9f69-4448-8469-2b9fd6ed752b",
       "poster_path":"u7igWoek5Xckz7mkIorYE5pMusI.jpg",
       "adult":false,
       "overview":"Taking place after alien crafts land around the world, an expert linguist is recruited by the military to determine whether they come in peace or are a threat.",
       "release_date":"2016-11-10",
       "genre_ids":[  
          18,
          878
       ],
       "original_language":"en",
       "original_title":"Arrival",
       "title":"Arrival",
       "backdrop_path":"yIZ1xendyqKvY3FGeeUYUd5X9Mm.jpg",
       "popularity":28.317511,
       "vote_count":603,
       "video":false,
       "vote_average":6.6,
       "rating":2
    },
    {  
       "id":"57e847e6-22eb-44ee-a3a0-3f10b2e54580",
       "poster_path":"z4x0Bp48ar3Mda8KiPD1vwSY3D8.jpg",
       "adult":false,
       "overview":"In Ancient Polynesia, when a terrible curse incurred by Maui reaches an impetuous Chieftain's daughter's island, she answers the Ocean's call to seek out the demigod to set things right.",
       "release_date":"2016-11-23",
       "genre_ids":[  
          16,
          12,
          35,
          10751,
          14,
          10402
       ],
       "original_language":"en",
       "original_title":"Moana",
       "title":"Moana",
       "backdrop_path":"1qGzqGUd1pa05aqYXGSbLkiBlLB.jpg",
       "popularity":16.304269,
       "vote_count":233,
       "video":false,
       "vote_average":6.3,
       "rating":5
    },
    {  
       "id":"455ba1bc-555e-45b3-80e9-0305dca55851",
       "poster_path":"xfWac8MTYDxujaxgPVcRD9yZaul.jpg",
       "adult":false,
       "overview":"After his career is destroyed, a brilliant but arrogant surgeon gets a new lease on life when a sorcerer takes him under his wing and trains him to defend the world against evil.",
       "release_date":"2016-10-25",
       "genre_ids":[  
          28,
          12,
          14,
          878
       ],
       "original_language":"en",
       "original_title":"Doctor Strange",
       "title":"Doctor Strange",
       "backdrop_path":"tFI8VLMgSTTU38i8TIsklfqS9Nl.jpg",
       "popularity":14.317724,
       "vote_count":1376,
       "video":false,
       "vote_average":6.6,
       "rating":5
    },
    {  
       "id":"b3a03414-52bc-46f3-aea8-2f84a29cd314",
       "poster_path":"tgfRDJs5PFW20Aoh1orEzuxW8cN.jpg",
       "adult":false,
       "overview":"Arthur Bishop thought he had put his murderous past behind him when his most formidable foe kidnaps the love of his life. Now he is forced to travel the globe to complete three impossible assassinations, and do what he does best, make them look like accidents.",
       "release_date":"2016-08-25",
       "genre_ids":[  
          28,
          80,
          53
       ],
       "original_language":"en",
       "original_title":"Mechanic: Resurrection",
       "title":"Mechanic: Resurrection",
       "backdrop_path":"6kMu4vECAyTpj2Z7n8viJ4RAaYh.jpg",
       "popularity":13.481813,
       "vote_count":640,
       "video":false,
       "vote_average":4.9,
       "rating":3
    },
    {  
       "id":"77bf4b77-a6c3-4321-a748-4c5024e63741",
       "poster_path":"qjiskwlV1qQzRCjpV0cL9pEMF9a.jpg",
       "adult":false,
       "overview":"A rogue band of resistance fighters unite for a mission to steal the Death Star plans and bring a new hope to the galaxy.",
       "release_date":"2016-12-14",
       "genre_ids":[  
          28,
          12,
          14,
          878,
          53,
          10752
       ],
       "original_language":"en",
       "original_title":"Rogue One: A Star Wars Story",
       "title":"Rogue One: A Star Wars Story",
       "backdrop_path":"tZjVVIYXACV4IIIhXeIM59ytqwS.jpg",
       "popularity":10.03083,
       "vote_count":28,
       "video":false,
       "vote_average":5.6,
       "rating":3
    },
    {  
       "id":"a18d3b53-90db-4be0-856a-7ae1199aa4c6",
       "poster_path":"5qVD5TD1CiALR5vUsMzh2BschVU.jpg",
       "adult":false,
       "overview":"Storks deliver babies…or at least they used to. Now they deliver packages for a global internet retail giant. Junior, the company’s top delivery stork, is about to be promoted when he accidentally activates the Baby Making Machine, producing an adorable and wholly unauthorized baby girl...",
       "release_date":"2016-09-22",
       "genre_ids":[  
          16,
          35,
          10751
       ],
       "original_language":"en",
       "original_title":"Storks",
       "title":"Storks",
       "backdrop_path":"6kaJDmePaYNrnhEjLJjliz9qIdb.jpg",
       "popularity":9.529357,
       "vote_count":121,
       "video":false,
       "vote_average":6,
       "rating":3
    },
    {  
       "id":"0ff33b16-5349-40a4-9f9b-26aea3341a61",
       "poster_path":"l9BWPqUV57X5ELBDLlbO7Vhh3Mr.jpg",
       "adult":false,
       "overview":"As a math savant uncooks the books for a new client, the Treasury Department closes in on his activities and the body count starts to rise.",
       "release_date":"2016-10-14",
       "genre_ids":[  
          80,
          53,
          18
       ],
       "original_language":"en",
       "original_title":"The Accountant",
       "title":"The Accountant",
       "backdrop_path":"i9flZtw3BwukADQpu5PlrkwPYSY.jpg",
       "popularity":9.397563,
       "vote_count":358,
       "video":false,
       "vote_average":6.3,
       "rating":4
    },
    {  
       "id":"bc9119a2-fb42-44a9-bf67-59379bd6d66c",
       "poster_path":"oFOG2yIRcluKfTtYbzz71Vj9bgz.jpg",
       "adult":false,
       "overview":"After waking up in a hospital with amnesia, professor Robert Langdon and a doctor must race against time to foil a deadly global plot.",
       "release_date":"2016-10-13",
       "genre_ids":[  
          28,
          80,
          9648,
          878,
          53
       ],
       "original_language":"en",
       "original_title":"Inferno",
       "title":"Inferno",
       "backdrop_path":"anmLLbDx9d98NMZRyVUtxwJR6ab.jpg",
       "popularity":9.383302,
       "vote_count":598,
       "video":false,
       "vote_average":5.3,
       "rating":3
    },
    {  
       "id":"5eeec1b8-e791-46b9-8144-9aec50519e09",
       "poster_path":"mWOotrG1MMKP9iCy2uPepbu27jk.jpg",
       "adult":false,
       "overview":"CIA employee Edward Snowden leaks thousands of classified documents to the press.",
       "release_date":"2016-09-15",
       "genre_ids":[  
          18,
          53
       ],
       "original_language":"en",
       "original_title":"Snowden",
       "title":"Snowden",
       "backdrop_path":"rhxzWzN93Dp6gTBy11JFqJydC8d.jpg",
       "popularity":8.924229,
       "vote_count":247,
       "video":false,
       "vote_average":6.7,
       "rating":5
    },
    {  
       "id":"231440fa-d468-41af-811a-add7dd0ba275",
       "poster_path":"jDeDRLEa8JqB3xmKVy6q3bkmDt6.jpg",
       "adult":false,
       "overview":"Sausage Party, the first R-rated CG animated movie, is about one sausage leading a group of supermarket products on a quest to discover the truth about their existence and what really happens when they become chosen to leave the grocery store.",
       "release_date":"2016-07-11",
       "genre_ids":[  
          12,
          16,
          35,
          14
       ],
       "original_language":"en",
       "original_title":"Sausage Party",
       "title":"Sausage Party",
       "backdrop_path":"nBvyktlVHjLx5nZ9Oxaoqo5jwbf.jpg",
       "popularity":8.114199,
       "vote_count":659,
       "video":false,
       "vote_average":5.8,
       "rating":3
    },
    {  
       "id":"fe4bbf60-fa2f-456a-a0cf-aad25d8d024f",
       "poster_path":"bndiUFfJxNd2fYx8XO610L9a07m.jpg",
       "adult":false,
       "overview":"WWII American Army Medic Desmond T. Doss, who served during the Battle of Okinawa, refuses to kill people and becomes the first Conscientious Objector in American history to win the Congressional Medal of Honor.",
       "release_date":"2016-11-04",
       "genre_ids":[  
          18,
          36,
          10752
       ],
       "original_language":"en",
       "original_title":"Hacksaw Ridge",
       "title":"Hacksaw Ridge",
       "backdrop_path":"zBK4QZONMQXhcgaJv1YYTdCW7q9.jpg",
       "popularity":7.801522,
       "vote_count":185,
       "video":false,
       "vote_average":6.7,
       "rating":2
    },
    {  
       "id":"0077cf12-5417-4aa1-90cb-782a4ca5ba1f",
       "poster_path":"cW85VlHPm3pz0anupAXHL9eTh5b.jpg",
       "adult":false,
       "overview":"When his uptight CEO sister (Aniston) threatens to shut down his branch, the branch manager(T J Miller) throws an epic Christmas party in order to land a big client and save the day, but the party gets way out of hand.",
       "release_date":"2016-12-05",
       "genre_ids":[  
          35
       ],
       "original_language":"en",
       "original_title":"Office Christmas Party",
       "title":"Office Christmas Party",
       "backdrop_path":"bzguuhqUI9G8jJ3EBtJ9p12g1Lr.jpg",
       "popularity":7.717738,
       "vote_count":33,
       "video":false,
       "vote_average":5.4,
       "rating":2
    },
    {  
       "id":"199ce3ea-ee6c-49a9-b2c3-fb342699cf3c",
       "poster_path":"39ia8d9HPZlnYuEX5w2Gk25Tpgs.jpg",
       "adult":false,
       "overview":"A corporate risk-management consultant must determine whether or not to terminate an artificial being's life that was made in a laboratory environment.",
       "release_date":"2016-09-01",
       "genre_ids":[  
          878,
          53
       ],
       "original_language":"en",
       "original_title":"Morgan",
       "title":"Morgan",
       "backdrop_path":"g3XhTkjUxLbzVVa63vuopSNNZE8.jpg",
       "popularity":7.365973,
       "vote_count":69,
       "video":false,
       "vote_average":5.5,
       "rating":4
    },
    {  
       "id":"3eebbcf2-101e-4202-afe9-5d78dd914cde",
       "poster_path":"9Moizj8qxcZK6DqEE1MTO3pQAEw.jpg",
       "adult":false,
       "overview":"A woman named Susan receives a book manuscript from her ex-husband — a man she left 20 years earlier — asking for her opinion of his writing. As she reads, she is drawn into the fictional life of Tony Hastings, a math professor whose family vacation turns violent.",
       "release_date":"2016-11-04",
       "genre_ids":[  
          18,
          53
       ],
       "original_language":"en",
       "original_title":"Nocturnal Animals",
       "title":"Nocturnal Animals",
       "backdrop_path":"wVD5IdqGNFYGFzO3qcxj6GhRR3H.jpg",
       "popularity":7.261899,
       "vote_count":91,
       "video":false,
       "vote_average":6.2,
       "rating":3
    },
    {  
       "id":"5360e8f0-2be0-4c00-9e6b-04b1017679b2",
       "poster_path":"IfB9hy4JH1eH6HEfIgIGORXi5h.jpg",
       "adult":false,
       "overview":"Jack Reacher must uncover the truth behind a major government conspiracy in order to clear his name. On the run as a fugitive from the law, Reacher uncovers a potential secret from his past that could change his life forever.",
       "release_date":"2016-10-19",
       "genre_ids":[  
          53,
          28,
          80,
          18,
          9648
       ],
       "original_language":"en",
       "original_title":"Jack Reacher: Never Go Back",
       "title":"Jack Reacher: Never Go Back",
       "backdrop_path":"4ynQYtSEuU5hyipcGkfD6ncwtwz.jpg",
       "popularity":7.029469,
       "vote_count":627,
       "video":false,
       "vote_average":4.5,
       "rating":3
    },
    {  
       "id":"5f296201-fa56-42f9-9440-e415ca827fc4",
       "poster_path":"nzXzLFTnd0Zb3ExfhOxlQgizgSu.jpg",
       "adult":false,
       "overview":"In 1942, an intelligence officer in North Africa encounters a female French Resistance fighter on a deadly mission behind enemy lines. When they reunite in London, their relationship is tested by the pressures of war.",
       "release_date":"2016-11-17",
       "genre_ids":[  
          28,
          10752,
          18,
          10749,
          53
       ],
       "original_language":"en",
       "original_title":"Allied",
       "title":"Allied",
       "backdrop_path":"tC0tVH5KQhCwMlddnyA3iWOSuBA.jpg",
       "popularity":6.365517,
       "vote_count":113,
       "video":false,
       "vote_average":5.8,
       "rating":3
    },
    {  
       "id":"6be14a6f-3acb-4768-b7b6-93ffff9ed04d",
       "poster_path":"3Kr9CIIMcXTPlm6cdZ9y3QTe4Y7.jpg",
       "adult":false,
       "overview":"In the epic fantasy, scruffy, kindhearted Kubo ekes out a humble living while devotedly caring for his mother in their sleepy shoreside village. It is a quiet existence – until a spirit from the past catches up with him to enforce an age-old vendetta. Suddenly on the run from gods and monsters, Kubo’s chance for survival rests on finding the magical suit of armor once worn by his fallen father, the greatest samurai the world has ever known. Summoning courage, Kubo embarks on a thrilling odyssey as he faces his family’s history, navigates the elements, and bravely fights for the earth and the stars.",
       "release_date":"2016-08-18",
       "genre_ids":[  
          12,
          16,
          14,
          10751
       ],
       "original_language":"en",
       "original_title":"Kubo and the Two Strings",
       "title":"Kubo and the Two Strings",
       "backdrop_path":"n4FeRnlH0ERa1kCUh0NXOyQvxnd.jpg",
       "popularity":6.281614,
       "vote_count":242,
       "video":false,
       "vote_average":7.4,
       "rating":3
    }
 ]

 )
</code></pre>
The example movies list is included in "movies.json". 