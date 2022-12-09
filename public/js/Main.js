
window.onload = function () {

    treeGui = convStringToGui(categoriesstring,'<')

    treediv = document.getElementById('TreeGui')
    treediv.appendChild(treeGui)

    selector = document.getElementById('selectordiv')

    selector.addEventListener('click', function (event) {
        toggleGui()

    });





//Form Functionality

const form = document.getElementById("registerform");


    function sendData() {

const XHR = new XMLHttpRequest();
const FD = new FormData(form);

const selectedcraft = document.getElementById('craftselector').innerHTML 


FD.append('craft', selectedcraft);


XHR.addEventListener("load", (event) => {

  alert(event.target.responseText);

});



XHR.addEventListener("error", (event) => {
  alert('Oops! Something went wrong.');
});


XHR.open("POST", "/PreRegisterMaster");




XHR.send(FD);
}


form.addEventListener("submit", (event) => {
event.preventDefault();

sendData();
});

   

};
   
