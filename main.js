let div = document.querySelectorAll('div');
let btns = document.querySelectorAll('button');
let btn = document.querySelector("#toggle");

const addClass = () => {
    for(let i = 0; i < div.length ; i++){
        const element = div[i];
        element.classList.add("active");
    }
}

const removeClass = () => {
    for(i = 0; i < div.length ; i++){
        const element = div[i];
        element.classList.remove("active");
    }
}

const toggleClass = () =>{
    for(i = 0; i < div.length ; i++){
        const element = div[i];
        element.classList.toggle("active");
    }
}

const prev = () =>{
    for(i = 0; i < div.length ; i++){
        const element = div[i];
        
    }
}


btns.forEach(element =>{   
    element.addEventListener("click", () => {
        if(element.id == "prev"){  
             addClass();
        };
        if(element.id == "next"){
            removeClass();
        };
        if(element.id == "toggle"){
            toggleClass()
        }
    })
})
