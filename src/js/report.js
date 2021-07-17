const reports = [
  {
    "categories": [
      "Action|Adventure",
      "Action|Adventure|Biography",
      "Action|Adventure|Comedy",
      "Action|Adventure|Comedy|Crime",
      "Action|Adventure|Comedy|Family|Fantasy",
      "Action|Adventure|Comedy|Fantasy",
      "Action|Adventure|Comedy|Music",
      "Action|Adventure|Comedy|Romance|Thriller|Western",
      "Action|Adventure|Comedy|Thriller",
      "Action|Adventure|Comedy|Thriller|War",
      "Action|Adventure|Comedy|Thriller|Western",
      "Action|Adventure|Comedy|War",
      "Action|Adventure|Crime",
      "Action|Adventure|Crime|Drama",
      "Action|Adventure|Crime|Mystery|Thriller",
      "Action|Adventure|Crime|Romance|Thriller",
      "Action|Adventure|Crime|Thriller",
      "Action|Adventure|Drama",
      "Action|Adventure|Drama|History|Romance|Thriller",
      "Action|Adventure|Drama|History|Romance|War",
      "Action|Adventure|Drama|History|War",
      "Action|Adventure|Drama|Romance",
      "Action|Adventure|Drama|Thriller",
      "Action|Adventure|Drama|Thriller|War",
      "Action|Adventure|Family",
      "Action|Adventure|Fantasy",
      "Action|Adventure|Fantasy|Horror",
      "Action|Adventure|Fantasy|Horror|Sci-Fi|Thriller",
      "Action|Adventure|Fantasy|Sci-Fi",
      "Action|Adventure|Fantasy|Sci-Fi|Thriller",
      "Action|Adventure|Fantasy|Thriller",
      "Action|Adventure|History",
      "Action|Adventure|Horror",
      "Action|Adventure|Horror|Sci-Fi",
      "Action|Adventure|Mystery",
      "Action|Adventure|Romance|Sport",
      "Action|Adventure|Sci-Fi",
      "Action|Adventure|Sci-Fi|Thriller",
      "Action|Adventure|Thriller",
      "Action|Adventure|Thriller|War",
      "Action|Adventure|War",
      "Action|Adventure|Western",
      "Action|Biography|Crime|Drama|Thriller",
      "Action|Biography|Drama|History|War",
      "Action|Biography|Drama|Sport",
      "Action|Comedy",
      "Action|Comedy|Crime",
      "Action|Comedy|Crime|Drama|Thriller",
      "Action|Comedy|Crime|Fantasy",
      "Action|Comedy|Crime|Mystery",
      "Action|Comedy|Crime|Mystery|Thriller",
      "Action|Comedy|Crime|Thriller",
      "Action|Comedy|Fantasy",
      "Action|Comedy|History",
      "Action|Comedy|Horror",
      "Action|Comedy|Romance",
      "Action|Comedy|Thriller",
      "Action|Comedy|War",
      "Action|Crime",
      "Action|Crime|Drama",
      "Action|Crime|Drama|Mystery|Thriller",
      "Action|Crime|Drama|Thriller",
      "Action|Crime|Horror",
      "Action|Crime|Mystery|Romance|Thriller",
      "Action|Crime|Sci-Fi",
      "Action|Crime|Sci-Fi|Thriller",
      "Action|Crime|Thriller",
      "Action|Drama",
      "Action|Drama|Adventure|Romance",
      "Action|Drama|Comedy|Crime|Thriller",
      "Action|Drama|Crime|Thriller",
      "Action|Drama|Fantasy",
      "Action|Drama|Fantasy|History",
      "Action|Drama|History",
      "Action|Drama|History|Romance|Western",
      "Action|Drama|History|War",
      "Action|Drama|Mystery",
      "Action|Drama|Mystery|Thriller",
      "Action|Drama|Romance",
      "Action|Drama|Romance|War",
      "Action|Drama|Sci-Fi",
      "Action|Drama|Sci-Fi|Thriller",
      "Action|Drama|Thriller",
      "Action|Drama|War",
      "Action|Drama|Western",
      "Action|Fantasy",
      "Action|Fantasy|Adventure",
      "Action|Fantasy|History|War",
      "Action|Fantasy|Horror",
      "Action|Fantasy|Sci-Fi|Thriller",
      "Action|Fantasy|Thriller",
      "Action|Horror",
      "Action|Horror|Sci-Fi",
      "Action|Horror|Sci-Fi|Thriller",
      "Action|Horror|Thriller",
      "Action|Mystery|Sci-Fi",
      "Action|Mystery|Sci-Fi|Thriller",
      "Action|Mystery|Thriller",
      "Action|Romance|Sci-Fi|Thriller",
      "Action|Sci-Fi",
      "Action|Sci-Fi|Thriller",
      "Action|Thriller",
      "Action|Thriller|Crime|Drama",
      "Action|Thriller|War",
      "Action|War",
      "Action|War|Drama",
      "Action|Western|Comedy",
      "Adventure|Biography|Drama",
      "Adventure|Comedy",
      "Adventure|Comedy|Family|Fantasy|Sci-Fi",
      "Adventure|Comedy|Fantasy",
      "Adventure|Comedy|Romance|Thriller",
      "Adventure|Comedy|Sci-Fi",
      "Adventure|Comedy|War",
      "Adventure|Crime|Drama|Western",
      "Adventure|Drama",
      "Adventure|Drama|Sci-Fi|Thriller",
      "Adventure|Drama|Thriller",
      "Adventure|Drama|War",
      "Adventure|Family|Fantasy",
      "Adventure|Family|Fantasy|Mystery",
      "Adventure|Family|Fantasy|Romance",
      "Adventure|Mystery",
      "Adventure|Sci-Fi|Thriller",
      "Adventure|War|Western",
      "Adventure|Western",
      "Animation|Action|Adventure",
      "Animation|Action|Adventure|Family",
      "Animation|Action|Adventure|Family|Sci-Fi",
      "Animation|Adventure|Family",
      "Animation|Drama|Family|Fantasy|Sci-Fi",
      "Animation|Drama|Music",
      "Animation|Horror|Sci-Fi",
      "Biography|Comedy|Crime|Drama|Thriller",
      "Biography|Comedy|Drama|History",
      "Biography|Comedy|Drama|Music",
      "Biography|Crime|Drama",
      "Biography|Drama|History",
      "Biography|Drama|History|Romance",
      "Comedy",
      "Comedy|Crime|Drama",
      "Comedy|Crime|Drama|Mystery|Thriller",
      "Comedy|Crime|Drama|Thriller",
      "Comedy|Crime|Drama|Thriller|War",
      "Comedy|Crime|Horror",
      "Comedy|Crime|Romance|Thriller",
      "Comedy|Crime|Thriller",
      "Comedy|Drama|Music",
      "Comedy|Drama|Sport",
      "Comedy|Drama|War",
      "Comedy|Family",
      "Comedy|Fantasy|Horror",
      "Comedy|Horror",
      "Comedy|Horror|Thriller",
      "Comedy|Sci-Fi|War",
      "Crime",
      "Crime|Drama",
      "Crime|Drama|History",
      "Crime|Drama|Mystery",
      "Crime|Drama|Mystery|Sci-Fi|Thriller",
      "Crime|Drama|Mystery|Thriller",
      "Crime|Drama|Romance|Thriller",
      "Crime|Drama|Sci-Fi",
      "Crime|Drama|Thriller",
      "Crime|Drama|Western",
      "Crime|Mystery|Thriller",
      "Crime|Thriller",
      "Crime|Thriller|Drama",
      "Documentary|History",
      "Drama",
      "Drama|Fantasy|Horror",
      "Drama|Fantasy|Horror|Sci-Fi|Thriller",
      "Drama|Fantasy|Sci-Fi",
      "Drama|Fantasy|War",
      "Drama|History",
      "Drama|History|Thriller",
      "Drama|History|Thriller|War",
      "Drama|History|War",
      "Drama|Horror|Musical|Thriller",
      "Drama|Horror|Mystery|Thriller",
      "Drama|Musical|Romance",
      "Drama|Mystery",
      "Drama|Mystery|Romance|War",
      "Drama|Mystery|Sci-Fi",
      "Drama|Mystery|Sci-Fi|Thriller",
      "Drama|Mystery|Thriller",
      "Drama|Romance",
      "Drama|Romance|Thriller",
      "Drama|Sci-Fi|Thriller",
      "Drama|Thriller",
      "Drama|War",
      "Drama|War|Action",
      "Fantasy|Horror",
      "Film-Noir|Mystery|Thriller",
      "Horror",
      "Horror|Mystery|Sci-Fi|Thriller",
      "Horror|Mystery|Thriller",
      "Horror|Sci-Fi",
      "Horror|Sci-Fi|Thriller",
      "Horror|Thriller",
      "Mystery|Thriller",
      "Sci-Fi",
      "Sci-Fi|Action|Thriller",
      "Thriller|Comedy|Action",
      "Thriller|Western",
      "War|Drama",
      "Western",
      "Western|Comedy"
    ],
    "data": [
      {
        "key": "Action|Adventure",
        "values": [
          {
            "category": "Action|Adventure",
            "axis": "0",
            "value": 122
          },
          {
            "category": "Action|Adventure",
            "axis": "60",
            "value": 110
          },
          {
            "category": "Action|Adventure",
            "axis": "80",
            "value": 116.25
          }
        ]
      },
      {
        "key": "Action|Adventure|Biography",
        "values": [
          {
            "category": "Action|Adventure|Biography",
            "axis": "0",
            "value": 175
          },
          {
            "category": "Action|Adventure|Biography",
            "axis": "50",
            "value": 93
          }
        ]
      },
      {
        "key": "Action|Adventure|Comedy",
        "values": [
          {
            "category": "Action|Adventure|Comedy",
            "axis": "90",
            "value": 95
          }
        ]
      },
      {
        "key": "Action|Adventure|Comedy|Crime",
        "values": [
          {
            "category": "Action|Adventure|Comedy|Crime",
            "axis": "0",
            "value": 106
          }
        ]
      },
      {
        "key": "Action|Adventure|Comedy|Family|Fantasy",
        "values": [
          {
            "category": "Action|Adventure|Comedy|Family|Fantasy",
            "axis": "90",
            "value": 130
          }
        ]
      },
      {
        "key": "Action|Adventure|Comedy|Fantasy",
        "values": [
          {
            "category": "Action|Adventure|Comedy|Fantasy",
            "axis": "80",
            "value": 99
          }
        ]
      },
      {
        "key": "Action|Adventure|Comedy|Music",
        "values": [
          {
            "category": "Action|Adventure|Comedy|Music",
            "axis": "0",
            "value": 98
          },
          {
            "category": "Action|Adventure|Comedy|Music",
            "axis": "90",
            "value": 104
          }
        ]
      },
      {
        "key": "Action|Adventure|Comedy|Romance|Thriller|Western",
        "values": [
          {
            "category": "Action|Adventure|Comedy|Romance|Thriller|Western",
            "axis": "90",
            "value": 136
          }
        ]
      },
      {
        "key": "Action|Adventure|Comedy|Thriller",
        "values": [
          {
            "category": "Action|Adventure|Comedy|Thriller",
            "axis": "0",
            "value": 104
          }
        ]
      },
      {
        "key": "Action|Adventure|Comedy|Thriller|War",
        "values": [
          {
            "category": "Action|Adventure|Comedy|Thriller|War",
            "axis": "0",
            "value": 124
          }
        ]
      },
      {
        "key": "Action|Adventure|Comedy|Thriller|Western",
        "values": [
          {
            "category": "Action|Adventure|Comedy|Thriller|Western",
            "axis": "90",
            "value": 127
          }
        ]
      },
      {
        "key": "Action|Adventure|Comedy|War",
        "values": [
          {
            "category": "Action|Adventure|Comedy|War",
            "axis": "70",
            "value": 144
          }
        ]
      },
      {
        "key": "Action|Adventure|Crime",
        "values": [
          {
            "category": "Action|Adventure|Crime",
            "axis": "90",
            "value": 119
          }
        ]
      },
      {
        "key": "Action|Adventure|Crime|Drama",
        "values": [
          {
            "category": "Action|Adventure|Crime|Drama",
            "axis": "0",
            "value": 140
          }
        ]
      },
      {
        "key": "Action|Adventure|Crime|Mystery|Thriller",
        "values": [
          {
            "category": "Action|Adventure|Crime|Mystery|Thriller",
            "axis": "90",
            "value": 130
          }
        ]
      },
      {
        "key": "Action|Adventure|Crime|Romance|Thriller",
        "values": [
          {
            "category": "Action|Adventure|Crime|Romance|Thriller",
            "axis": "60",
            "value": 142
          }
        ]
      },
      {
        "key": "Action|Adventure|Crime|Thriller",
        "values": [
          {
            "category": "Action|Adventure|Crime|Thriller",
            "axis": "60",
            "value": 118
          },
          {
            "category": "Action|Adventure|Crime|Thriller",
            "axis": "70",
            "value": 122.75
          },
          {
            "category": "Action|Adventure|Crime|Thriller",
            "axis": "80",
            "value": 129
          },
          {
            "category": "Action|Adventure|Crime|Thriller",
            "axis": "90",
            "value": 115.67
          }
        ]
      },
      {
        "key": "Action|Adventure|Drama",
        "values": [
          {
            "category": "Action|Adventure|Drama",
            "axis": "0",
            "value": 119.67
          },
          {
            "category": "Action|Adventure|Drama",
            "axis": "60",
            "value": 122
          },
          {
            "category": "Action|Adventure|Drama",
            "axis": "80",
            "value": 131.5
          },
          {
            "category": "Action|Adventure|Drama",
            "axis": "90",
            "value": 110
          }
        ]
      },
      {
        "key": "Action|Adventure|Drama|History|Romance|Thriller",
        "values": [
          {
            "category": "Action|Adventure|Drama|History|Romance|Thriller",
            "axis": "0",
            "value": 131
          }
        ]
      },
      {
        "key": "Action|Adventure|Drama|History|Romance|War",
        "values": [
          {
            "category": "Action|Adventure|Drama|History|Romance|War",
            "axis": "90",
            "value": 112
          }
        ]
      },
      {
        "key": "Action|Adventure|Drama|History|War",
        "values": [
          {
            "category": "Action|Adventure|Drama|History|War",
            "axis": "0",
            "value": 144
          }
        ]
      },
      {
        "key": "Action|Adventure|Drama|Romance",
        "values": [
          {
            "category": "Action|Adventure|Drama|Romance",
            "axis": "0",
            "value": 187
          }
        ]
      },
      {
        "key": "Action|Adventure|Drama|Thriller",
        "values": [
          {
            "category": "Action|Adventure|Drama|Thriller",
            "axis": "0",
            "value": 139
          }
        ]
      },
      {
        "key": "Action|Adventure|Drama|Thriller|War",
        "values": [
          {
            "category": "Action|Adventure|Drama|Thriller|War",
            "axis": "80",
            "value": 101
          }
        ]
      },
      {
        "key": "Action|Adventure|Family",
        "values": [
          {
            "category": "Action|Adventure|Family",
            "axis": "0",
            "value": 150
          }
        ]
      },
      {
        "key": "Action|Adventure|Fantasy",
        "values": [
          {
            "category": "Action|Adventure|Fantasy",
            "axis": "0",
            "value": 154.67
          },
          {
            "category": "Action|Adventure|Fantasy",
            "axis": "80",
            "value": 89
          },
          {
            "category": "Action|Adventure|Fantasy",
            "axis": "90",
            "value": 113.5
          }
        ]
      },
      {
        "key": "Action|Adventure|Fantasy|Horror",
        "values": [
          {
            "category": "Action|Adventure|Fantasy|Horror",
            "axis": "0",
            "value": 95
          }
        ]
      },
      {
        "key": "Action|Adventure|Fantasy|Horror|Sci-Fi|Thriller",
        "values": [
          {
            "category": "Action|Adventure|Fantasy|Horror|Sci-Fi|Thriller",
            "axis": "0",
            "value": 113
          }
        ]
      },
      {
        "key": "Action|Adventure|Fantasy|Sci-Fi",
        "values": [
          {
            "category": "Action|Adventure|Fantasy|Sci-Fi",
            "axis": "0",
            "value": 139.5
          },
          {
            "category": "Action|Adventure|Fantasy|Sci-Fi",
            "axis": "70",
            "value": 121
          },
          {
            "category": "Action|Adventure|Fantasy|Sci-Fi",
            "axis": "80",
            "value": 134
          },
          {
            "category": "Action|Adventure|Fantasy|Sci-Fi",
            "axis": "90",
            "value": 136
          }
        ]
      },
      {
        "key": "Action|Adventure|Fantasy|Sci-Fi|Thriller",
        "values": [
          {
            "category": "Action|Adventure|Fantasy|Sci-Fi|Thriller",
            "axis": "0",
            "value": 96.5
          },
          {
            "category": "Action|Adventure|Fantasy|Sci-Fi|Thriller",
            "axis": "90",
            "value": 101
          }
        ]
      },
      {
        "key": "Action|Adventure|Fantasy|Thriller",
        "values": [
          {
            "category": "Action|Adventure|Fantasy|Thriller",
            "axis": "0",
            "value": 92
          }
        ]
      },
      {
        "key": "Action|Adventure|History",
        "values": [
          {
            "category": "Action|Adventure|History",
            "axis": "0",
            "value": 142
          }
        ]
      },
      {
        "key": "Action|Adventure|Horror",
        "values": [
          {
            "category": "Action|Adventure|Horror",
            "axis": "0",
            "value": 105.5
          },
          {
            "category": "Action|Adventure|Horror",
            "axis": "90",
            "value": 108
          }
        ]
      },
      {
        "key": "Action|Adventure|Horror|Sci-Fi",
        "values": [
          {
            "category": "Action|Adventure|Horror|Sci-Fi",
            "axis": "50",
            "value": 79
          }
        ]
      },
      {
        "key": "Action|Adventure|Mystery",
        "values": [
          {
            "category": "Action|Adventure|Mystery",
            "axis": "90",
            "value": 109
          }
        ]
      },
      {
        "key": "Action|Adventure|Romance|Sport",
        "values": [
          {
            "category": "Action|Adventure|Romance|Sport",
            "axis": "80",
            "value": 95
          }
        ]
      },
      {
        "key": "Action|Adventure|Sci-Fi",
        "values": [
          {
            "category": "Action|Adventure|Sci-Fi",
            "axis": "0",
            "value": 121.43
          },
          {
            "category": "Action|Adventure|Sci-Fi",
            "axis": "80",
            "value": 132.67
          },
          {
            "category": "Action|Adventure|Sci-Fi",
            "axis": "90",
            "value": 123.67
          }
        ]
      },
      {
        "key": "Action|Adventure|Sci-Fi|Thriller",
        "values": [
          {
            "category": "Action|Adventure|Sci-Fi|Thriller",
            "axis": "0",
            "value": 115.6
          },
          {
            "category": "Action|Adventure|Sci-Fi|Thriller",
            "axis": "80",
            "value": 107
          },
          {
            "category": "Action|Adventure|Sci-Fi|Thriller",
            "axis": "90",
            "value": 151
          }
        ]
      },
      {
        "key": "Action|Adventure|Thriller",
        "values": [
          {
            "category": "Action|Adventure|Thriller",
            "axis": "0",
            "value": 124.5
          },
          {
            "category": "Action|Adventure|Thriller",
            "axis": "10",
            "value": 103
          },
          {
            "category": "Action|Adventure|Thriller",
            "axis": "70",
            "value": 88
          },
          {
            "category": "Action|Adventure|Thriller",
            "axis": "80",
            "value": 101.33
          },
          {
            "category": "Action|Adventure|Thriller",
            "axis": "90",
            "value": 117.8
          }
        ]
      },
      {
        "key": "Action|Adventure|Thriller|War",
        "values": [
          {
            "category": "Action|Adventure|Thriller|War",
            "axis": "90",
            "value": 111
          }
        ]
      },
      {
        "key": "Action|Adventure|War",
        "values": [
          {
            "category": "Action|Adventure|War",
            "axis": "60",
            "value": 158
          }
        ]
      },
      {
        "key": "Action|Adventure|Western",
        "values": [
          {
            "category": "Action|Adventure|Western",
            "axis": "0",
            "value": 129
          }
        ]
      },
      {
        "key": "Action|Biography|Crime|Drama|Thriller",
        "values": [
          {
            "category": "Action|Biography|Crime|Drama|Thriller",
            "axis": "0",
            "value": 127
          }
        ]
      },
      {
        "key": "Action|Biography|Drama|History|War",
        "values": [
          {
            "category": "Action|Biography|Drama|History|War",
            "axis": "90",
            "value": 177
          }
        ]
      },
      {
        "key": "Action|Biography|Drama|Sport",
        "values": [
          {
            "category": "Action|Biography|Drama|Sport",
            "axis": "0",
            "value": 104
          }
        ]
      },
      {
        "key": "Action|Comedy",
        "values": [
          {
            "category": "Action|Comedy",
            "axis": "0",
            "value": 102.5
          },
          {
            "category": "Action|Comedy",
            "axis": "10",
            "value": 117
          },
          {
            "category": "Action|Comedy",
            "axis": "90",
            "value": 103
          }
        ]
      },
      {
        "key": "Action|Comedy|Crime",
        "values": [
          {
            "category": "Action|Comedy|Crime",
            "axis": "0",
            "value": 102.67
          },
          {
            "category": "Action|Comedy|Crime",
            "axis": "90",
            "value": 103
          }
        ]
      },
      {
        "key": "Action|Comedy|Crime|Drama|Thriller",
        "values": [
          {
            "category": "Action|Comedy|Crime|Drama|Thriller",
            "axis": "0",
            "value": 101
          },
          {
            "category": "Action|Comedy|Crime|Drama|Thriller",
            "axis": "90",
            "value": 118
          }
        ]
      },
      {
        "key": "Action|Comedy|Crime|Fantasy",
        "values": [
          {
            "category": "Action|Comedy|Crime|Fantasy",
            "axis": "0",
            "value": 99
          }
        ]
      },
      {
        "key": "Action|Comedy|Crime|Mystery",
        "values": [
          {
            "category": "Action|Comedy|Crime|Mystery",
            "axis": "0",
            "value": 103
          }
        ]
      },
      {
        "key": "Action|Comedy|Crime|Mystery|Thriller",
        "values": [
          {
            "category": "Action|Comedy|Crime|Mystery|Thriller",
            "axis": "90",
            "value": 105
          }
        ]
      },
      {
        "key": "Action|Comedy|Crime|Thriller",
        "values": [
          {
            "category": "Action|Comedy|Crime|Thriller",
            "axis": "0",
            "value": 108.67
          },
          {
            "category": "Action|Comedy|Crime|Thriller",
            "axis": "80",
            "value": 100
          },
          {
            "category": "Action|Comedy|Crime|Thriller",
            "axis": "90",
            "value": 85
          }
        ]
      },
      {
        "key": "Action|Comedy|Fantasy",
        "values": [
          {
            "category": "Action|Comedy|Fantasy",
            "axis": "0",
            "value": 104
          }
        ]
      },
      {
        "key": "Action|Comedy|History",
        "values": [
          {
            "category": "Action|Comedy|History",
            "axis": "90",
            "value": 100
          }
        ]
      },
      {
        "key": "Action|Comedy|Horror",
        "values": [
          {
            "category": "Action|Comedy|Horror",
            "axis": "0",
            "value": 85
          }
        ]
      },
      {
        "key": "Action|Comedy|Romance",
        "values": [
          {
            "category": "Action|Comedy|Romance",
            "axis": "0",
            "value": 120
          }
        ]
      },
      {
        "key": "Action|Comedy|Thriller",
        "values": [
          {
            "category": "Action|Comedy|Thriller",
            "axis": "0",
            "value": 107
          }
        ]
      },
      {
        "key": "Action|Comedy|War",
        "values": [
          {
            "category": "Action|Comedy|War",
            "axis": "90",
            "value": 85
          }
        ]
      },
      {
        "key": "Action|Crime",
        "values": [
          {
            "category": "Action|Crime",
            "axis": "0",
            "value": 98.5
          }
        ]
      },
      {
        "key": "Action|Crime|Drama",
        "values": [
          {
            "category": "Action|Crime|Drama",
            "axis": "0",
            "value": 111.25
          },
          {
            "category": "Action|Crime|Drama",
            "axis": "80",
            "value": 96.75
          },
          {
            "category": "Action|Crime|Drama",
            "axis": "90",
            "value": 96.5
          }
        ]
      },
      {
        "key": "Action|Crime|Drama|Mystery|Thriller",
        "values": [
          {
            "category": "Action|Crime|Drama|Mystery|Thriller",
            "axis": "0",
            "value": 108.25
          },
          {
            "category": "Action|Crime|Drama|Mystery|Thriller",
            "axis": "90",
            "value": 115.5
          }
        ]
      },
      {
        "key": "Action|Crime|Drama|Thriller",
        "values": [
          {
            "category": "Action|Crime|Drama|Thriller",
            "axis": "0",
            "value": 110.5
          },
          {
            "category": "Action|Crime|Drama|Thriller",
            "axis": "70",
            "value": 123
          },
          {
            "category": "Action|Crime|Drama|Thriller",
            "axis": "80",
            "value": 99.67
          },
          {
            "category": "Action|Crime|Drama|Thriller",
            "axis": "90",
            "value": 113
          }
        ]
      },
      {
        "key": "Action|Crime|Horror",
        "values": [
          {
            "category": "Action|Crime|Horror",
            "axis": "90",
            "value": 108
          }
        ]
      },
      {
        "key": "Action|Crime|Mystery|Romance|Thriller",
        "values": [
          {
            "category": "Action|Crime|Mystery|Romance|Thriller",
            "axis": "90",
            "value": 135
          }
        ]
      },
      {
        "key": "Action|Crime|Sci-Fi",
        "values": [
          {
            "category": "Action|Crime|Sci-Fi",
            "axis": "80",
            "value": 102
          }
        ]
      },
      {
        "key": "Action|Crime|Sci-Fi|Thriller",
        "values": [
          {
            "category": "Action|Crime|Sci-Fi|Thriller",
            "axis": "90",
            "value": 126.5
          }
        ]
      },
      {
        "key": "Action|Crime|Thriller",
        "values": [
          {
            "category": "Action|Crime|Thriller",
            "axis": "0",
            "value": 103.12
          },
          {
            "category": "Action|Crime|Thriller",
            "axis": "10",
            "value": 105
          },
          {
            "category": "Action|Crime|Thriller",
            "axis": "70",
            "value": 97.5
          },
          {
            "category": "Action|Crime|Thriller",
            "axis": "80",
            "value": 109
          },
          {
            "category": "Action|Crime|Thriller",
            "axis": "90",
            "value": 116
          }
        ]
      },
      {
        "key": "Action|Drama",
        "values": [
          {
            "category": "Action|Drama",
            "axis": "50",
            "value": 207
          },
          {
            "category": "Action|Drama",
            "axis": "60",
            "value": 119
          },
          {
            "category": "Action|Drama",
            "axis": "70",
            "value": 86
          },
          {
            "category": "Action|Drama",
            "axis": "90",
            "value": 107
          }
        ]
      },
      {
        "key": "Action|Drama|Adventure|Romance",
        "values": [
          {
            "category": "Action|Drama|Adventure|Romance",
            "axis": "0",
            "value": 104
          }
        ]
      },
      {
        "key": "Action|Drama|Comedy|Crime|Thriller",
        "values": [
          {
            "category": "Action|Drama|Comedy|Crime|Thriller",
            "axis": "0",
            "value": 94
          }
        ]
      },
      {
        "key": "Action|Drama|Crime|Thriller",
        "values": [
          {
            "category": "Action|Drama|Crime|Thriller",
            "axis": "0",
            "value": 109
          },
          {
            "category": "Action|Drama|Crime|Thriller",
            "axis": "90",
            "value": 96
          }
        ]
      },
      {
        "key": "Action|Drama|Fantasy",
        "values": [
          {
            "category": "Action|Drama|Fantasy",
            "axis": "80",
            "value": 140
          }
        ]
      },
      {
        "key": "Action|Drama|Fantasy|History",
        "values": [
          {
            "category": "Action|Drama|Fantasy|History",
            "axis": "70",
            "value": 83
          }
        ]
      },
      {
        "key": "Action|Drama|History",
        "values": [
          {
            "category": "Action|Drama|History",
            "axis": "0",
            "value": 99
          },
          {
            "category": "Action|Drama|History",
            "axis": "70",
            "value": 123
          },
          {
            "category": "Action|Drama|History",
            "axis": "80",
            "value": 110
          }
        ]
      },
      {
        "key": "Action|Drama|History|Romance|Western",
        "values": [
          {
            "category": "Action|Drama|History|Romance|Western",
            "axis": "90",
            "value": 130
          }
        ]
      },
      {
        "key": "Action|Drama|History|War",
        "values": [
          {
            "category": "Action|Drama|History|War",
            "axis": "0",
            "value": 146
          }
        ]
      },
      {
        "key": "Action|Drama|Mystery",
        "values": [
          {
            "category": "Action|Drama|Mystery",
            "axis": "0",
            "value": 162
          }
        ]
      },
      {
        "key": "Action|Drama|Mystery|Thriller",
        "values": [
          {
            "category": "Action|Drama|Mystery|Thriller",
            "axis": "90",
            "value": 115
          }
        ]
      },
      {
        "key": "Action|Drama|Romance",
        "values": [
          {
            "category": "Action|Drama|Romance",
            "axis": "0",
            "value": 120
          }
        ]
      },
      {
        "key": "Action|Drama|Romance|War",
        "values": [
          {
            "category": "Action|Drama|Romance|War",
            "axis": "0",
            "value": 183
          }
        ]
      },
      {
        "key": "Action|Drama|Sci-Fi",
        "values": [
          {
            "category": "Action|Drama|Sci-Fi",
            "axis": "90",
            "value": 100.5
          }
        ]
      },
      {
        "key": "Action|Drama|Sci-Fi|Thriller",
        "values": [
          {
            "category": "Action|Drama|Sci-Fi|Thriller",
            "axis": "0",
            "value": 107
          }
        ]
      },
      {
        "key": "Action|Drama|Thriller",
        "values": [
          {
            "category": "Action|Drama|Thriller",
            "axis": "0",
            "value": 114.5
          },
          {
            "category": "Action|Drama|Thriller",
            "axis": "70",
            "value": 89
          },
          {
            "category": "Action|Drama|Thriller",
            "axis": "90",
            "value": 115
          }
        ]
      },
      {
        "key": "Action|Drama|War",
        "values": [
          {
            "category": "Action|Drama|War",
            "axis": "0",
            "value": 142.75
          },
          {
            "category": "Action|Drama|War",
            "axis": "70",
            "value": 119
          },
          {
            "category": "Action|Drama|War",
            "axis": "80",
            "value": 131.67
          },
          {
            "category": "Action|Drama|War",
            "axis": "90",
            "value": 169
          }
        ]
      },
      {
        "key": "Action|Drama|Western",
        "values": [
          {
            "category": "Action|Drama|Western",
            "axis": "70",
            "value": 105
          }
        ]
      },
      {
        "key": "Action|Fantasy",
        "values": [
          {
            "category": "Action|Fantasy",
            "axis": "90",
            "value": 114
          }
        ]
      },
      {
        "key": "Action|Fantasy|Adventure",
        "values": [
          {
            "category": "Action|Fantasy|Adventure",
            "axis": "80",
            "value": 129
          }
        ]
      },
      {
        "key": "Action|Fantasy|History|War",
        "values": [
          {
            "category": "Action|Fantasy|History|War",
            "axis": "0",
            "value": 117
          }
        ]
      },
      {
        "key": "Action|Fantasy|Horror",
        "values": [
          {
            "category": "Action|Fantasy|Horror",
            "axis": "90",
            "value": 120
          }
        ]
      },
      {
        "key": "Action|Fantasy|Sci-Fi|Thriller",
        "values": [
          {
            "category": "Action|Fantasy|Sci-Fi|Thriller",
            "axis": "0",
            "value": 99
          }
        ]
      },
      {
        "key": "Action|Fantasy|Thriller",
        "values": [
          {
            "category": "Action|Fantasy|Thriller",
            "axis": "0",
            "value": 117.5
          }
        ]
      },
      {
        "key": "Action|Horror",
        "values": [
          {
            "category": "Action|Horror",
            "axis": "0",
            "value": 105
          },
          {
            "category": "Action|Horror",
            "axis": "70",
            "value": 127
          }
        ]
      },
      {
        "key": "Action|Horror|Sci-Fi",
        "values": [
          {
            "category": "Action|Horror|Sci-Fi",
            "axis": "90",
            "value": 99
          }
        ]
      },
      {
        "key": "Action|Horror|Sci-Fi|Thriller",
        "values": [
          {
            "category": "Action|Horror|Sci-Fi|Thriller",
            "axis": "0",
            "value": 100
          }
        ]
      },
      {
        "key": "Action|Horror|Thriller",
        "values": [
          {
            "category": "Action|Horror|Thriller",
            "axis": "0",
            "value": 140.5
          }
        ]
      },
      {
        "key": "Action|Mystery|Sci-Fi",
        "values": [
          {
            "category": "Action|Mystery|Sci-Fi",
            "axis": "0",
            "value": 115
          }
        ]
      },
      {
        "key": "Action|Mystery|Sci-Fi|Thriller",
        "values": [
          {
            "category": "Action|Mystery|Sci-Fi|Thriller",
            "axis": "0",
            "value": 145
          }
        ]
      },
      {
        "key": "Action|Mystery|Thriller",
        "values": [
          {
            "category": "Action|Mystery|Thriller",
            "axis": "0",
            "value": 119
          }
        ]
      },
      {
        "key": "Action|Romance|Sci-Fi|Thriller",
        "values": [
          {
            "category": "Action|Romance|Sci-Fi|Thriller",
            "axis": "90",
            "value": 92
          }
        ]
      },
      {
        "key": "Action|Sci-Fi",
        "values": [
          {
            "category": "Action|Sci-Fi",
            "axis": "0",
            "value": 105.33
          },
          {
            "category": "Action|Sci-Fi",
            "axis": "80",
            "value": 103
          },
          {
            "category": "Action|Sci-Fi",
            "axis": "90",
            "value": 137
          }
        ]
      },
      {
        "key": "Action|Sci-Fi|Thriller",
        "values": [
          {
            "category": "Action|Sci-Fi|Thriller",
            "axis": "0",
            "value": 101.29
          },
          {
            "category": "Action|Sci-Fi|Thriller",
            "axis": "80",
            "value": 96
          },
          {
            "category": "Action|Sci-Fi|Thriller",
            "axis": "90",
            "value": 137
          }
        ]
      },
      {
        "key": "Action|Thriller",
        "values": [
          {
            "category": "Action|Thriller",
            "axis": "0",
            "value": 106.67
          },
          {
            "category": "Action|Thriller",
            "axis": "10",
            "value": 119
          },
          {
            "category": "Action|Thriller",
            "axis": "70",
            "value": 89
          },
          {
            "category": "Action|Thriller",
            "axis": "80",
            "value": 113.67
          },
          {
            "category": "Action|Thriller",
            "axis": "90",
            "value": 106
          }
        ]
      },
      {
        "key": "Action|Thriller|Crime|Drama",
        "values": [
          {
            "category": "Action|Thriller|Crime|Drama",
            "axis": "90",
            "value": 91
          }
        ]
      },
      {
        "key": "Action|Thriller|War",
        "values": [
          {
            "category": "Action|Thriller|War",
            "axis": "0",
            "value": 92
          }
        ]
      },
      {
        "key": "Action|War",
        "values": [
          {
            "category": "Action|War",
            "axis": "80",
            "value": 96
          }
        ]
      },
      {
        "key": "Action|War|Drama",
        "values": [
          {
            "category": "Action|War|Drama",
            "axis": "0",
            "value": 106
          }
        ]
      },
      {
        "key": "Action|Western|Comedy",
        "values": [
          {
            "category": "Action|Western|Comedy",
            "axis": "90",
            "value": 106
          }
        ]
      },
      {
        "key": "Adventure|Biography|Drama",
        "values": [
          {
            "category": "Adventure|Biography|Drama",
            "axis": "60",
            "value": 199
          },
          {
            "category": "Adventure|Biography|Drama",
            "axis": "90",
            "value": 148
          }
        ]
      },
      {
        "key": "Adventure|Comedy",
        "values": [
          {
            "category": "Adventure|Comedy",
            "axis": "90",
            "value": 118
          }
        ]
      },
      {
        "key": "Adventure|Comedy|Family|Fantasy|Sci-Fi",
        "values": [
          {
            "category": "Adventure|Comedy|Family|Fantasy|Sci-Fi",
            "axis": "90",
            "value": 104
          }
        ]
      },
      {
        "key": "Adventure|Comedy|Fantasy",
        "values": [
          {
            "category": "Adventure|Comedy|Fantasy",
            "axis": "70",
            "value": 91
          }
        ]
      },
      {
        "key": "Adventure|Comedy|Romance|Thriller",
        "values": [
          {
            "category": "Adventure|Comedy|Romance|Thriller",
            "axis": "0",
            "value": 112
          }
        ]
      },
      {
        "key": "Adventure|Comedy|Sci-Fi",
        "values": [
          {
            "category": "Adventure|Comedy|Sci-Fi",
            "axis": "90",
            "value": 102
          }
        ]
      },
      {
        "key": "Adventure|Comedy|War",
        "values": [
          {
            "category": "Adventure|Comedy|War",
            "axis": "70",
            "value": 116
          }
        ]
      },
      {
        "key": "Adventure|Crime|Drama|Western",
        "values": [
          {
            "category": "Adventure|Crime|Drama|Western",
            "axis": "0",
            "value": 122
          }
        ]
      },
      {
        "key": "Adventure|Drama",
        "values": [
          {
            "category": "Adventure|Drama",
            "axis": "0",
            "value": 163
          },
          {
            "category": "Adventure|Drama",
            "axis": "90",
            "value": 103
          }
        ]
      },
      {
        "key": "Adventure|Drama|Sci-Fi|Thriller",
        "values": [
          {
            "category": "Adventure|Drama|Sci-Fi|Thriller",
            "axis": "0",
            "value": 109
          }
        ]
      },
      {
        "key": "Adventure|Drama|Thriller",
        "values": [
          {
            "category": "Adventure|Drama|Thriller",
            "axis": "0",
            "value": 143
          }
        ]
      },
      {
        "key": "Adventure|Drama|War",
        "values": [
          {
            "category": "Adventure|Drama|War",
            "axis": "0",
            "value": 153
          }
        ]
      },
      {
        "key": "Adventure|Family|Fantasy",
        "values": [
          {
            "category": "Adventure|Family|Fantasy",
            "axis": "0",
            "value": 143
          }
        ]
      },
      {
        "key": "Adventure|Family|Fantasy|Mystery",
        "values": [
          {
            "category": "Adventure|Family|Fantasy|Mystery",
            "axis": "0",
            "value": 157
          }
        ]
      },
      {
        "key": "Adventure|Family|Fantasy|Romance",
        "values": [
          {
            "category": "Adventure|Family|Fantasy|Romance",
            "axis": "0",
            "value": 127
          }
        ]
      },
      {
        "key": "Adventure|Mystery",
        "values": [
          {
            "category": "Adventure|Mystery",
            "axis": "90",
            "value": 105
          }
        ]
      },
      {
        "key": "Adventure|Sci-Fi|Thriller",
        "values": [
          {
            "category": "Adventure|Sci-Fi|Thriller",
            "axis": "0",
            "value": 107
          }
        ]
      },
      {
        "key": "Adventure|War|Western",
        "values": [
          {
            "category": "Adventure|War|Western",
            "axis": "60",
            "value": 123
          }
        ]
      },
      {
        "key": "Adventure|Western",
        "values": [
          {
            "category": "Adventure|Western",
            "axis": "70",
            "value": 138
          }
        ]
      },
      {
        "key": "Animation|Action|Adventure",
        "values": [
          {
            "category": "Animation|Action|Adventure",
            "axis": "0",
            "value": 96
          }
        ]
      },
      {
        "key": "Animation|Action|Adventure|Family",
        "values": [
          {
            "category": "Animation|Action|Adventure|Family",
            "axis": "0",
            "value": 115
          }
        ]
      },
      {
        "key": "Animation|Action|Adventure|Family|Sci-Fi",
        "values": [
          {
            "category": "Animation|Action|Adventure|Family|Sci-Fi",
            "axis": "80",
            "value": 84
          }
        ]
      },
      {
        "key": "Animation|Adventure|Family",
        "values": [
          {
            "category": "Animation|Adventure|Family",
            "axis": "90",
            "value": 88
          }
        ]
      },
      {
        "key": "Animation|Drama|Family|Fantasy|Sci-Fi",
        "values": [
          {
            "category": "Animation|Drama|Family|Fantasy|Sci-Fi",
            "axis": "80",
            "value": 82
          }
        ]
      },
      {
        "key": "Animation|Drama|Music",
        "values": [
          {
            "category": "Animation|Drama|Music",
            "axis": "80",
            "value": 96
          }
        ]
      },
      {
        "key": "Animation|Horror|Sci-Fi",
        "values": [
          {
            "category": "Animation|Horror|Sci-Fi",
            "axis": "80",
            "value": 124
          }
        ]
      },
      {
        "key": "Biography|Comedy|Crime|Drama|Thriller",
        "values": [
          {
            "category": "Biography|Comedy|Crime|Drama|Thriller",
            "axis": "0",
            "value": 113
          }
        ]
      },
      {
        "key": "Biography|Comedy|Drama|History",
        "values": [
          {
            "category": "Biography|Comedy|Drama|History",
            "axis": "0",
            "value": 102
          }
        ]
      },
      {
        "key": "Biography|Comedy|Drama|Music",
        "values": [
          {
            "category": "Biography|Comedy|Drama|Music",
            "axis": "0",
            "value": 117
          }
        ]
      },
      {
        "key": "Biography|Crime|Drama",
        "values": [
          {
            "category": "Biography|Crime|Drama",
            "axis": "0",
            "value": 139.5
          },
          {
            "category": "Biography|Crime|Drama",
            "axis": "90",
            "value": 178
          }
        ]
      },
      {
        "key": "Biography|Drama|History",
        "values": [
          {
            "category": "Biography|Drama|History",
            "axis": "0",
            "value": 134.67
          },
          {
            "category": "Biography|Drama|History",
            "axis": "70",
            "value": 172
          },
          {
            "category": "Biography|Drama|History",
            "axis": "90",
            "value": 195
          }
        ]
      },
      {
        "key": "Biography|Drama|History|Romance",
        "values": [
          {
            "category": "Biography|Drama|History|Romance",
            "axis": "0",
            "value": 135
          }
        ]
      },
      {
        "key": "Comedy",
        "values": [
          {
            "category": "Comedy",
            "axis": "0",
            "value": 87
          },
          {
            "category": "Comedy",
            "axis": "80",
            "value": 97
          }
        ]
      },
      {
        "key": "Comedy|Crime|Drama",
        "values": [
          {
            "category": "Comedy|Crime|Drama",
            "axis": "90",
            "value": 106
          }
        ]
      },
      {
        "key": "Comedy|Crime|Drama|Mystery|Thriller",
        "values": [
          {
            "category": "Comedy|Crime|Drama|Mystery|Thriller",
            "axis": "70",
            "value": 95
          }
        ]
      },
      {
        "key": "Comedy|Crime|Drama|Thriller",
        "values": [
          {
            "category": "Comedy|Crime|Drama|Thriller",
            "axis": "0",
            "value": 108
          }
        ]
      },
      {
        "key": "Comedy|Crime|Drama|Thriller|War",
        "values": [
          {
            "category": "Comedy|Crime|Drama|Thriller|War",
            "axis": "0",
            "value": 98
          }
        ]
      },
      {
        "key": "Comedy|Crime|Horror",
        "values": [
          {
            "category": "Comedy|Crime|Horror",
            "axis": "90",
            "value": 88
          }
        ]
      },
      {
        "key": "Comedy|Crime|Romance|Thriller",
        "values": [
          {
            "category": "Comedy|Crime|Romance|Thriller",
            "axis": "0",
            "value": 93
          },
          {
            "category": "Comedy|Crime|Romance|Thriller",
            "axis": "90",
            "value": 123
          }
        ]
      },
      {
        "key": "Comedy|Crime|Thriller",
        "values": [
          {
            "category": "Comedy|Crime|Thriller",
            "axis": "0",
            "value": 104
          }
        ]
      },
      {
        "key": "Comedy|Drama|Music",
        "values": [
          {
            "category": "Comedy|Drama|Music",
            "axis": "0",
            "value": 96
          }
        ]
      },
      {
        "key": "Comedy|Drama|Sport",
        "values": [
          {
            "category": "Comedy|Drama|Sport",
            "axis": "0",
            "value": 99
          }
        ]
      },
      {
        "key": "Comedy|Drama|War",
        "values": [
          {
            "category": "Comedy|Drama|War",
            "axis": "60",
            "value": 115
          }
        ]
      },
      {
        "key": "Comedy|Family",
        "values": [
          {
            "category": "Comedy|Family",
            "axis": "80",
            "value": 94
          }
        ]
      },
      {
        "key": "Comedy|Fantasy|Horror",
        "values": [
          {
            "category": "Comedy|Fantasy|Horror",
            "axis": "90",
            "value": 81
          }
        ]
      },
      {
        "key": "Comedy|Horror",
        "values": [
          {
            "category": "Comedy|Horror",
            "axis": "0",
            "value": 93.5
          },
          {
            "category": "Comedy|Horror",
            "axis": "80",
            "value": 102
          },
          {
            "category": "Comedy|Horror",
            "axis": "90",
            "value": 104
          }
        ]
      },
      {
        "key": "Comedy|Horror|Thriller",
        "values": [
          {
            "category": "Comedy|Horror|Thriller",
            "axis": "0",
            "value": 96
          }
        ]
      },
      {
        "key": "Comedy|Sci-Fi|War",
        "values": [
          {
            "category": "Comedy|Sci-Fi|War",
            "axis": "60",
            "value": 95
          }
        ]
      },
      {
        "key": "Crime",
        "values": [
          {
            "category": "Crime",
            "axis": "60",
            "value": 95
          }
        ]
      },
      {
        "key": "Crime|Drama",
        "values": [
          {
            "category": "Crime|Drama",
            "axis": "0",
            "value": 116
          },
          {
            "category": "Crime|Drama",
            "axis": "70",
            "value": 113
          },
          {
            "category": "Crime|Drama",
            "axis": "80",
            "value": 170
          },
          {
            "category": "Crime|Drama",
            "axis": "90",
            "value": 125
          }
        ]
      },
      {
        "key": "Crime|Drama|History",
        "values": [
          {
            "category": "Crime|Drama|History",
            "axis": "0",
            "value": 167
          }
        ]
      },
      {
        "key": "Crime|Drama|Mystery",
        "values": [
          {
            "category": "Crime|Drama|Mystery",
            "axis": "0",
            "value": 110
          },
          {
            "category": "Crime|Drama|Mystery",
            "axis": "60",
            "value": 161
          }
        ]
      },
      {
        "key": "Crime|Drama|Mystery|Sci-Fi|Thriller",
        "values": [
          {
            "category": "Crime|Drama|Mystery|Sci-Fi|Thriller",
            "axis": "90",
            "value": 145
          }
        ]
      },
      {
        "key": "Crime|Drama|Mystery|Thriller",
        "values": [
          {
            "category": "Crime|Drama|Mystery|Thriller",
            "axis": "0",
            "value": 124.2
          }
        ]
      },
      {
        "key": "Crime|Drama|Romance|Thriller",
        "values": [
          {
            "category": "Crime|Drama|Romance|Thriller",
            "axis": "0",
            "value": 115
          },
          {
            "category": "Crime|Drama|Romance|Thriller",
            "axis": "90",
            "value": 142
          }
        ]
      },
      {
        "key": "Crime|Drama|Sci-Fi",
        "values": [
          {
            "category": "Crime|Drama|Sci-Fi",
            "axis": "70",
            "value": 136
          }
        ]
      },
      {
        "key": "Crime|Drama|Thriller",
        "values": [
          {
            "category": "Crime|Drama|Thriller",
            "axis": "0",
            "value": 116.25
          },
          {
            "category": "Crime|Drama|Thriller",
            "axis": "90",
            "value": 122.88
          }
        ]
      },
      {
        "key": "Crime|Drama|Western",
        "values": [
          {
            "category": "Crime|Drama|Western",
            "axis": "0",
            "value": 115
          }
        ]
      },
      {
        "key": "Crime|Mystery|Thriller",
        "values": [
          {
            "category": "Crime|Mystery|Thriller",
            "axis": "90",
            "value": 114.5
          }
        ]
      },
      {
        "key": "Crime|Thriller",
        "values": [
          {
            "category": "Crime|Thriller",
            "axis": "0",
            "value": 111
          },
          {
            "category": "Crime|Thriller",
            "axis": "90",
            "value": 107.25
          }
        ]
      },
      {
        "key": "Crime|Thriller|Drama",
        "values": [
          {
            "category": "Crime|Thriller|Drama",
            "axis": "0",
            "value": 95
          }
        ]
      },
      {
        "key": "Documentary|History",
        "values": [
          {
            "category": "Documentary|History",
            "axis": "0",
            "value": 116
          }
        ]
      },
      {
        "key": "Drama",
        "values": [
          {
            "category": "Drama",
            "axis": "0",
            "value": 151
          },
          {
            "category": "Drama",
            "axis": "90",
            "value": 139
          }
        ]
      },
      {
        "key": "Drama|Fantasy|Horror",
        "values": [
          {
            "category": "Drama|Fantasy|Horror",
            "axis": "0",
            "value": 98
          },
          {
            "category": "Drama|Fantasy|Horror",
            "axis": "90",
            "value": 128
          }
        ]
      },
      {
        "key": "Drama|Fantasy|Horror|Sci-Fi|Thriller",
        "values": [
          {
            "category": "Drama|Fantasy|Horror|Sci-Fi|Thriller",
            "axis": "80",
            "value": 102
          }
        ]
      },
      {
        "key": "Drama|Fantasy|Sci-Fi",
        "values": [
          {
            "category": "Drama|Fantasy|Sci-Fi",
            "axis": "80",
            "value": 132
          }
        ]
      },
      {
        "key": "Drama|Fantasy|War",
        "values": [
          {
            "category": "Drama|Fantasy|War",
            "axis": "0",
            "value": 118
          }
        ]
      },
      {
        "key": "Drama|History",
        "values": [
          {
            "category": "Drama|History",
            "axis": "90",
            "value": 124
          }
        ]
      },
      {
        "key": "Drama|History|Thriller",
        "values": [
          {
            "category": "Drama|History|Thriller",
            "axis": "0",
            "value": 154
          }
        ]
      },
      {
        "key": "Drama|History|Thriller|War",
        "values": [
          {
            "category": "Drama|History|Thriller|War",
            "axis": "0",
            "value": 138
          }
        ]
      },
      {
        "key": "Drama|History|War",
        "values": [
          {
            "category": "Drama|History|War",
            "axis": "0",
            "value": 138.5
          },
          {
            "category": "Drama|History|War",
            "axis": "60",
            "value": 138
          },
          {
            "category": "Drama|History|War",
            "axis": "70",
            "value": 175
          },
          {
            "category": "Drama|History|War",
            "axis": "80",
            "value": 131
          }
        ]
      },
      {
        "key": "Drama|Horror|Musical|Thriller",
        "values": [
          {
            "category": "Drama|Horror|Musical|Thriller",
            "axis": "0",
            "value": 116
          }
        ]
      },
      {
        "key": "Drama|Horror|Mystery|Thriller",
        "values": [
          {
            "category": "Drama|Horror|Mystery|Thriller",
            "axis": "80",
            "value": 110
          }
        ]
      },
      {
        "key": "Drama|Musical|Romance",
        "values": [
          {
            "category": "Drama|Musical|Romance",
            "axis": "0",
            "value": 143
          }
        ]
      },
      {
        "key": "Drama|Mystery",
        "values": [
          {
            "category": "Drama|Mystery",
            "axis": "90",
            "value": 116
          }
        ]
      },
      {
        "key": "Drama|Mystery|Romance|War",
        "values": [
          {
            "category": "Drama|Mystery|Romance|War",
            "axis": "0",
            "value": 123
          }
        ]
      },
      {
        "key": "Drama|Mystery|Sci-Fi",
        "values": [
          {
            "category": "Drama|Mystery|Sci-Fi",
            "axis": "0",
            "value": 113
          }
        ]
      },
      {
        "key": "Drama|Mystery|Sci-Fi|Thriller",
        "values": [
          {
            "category": "Drama|Mystery|Sci-Fi|Thriller",
            "axis": "0",
            "value": 106
          }
        ]
      },
      {
        "key": "Drama|Mystery|Thriller",
        "values": [
          {
            "category": "Drama|Mystery|Thriller",
            "axis": "0",
            "value": 116.25
          },
          {
            "category": "Drama|Mystery|Thriller",
            "axis": "10",
            "value": 138
          }
        ]
      },
      {
        "key": "Drama|Romance",
        "values": [
          {
            "category": "Drama|Romance",
            "axis": "90",
            "value": 162
          }
        ]
      },
      {
        "key": "Drama|Romance|Thriller",
        "values": [
          {
            "category": "Drama|Romance|Thriller",
            "axis": "0",
            "value": 120
          }
        ]
      },
      {
        "key": "Drama|Sci-Fi|Thriller",
        "values": [
          {
            "category": "Drama|Sci-Fi|Thriller",
            "axis": "0",
            "value": 103.5
          },
          {
            "category": "Drama|Sci-Fi|Thriller",
            "axis": "80",
            "value": 117
          }
        ]
      },
      {
        "key": "Drama|Thriller",
        "values": [
          {
            "category": "Drama|Thriller",
            "axis": "0",
            "value": 128
          }
        ]
      },
      {
        "key": "Drama|War",
        "values": [
          {
            "category": "Drama|War",
            "axis": "50",
            "value": 88
          },
          {
            "category": "Drama|War",
            "axis": "70",
            "value": 153
          },
          {
            "category": "Drama|War",
            "axis": "90",
            "value": 170
          }
        ]
      },
      {
        "key": "Drama|War|Action",
        "values": [
          {
            "category": "Drama|War|Action",
            "axis": "80",
            "value": 110
          }
        ]
      },
      {
        "key": "Fantasy|Horror",
        "values": [
          {
            "category": "Fantasy|Horror",
            "axis": "0",
            "value": 121
          },
          {
            "category": "Fantasy|Horror",
            "axis": "70",
            "value": 94
          }
        ]
      },
      {
        "key": "Film-Noir|Mystery|Thriller",
        "values": [
          {
            "category": "Film-Noir|Mystery|Thriller",
            "axis": "40",
            "value": 104
          }
        ]
      },
      {
        "key": "Horror",
        "values": [
          {
            "category": "Horror",
            "axis": "0",
            "value": 99
          },
          {
            "category": "Horror",
            "axis": "80",
            "value": 92
          }
        ]
      },
      {
        "key": "Horror|Mystery|Sci-Fi|Thriller",
        "values": [
          {
            "category": "Horror|Mystery|Sci-Fi|Thriller",
            "axis": "80",
            "value": 109
          }
        ]
      },
      {
        "key": "Horror|Mystery|Thriller",
        "values": [
          {
            "category": "Horror|Mystery|Thriller",
            "axis": "0",
            "value": 110
          },
          {
            "category": "Horror|Mystery|Thriller",
            "axis": "90",
            "value": 93
          }
        ]
      },
      {
        "key": "Horror|Sci-Fi",
        "values": [
          {
            "category": "Horror|Sci-Fi",
            "axis": "0",
            "value": 93.67
          },
          {
            "category": "Horror|Sci-Fi",
            "axis": "70",
            "value": 117
          },
          {
            "category": "Horror|Sci-Fi",
            "axis": "80",
            "value": 105
          }
        ]
      },
      {
        "key": "Horror|Sci-Fi|Thriller",
        "values": [
          {
            "category": "Horror|Sci-Fi|Thriller",
            "axis": "0",
            "value": 106.6
          }
        ]
      },
      {
        "key": "Horror|Thriller",
        "values": [
          {
            "category": "Horror|Thriller",
            "axis": "0",
            "value": 104.33
          }
        ]
      },
      {
        "key": "Mystery|Thriller",
        "values": [
          {
            "category": "Mystery|Thriller",
            "axis": "0",
            "value": 104.5
          }
        ]
      },
      {
        "key": "Sci-Fi",
        "values": [
          {
            "category": "Sci-Fi",
            "axis": "90",
            "value": 97
          }
        ]
      },
      {
        "key": "Sci-Fi|Action|Thriller",
        "values": [
          {
            "category": "Sci-Fi|Action|Thriller",
            "axis": "0",
            "value": 106
          }
        ]
      },
      {
        "key": "Thriller|Comedy|Action",
        "values": [
          {
            "category": "Thriller|Comedy|Action",
            "axis": "90",
            "value": 90
          }
        ]
      },
      {
        "key": "Thriller|Western",
        "values": [
          {
            "category": "Thriller|Western",
            "axis": "70",
            "value": 112
          }
        ]
      },
      {
        "key": "War|Drama",
        "values": [
          {
            "category": "War|Drama",
            "axis": "80",
            "value": 97
          }
        ]
      },
      {
        "key": "Western",
        "values": [
          {
            "category": "Western",
            "axis": "60",
            "value": 115.88
          },
          {
            "category": "Western",
            "axis": "70",
            "value": 121
          }
        ]
      },
      {
        "key": "Western|Comedy",
        "values": [
          {
            "category": "Western|Comedy",
            "axis": "70",
            "value": 118
          }
        ]
      }
    ],
    "colorSchema": [
      "#332288",
      "#6699CC",
      "#88CCEE",
      "#44AA99",
      "#117733",
      "#999933",
      "#DDCC77",
      "#661100",
      "#CC6677",
      "#AA4466",
      "#882255",
      "#AA4499"
    ],
    "maxValue": 207,
    "minValue": 79
  }
]