// ---------------------------------------------------------------------
//delete the property from object

const student = {
    name : "john",
    age : 25,
    hobies : ['reading','codeing','game'],
    greet :function (){
        console.log("hello everyone");
    },
    score :{
        math:50,
        science:60
    }
}
//deleting the property from an object
delete student.greet;
delete student['score'];

console.log(student);

// ---------Check String Using Built-in Methods--------------------------------------------------------------------

function checkString(str){
    
    
    // check if the string starts with S and ends with G
    if(str.startwith('S') && str.endwith('G'));{
    console.log("string start with S and end with G")
    }
    elseif(str.startwith('S'))
    {
    console.log("string start with S")
    }
    elseif(str.endwith('G'))
    {
         console.log("string end with G")
    }
    else{
    console.log("string does not start with S , does not end with G") 
    }
}

    let string = prompt("enter the string");
    checkString(string);


    // -----------------Check if Key Exists in Object Using in Operator-------------------------------------------------

    const person ={
        id : 40,
        name : 'reenu',
        age : '24'
    }
    
    // cheack if key exist
    
    const haskey = 'name' in person
    
    if(haskey){
        console.log("key is available");
    }
    else{
        console.log("not available");
    }

// ----------------Loop Through Object Using for...in
    const person ={
        id : 40,
        name : 'reenu',
        age : '24'
    };
    
    for(let key in person){
        
        let value;
        //get the value
        value = student[key];
        
        console.log(key +" - "+value);
    }