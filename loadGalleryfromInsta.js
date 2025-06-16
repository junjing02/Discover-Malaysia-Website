$(document).ready(function() {  

    let storedImg = JSON.parse(localStorage.getItem('gallery'));
    if(storedImg){
        console.log("ls");
        storedImg.data.forEach(element => {
            let div = document.createElement("div");
            div.className = "img";
            let img = document.createElement("img");
            img.src = element.media_url;
            div.appendChild(img);
            $('.item-wrap').append(div);
        });
    }
    else{
        const profileUrl = `https://graph.instagram.com/7928036970609036/media?fields=id,caption,media_url&access_token=IGQWROWWZArcXpERnZAJekgyLW94cTlPZAWF1ZA2dCM0RHTWtxdURzNzhmTVk5d2VzTjE1bVphVWpZATUFYbDVVUkxfX1p2M2RmRF9qN2RQTWN0aFFJYXhyMUZAxNHlSZAFpRV3N0UERmYU5fUWVhdwZDZD`;
        $.ajax({
                        url: profileUrl,
                        method: 'GET',
                        success: function(data) {
                            localStorage.setItem('gallery', JSON.stringify(data));
                            data.data.forEach(element => {
                                let div = document.createElement("div");
                                div.className = "img";
                                let img = document.createElement("img");
                                img.src = element.media_url;
                                div.appendChild(img);
                                $('.item-wrap').append(div);
                            });
            
                            //localStorage.setItem('username', data.user_id);
                            // Update the UI with the user's profile information
                            
                        },
                        error: function(error) {
                            console.error('Error fetching user profile:', error);
                        }
                    });
    }




    
});