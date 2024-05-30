// const servletUrlGetTotSales = 'http://localhost:8080/its1114aadcoursework1/api/v1/sales/getAll';


// const loadTotSales = () => {
//     $("#totSales").empty();
//     let adminDate = $("#adminDate").val();
//     console.log("adminDate : "+adminDate);
//     console.log(typeof adminDate);
//
//     const urlWithParams = new URL(`${servletUrlGetTotSales}`);
//
//     urlWithParams.searchParams.append('purDate', adminDate);
//     fetch(urlWithParams, {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json', // Optional, adjust based on your backend requirement
//             'purDate': adminDate // Add the invCode header
//         }
//     })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//                 console.log("response isn't ok!")
//             }
//             return response.json();
//         })
//         .then(data => {
//             if (Array.isArray(data)) {
//                 console.log('Response sales data: ', data);
//                 const matchingItem = data.find(sales => sales.purDate === purDate);
//                 console.log("matchingItem : "+matchingItem);
//
//                 if (matchingItem) {
//                     // Set the itemDesc value if a matching item is found
//                     console.log("matchingItem : "+matchingItem.itemDesc);
//                     $("#itemDesc").text(matchingItem.itemDesc); // Assuming itemDesc property exists in the data
//                 } else {
//                     console.warn(`Item with code '${invCode}' not found in response data.`);
//                     $("#itemDesc").text("Item not found");
//                 }
//             } else { console.error('Error: Expected JSON array, but received: ', data); }
//         })
//         .catch(error => { console.error('Error:', error);});
// };