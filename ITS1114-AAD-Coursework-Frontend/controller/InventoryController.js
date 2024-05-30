const servletUrlSaveInv = 'http://localhost:8080/its1114aadcoursework1/api/v1/inventory/save';
const servletUrlUpdateInv = 'http://localhost:8080/its1114aadcoursework1/api/v1/inventory/update';
const servletUrlGetAllInv = 'http://localhost:8080/its1114aadcoursework1/api/v1/inventory/getAll';
const servletUrlDeleteInv = 'http://localhost:8080/its1114aadcoursework1/api/v1/inventory/delete';

$("#invBtnSave").on('click' , ()=>{

    let item_code = $("#itemCodeInv").val();
    let item_desc = $("#itemDescInv").val();
    let item_pic = $("#itemPic").val();
    let category_inv = $("#itemCategory").val();
    let size = $("#sizeInv").val();
    let qty = $("#qty").val();
    let sup_code_inv = $("#supCodeInv").val();
    let sup_name_inv = $("#supNameInv").val();
    let unit_price_sale = $("#unitPriceSale").val();
    let unit_price_buy = $("#unitPriceBuy").val();
    let exp_profit = $("#expProfit").val();
    let profit_margin = $("#profitMargin").val();
    let status = $("#status").val();

    console.log("Inv btn save clicked");

    let inventoryObject = {
        itemCode: item_code,
        itemDesc: item_desc,
        itemPic: item_pic,
        category: category_inv,
        size: size,
        qty: qty,
        supCode: sup_code_inv,
        supName: sup_name_inv,
        unitPriceSale: unit_price_sale,
        unitPriceBuy: unit_price_buy,
        expProfit: exp_profit,
        profitMargin: profit_margin,
        status: status
    };

    console.log('inventoryObject: ', inventoryObject);

    // Convert the JS object to a JSON
    let inventoryJSON = JSON.stringify(inventoryObject);
    console.log('inventoryJSON: ', inventoryJSON);
    // AJAX - JQuery
    $.ajax({
        url: `${servletUrlSaveInv}`,
        type: "POST",
        data: inventoryJSON,
        headers: {"Content-Type": "application/json"},
        success: (res) => {
            console.log(JSON.stringify(res));
            Swal.fire({width: '225px', position: 'top', icon: 'success', title: 'Saved!', showConfirmButton: false, timer: 2000});

            Toast.fire({
                icon: 'success',
                title: 'Saved'
            })

            loadInventoryData();
            $("#invBtnReset").click();
        },
        error: (err) => { console.error(err);}
    });
});



$("#invBtnUpdate").on('click' , ()=>{

    let item_code = $("#itemCodeInv").val();
    let item_desc = $("#itemDescInv").val();
    let item_pic = $("#itemPic").val();
    let category_inv = $("#itemCategory").val();
    let size = $("#sizeInv").val();
    let qty = $("#qty").val();
    let sup_code_inv = $("#supCodeInv").val();
    let sup_name_inv = $("#supNameInv").val();
    let unit_price_sale = $("#unitPriceSale").val();
    let unit_price_buy = $("#unitPriceBuy").val();
    let exp_profit = $("#expProfit").val();
    let profit_margin = $("#profitMargin").val();
    let status = $("#status").val();

    console.log("Inv btn save clicked");

    let inventoryObject = {
        itemCode: item_code,
        itemDesc: item_desc,
        itemPic: item_pic,
        category: category_inv,
        size: size,
        qty: qty,
        supCode: sup_code_inv,
        supName: sup_name_inv,
        unitPriceSale: unit_price_sale,
        unitPriceBuy: unit_price_buy,
        expProfit: exp_profit,
        profitMargin: profit_margin,
        status: status
    };

    console.log('inventoryObject: ', inventoryObject);

    let inventoryJSON = JSON.stringify(inventoryObject);
    console.log('inventoryJSON: ', inventoryJSON);
    $.ajax({
        url: `${servletUrlUpdateInv}`,
        type: "PUT",
        data: inventoryJSON,
        headers: {
            "itemCode": item_code,
            "Content-Type": "application/json"
        },
        success: (res) => {
            console.log(JSON.stringify(res));
            // Swal.fire({width: '225px', position: 'top', icon: 'success', title: 'Updated!', showConfirmButton: false, timer: 2000});

            Toast.fire({
                icon: 'success',
                title: 'Updated'
            })

            loadInventoryData();
            $("#invBtnReset").click();
        },
        error: (err) => { console.error(err);}
    });


});


// delete inventory
$("#invBtnDelete").on('click' , ()=>{
    let item_code = $("#itemCodeInv").val();
    console.log("delete : "+item_code);
    Swal.fire({
        width: '300px', title: 'Delete Inventory',
        position: 'top',
        text: "Are you sure you want to permanently remove this item?",
        icon: 'warning', showCancelButton: true, confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33', confirmButtonText: 'Yes, delete!'
    }).then((result) => {
        if (result.isConfirmed) {
            let invObject = {inventory_id: item_code};
            console.log('invObject: ', invObject);
            let invJSON = JSON.stringify(invObject);
            console.log('invJSON: ', invJSON);
            $.ajax({
                url: `${servletUrlDeleteInv}`,
                type: "DELETE",
                data: invJSON,
                headers: {
                    "itemCode": item_code,
                    "Content-Type": "application/json"
                },
                success: (res) => {
                    console.log(JSON.stringify(res));
                    // Swal.fire({width: '225px', position: 'top', icon: 'success', title: 'Deleted!', showConfirmButton: false, timer: 2000});

                    Toast.fire({
                        icon: 'success',
                        title: 'Deleted!'
                    })

                    loadInventoryData();
                    $("#invBtnReset").click();
                },
                error: (err) => { console.error(err)}
            });
        }
    });
});


const loadInventoryData = () => {
    const urlWithParams = new URL(`${servletUrlGetAllInv}`)
    fetch(urlWithParams, { method: 'GET',})
        .then(response => {
            if (!response.ok) { throw new Error(`HTTP error! Status: ${response.status}`);}
            return response.json();
        })
        .then(data => {
            if (Array.isArray(data)) {
                console.log('Response inventory data: ', data);
                $('#inv_tBody').empty();
                data.forEach(inventory => {
                    let record = `<tr><td class="itemCode">${inventory.itemCode}</td><td class="itemDesc">${inventory.itemDesc}</td>
                    <td class="itemPic">${inventory.itemPic}</td><td class="category">${inventory.category}</td>
                    <td class="size">${inventory.size}</td><td class="qty">${inventory.qty}</td>
                    <td class="supCode">${inventory.supCode}</td><td class="supName">${inventory.supName}</td>
                    <td class="unitPriceSale">${inventory.unitPriceSale}</td><td class="unitPriceBuy">${inventory.unitPriceBuy}</td>
                    <td class="expProfit">${inventory.expProfit}</td><td class="profitMargin">${inventory.profitMargin}</td>
                    <td class="status">${inventory.status}</td></tr>`;
                    $("#inv_tBody").append(record);
                });
            } else { console.error('Error: Expected JSON array, but received: ', data); }
        })
        .catch(error => { console.error('Error: ', error);});
};

// retrieve inventory by table click
$("#inv_tBody").on("click", "tr", function() {
    row_index = $(this).index();
    let itemCode = $(this).find(".itemCode").text();
    let itemDesc = $(this).find(".itemDesc").text();
    let itemPic = $(this).find(".itemPic").text();
    let category = $(this).find(".category").text();
    let size = $(this).find(".size").text();
    let qty = $(this).find(".qty").text();
    let supCode = $(this).find(".supCode").text();
    let supName = $(this).find(".supName").text();
    let unitPriceSale = $(this).find(".unitPriceSale").text();
    let unitPriceBuy = $(this).find(".unitPriceBuy").text();
    let expProfit = $(this).find(".expProfit").text();
    let profitMargin = $(this).find(".profitMargin").text();
    let status = $(this).find(".status").text();

    $("#itemCodeInv").val(itemCode);
    $("#itemDescInv").val(itemDesc);
    // $("#itemPic").val(itemPic);
    $("#itemCategory").val(category);
    $("#sizeInv").val(size);
    $("#qty").val(qty);
    $("#supCodeInv").val(supCode);
    $("#supNameInv").val(supName);
    $("#unitPriceSale").val(unitPriceSale);
    $("#unitPriceBuy").val(unitPriceBuy);
    $("#expProfit").val(expProfit);
    $("#profitMargin").val(profitMargin);
    $("#status").val(status);
});


$("#invBtnReset").on("click", () => {
    $("#itemCodeInv").val("");
    $("#itemDescInv").val("");
    // $("#itemPic").val("");
    $("#itemCategory").val("");
    $("#sizeInv").val("");
    $("#qty").val("");
    $("#supCodeInv").val("");
    $("#supNameInv").val("");
    $("#unitPriceSale").val("");
    $("#unitPriceBuy").val("");
    $("#expProfit").val("");
    $("#profitMargin").val("");
    $("#status").val("");

    loadInventoryData();
});
