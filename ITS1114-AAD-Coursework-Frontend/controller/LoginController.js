const emailRegex = /^[\w!#$%&'*+/=?^`{|}~-]+(?:\.[\w!#$%&'*+/=?^`{|}~-]+)*@(?:[A-Z0-9](?:[A-Z0-9-]*[A-Z0-9])?\.)+[A-Z]{2,}$/i;
const regEmail = new RegExp(emailRegex);

$(document).ready(function() {
    $("#btnLogin").on("click", function() {

        console.log("Login btn clicked!");

        const email = $("#email").val();
        const pw = $("#pw").val();


        var emailValid = regEmail.test(email);

        if (email && pw && emailValid) {
            const signInObject = { email: email, password: pw };

            $.ajax({
                url: 'http://localhost:8080/its1114aadcoursework1/api/v1/auth/signIn',
                type: 'POST',
                dataType: 'json', // Expect JSON response
                contentType: 'application/json',
                data: JSON.stringify(signInObject),
                success: function(response) {
                    console.log("Success! Response:", response);

                    // Handle successful login (token parsing, UI updates)
                    const firstToken = response.token.split(':')[0].trim();
                    const secondToken = response.token.split(':')[1].trim();

                    localStorage.setItem('AuthToken', firstToken);
                    localStorage.setItem('RefreshToken', secondToken);

                    $("#con1").css("display", "none");
                    $("#con2").css("display", "block");
                    $("#header1").css("display", "block");
                    $("#con3").css("display", "none");
                    $("#con4").css("display", "none");
                    $("#con5").css("display", "none");
                    $("#con6").css("display", "none");
                    $("#con7").css("display", "none");
                    $("#con8").css("display", "none");

                    $(".nav-link").eq(0).css("color", "#7852A9");
                    $(".nav-link").eq(0).css("font-weight", "bold");

                    $(".nav-link").eq(1).css("color", "white");
                    $(".nav-link").eq(1).css("font-weight", "normal");
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.error("Error:", textStatus, errorThrown);
                    // Handle login errors (e.g., display error message)
                }
            });
        } else {
            console.warn("Please enter both email and password.");
            // Optionally display an error message to the user
            Toast.fire({
                icon: 'error',
                title: 'Please enter valid email and password!'
            })
        }
    });
});































// $(document).ready(function() {
//     $("#btnLogin").on("click", function() {
//
//         console.log("Login btn clicked!");
//
//         const email = $("#email").val();
//         const pw = $("#pw").val();
//
//         if (email && pw) {
//             const signInObject = { email: email, password: pw };
//
//             $.ajax({
//                 url: 'http://localhost:8080/its1114aadcoursework1/api/v1/auth/signIn',
//                 type: 'POST',
//                 dataType: 'json', // Expect JSON response
//                 contentType: 'application/json',
//                 data: JSON.stringify(signInObject),
//                 success: async function (response) {
//                     const token = await response;
//                     console.log("Success! Response:", response);
//
//                     const parsedData = JSON.parse(token);
//                     const tokenString = parsedData.token;
//                     // Split the token string using the '|' delimiter
//                     const tokens = tokenString.split(':');
//                     // Trim any extra whitespace from the tokens
//                     const firstToken = tokens[0].trim();
//                     const secondToken = tokens[1].trim();
//                     // Save the tokens in local storage
//                     localStorage.setItem('AuthToken', firstToken);
//                     localStorage.setItem('RefreshToken', secondToken);
//
//                     $("#con1").css("display", "none");
//                     $("#con2").css("display", "block");
//                     $("#header1").css("display", "block");
//                     $("#con3").css("display", "none");
//                     $("#con4").css("display", "none");
//                     $("#con5").css("display", "none");
//                     $("#con6").css("display", "none");
//                     $("#con7").css("display", "none");
//                     $("#con8").css("display", "none");
//
//                     $(".nav-link").eq(0).css("color", "#7852A9");
//                     $(".nav-link").eq(0).css("font-weight", "bold");
//
//                     $(".nav-link").eq(1).css("color", "white");
//                     $(".nav-link").eq(1).css("font-weight", "normal");
//                 },
//                 error: function(jqXHR, textStatus, errorThrown) {
//                     console.error("Error:", textStatus, errorThrown);
//                     // Handle login errors (e.g., display error message)
//                 }
//             });
//         } else {
//             console.warn("Please enter both email and password.");
//             // Optionally display an error message to the user
//         }
//     });
// });
