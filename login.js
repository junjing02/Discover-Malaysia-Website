
$(document).ready(function() {  

    
function statusChangeCallback(response) {  // Called with the results from FB.getLoginStatus().
    console.log('statusChangeCallback');
    console.log(response);                   // The current login status of the person.
    if (response.status === 'connected') {   // Logged into your webpage and Facebook.
      console.log("connected");
      testAPI();  
    } else {          
        console.log("not connected");                       // Not logged into your webpage or we are unable to tell.
    }
  }


  window.fbAsyncInit = function() {
    FB.init({
      appId      : '506921765368290',
      cookie     : true,                     // Enable cookies to allow the server to access the session.
      xfbml      : true,                     // Parse social plugins on this webpage.
      version    : 'v20.0'           // Use this Graph API version for this call.
    });


    FB.getLoginStatus(function(response) {   // Called after the JS SDK has been initialized.
      statusChangeCallback(response);        // Returns the login status.
    });
  };
 



    function hotel(){
        let user = sessionStorage.getItem('fbssls_506921765368290');
        let userData = JSON.parse(user);
        
        if(userData.authResponse == null){
            document.querySelectorAll('.hotel-love').forEach(button => {
                button.classList.remove('loved');
            });
        }

        
    
        var favoriteHotels = [];
        try{
            favoriteHotels = JSON.parse(localStorage.getItem(userData.authResponse.userID));
        }
        catch{
    
        }
        console.log(favoriteHotels);
    
        updateLoveButton(favoriteHotels);
        return favoriteHotels;
    }

    function testAPI() {                      // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
        FB.api('/me', function(response) {
            hotel();
            console.log("load ");
          $('#user').html(response.name);
          $('#userm').html(response.name);
          document.getElementById('logout').style.display = 'flex';
          document.getElementById('login').style.display = 'none';
          document.getElementById('logout-item').style.display = 'none';
          document.getElementById('logoutm').style.display = 'flex';
          document.getElementById('loginm').style.display = 'none';
        });
      }

    $('#login').click(function() {
        FB.login(function() {
            FB.getLoginStatus(function(response) {   // See the onlogin handler
                statusChangeCallback(response);
            });
            
        })


    });

    $('#user').click(function() {
        $('#logout-item').fadeIn();
    });
    $('.logoutbtn').click(function() {
        $('#logout-item').fadeOut();
        FB.getLoginStatus(function(response) {   // Called after the JS SDK has been initialized.
            if (response.status === 'connected') {   // Logged into your webpage and Facebook.
                FB.logout(function() {       
                    document.getElementById('logout').style.display = 'none';
                    document.getElementById('login').style.display = 'flex';
                    document.getElementById('logoutm').style.display = 'none';
                    document.getElementById('loginm').style.display = 'flex';
                    localStorage.removeItem('username');        
                });
                
                hotel();
            }
        });
    });

    $('.cancelbtn').click(function() {
        $('#logout-item').fadeOut();
    });


    $('#loginm').click(function() {
        FB.login(function() {
            FB.getLoginStatus(function(response) {   // See the onlogin handler
                statusChangeCallback(response);
            });
            
        })
    });

    $('#userm').click(function() {
        $('#logout-item').fadeIn();
    });




    


hotel();

document.querySelectorAll('.hotel-love').forEach(button => {
    button.addEventListener('click', function () {
        var hotelId = button.getAttribute('data-hotel');
        toggleFavorite(hotelId);
    });
});

function updateLoveButton(favoriteHotels) {
    document.querySelectorAll('.hotel-love').forEach(button => {
        let hotelId = button.getAttribute('data-hotel');
        if (favoriteHotels.includes(hotelId)) {
            button.classList.add('loved');
        } else {
            button.classList.remove('loved');
        }
    });
}

function toggleFavorite(hotelId) {
    let favoriteHotels = hotel();
    let user = sessionStorage.getItem('fbssls_506921765368290');
    let userData = JSON.parse(user);

    if (userData.authResponse == null) {
        alert('please sign in');
        return;
    }
    if (favoriteHotels.includes(hotelId)) {
        const index = favoriteHotels.indexOf(hotelId);
        favoriteHotels.splice(index, 1);
    } else {
        favoriteHotels.push(hotelId);
    }
    localStorage.setItem(userData.authResponse.userID, JSON.stringify(favoriteHotels));
    updateLoveButton(favoriteHotels);
}

});
