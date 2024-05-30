const servletUrlSave = 'http://localhost:8080/its1114aadcoursework1/api/v1/customer/save';
const servletUrlUpdate = 'http://localhost:8080/its1114aadcoursework1/api/v1/customer/update';
const servletUrlGetAll = 'http://localhost:8080/its1114aadcoursework1/api/v1/customer/getAll';
const servletUrlDelete = 'http://localhost:8080/its1114aadcoursework1/api/v1/customer/delete';

let row_index = null;

const Toast = Swal.mixin({
    toast: true,
    position: 'top-right',
    iconColor: 'white',
    customClass: {
        popup: 'colored-toast'
    },
    showConfirmButton: false,
    timer: 1700,
    timerProgressBar: true
})

$("#cusBtnSave").on('click' , ()=>{

    const radios = document.getElementsByName('gender');
    let gender;
    for (const radio of radios) {
        if (radio.checked) {
            gender = radio.value;
            break;
        }
    }
    // alert('Selected Gender: ' + selectedValue);


    let cus_code = $("#cusCode").val();
    let cus_name = $("#cusName").val();
    // let gender = document.querySelector('input[name="gender"]:checked');
    let j_Date = $("#joinedDate").val();
    let level = $("#level").val();
    let tot_points = $("#totPoints").val();
    let dob = $("#dob").val();
    let cus_add1 = $("#cusAdd1").val();
    let cus_add2 = $("#cusAdd2").val();
    let cus_add3 = $("#cusAdd3").val();
    let cus_add4 = $("#cusAdd4").val();
    let cus_add5 = $("#cusAdd5").val();
    let cus_contact = $("#cusContact").val();
    let cus_email = $("#cusEmail").val();
    let rec_pur_data = $("#recPurData").val();

 console.log("Cus btn save clicked");

       // Create a JS object
       // let customerObject = {
       //    cusCode:"C010",
       //    cusName:"Ash",
       //    gender:"FEMALE",
       //    joinedDate: "2024-01-25",
       //    level:"GOLD",
       //    totPoints:100,
       //    dob:"2000-02-25",
       //    add1:"1",
       //    add2:"1",
       //    add3:"1",
       //    add4:"1",
       //    add5:"1",
       //    contact:"1",
       //    email:"1",
       //    recPurData:"2024-04-28T06:16:48.607+00:00"
       // };

    let customerObject = {
        cusCode: cus_code,
        cusName: cus_name,
        gender: gender,
        joinedDate: j_Date,
        level: level,
        totPoints: tot_points,
        dob: dob,
        add1: cus_add1,
        add2: cus_add2,
        add3: cus_add3,
        add4: cus_add4,
        add5: cus_add5,
        contact: cus_contact,
        email: cus_email,
        recPurData: rec_pur_data
    };

       console.log('customerObject: ', customerObject);

       console.log('gender: ', gender);

       // Convert the JS object to a JSON
       let customerJSON = JSON.stringify(customerObject);
       console.log('customerJSON: ', customerJSON);
       // AJAX - JQuery
       $.ajax({
        url: `${servletUrlSave}`,
        type: "POST",
        data: customerJSON,
        headers: {"Content-Type": "application/json"},
        success: (res) => {
         console.log(JSON.stringify(res));
         // Swal.fire({width: '225px', position: 'top', icon: 'success', title: 'Saved!', showConfirmButton: false, timer: 2000});

            // import Swal from 'sweetalert2'
            // import './styles.css'

            Toast.fire({
                icon: 'success',
                title: 'Saved'
            })

         $("#cusBtn>button[type='button']").eq(0).click();
         // loadCustomerData();
         //    generateCusCode();
            $("#cusBtnReset").click();
        },
        error: (err) => { console.error(err);}
       });


});


$("#cusBtnUpdate").on('click' , ()=>{

    const radios = document.getElementsByName('gender');
    let gender;
    for (const radio of radios) {
        if (radio.checked) {
            gender = radio.value;
            break;
        }
    }
    // alert('Selected Gender: ' + selectedValue);


    let cus_code = $("#cusCode").val();
    let cus_name = $("#cusName").val();
    // let gender = document.querySelector('input[name="gender"]:checked');
    let j_Date = $("#joinedDate").val();
    let level = $("#level").val();
    let tot_points = $("#totPoints").val();
    let dob = $("#dob").val();
    let cus_add1 = $("#cusAdd1").val();
    let cus_add2 = $("#cusAdd2").val();
    let cus_add3 = $("#cusAdd3").val();
    let cus_add4 = $("#cusAdd4").val();
    let cus_add5 = $("#cusAdd5").val();
    let cus_contact = $("#cusContact").val();
    let cus_email = $("#cusEmail").val();
    let rec_pur_data = $("#recPurData").val();

    console.log("Cus btn update clicked");

    let customerObject = {
        cusCode: cus_code,
        cusName: cus_name,
        gender: gender,
        joinedDate: j_Date,
        level: level,
        totPoints: tot_points,
        dob: dob,
        add1: cus_add1,
        add2: cus_add2,
        add3: cus_add3,
        add4: cus_add4,
        add5: cus_add5,
        contact: cus_contact,
        email: cus_email,
        recPurData: rec_pur_data
    };

    console.log('customerObject: ', customerObject);

    let customerJSON = JSON.stringify(customerObject);
    console.log('customerJSON: ', customerJSON);
    $.ajax({
        url: `${servletUrlUpdate}`,
        type: "PUT",
        data: customerJSON,
        headers: {
            "cusCode": cus_code,
            "Content-Type": "application/json"
        },
        success: (res) => {
            console.log(JSON.stringify(res));
            // Swal.fire({width: '225px', position: 'top', icon: 'success', title: 'Updated!', showConfirmButton: false, timer: 2000});

            Toast.fire({
                icon: 'success',
                title: 'Updated'
            })

            // $("#cusBtn>button[type='button']").eq(0).click();
            // loadCustomerData();
            $("#cusBtnReset").click();
        },
        error: (err) => { console.error(err);}
    });
});

// delete customer
$("#cusBtnDelete").on('click' , ()=>{
    let cus_code = $("#cusCode").val();
    console.log("delete : "+cus_code);
                Swal.fire({
                    width: '300px', title: 'Delete Customer',
                    position: 'top',
                    text: "Are you sure you want to permanently remove this customer?",
                    icon: 'warning', showCancelButton: true, confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33', confirmButtonText: 'Yes, delete!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        let customerObject = {customer_id: cus_code};
                        console.log('customerObject: ', customerObject);
                        let customerJSON = JSON.stringify(customerObject);
                        console.log('customerJSON: ', customerJSON);
                        $.ajax({
                            url: `${servletUrlDelete}`,
                            type: "DELETE",
                            data: customerJSON,
                            headers: {
                                "cusCode": cus_code,
                                "Content-Type": "application/json"
                            },
                            success: (res) => {
                                console.log(JSON.stringify(res));
                                // Swal.fire({width: '225px', position: 'top', icon: 'success', title: 'Deleted!', showConfirmButton: false, timer: 2000});

                                Toast.fire({
                                    icon: 'success',
                                    title: 'Deleted!'
                                })

                                // loadCustomerData();
                                // generateCusCode();
                                $("#cusBtnReset").click();
                            },
                            error: (err) => { console.error(err)}
                        });
                    }
                });
});

const generateCusCode = async () => { // Use async for asynchronous operations
    $("#cusCode").val(""); // Clear previous value

    const urlWithParams = new URL(`${servletUrlGetAll}`); // Update URL for all customers

    try {
        const response = await fetch(urlWithParams, { method: 'GET' });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (Array.isArray(data)) {
            console.log('Response customer data: ', data);

            // Find the last customer code (assuming cusCode is unique)
            const lastCustomer = data.length > 0 ? data[data.length - 1] : null;
            let lastCusCode = null;

            if (lastCustomer) {
                lastCusCode = lastCustomer.cusCode; // Assuming cusCode is a property within the customer object
            }

            if (lastCusCode === "") {
                $("#cusCode").val("HSC00001");
            } else {const prefix = "HSC";
                const defaultCode = "HSC00001";

                // Extract the numeric part (assuming format "HSCxxxxx")
                const number = lastCusCode ? parseInt(lastCusCode.substr(prefix.length)) + 1 : 1;

                // Generate the new code with zero-padding to maintain the format
                const newCusCode = prefix + number.toString().padStart(5, "0");
                $("#cusCode").val(newCusCode);
            }
        } else {
            console.error('Error: Expected JSON array, but received: ', data);
        }
    } catch (error) {
        console.error('Error:', error);
    }
};


// const generateCusCode = () => {
//
//
//
//     // if (lastCustomerId === "") {
//     //     $("#cusId1").val("C001");
//     // } else {
//     //     const number = parseInt(lastCustomerId.substr(1)) + 1;
//     //     let newCusCode = "C" + number.toString().padStart(3, "0");
//     //     $("#cusCode").val(newCusCode);
//     // }
// };



// // get next customer code
// async function generateNextId() {
//     $("#cusCode").val("Hey Cus!");
//     const urlWithParams = new URL(`${servletUrlGetAll}`);
//     try {
//         const response = await fetch(urlWithParams, {method: 'GET',});
//         if (response.ok) {
//             const data = await response.json();
//             const nextCusCode = data.cusCode;
//             console.log("Next Cus Code: "+ nextCusCode);
//             $("#cusCode").val(nextCusCode);
//         } else { console.error(`HTTP error! Status: ${response.status}`);}
//     } catch (error) { console.error('Error: ', error);}
// }


const loadCustomerData = () => {
    const urlWithParams = new URL(`${servletUrlGetAll}`)
    fetch(urlWithParams, { method: 'GET',})
        .then(response => {
            if (!response.ok) { throw new Error(`HTTP error! Status: ${response.status}`);}
            return response.json();
        })
        .then(data => {
            if (Array.isArray(data)) {
                console.log('Response customer data: ', data);
                $('#cus_tBody').empty();
                data.forEach(customer => {
                    let record = `<tr><td class="cusCode">${customer.cusCode}</td><td class="name">${customer.cusName}</td>
                    <td class="gender">${customer.gender}</td><td class="j_Date">${customer.joinedDate}</td>
                    <td class="level">${customer.level}</td><td class="totalPoints">${customer.totPoints}</td>
                    <td class="dob">${customer.dob}</td><td class="cus_add1">${customer.add1}</td><td class="cus_add2">${customer.add2}</td>
                    <td class="cus_add3">${customer.add3}</td><td class="cus_add4">${customer.add4}</td><td class="cus_add5">${customer.add5}</td>
                    <td class="cus_contact">${customer.contact}</td><td class="cus_email">${customer.email}</td><td class="rec_pur_data">${customer.recPurData}</td></tr>`;
                    $("#cus_tBody").append(record);
                });
            } else { console.error('Error: Expected JSON array, but received: ', data); }
        })
        .catch(error => { console.error('Error: ', error);});
};


// retrieve customer by table click
$("#cus_tBody").on("click", "tr", function() {
    row_index = $(this).index();
    let cusCode = $(this).find(".cusCode").text();
    let name = $(this).find(".name").text();
    let gender = $(this).find(".gender").text();
    let j_date = $(this).find(".j_Date").text();
    let level = $(this).find(".level").text();
    let totalPoints = $(this).find(".totalPoints").text();
    let dob = $(this).find(".dob").text();
    let add1 = $(this).find(".cus_add1").text();
    let add2 = $(this).find(".cus_add2").text();
    let add3 = $(this).find(".cus_add3").text();
    let add4 = $(this).find(".cus_add4").text();
    let add5 = $(this).find(".cus_add5").text();
    let contact = $(this).find(".cus_contact").text();
    let email = $(this).find(".cus_email").text();
    let rec_pur_data = $(this).find(".rec_pur_data").text();

    $("#cusCode").val(cusCode);
    $("#cusName").val(name);
    // radio.val(gender);
    document.getElementsByName('gender').values(gender);
    $("#joinedDate").val(j_date);
    $("#level").val(level);
    $("#totPoints").val(totalPoints);
    $("#dob").val(dob);
    $("#cusAdd1").val(add1);
    $("#cusAdd2").val(add2);
    $("#cusAdd3").val(add3);
    $("#cusAdd4").val(add4);
    $("#cusAdd5").val(add5);
    $("#cusContact").val(contact);
    $("#cusEmail").val(email);
    $("#recPurData").val(rec_pur_data);
});


$("#cusBtnReset").on("click", () => {
    $("#cusCode").val("");
    $("#cusName").val("");
    // radio.val(gender);
    document.getElementsByName('gender').values("");
    $("#joinedDate").val("");
    $("#level").val("");
    $("#totPoints").val("");
    $("#dob").val("");
    $("#cusAdd1").val("");
    $("#cusAdd2").val("");
    $("#cusAdd3").val("");
    $("#cusAdd4").val("");
    $("#cusAdd5").val("");
    $("#cusContact").val("");
    $("#cusEmail").val("");
    $("#recPurData").val("");

    loadCustomerData();
    generateCusCode();
});


// function generateCusCode() {
//     // const lastCustomerId = customerIdInput.value;
//
//     // const lastCustomerId = customer_db[length-1].cus_id;
//
//     let length = customer_db.length;
//
//     let lastCustomerId = customer_db[length-1].cus_id;
//
//     if (lastCustomerId === "") {
//         $("#cusId1").val("C001");
//     } else {
//         const number = parseInt(lastCustomerId.substr(1)) + 1;
//         let newId = "C" + number.toString().padStart(3, "0");
//         $("#cusId1").val(newId);
//     }
//
//     // $("#cusId1").val(lastCustomerId);
//     // $("#cusId1").val(lastCustomerId);
//     // console.log("generate");
// }








$("#cusCode").on('keypress' , ()=> {
    // if (e.key === "Enter" || e.keyCode === 13) {
    $("#cusName").focus();
    // }
});

$("#level").on('keypress' , ()=> {
    $("#totPoints").focus();
});

$("#cusAdd1").on('keypress' , ()=> {
    $("#cusAdd2").focus();
});

$("#cusAdd2").on('keypress' , ()=> {
    $("#cusAdd3").focus();
});

$("#cusAdd3").on('keypress' , ()=> {
    $("#cusAdd4").focus();
});

$("#cusAdd4").on('keypress' , ()=> {
    $("#cusAdd5").focus();
});

$("#cusAdd5").on('keypress' , ()=> {
    $("#cusContact").focus();
});

$("#cusContact").on('keypress' , ()=> {
    $("#cusEmail").focus();
});