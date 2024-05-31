const servletUrlGetTotSales = 'http://localhost:8080/its1114aadcoursework1/api/v1/sales/getAll';


const loadTotSales = () => {
    $("#totSales").empty();
    let adminDate = $("#adminDate").val();
    console.log("adminDate : "+adminDate);
    console.log(typeof adminDate);

    const urlWithParams = new URL(`${servletUrlGetTotSales}`);

    urlWithParams.searchParams.append('purDate', adminDate);
    fetch(urlWithParams, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json', // Optional, adjust based on your backend requirement
            'purDate': adminDate, // Add the invCode header
            "authorization": "Bearer "+localStorage.getItem("AuthToken")
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
                console.log("response isn't ok!")
            }
            return response.json();
        })
        .then(data => {
            if (Array.isArray(data)) {
                console.log('Response sales data: ', data);
                const matchingItem = data.find(sales => sales.purDate === adminDate);
                console.log("matchingItem : "+matchingItem);

                if (matchingItem) {
                    // Set the itemDesc value if a matching item is found
                    console.log("matchingItem : "+matchingItem.totPrice);
                    $("#totSales").text(matchingItem.totPrice); // Assuming itemDesc property exists in the data
                } else {
                    console.warn(`Sales with purDate '${purDate}' not found in response data.`);
                    $("#totSales").text("Not found");
                }
            } else { console.error('Error: Expected JSON array, but received: ', data); }
        })
        .catch(error => { console.error('Error:', error);});
};

$("#adminDate").change(() => {
    loadTotSales();
});

