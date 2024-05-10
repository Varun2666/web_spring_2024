function askQuestion() {
    var q = prompt('How much wood would a woodchuck chuck if a woodchuck could chuck wood?');
    if (q != null) {
        document.getElementById ('question').innerHTML= 'Yikes!' + q + ' is a lot of wood';
    }
}

function showImage(){
    var image=document.getElementById('surprise');
    image.src = "images/top-10-cutest-pokemon-ever.jpg";
}