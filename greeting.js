
if(localStorage.getItem('name')=== null  ){
    let person = prompt("Please enter your name");
    let text;
    text = person;
    
    console.log(text);


    localStorage.setItem('name', text);
}
function getName(){
   if(localStorage.getItem('name'))
   {textContent = localStorage.getItem('name');
    const greetings = ["Good morning", "Good afternoon", "Good evening"];
    const currentHour = new Date().getHours();
    let index =currentHour >= 12 && currentHour < 17 ? 1 : currentHour >= 17 ? 2 : 0;
    document.getElementById("greeting").innerHTML =greetings[index] + ", " + textContent + ".";
    console.log(greetings[index]);


   }

}
getName();


// if((chrome.storage.local.get(["Name"])==null){
//     let person = prompt("Please enter your name");
//     let text;
//     text = person;
//     console.log(text);


//     chrome.storage.local.set({ Name: text }, function () {
//     console.log("value is set to"+text);
//     });
// }
// chrome.storage.local.get(["Name"], function (result) {
//     $(function () {
//     const greetings = ["Good morning", "Good afternoon", "Good evening"];
//     const currentHour = new Date().getHours();
//     let index =
//         currentHour >= 12 && currentHour < 17 ? 1 : currentHour >= 17 ? 2 : 0;
//     document.getElementById("greeting").innerHTML =
//         greetings[index] + ", " + result.Name + ".";
//     console.log(greetings[index]);
//     });
// });