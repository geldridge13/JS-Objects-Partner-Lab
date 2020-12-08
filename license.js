let license = {
    image: "ice-cream-guy-lilo-and-stitch.png",
    name: "Victoria",
    dob: "01/27/1992",
    married: false,
    certifications: ["Motorcycle", "Tracker-trailer"]
}

let body = document.getElementsByTagName("body");
let div = document.createElement("div");
body[0].appendChild(div);
let image = document.createElement("img");
//image.setAttribute("src", license.image);
image.src = license.image;
div.appendChild(image);
let name = document.createElement("p");
div.appendChild(name);
let dob = document.createElement("p");
div.appendChild(dob);
let married = document.createElement("p");
div.appendChild(married);
let certifications = document.createElement("ul");
div.appendChild(certifications);
let li = document.createElement("li");
certifications.appendChild(li);
let li2 = document.createElement("li");
certifications.appendChild(li2);

name.textContent = license.name;
dob.textContent = license.dob;
married.textContent = license.married;
li.textContent = license.certifications[0];
li2.textContent = license.certifications[1];

div.style.border = "solid";
div.style.width = "250px";

image.style.width = "100px";
image.style.height = "100px";