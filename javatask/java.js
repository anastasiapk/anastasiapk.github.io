document.getElementById("submit").addEventListener("click", function() {
    var genre = document.getElementById("genre").value;
    var greeting = document.getElementById("greeting22");
    if(genre == "reggae") {
        greeting.innerHTML = '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/165626463&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>';
        greeting.style.color = "#C00";
    } 
    
    if(genre == "dance") {
        greeting.innerHTML = '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/203907951&color=%2300aabb&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>';
        greeting.style.color = "blue";
    }
    
    if(genre == "rock") {
        greeting.innerHTML = '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/349995303&color=%2300aabb&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>';
        greeting.style.color = "blue";
    }
        
    if(genre == "pop") {
        greeting.innerHTML = '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/182754313&color=%2300aabb&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>';
        greeting.style.color = "blue";
    }
    
    if(genre == "hip hop") {
        greeting.innerHTML = '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/261546885&color=%2300aabb&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>';
        greeting.style.color = "blue";
    }
    
//    else {
//        greeting.innerHTML = "Here is your " + genre + " playlist!";
//        greeting.style.color = "lightblue";
//    }

//    }
    
    
//    if else(genre == "i dont know") {
//        greeting.innerHTML = "Here is your " + genre + " playlist!";
//        greeting.style.color = "lightblue";
//    }

//    }
    
    
    
//      var genres = ["Pop", "Rock", "Reggae", "Dance", "Hip Hop"];
//      document.getElementById("genre").innerHTML = genre;
    

    });


document.getElementById("submit").addEventListener("click", function() {
    var genre = document.getElementById("genre").value;
    var greeting = document.getElementById("greeting22");
    if(genre == "reggae") {
        greeting.innerHTML = '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/165626463&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>';
        greeting.style.color = "#C00";
    } 
    
    if(genre == "dance") {
        greeting.innerHTML = '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/203907951&color=%2300aabb&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>';
        greeting.style.color = "blue";
    }

    }
    });