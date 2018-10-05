  

function changeButton() {
    
    var chgButton = document.getElementById("myButton");

    var image = document.getElementById("image");
    
    
    if(chgButton.value == "Tuy-Vi kl 8." ) {
        chgButton.value = "Tuy-Vi kl 12.";
        image.src = "sitWithLaptop.gif"
    }
    else if(chgButton.value == "Tuy-Vi kl 12.") {
        chgButton.value = "Tuy-Vi kl 16.";
        image.src = "zombie.gif" 
    }
    else if(chgButton.value == "Tuy-Vi kl 16.") { 
        chgButton.value = "Tuy-Vi kl 8.";
        image.src = "OnWayToSchool.gif"
    }

};


 
