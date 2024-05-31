const servletUrlSaveEmp = 'http://localhost:8080/its1114aadcoursework1/api/v1/employee/save';
const servletUrlUpdateEmp = 'http://localhost:8080/its1114aadcoursework1/api/v1/employee/update';
const servletUrlGetAllEmp = 'http://localhost:8080/its1114aadcoursework1/api/v1/employee/getAll';
const servletUrlDeleteEmp = 'http://localhost:8080/its1114aadcoursework1/api/v1/employee/delete';

$("#empBtnSave").on('click',()=>{

    let emp_code = $("#empCode").val();
    let emp_name = $("#empName").val();
    let emp_pic = $("#empPic").val();
    let gender = $("#empGender").val();
    let status = $("#empStatus").val();
    let desig = $("#designation").val();
    let acc_role = $("#accessRole").val();
    let dob = $("#empDob").val();
    let date_of_join = $("#dateOfJoin").val();
    let branch = $("#branch").val();
    let emp_add1 = $("#empAdd1").val();
    let emp_add2 = $("#empAdd2").val();
    let emp_add3 = $("#empAdd3").val();
    let emp_add4 = $("#empAdd4").val();
    let emp_add5 = $("#empAdd5").val();
    let emp_contact = $("#empContact").val();
    let emp_email = $("#empEmail").val();
    let in_case_of_emg = $("#inCaseOfEmg").val();
    let emerg_contact = $("#emergContact").val();

    console.log("Emp btn save clicked");

    let employeeObject = {
        empCode: emp_code,
        empName: emp_name,
        proPic: emp_pic,
        gender: gender,
        status: status,
        designation: desig,
        accessRole: acc_role,
        dob: dob,
        dateOfJoin: date_of_join,
        attBranch: branch,
        add1: emp_add1,
        add2: emp_add2,
        add3: emp_add3,
        add4: emp_add4,
        add5: emp_add5,
        contact: emp_contact,
        email: emp_email,
        infCaseOfEmerg: in_case_of_emg,
        emergContact: emerg_contact
    };

    console.log('employeeObject: ', employeeObject);

    if(emp_name && emp_pic && gender && status && desig && acc_role && dob && date_of_join && branch && emp_add1 && emp_add2 && emp_add3 && emp_add4 && emp_add5 && emp_contact && emp_email && in_case_of_emg && emerg_contact) {

        // Convert the JS object to a JSON
        let employeeJSON = JSON.stringify(employeeObject);
        console.log('employeeJSON: ', employeeJSON);
        // AJAX - JQuery
        $.ajax({
            url: `${servletUrlSaveEmp}`,
            type: "POST",
            data: employeeJSON,
            headers: {
                "Content-Type": "application/json",
                "authorization": "Bearer " + localStorage.getItem("AuthToken")
            },
            success: (res) => {
                console.log(JSON.stringify(res));
                Swal.fire({
                    width: '225px',
                    position: 'top',
                    icon: 'success',
                    title: 'Saved!',
                    showConfirmButton: false,
                    timer: 2000
                });

                Toast.fire({
                    icon: 'success',
                    title: 'Saved'
                })

                // $("#customer_btns>button[type='button']").eq(3).click();
                // loadEmployeeData();
                $("#empBtnReset").click();
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

$("#empBtnUpdate").on('click' , ()=>{

    let emp_code = $("#empCode").val();
    let emp_name = $("#empName").val();
    let emp_pic = $("#empPic").val();
    let gender = $("#empGender").val();
    let status = $("#empStatus").val();
    let desig = $("#designation").val();
    let acc_role = $("#accessRole").val();
    let dob = $("#empDob").val();
    let date_of_join = $("#dateOfJoin").val();
    let branch = $("#branch").val();
    let emp_add1 = $("#empAdd1").val();
    let emp_add2 = $("#empAdd2").val();
    let emp_add3 = $("#empAdd3").val();
    let emp_add4 = $("#empAdd4").val();
    let emp_add5 = $("#empAdd5").val();
    let emp_contact = $("#empContact").val();
    let emp_email = $("#empEmail").val();
    let in_case_of_emg = $("#inCaseOfEmg").val();
    let emerg_contact = $("#emergContact").val();

    console.log("Emp btn update clicked");

    let employeeObject = {
        empCode: emp_code,
        empName: emp_name,
        proPic: emp_pic,
        gender: gender,
        status: status,
        designation: desig,
        accessRole: acc_role,
        dob: dob,
        dateOfJoin: date_of_join,
        attBranch: branch,
        add1: emp_add1,
        add2: emp_add2,
        add3: emp_add3,
        add4: emp_add4,
        add5: emp_add5,
        contact: emp_contact,
        email: emp_email,
        infCaseOfEmerg: in_case_of_emg,
        emergContact: emerg_contact
    };

    console.log('employeeObject: ', employeeObject);

    if(emp_name && emp_pic && gender && status && desig && acc_role && dob && date_of_join && branch && emp_add1 && emp_add2 && emp_add3 && emp_add4 && emp_add5 && emp_contact && emp_email && in_case_of_emg && emerg_contact) {

        let employeeJSON = JSON.stringify(employeeObject);
        console.log('employeeJSON: ', employeeJSON);
        $.ajax({
            url: `${servletUrlUpdateEmp}`,
            type: "PUT",
            data: employeeJSON,
            headers: {
                "empCode": emp_code,
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

                // $("#empBtn>button[type='button']").eq(0).click();
                // loadEmployeeData();
                $("#empBtnReset").click();
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


// delete customer
$("#empBtnDelete").on('click' , ()=>{
    let emp_code = $("#empCode").val();
    console.log("delete : "+emp_code);
    Swal.fire({
        width: '300px', title: 'Delete Employee',
        position: 'top',
        text: "Are you sure you want to permanently remove this employee?",
        icon: 'warning', showCancelButton: true, confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33', confirmButtonText: 'Yes, delete!'
    }).then((result) => {
        if (result.isConfirmed) {
            let employeeObject = {employee_id: emp_code};
            console.log('employeeObject: ', employeeObject);
            let employeeJSON = JSON.stringify(employeeObject);
            console.log('employeeJSON: ', employeeJSON);
            $.ajax({
                url: `${servletUrlDeleteEmp}`,
                type: "DELETE",
                data: employeeJSON,
                headers: {
                    "empCode": emp_code,
                    "Content-Type": "application/json",
                    "authorization": "Bearer "+localStorage.getItem("AuthToken")
                },
                success: (res) => {
                    console.log(JSON.stringify(res));
                    // Swal.fire({width: '225px', position: 'top', icon: 'success', title: 'Deleted!', showConfirmButton: false, timer: 2000});

                    Toast.fire({
                        icon: 'success',
                        title: 'Deleted!'
                    })

                    // loadEmployeeData();
                    $("#empBtnReset").click();
                },
                error: (err) => { console.error(err)}
            });
        }
    });
});


function generateEmpCode() {
    $("#empCode").val(""); // Clear previous value

    const urlWithParams = new URL(`${servletUrlGetAllEmp}`); // Update URL for all emp

    $.ajax({
        url: urlWithParams.href, // Use URL object's href property
        type: 'GET',
        dataType: 'json', // Expect JSON response
        headers: {"Content-Type": "application/json", "authorization": "Bearer "+localStorage.getItem("AuthToken")},
        success: function(data) {
            if (Array.isArray(data)) {
                console.log('Response employee data: ', data);

                // Find the last employee code (assuming empCode is unique)
                const lastEmployee = data.length > 0 ? data[data.length - 1] : null;
                let lastEmpCode = null;

                if (lastEmployee) {
                    lastEmpCode = lastEmployee.empCode; // Assuming empCode is a property within the employee object
                }

                if (lastEmpCode === "") {
                    $("#empCode").val("HSE00001");
                } else {
                    const prefix = "HSE";
                    const defaultCode = "HSE00001";

                    // Extract the numeric part (assuming format "HSExxxxx")
                    const number = lastEmpCode ? parseInt(lastEmpCode.substr(prefix.length)) + 1 : 1;

                    // Generate the new code with zero-padding to maintain the format
                    const newEmpCode = prefix + number.toString().padStart(5, "0");
                    $("#empCode").val(newEmpCode);
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



function loadEmployeeData() {
    const urlWithParams = new URL(`${servletUrlGetAllEmp}`);
    urlWithParams.searchParams.append('empCode', 'get_all'); // Add query parameters
    urlWithParams.searchParams.append('search_term', 'get_all');

    $.ajax({
        url: urlWithParams.href, // Use URL object's href property
        type: 'GET',
        dataType: 'json', // Expect JSON response
        headers: {"Content-Type": "application/json", "authorization": "Bearer "+localStorage.getItem("AuthToken")},
        success: function(data) {
            if (Array.isArray(data)) {
                console.log('Response employee data: ', data);
                $('#emp_tBody').empty();
                data.forEach(function(employee) {
                    let record = `<tr><td class="empCode">${employee.empCode}</td><td class="name">${employee.empName}</td>
                    <td class="pro_pic">${employee.proPic}</td><td class="gender">${employee.gender}</td>
                    <td class="status">${employee.status}</td><td class="desig">${employee.designation}</td>
                    <td class="access_role">${employee.accessRole}</td><td class="dob">${employee.dob}</td><td class="date_of_join">${employee.dateOfJoin}</td>
                    <td class="att_branch">${employee.attBranch}</td><td class="add1">${employee.add1}</td><td class="add2">${employee.add2}</td>
                    <td class="add3">${employee.add3}</td><td class="add4">${employee.add4}</td><td class="add5">${employee.add5}</td>
                    <td class="contact">${employee.contact}</td><td class="email">${employee.email}</td><td class="in_case_of_emerg">${employee.infCaseOfEmerg}</td>
                    <td class="emerg_contact">${employee.emergContact}</td></tr>`;
                    $("#emp_tBody").append(record);
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



// retrieve employee by table click
$("#emp_tBody").on("click", "tr", function() {
    row_index = $(this).index();
    let empCode = $(this).find(".empCode").text();
    let empName = $(this).find(".name").text();
    // let proPic = $(this).find(".pro_pic").text();
    let empGender = $(this).find(".gender").text();
    let status = $(this).find(".status").text();
    let desig = $(this).find(".desig").text();
    let access_role = $(this).find(".access_role").text();
    let empDob = $(this).find(".dob").text();
    let add1 = $(this).find(".add1").text();
    let add2 = $(this).find(".add2").text();
    let add3 = $(this).find(".add3").text();
    let add4 = $(this).find(".add4").text();
    let add5 = $(this).find(".add5").text();
    let contact = $(this).find(".contact").text();
    let email = $(this).find(".email").text();
    let inCaseOfEmerg = $(this).find(".in_case_of_emerg").text();
    let emergContact = $(this).find(".emerg_contact").text();

    $("#empCode").val(empCode);
    $("#empName").val(empName);
    // $("#empPic").val(proPic);
    $("#empGender").val(empGender);
    $("#empStatus").val(status);
    $("#designation").val(desig);
    $("#accessRole").val(access_role);
    $("#empAdd1").val(add1);
    $("#empAdd2").val(add2);
    $("#empAdd3").val(add3);
    $("#empAdd4").val(add4);
    $("#empAdd5").val(add5);
    $("#empContact").val(contact);
    $("empEmail").val(email);
    $("#inCaseOfEmg").val(inCaseOfEmerg);
    $("#emergContact").val(emergContact);
});


$("#empBtnReset").on("click", () => {
    $("#empCode").val("");
    $("#empName").val("");
    $("#empPic").val("");
    $("#empGender").val("");
    $("#empStatus").val("");
    $("#designation").val("");
    $("#accessRole").val("");
    $("#empDob").val("");
    $("#dateOfJoin").val("");
    $("#branch").val("");
    $("#empAdd1").val("");
    $("#empAdd2").val("");
    $("#empAdd3").val("");
    $("#empAdd4").val("");
    $("#empAdd5").val("");
    $("#empContact").val("");
    $("#empEmail").val("");
    $("#inCaseOfEmg").val("");
    $("#emergContact").val("");

    loadEmployeeData();
    generateEmpCode();
});