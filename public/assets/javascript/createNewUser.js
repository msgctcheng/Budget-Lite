$(document).ready(function() {
    $(".newSubmit").on("click", function() {
        var userInfo = {
                name: $(".userName").val().trim(),
                amount: $(".firstBudget").val().trim()
            }
            // alert if firstBudget NaN
        var currentURL = window.location.origin;
        console.log(currentURL);
        $.ajax({
            type: "POST",
            url: currentURL + "/addUser",
            data: userInfo
        }).success(function(response) {
            alert(response);
            window.location = currentURL + "/";
        });
    });
});