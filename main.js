const checkbox=document.getElementById("checkbox");
const submitBtn=document.getElementById("btn-light");
checkbox.disabled=true;
submitBtn.disabled=true;
const elements=document.querySelectorAll(".element");

const selectColor=document.getElementById("selectcolor");

//assign color to elements

elements.forEach(function(element){
    const color= getRandomColor();
    element.style.backgroundColor=color;
    element.innerHTML=color;
    selectColor.innerHTML=color;
});

//generate random color function

function getRandomColor(){
    const letter="0123456789ABCDEF";
    let color="#";
    for(let i=0;i<6;i++)
    {
        color+=letter[Math.floor(Math.random()*16)];
    }
    return color;
};

//function to check if color is same

elements.forEach(function(element){
    element.addEventListener("click",function(){
if(element.innerHTML===selectColor.innerHTML){
    alert('you are human!');
    checkbox.checked=true;
    submitBtn.disabled=false;
}
else{
alert("please verify that you are human!");
location.reload(true);//to reload the page so that elements value changes each time we select a wrong option.
}
})
});