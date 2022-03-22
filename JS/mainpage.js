// document.querySelector("#notifications").addEventListener("click",(e)=>{
//     e.preventDefault
// })

// document.querySelector("#messages").addEventListener("click",(e)=>{
//     e.preventDefault
// })

// document.querySelector("#dropdown").addEventListener("click",(e)=>{
//     e.preventDefault
// })

// function showDropdown() {
//     document.getElementById("#dropdown").classList.toggle("show");
// }


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function logoutDropdown() 
{
  console.log('HI')
  document.getElementById("dropdownInfo").classList.toggle("show");
  console.log("hi2")
}


function messageDropdown() {
  console.log('HImess')
  document.getElementById("messageInfo").classList.toggle("show");
  console.log("hi2mess")
}


function notificationsDropdown() {
  console.log('HInoti')
  document.getElementById("notificationInfo").classList.toggle("show");
  // document.getElementById("secondBox").classList.toggle("show");
  console.log("hi2noti")
}

window.onclick = function(event) 
{
    if (!event.target.matches('.dropbutton')) 
    {
      var dropdowns = document.getElementsByClassName("dropdown-content", "message-content", "notification-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var info = dropdowns[i];

        if (info.classList.contains('show')) 
        {
            info.classList.remove('show');
        }
      }
    }

    
    if (!event.target.matches('.messageButton')) 
    {
      var dropdowns = document.getElementsByClassName("message-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var info = dropdowns[i];

        if (info.classList.contains('show')) 
        {
            info.classList.remove('show');
        }
      }
    }

    if (!event.target.matches('.notificationsButton')) 
    {
      var dropdowns = document.getElementsByClassName("notification-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var info = dropdowns[i];

        if (info.classList.contains('show')) 
        {
            info.classList.remove('show');
        }
      }
    }
}

// getElementById("send").onclick = function(event){

// }


const friendOne = document.createElement("p");
friendOne.innerHTML = "Friend 1";
document.getElementById("friend1").appendChild(friendOne);
friendOne.id = "friendOne";

const dateOne = document.createElement("p");
dateOne.innerHTML = "Date 1";
document.getElementById("friend1").appendChild(dateOne);
dateOne.id = "dateOne";