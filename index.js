const arr=[
    {
        dp:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
        story:"https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
    },
    {
        dp:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
        story:"https://images.unsplash.com/photo-1507101105822-7472b28e22ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60"
    },
    {
        dp:"https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60",
        story:"https://images.unsplash.com/photo-1541823709867-1b206113eafd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60"
    },
    {
        dp:"https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8NTQ1NTQwOTB8fGVufDB8fHx8fA%3D%3D&dpr=2&auto=format&fit=crop&w=294&h=294&q=60",
        story:"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Nnw1NDU1NDA5MHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60"
    }
    
]
var child="";
arr.forEach((elem,idx)=>{
    child+=`<div class="story">
    <img id="${idx}" src="${elem.dp}" alt="${idx}_photo"/>
    </div>`
})
document.getElementById("storiyan").innerHTML=child;
var storyshow=document.getElementById("storyshow");
storyshow.style.display="none";
document.querySelector('#storiyan').addEventListener('click',(desc)=>{
    storyshow.style.backgroundImage=`url(${arr[desc.target.id].story})`;
    storyshow.style.display="block";
    setTimeout(() => {
        storyshow.style.display="none";
    },2000);
})