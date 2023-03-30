
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const telephone = document.getElementById('telephone');
const email= document.getElementById('email');
const DOB = document.getElementById('DOB');
const age = document.getElementById('age');

const genders = document.querySelectorAll('.gender');
const Occupations = document.querySelectorAll('.Occupation');

const skills = document.getElementById('skills');


const button = document.getElementById('button');


const output = document.getElementById('output1');


function fun1() {
    const gender = fun2()
    const Occupation = fun3()

    output.innerHTML = `First Name: ${fname.value}<br> Last Name: ${lname.value}<br> Telephone: ${telephone.value}<br> Email: ${email.value}<br> DOB: ${DOB.value}<br> Age: ${age.value}<br> Gender: ${gender}<br> Occupatin: ${Occupation}<br> Skills: ${skills.value}`;
    
}



function fun2() {
   let gender;
   genders.forEach(gen => {
    if (gen.checked) 
    {
        gender = gen.value
    }
    
   })

   return gender
}


function fun3() {
    let Occupation;
    Occupations.forEach(Occ => {
     if (Occ.checked) 
     {
         Occupation = Occ.value
     }
     
    })
 
    return Occupation
 }
 
button.addEventListener('click', fun1);