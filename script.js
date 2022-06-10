$('.loop').owlCarousel({
    singleItem: true,
    center: true,
    items:1,
    loop:true,
    margin:10,
    dots:true,
    responsive:{
        900:{
            items:2
        }
    }
});
function createNavigation(){
    let navItem = document.getElementById("navigation");
    let array = [
        {
            "href" : "index.html",
            "innerHtml" : "HOME"
        },
        {
            "href" : "ranking.html",
            "innerHtml" : "RANKIGS"
        },
        {
            "href" : "#",
            "innerHtml" : "ATHLETES"
        },
        {
            "href" : "new.html",
            "innerHtml" : "NEWS"
        }
    ]

    let ul = document.createElement('ul');

    array.forEach(element => {
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.href = element.href;
        a.innerHTML = element.innerHtml;
        li.appendChild(a);
        ul.appendChild(li);
    });

    navItem.appendChild(ul);
}

createNavigation();


let chat_visible = false;
document.getElementById('chat-icon').addEventListener('click',function(){
    let chat = document.getElementById('chat');
    if(chat_visible){
        chat.hidden = true;
    }else{
        chat.hidden = false;
    }
    chat_visible = !chat_visible;
})


