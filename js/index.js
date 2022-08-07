const input = document.querySelector("input");
var uploaded_image = "";
input.addEventListener("change",
    () => {
        reader.addEventListener('load' , (e)=> {
            console.log(e);
        }, false)
    }
)

const reader = new FileReader();
reader.addEventListener("load", 
    () => {
        console.log("Something loaded!");
    }
)