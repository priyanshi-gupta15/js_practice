
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
print(obj_arr);

//function to print all value;
function print(arr)
{
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        console.log(`name is ${arr[i].name}`);
        console.log(arr[i].age);
        console.log(arr[i].grade);

        
    }
    
}