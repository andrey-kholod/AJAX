//GET

// let xhttp2 = new XMLHttpRequest();
let a = 0;

// xhttp2.onreadystatechange = function () {
//    if (this.readyState === 4 && this.status === 200) {
//       myFunction2(this.responseText);
//    }
// }

// xhttp2.open("GET", "https://jsonplaceholder.typicode.com/users", true);
// xhttp2.send();


// console.log(a);

//POST

let xhttp3 = new XMLHttpRequest();

xhttp3.onreadystatechange = function () {
   if (this.readyState === 4 && this.status === 200) {
      myFunction2(this.responseText);
   }
}


xhttp3.open('POST', 'https://jsonplaceholder.typicode.com/users', true);
xhttp3.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
xhttp3.send();

function myFunction2(data) {
   console.log('POST');
   a = data;
   console.log(data);
}