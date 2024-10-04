export default function validateForm(name,email,username,mobile){

    let valid=true;
    //if any filed is false it means it is not invalid and if it is true it means it is invalid 
    let invalid= {
        name:false,
        email:false,
        username:false,
        mobile:false

    }
    console.log(name,email,username,mobile)

    //to validate empty inputs fields
    if(!name || !email || !username || !mobile)
    {   valid = false
        invalid.name=!name,
        invalid.email=!email,
        invalid.username=!username,
        invalid.mobile=!mobile

        console.log("all fields are mandatory but some fields are missing")

        console.log(valid,invalid)
        return {
            valid,invalid
        }

    }

    console.log("all fields are present")

    //Regular expression to check email is valid email and mobile no is 10 digit valid mobile no or not
    const emailRegEx=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const mobileRegEx= /^\d{10}$/
    if(!emailRegEx.test(email) || !mobileRegEx.test(mobile))
    {  valid=false
        invalid={...invalid,
                 email:!emailRegEx.test(email),
                 mobile:!mobileRegEx.test(mobile)
        }
        
        console.log("email or mobile is false")
        console.log(valid,invalid)
        return {
            valid,invalid
        }
    }

    //returning valid as true and all invalid.property as false if no input field is empty and email and mobile are in correct form 
    
    console.log(valid,invalid)
    return {
        valid, invalid
    
}
}