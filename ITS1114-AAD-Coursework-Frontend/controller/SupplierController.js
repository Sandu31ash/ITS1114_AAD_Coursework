const servletUrlSaveSup = 'http://localhost:8080/its1114aadcoursework1/api/v1/supplier/save';
const servletUrlUpdateSup = 'http://localhost:8080/its1114aadcoursework1/api/v1/supplier/update';
const servletUrlGetAllSup = 'http://localhost:8080/its1114aadcoursework1/api/v1/supplier/getAll';
const servletUrlDeleteSup = 'http://localhost:8080/its1114aadcoursework1/api/v1/supplier/delete';


$("#supBtnSave").on('click' , ()=>{

    let sup_code = $("#supCode").val();
    let sup_name = $("#supName").val();
    let category = $("#category").val();
    let sup_add1 = $("#supAdd1").val();
    let sup_add2 = $("#supAdd2").val();
    let sup_add3 = $("#supAdd3").val();
    let sup_add4 = $("#supAdd4").val();
    let sup_add5 = $("#supAdd5").val();
    let sup_add6 = $("#supAdd6").val();
    let sup_contact1 = $("#contact1").val();
    let sup_contact2 = $("#contact2").val();
    let sup_email = $("#emailSup").val();

    console.log("Sup btn save clicked");

    let supplierObject = {
        supCode: sup_code,
        supName: sup_name,
        category: category,
        add1: sup_add1,
        add2: sup_add2,
        add3: sup_add3,
        add4: sup_add4,
        add5: sup_add5,
        add6: sup_add6,
        contact1: sup_contact1,
        contact2: sup_contact2,
        email: sup_email
    };

    console.log('supplierObject: ', supplierObject);

    if (sup_name && category && sup_add1 && sup_add2 && sup_add3 && sup_add4 && sup_add5 && sup_add6 && sup_contact1 && sup_contact2 && sup_email){

        // Convert the JS object to a JSON
        let supplierJSON = JSON.stringify(supplierObject);
        console.log('supplierJSON: ', supplierJSON);
        // AJAX - JQuery
        $.ajax({
            url: `${servletUrlSaveSup}`,
            type: "POST",
            data: supplierJSON,
            headers: {
                "Content-Type": "application/json",
                "authorization": "Bearer " + localStorage.getItem("AuthToken")
            },
            success: (res) => {
                console.log(JSON.stringify(res));
                // Swal.fire({width: '225px', position: 'top', icon: 'success', title: 'Saved!', showConfirmButton: false, timer: 2000});

                Toast.fire({
                    icon: 'success',
                    title: 'Saved'
                })

                loadSupplierData();
                $("#supBtnReset").click();
            },
            error: (err) => {
                console.error(err);
            }
        });
    }else {
        Toast.fire({
            icon: 'error',
            title: 'Fill all the fields!'
        })
    }

});


$("#supBtnUpdate").on('click' , ()=>{

    let sup_code = $("#supCode").val();
    let sup_name = $("#supName").val();
    let category = $("#category").val();
    let sup_add1 = $("#supAdd1").val();
    let sup_add2 = $("#supAdd2").val();
    let sup_add3 = $("#supAdd3").val();
    let sup_add4 = $("#supAdd4").val();
    let sup_add5 = $("#supAdd5").val();
    let sup_add6 = $("#supAdd6").val();
    let sup_contact1 = $("#contact1").val();
    let sup_contact2 = $("#contact2").val();
    let sup_email = $("#emailSup").val();

    console.log("Sup btn save clicked");

    let supplierObject = {
        supCode: sup_code,
        supName: sup_name,
        category: category,
        add1: sup_add1,
        add2: sup_add2,
        add3: sup_add3,
        add4: sup_add4,
        add5: sup_add5,
        add6: sup_add6,
        contact1: sup_contact1,
        contact2: sup_contact2,
        email: sup_email
    };

    console.log('supplierObject: ', supplierObject);

    if (sup_name && category && sup_add1 && sup_add2 && sup_add3 && sup_add4 && sup_add5 && sup_add6 && sup_contact1 && sup_contact2 && sup_email) {

        let supplierJSON = JSON.stringify(supplierObject);
        console.log('supplierJSON: ', supplierJSON);
        $.ajax({
            url: `${servletUrlUpdateSup}`,
            type: "PUT",
            data: supplierJSON,
            headers: {
                "supCode": sup_code,
                "Content-Type": "application/json",
                "authorization": "Bearer " + localStorage.getItem("AuthToken")
            },
            success: (res) => {
                console.log(JSON.stringify(res));
                // Swal.fire({width: '225px', position: 'top', icon: 'success', title: 'Updated!', showConfirmButton: false, timer: 2000});

                Toast.fire({
                    icon: 'success',
                    title: 'Updated'
                })
                loadSupplierData();
                $("#supBtnReset").click();
            },
            error: (err) => {
                console.error(err);
            }
        });
    }else{
        Toast.fire({
            icon: 'error',
            title: 'Fill all the fields!'
        })
    }
});


// delete customer
$("#supBtnDelete").on('click' , ()=>{
    let sup_code = $("#supCode").val();
    console.log("delete : "+sup_code);
    Swal.fire({
        width: '300px', title: 'Delete Supplier',
        position: 'top',
        text: "Are you sure you want to permanently remove this supplier?",
        icon: 'warning', showCancelButton: true, confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33', confirmButtonText: 'Yes, delete!'
    }).then((result) => {
        if (result.isConfirmed) {
            let supplierObject = {supplier_id: sup_code};
            console.log('supplierObject: ', supplierObject);
            let supplierJSON = JSON.stringify(supplierObject);
            console.log('supplierJSON: ', supplierJSON);
            $.ajax({
                url: `${servletUrlDeleteSup}`,
                type: "DELETE",
                data: supplierJSON,
                headers: {
                    "supCode": sup_code,
                    "Content-Type": "application/json",
                    "authorization": "Bearer " + localStorage.getItem("AuthToken")
                },
                success: (res) => {
                    console.log(JSON.stringify(res));
                    // Swal.fire({width: '225px', position: 'top', icon: 'success', title: 'Deleted!', showConfirmButton: false, timer: 2000});

                    Toast.fire({
                        icon: 'success',
                        title: 'Deleted!'
                    })

                    loadSupplierData();
                    $("#supBtnReset").click();
                },
                error: (err) => { console.error(err)}
            });
        }
    });
});


function generateSupCode() {
    $("#supCode").val(""); // Clear previous value

    const urlWithParams = new URL(`${servletUrlGetAllSup}`);

    $.ajax({
        url: urlWithParams.href, // Use URL object's href property
        type: 'GET',
        dataType: 'json', // Expect JSON response
        headers: {
            "Content-Type": "application/json",
            "authorization": "Bearer " + localStorage.getItem("AuthToken")
        },
        success: function(data) {
            if (Array.isArray(data)) {
                console.log('Response supplier data: ', data);

                // Find the last supplier code (assuming supCode is unique)
                const lastSupplier = data.length > 0 ? data[data.length - 1] : null;
                let lastSupCode = null;

                if (lastSupplier) {
                    lastSupCode = lastSupplier.supCode; // Assuming SupCode is a property within the supplier object
                }

                if (lastSupCode === "") {
                    $("#supCode").val("HSS00001");
                } else {
                    const prefix = "HSS";
                    const defaultCode = "HSS00001";

                    // Extract the numeric part (assuming format "HSSxxxxx")
                    const number = lastSupCode ? parseInt(lastSupCode.substr(prefix.length)) + 1 : 1;

                    // Generate the new code with zero-padding to maintain the format
                    const newSupCode = prefix + number.toString().padStart(5, "0");
                    $("#supCode").val(newSupCode);
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


function loadSupplierData() {
    const urlWithParams = new URL(`${servletUrlGetAllSup}`);

    $.ajax({
        url: urlWithParams.href, // Use URL object's href property
        type: 'GET',
        dataType: 'json', // Expect JSON response
        headers: {
            "Content-Type": "application/json",
            "authorization": "Bearer " + localStorage.getItem("AuthToken")
        },
        success: function(data) {
            if (Array.isArray(data)) {
                console.log('Response supplier data: ', data);
                $('#supp_tBody').empty(); // Clear existing table body

                data.forEach(function(supplier) {
                    let record = `<tr>
            <td class="supCode">${supplier.supCode}</td>
            <td class="supName">${supplier.supName}</td>
            <td class="category">${supplier.category}</td>
            <td class="add1">${supplier.add1}</td>
            <td class="add2">${supplier.add2}</td>
            <td class="add3">${supplier.add3}</td>
            <td class="add4">${supplier.add4}</td>
            <td class="add5">${supplier.add5}</td>
            <td class="add6">${supplier.add6}</td>
            <td class="contact1">${supplier.contact1}</td>
            <td class="contact2">${supplier.contact2}</td>
            <td class="email">${supplier.email}</td>
          </tr>`;
                    $("#supp_tBody").append(record);
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
$("#supp_tBody").on("click", "tr", function() {
    row_index = $(this).index();
    let supCode = $(this).find(".supCode").text();
    let supName = $(this).find(".supName").text();
    let category = $(this).find(".category").text();
    let add1 = $(this).find(".add1").text();
    let add2 = $(this).find(".add2").text();
    let add3 = $(this).find(".add3").text();
    let add4 = $(this).find(".add4").text();
    let add5 = $(this).find(".add5").text();
    let add6 = $(this).find(".add6").text();
    let contact1 = $(this).find(".contact1").text();
    let contact2 = $(this).find(".contact2").text();
    let email = $(this).find(".email").text();

    $("#supCode").val(supCode);
    $("#supName").val(supName);
    $("#category").val(category);
    $("#supAdd1").val(add1);
    $("#supAdd2").val(add2);
    $("#supAdd3").val(add3);
    $("#supAdd4").val(add4);
    $("#supAdd5").val(add5);
    $("#supAdd6").val(add6);
    $("#contact1").val(contact1);
    $("#contact2").val(contact2);
    $("#emailSup").val(email);
});


$("#supBtnReset").on("click", () => {
    $("#supCode").val("");
    $("#supName").val("");
    $("#category").val("");
    $("#supAdd1").val("");
    $("#supAdd2").val("");
    $("#supAdd3").val("");
    $("#supAdd4").val("");
    $("#supAdd5").val("");
    $("#supAdd6").val("");
    $("#contact1").val("");
    $("#contact2").val("");
    $("#emailSup").val("");

    loadSupplierData();
    generateSupCode();
});
