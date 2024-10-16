const container = document.querySelector(".container");
        const body = document.querySelector("body");

        container.addEventListener("click",function(){
            container.classList.toggle("active");
            body.classList.toggle("active");

        })