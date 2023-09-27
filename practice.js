console.log("Inside practice.css!");
hello();

document.onload = function(){
    //All JS DOM code should go inside this function
    //Any function can be written outside this area        
}

function hello()
{
    console.log("hello");
}

function accessElementById()
{
    var header = document.getElementById("header");//this is the Element
    var text = header.innerText;//gives me the content of the header
    console.log("content of h4 with id as header = "+ text);
    //Change innerText of element
    header.innerText = "This is a new heading!"

    var link1 = document.getElementById("link1");//this is the Element
    var linkText = link1.innerText;
    var href = link1.href;
    console.log("content of link1 innertext :"+ linkText);
    console.log("content of href :"+ href);
    //Change innerText of element
    link1.innerText = "Link1"
    link1.href="http://www.google.com";

}

function accessElementsByClassName()
{
    console.log("Accessing elements by Class Name");
    var links = document.getElementsByClassName("classA");//Collection of Elements
    console.log("Number of links: " + links.length);
    console.log("First link: " + links[0].innerText);
    for(var i=0;i<links.length;i++)
    {
        var text = links[i].innerText;
        console.log(text);
        links[i].innerText = links[i].innerText +" Link";        
    }

}

function TagName1()
{
    console.log("Para elements");
    var paras = document.getElementsByTagName1("p");//collection of elements
    for(var i=0;i<paras.length;i++)
    {
        var text = paras[i].innerText;
        console.log(text);
    }

    console.log("H4 elements");
    var h4s = document.getElementsByTagName1("h4");//collection of elements
    for(var i=0;i<h4s.length;i++)
    {
        var text = h4s[i].innerText;
        console.log(text);
        h4s[i].innerText = "H4";
    }
}

function TagName2()
{
    console.log("Para elements");
    var paras = document.getElementsByTagName2("p");//collection of elements
    for(var i=0;i<paras.length;i++)
    {
        var text = paras[i].innerText;
        console.log(text);
    }

    console.log("H4 elements");
    var h4s = document.getElementsByTagName2("h4");//collection of elements
    for(var i=0;i<h4s.length;i++)
    {
        var text = h4s[i].innerText;
        console.log(text);
        h4s[i].innerText = "H4";
    }
}

function TagName3()
{
    console.log("Para elements");
    var paras = document.getElementsByTagName3("p");//collection of elements
    for(var i=0;i<paras.length;i++)
    {
        var text = paras[i].innerText;
        console.log(text);
    }

    console.log("H4 elements");
    var h4s = document.getElementsByTagName3("h4");//collection of elements
    for(var i=0;i<h4s.length;i++)
    {
        var text = h4s[i].innerText;
        console.log(text);
        h4s[i].innerText = "H4";
    }
}
function changeStylesForOneElement()
{
   var box = document.getElementById("box");//this is the Element
   box.style.width = "200px";
   box.style.height = "50px";
   box.style.backgroundColor="blue";

   var h4 = document.getElementById("header");
   h4.style.backgroundColor = "lightgreen";
  
}

function changeStylesForManyElements()
{
    var paras = document.getElementsByTagName1("p");
    for(var i=0;i<paras.length;i++){
        paras[i].style.color = "purple";
        paras[i].style.fontWeight = "bold";
    }
    var links = document.getElementsByClassName("classA");//Collection of Elements
    for(var i=0;i<links.length;i++)
    {
        links[i].classList.add("classB");        
    }
    
}





function createABox()
{
    var parent = document.getElementById("parent");
    var div = document.createElement("div");
    div.innerText="Box";
    div.classList.add("box");
    parent.appendChild(div);
}

function removeABox()
{
    var parent = document.getElementById("parent");
    var child = parent.lastElementChild;
    parent.removeChild(child);

    var item = document.getElementById("header");
    item.parentNode.removeChild(item);
}

  

function Homework()
{
    
    var linkA = document.getElementById("linkA");//this is the Element
    var linkText = linkA.innerText;
    var href = linkA.href;
    console.log("content of linkA innertext :"+ linkText);
    console.log("content of href :"+ href);
    //Change innerText of element
    link1.innerText = "LinkA"
    link1.href="http://www.tri-c.edu";

    document.createElement(LinkA)
    
}
