// target elements of spinner
let topspinner = document.getElementById("top");
let middlespinner = document.getElementById("middle");
let bottomspinner = document.getElementById("bottom");
let sidebarrow = document.getElementById("sidebarrow");
let sidebar = document.getElementById("sidebar");
let checkbox= document.getElementById("checkboxtoggle");
var isactive =false ;


checkbox.addEventListener('click', () => {
    // middlespinner.style.display = 'none';
    sidebar.style.height = "100vh"; 
    
    // sidebar.style.display = "none"; 
    // topspinner.style.margintop = '-1px';
    // bottomspinner.style.marginBottom ="-2px";
    // rotatespinners(topspinner,135);
    // rotatespinners(bottomspinner,-135);
    if(sidebar.style.transform =`translateX(-335px)`)
    {
        // sidebar.style.display = "none"; 
    }
    positionelement(middlespinner,"relative","4px","0px","135");
    middlespinner.classList.add("newclass");
    // isactive = true;

})
function rotatespinners(element,degree)
{
    element.style.transform = `rotate(${degree}deg)`;
}
function positionelement(element,Position,Left,Right,degree)
{
    element.style.position = Position;
    element.style.left = Left;
    element.style.right = Right;
    element.style.transition  = 'background-color 3s ease-in-out';
    sidebar.style.transform =`rotate(${degree}deg})`;

}
if(isactive != true)
{

}
