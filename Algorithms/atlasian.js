/**
 * ATLASSIAN - Write a flatten function 
 * Hacker Rank use 
 * 
 */

const input = [{
    value: "result0",
    children:[
        {
            value:"value1",
            children: [{
                value: "value3",
                children: []
            },{
                value: "value4",
                children: []
            }
                
            ]
        },
        {
            value:"value5",
            children: [{
                value: "value6",
                children: []
            },{
                value: "value7",
                children: []
            }
                
            ]
        }
    ]
}]

const flatten = function(input){

    return result;
}

const expected = [
    {value:"value1"},
    {value:"value3"},
    {value:"value4"},
    {value:"value5"},
    {value:"value6"},
    {value:"value7"},
]


/**
 * Use above flatten function 
 * 
 */

 const getData = function(index){

    if(index ===1){

        return Promise((resolve, reject) =>{

            resolve([
                {
                    value:"value1",
                    children: [{
                        value: "value3",
                        children: []
                    },{
                        value: "value4",
                        children: []
                    }]
                }
            ])
        })
    } else if (index ===2){
        resolve([{
                value:"value5",
                children: [{
                    value: "value6",
                    children: []
                },{
                    value: "value7",
                    children: []
                }]
            }])
    }
 }