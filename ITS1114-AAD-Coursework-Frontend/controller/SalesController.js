const servletUrlSaveSales = 'http://localhost:8080/its1114aadcoursework1/api/v1/sales/save';
const servletUrlUpdateSales = 'http://localhost:8080/its1114aadcoursework1/api/v1/sales/update';
const servletUrlGetAllSales = 'http://localhost:8080/its1114aadcoursework1/api/v1/sales/getAll';
const servletUrlGetAllInv1 = 'http://localhost:8080/its1114aadcoursework1/api/v1/inventory/getAll';
const servletUrlGetAllItemDesc = 'http://localhost:8080/its1114aadcoursework1/api/v1/inventory/getAllItemDesc';
const servletUrlGetInvDesc = 'http://localhost:8080/its1114aadcoursework1/api/v1/inventory/get';

const orderNoRegex = /^HSO\d{5}$/;
const regOrderNo = new RegExp(orderNoRegex);

$("#btnSave").on('click' , ()=>{

    let order_no = $("#orderNo").val();
    let cus_name_sales = $("#cusNameSales").val();
    let item_code = $("#itemCode").val();
    let item_desc = $("#itemDesc").val();
    let size = $("#size").val();
    let unit_price = $("#unitPrice").val();
    let item_qty = $("#itemQty").val();
    let tot_price = $("#totPrice").val();
    let pur_date = $("#purDate").val();
    let pay_method = $("#payMethod").val();
    let added_points = $("#addedPoints").val();
    let cashier = $("#cashier").val();

    console.log("Sales btn save clicked");

    let salesObject = {
        orderNo: order_no,
        cusName: cus_name_sales,
        itemCode: item_code,
        itemDesc: item_desc,
        size: size,
        unitPrice: unit_price,
        itemQty: item_qty,
        totPrice: tot_price,
        purDate: pur_date,
        payMethod: pay_method,
        addedPoints: added_points,
        cashierName: cashier
    };

    console.log('salesObject: ', salesObject);

    // var orderNoValid = regMobile.test(contact);
    // let index = customer_db.findIndex(sales => sales.orderNo === order_no);

    // if(order_no && index == -1) {
        if (cus_name_sales && item_code && item_desc && size && unit_price && item_qty && tot_price && pur_date && pay_method && added_points && cashier) {

            if (pay_method === "Cash") {

                // Convert the JS object to a JSON
                let salesJSON = JSON.stringify(salesObject);
                console.log('salesJSON: ', salesJSON);
                // AJAX - JQuery
                $.ajax({
                    url: `${servletUrlSaveSales}`,
                    type: "POST",
                    data: salesJSON,
                    headers: {"Content-Type": "application/json", "authorization": "Bearer "+localStorage.getItem("AuthToken")},
                    success: (res) => {
                        console.log(JSON.stringify(res));
                        Toast.fire({
                            icon: 'success',
                            title: 'Saved'
                        })
                        // Swal.fire({
                        //     width: '225px',
                        //     position: 'top',
                        //     icon: 'success',
                        //     title: 'Saved!',
                        //     showConfirmButton: false,
                        //     timer: 2000
                        // });
                        // $("#customer_btns>button[type='button']").eq(3).click();
                        $("#btnReset").click();
                    },
                      error: (err) => {
                      console.error(err);
                      }
                });
            } else {
               Swal.fire({
               title: "Card Payments",
               position: 'top',
               html: `
               <p>Enter Card Details..</p>
               <input id="swal-input1" class="swal2-input" placeholder="Last 4 digits">
               <input id="swal-input2" class="swal2-input" type="password" placeholder="Bank">
               `,
               preConfirm: async () => {
                    const digi = document.getElementById('swal-input1').value;
                    const bank = document.getElementById('swal-input2').value;
                    // Your login validation logic goes here
                    // Replace this with your actual authentication mechanism
                    if (!digi.length == 4) {
                        return Swal.showValidationMessage('Please enter valid card details');
                    }
                    // if (!isValidEmail(email)) {
                    //     return Swal.showValidationMessage('Please enter a valid email address');
                    // }
                    // if (password.length < 8) {
                    //     return Swal.showValidationMessage('Password must be at least 8 characters long');
                    // }
                    // If validation passes, return an object with email and password
                    return {digi, bank};
               },
                    showCancelButton: true,
                    confirmButtonText: "Done",
                    cancelButtonText: "Cancel",
                    allowOutsideClick: () => !Swal.isLoading()
                    }).then((result) => {
                    if (result.isConfirmed) {
                    // Handle successful login
                    const {digits, bank} = result.value;
                    // Replace this with your actual login functionality
                    // This example just shows a success message
                    // Swal.fire({
                    //     title: 'Login Successful!',
                    //     text: `Welcome, ${email}`,
                    //     icon: 'success'
                    // });
                    // document.querySelector('.swal2-container').style.zIndex = '9999';
                    let salesJSON = JSON.stringify(salesObject);
                    console.log('salesJSON: ', salesJSON);
                    // AJAX - JQuery
                    $.ajax({
                        url: `${servletUrlSaveSales}`,
                        type: "POST",
                        data: salesJSON,
                        headers: {"Content-Type": "application/json", "authorization": "Bearer "+localStorage.getItem("AuthToken")},
                    success: (res) => {
                    console.log(JSON.stringify(res));
                    Toast.fire({
                        icon: 'success',
                        title: 'Saved'
                    })

                    // Swal.fire({
                    //     width: '225px',
                    //     position: 'top',
                    //     icon: 'success',
                    //     title: 'Saved!',
                    //     showConfirmButton: false,
                    //     timer: 2000
                    // });
                    // $("#customer_btns>button[type='button']").eq(3).click();
                    $("#btnReset").click();
                    },
                    error: (err) => {
                        console.error(err);
                    }
                });
                }
            });
            }
    }else {
            Toast.fire({
                icon: 'error',
                title: 'Fill all the fields!',
            })
    }
});


$("#btnUpdate").on('click' , ()=>{

    let order_no = $("#orderNo").val();
    let cus_name_sales = $("#cusNameSales").val();
    let item_code = $("#itemCode").val();
    let item_desc = $("#itemDesc").val();
    let size = $("#size").val();
    let unit_price = $("#unitPrice").val();
    let item_qty = $("#itemQty").val();
    let tot_price = $("#totPrice").val();
    let pur_date = $("#purDate").val();
    let pay_method = $("#payMethod").val();
    let added_points = $("#addedPoints").val();
    let cashier = $("#cashier").val();

    console.log("Sales btn update clicked");

    let salesObject = {
        orderNo: order_no,
        cusName: cus_name_sales,
        itemCode: item_code,
        itemDesc: item_desc,
        size: size,
        unitPrice: unit_price,
        itemQty: item_qty,
        totPrice: tot_price,
        purDate: pur_date,
        payMethod: pay_method,
        addedPoints: added_points,
        cashierName: cashier
    };

    console.log('salesObject: ', salesObject);

    // let salesJSON = JSON.stringify(salesObject);
    // console.log('salesJSON: ', salesJSON);
    // $.ajax({
    //     url: `${servletUrlUpdateSales}`,
    //     type: "PUT",
    //     data: salesJSON,
    //     headers: {
    //         "orderNo": order_no,
    //         "Content-Type": "application/json"
    //     },
    //     success: (res) => {
    //         console.log(JSON.stringify(res));
    //         Swal.fire({width: '225px', position: 'center', icon: 'success', title: 'Updated!', showConfirmButton: false, timer: 2000});
    //         $("#cusBtn>button[type='button']").eq(0).click();
    //         loadSalesData();
    //     },
    //     error: (err) => { console.error(err);}
    // });

    if (cus_name_sales && item_code && item_desc && size && unit_price && item_qty && tot_price && pur_date && pay_method && added_points && cashier) {

        Swal.fire({
            title: "Admin Login",
            position: 'top',
            html: `
    <p>Sales updates are allowed only for admins!</p>
    <input id="swal-input1" class="swal2-input" placeholder="Email">
    <input id="swal-input2" class="swal2-input" type="password" placeholder="Password">
  `,
            preConfirm: async () => {
                const email = document.getElementById('swal-input1').value;
                const password = document.getElementById('swal-input2').value;

                // Your login validation logic goes here
                // Replace this with your actual authentication mechanism

                if (!isValidEmail(email)) {
                    return Swal.showValidationMessage('Please enter a valid email address');
                }

                // if (password.length < 8) {
                //     return Swal.showValidationMessage('Password must be at least 8 characters long');
                // }

                // If validation passes, return an object with email and password
                return {email, password};

            },
            showCancelButton: true,
            confirmButtonText: "Login",
            cancelButtonText: "Cancel",
            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            if (result.isConfirmed) {
                // Handle successful login
                const {email, password} = result.value;
                // Replace this with your actual login functionality
                // This example just shows a success message
                // Swal.fire({
                //     title: 'Login Successful!',
                //     text: `Welcome, ${email}`,
                //     icon: 'success'
                // });
                // document.querySelector('.swal2-container').style.zIndex = '9999';

                let salesJSON = JSON.stringify(salesObject);
                console.log('salesJSON: ', salesJSON);
                $.ajax({
                    url: `${servletUrlUpdateSales}`,
                    type: "PUT",
                    data: salesJSON,
                    headers: {
                        "orderNo": order_no,
                        "Content-Type": "application/json",
                        "authorization": "Bearer "+localStorage.getItem("AuthToken")
                    },
                    success: (res) => {
                        console.log(JSON.stringify(res));
                        // Swal.fire({width: '225px', position: 'top', icon: 'success', title: 'Updated!', showConfirmButton: false, timer: 2000});

                        Toast.fire({
                            icon: 'success',
                            title: 'Updated'
                        })

                        $("#cusBtn>button[type='button']").eq(0).click();
                        $("#btnReset").click();
                    },
                    error: (err) => {
                        console.error(err);
                    }
                });

            }
        });
    }else {
        Toast.fire({
            icon: 'error',
            title: 'Fill all the fields!',
        })
    }

// Function to validate email format (basic check)
    function isValidEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

});



function generateOrderNo() {
    $("#orderNo").val(""); // Clear previous value

    const urlWithParams = new URL(`${servletUrlGetAllSales}`); // Update URL for all sales

    $.ajax({
        url: urlWithParams.href, // Use URL object's href property
        type: 'GET',
        dataType: 'json', // Expect JSON response
        headers: {"Content-Type": "application/json", "authorization": "Bearer "+localStorage.getItem("AuthToken")},
        success: function(data) {
            if (Array.isArray(data)) {
                console.log('Response sales data: ', data);

                // Find the last order no (assuming orderNo is unique)
                const lastSale = data.length > 0 ? data[data.length - 1] : null;
                let lastOrderNo = null;

                if (lastSale) {
                    lastOrderNo = lastSale.orderNo; // Assuming orderNo is a property within the sales object
                }

                if (lastOrderNo === "") {
                    $("#orderNo").val("HSO00001");
                } else {
                    const prefix = "HSO";
                    const defaultCode = "HSO00001";

                    // Extract the numeric part (assuming format "HSOxxxxx")
                    const number = lastOrderNo ? parseInt(lastOrderNo.substr(prefix.length)) + 1 : 1;

                    // Generate the new code with zero-padding to maintain the format
                    const newOrderNo = prefix + number.toString().padStart(5, "0");
                    $("#orderNo").val(newOrderNo);
                }
            } else {
                console.error('Error: Expected JSON array, but received: ', data);
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error('Error:', textStatus, errorThrown);
        }
    });
}




// Swal.fire({
//     // ... your Swal options
// }).then((result) => {
//     // ...
//     document.querySelector('.swal2-container').style.zIndex = '1000';
// });

function loadSalesData() {
    const urlWithParams = new URL(`${servletUrlGetAllSales}`);

    $.ajax({
        url: urlWithParams.href, // Use URL object's href property
        type: 'GET',
        dataType: 'json', // Expect JSON response
        headers: {"Content-Type": "application/json", "authorization": "Bearer "+localStorage.getItem("AuthToken")},
        success: function(data) {
            if (Array.isArray(data)) {
                console.log('Response sales data: ', data);
                $('#sales_tBody').empty();
                data.forEach(function(sales) {
                    let record = `<tr><td class="orderNo">${sales.orderNo}</td><td class="cusName">${sales.cusName}</td>
                    <td class="itemCode">${sales.itemCode}</td><td class="itemDesc">${sales.itemDesc}</td>
                    <td class="size">${sales.size}</td><td class="unitPrice">${sales.unitPrice}</td>
                    <td class="itemQty">${sales.itemQty}</td><td class="totPrice">${sales.totPrice}</td>
                    <td class="purDate">${sales.purDate}</td><td class="payMethod">${sales.payMethod}</td>
                    <td class="addedPoints">${sales.addedPoints}</td><td class="cashierName">${sales.cashierName}</td></tr>`;
                    $("#sales_tBody").append(record);
                });
            } else {
                console.error('Error: Expected JSON array, but received: ', data);
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error('Error:', textStatus, errorThrown);
        }
    });
}



// retrieve customer by table click
$("#sales_tBody").on("click", "tr", function() {
    row_index = $(this).index();
    let orderNo = $(this).find(".orderNo").text();
    let cusName = $(this).find(".cusName").text();
    let itemCode = $(this).find(".itemCode").text();
    let itemDesc = $(this).find(".itemDesc").text();
    let size = $(this).find(".size").text();
    let unitPrice = $(this).find(".unitPrice").text();
    let itemQty = $(this).find(".itemQty").text();
    let totPrice = $(this).find(".totPrice").text();
    let purDate = $(this).find(".purDate").text();
    let payMethod = $(this).find(".payMethod").text();
    let addedPoints = $(this).find(".addedPoints").text();
    let cashierName = $(this).find(".cashierName").text();

    $("#orderNo").val(orderNo);
    $("#cusNameSales").val(cusName);
    $("#itemCode").val(itemCode);
    $("#itemDesc").val(itemDesc);
    $("#size").val(size);
    $("#unitPrice").val(unitPrice);
    $("#itemQty").val(itemQty);
    $("#totPrice").val(totPrice);
    $("#purDate").val(purDate);
    $("#payMethod").val(payMethod);
    $("#addedPoints").val(addedPoints);
    $("#cashier").val(cashierName);
});


function loadItemCode() {
    $("#itemCode").empty(); // Clear existing options

    const urlWithParams = new URL(`${servletUrlGetAllInv1}`);

    $.ajax({
        url: urlWithParams.href, // Use URL object's href property
        type: 'GET',
        dataType: 'json', // Expect JSON response
        headers: {"Content-Type": "application/json", "authorization": "Bearer "+localStorage.getItem("AuthToken")},
        success: function(data) {
            if (Array.isArray(data)) {
                console.log('Response item code data: ', data);

                // Add a default option
                const title = $('<option>', { text: '-Set Item Code-', value: 'title' });
                $("#itemCode").append(title);

                data.forEach(function(inventory) {
                    const option = $('<option>', { text: inventory.itemCode, value: inventory.itemCode });
                    $("#itemCode").append(option);
                });
            } else {
                console.error('Error: Expected JSON array, but received: ', data);
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error('Error:', textStatus, errorThrown);
        }
    });
}


$("#itemCode").change(function() {
    var selectedCode = $(this).val();
    loadItemDesc();
    console.log("Selected code:", selectedCode);
});

// const loadItemDesc = () => {
//     $("#itemDesc").empty();
//     let invCode = $("#itemCode").val();
//     console.log("invCode : "+invCode);
//     console.log(typeof invCode);
//
//     const urlWithParams = new URL(`${servletUrlGetInvDesc}`);
//
//     urlWithParams.searchParams.append('invCode', invCode);
//     fetch(urlWithParams, {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json', // Optional, adjust based on your backend requirement
//             'invCode': invCode // Add the invCode header
//         }
//     })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//                 console.log("response isn't ok!");
//             }
//             return response.json();
//         })
//         .then(data => {
//             if (Array.isArray(data)) {
//                 console.log('Response inventory data: ', data);
//                 const matchingItem = data.find(inventory => inventory.itemCode === invCode);
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



const loadItemDesc = () => {
    $("#itemDesc").empty();
    let itemCode = $("#itemCode").val();
    console.log("itemCode : "+itemCode);
    console.log(typeof itemCode);

    const urlWithParams = new URL(`${servletUrlGetInvDesc}`);

    urlWithParams.searchParams.append('invCode', itemCode);
    fetch(urlWithParams, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json', // Optional, adjust based on your backend requirement
            'invCode': itemCode, // Add the invCode header
            "authorization": "Bearer "+localStorage.getItem("AuthToken"),
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
            const dataArray = Object.values(data);
            if (Array.isArray(dataArray)) {
                console.log('Response inventory data: ', dataArray);
                // const matchingItem = dataArray.find(inventory => inventory.itemCode === itemCode);
                const matchingItem = dataArray[1];
                console.log("matchingItem : "+matchingItem);

                if (matchingItem) {
                    // Set the itemDesc value if a matching item is found
                    // console.log("matchingItem : "+matchingItem.itemDesc);
                    console.log("matchingItem : "+matchingItem);
                    // $("#itemDesc").text(matchingItem.itemDesc); // Assuming itemDesc property exists in the data
                    $("#itemDesc").val(matchingItem);
                } else {
                    console.warn(`Item with code '${itemCode}' not found in response data.`);
                    $("#itemDesc").text("Item not found");
                }
            } else { console.error('Error: Expected JSON array, but received: ', data); }
        })
        .catch(error => { console.error('Error:', error);});
};


$("#unitPrice").on("input", function() {

    let unitPrice = $("#unitPrice").val();
    console.log("Unit Price" + unitPrice);

    let itemQty = $("#itemQty").val();
    console.log("Item Qty" + itemQty);
    let totPrice = unitPrice*itemQty;

    console.log("Tot Price" + totPrice);
    $("#totPrice").val(totPrice);
});

$("#itemQty").on("input", function() {

    let unitPrice = $("#unitPrice").val();
    console.log("Unit Price" + unitPrice);

    let itemQty = $("#itemQty").val();
    console.log("Item Qty" + itemQty);
    let totPrice = unitPrice*itemQty;

    console.log("Tot Price" + totPrice);
    $("#totPrice").val(totPrice);
});


$("#itemDesc").on("input", function() {

    let desc = $("#itemDesc").val();
});


// reset form
// $("#salesBtn>button[type='button']").eq(0).on("click", () => {
$("#btnReset").on("click", () => {
    $("#orderNo").val("");
    $("#cusNameSales").val("");
    $("#itemDesc").val("");
    $("#itemCode").val("");
    $("#size").val("");
    $("#unitPrice").val("");
    $("#itemQty").val("");
    $("#totPrice").val("");
    $("#purDate").val("");
    $("#payMethod").val("");
    $("#addedPoints").val("");
    $("#cashier").val("");

    loadSalesData();
    generateOrderNo();
});


$("#size").on('keypress' , ()=> {
    // if (e.key === "Enter" || e.keyCode === 13) {
    $("#unitPrice").focus();
    // }
});

$("#unitPrice").on('keypress' , ()=> {
    $("#itemQty").focus();
});