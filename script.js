const buttons = document.querySelectorAll('.button');
const body = document.querySelectorAll("body");

    buttons.forEach(function(button){
        console.log(button);
        button.addEventListener('click' , function(e){
            console.log(e);
            console.log(e.target);
            if(e.target.id ==='yellow'){
                body[0].style.backgroundColor = e.target.id;
            }
            if(e.target.id ==='red'){
                body[0].style.backgroundColor = e.target.id;
            }
            if(e.target.id ==='white'){
                body[0].style.backgroundColor = e.target.id;
            }
            if(e.target.id ==='blue'){
                body[0].style.backgroundColor = e.target.id;
            }
        });
    });