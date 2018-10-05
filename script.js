function changeButton() {

    var chgButton = document.getElementById("myButton");
    
    if(chgButton.value == "Tuy-Vi kl 8." ) chgButton.value = "Tuy-Vi kl 12."; 
    else if(chgButton.value == "Tuy-Vi kl 12.") chgButton.value = "Tuy-Vi kl 16.";
    else if(chgButton.value == "Tuy-Vi kl 16.") chgButton.value = "Tuy-Vi kl 8.";
    else chgButton.value;
};
