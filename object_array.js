
let obj_arr = [ 
    { "name" :"priyanshi",
      "age" : 20,
      "grade" :80

    },
    { "name" :"priy",
      "age" : 10,
      "grade" :30

    },
    { "name" :"snayam",
      "age" : 10,
      "grade" :70
    },
    { "name" :"utkarsh",
      "age" : 30,
      "grade" :90

    },

    { "name" :"john",
      "age" : 30,
      "grade" :50

    }
]
for (let i = 0; i < obj_arr.length; i++) {
    if(obj_arr[i].grade>=50 && obj_arr[i].age>10)
    {
        console.log(obj_arr[i]);
        
    }
    
}

