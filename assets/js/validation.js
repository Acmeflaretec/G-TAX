
const name = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const form = document.getElementById('form');

const name_error = document.getElementById('name_error');

const email_error = document.getElementById('email_error');

const subject_error = document.getElementById('subject_error');

const message_error = document.getElementById('message_error');

form.addEventListener('submit',(e)=>
{  


var email_check = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

if(name.value === '' || name.value == null)

{
e.preventDefault();
name_error.innerHTML = "Name is required";
}


else
{
name_error.innerHTML = "";
}


    if(email.value === '' || email.value == null)
{
e.preventDefault();
email_error.innerHTML = " Email is required";

}
else if(!email.value.match(email_check))
{
    e.preventDefault();
    email_error.innerHTML = "Valid Email is required";
    
    }

else
{
email_error.innerHTML = "";
}


if(subject.value === '' || subject.value == null)

    {
    e.preventDefault();
    subject_error.innerHTML = "subject is required";
    }
    
    
    else
    {
        subject_error.innerHTML = "";
    }


    if(message.value === '' || message.value == null)

        {
        e.preventDefault();
        message_error.innerHTML = "message is required";
        }
        
        
        else
        {
         message_error.innerHTML = "";
        }
    
    






})
