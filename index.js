// var upload = document.querySelector('#images');
// let srcImg;
// upload.addEventListener('change', function (e) {
//     var img = document.createElement('img');
//     console.log(URL.createObjectURL(upload.files[0]));
//     console.log(typeof URL.createObjectURL(upload.files[0]))
//     srcImg = URL.createObjectURL(upload.files[0])
//     console.log("srcImg\n", srcImg)
// })




// var upload = document.querySelector('#images');
// upload.addEventListener('change', function (e) {
//     console.log(typeof URL.createObjectURL(upload.files[0]))
//     console.log('đây là link ảnh', URL.createObjectURL(upload.files[0]));
//     srcImg = (URL.createObjectURL(upload.files[0])).toString();
//     srcImga = URL.createObjectURL(e.target.files[0]);
// })




//  tab danh sách sản phẩm
var data = [
    {
        Id: 1,
        Name: 'Hảo hảo tôm chua cay',
        Images: 'https://cdn.tgdd.vn/Products/Images/2565/77622/bhx/mi-hao-hao-vi-tom-chua-cay-goi-75g-202110110919568290.JPG',
        Numbers: '1000',
        Price: '3500'
    },
    {
        Id: 2,
        Name: 'Hảo hảo sa tế hành tím',
        Images: 'https://cdn.tgdd.vn/Products/Images/2565/77622/bhx/mi-hao-hao-vi-tom-chua-cay-goi-75g-202110110919568290.JPG',
        Numbers: '2000',
        Price: '3500'
    },
    {
        Id: 3,
        Name: 'Hảo hảo sườn heo tỏi phi',
        Images: 'https://cdn.tgdd.vn/Products/Images/2565/77622/bhx/mi-hao-hao-vi-tom-chua-cay-goi-75g-202110110919568290.JPG',
        Numbers: '3000',
        Price: '3500'
    },
    {
        Id: 4,
        Name: 'Hảo hảo mì xào tôm hành',
        Images: 'https://cdn.tgdd.vn/Products/Images/2565/77622/bhx/mi-hao-hao-vi-tom-chua-cay-goi-75g-202110110919568290.JPG',
        Numbers: '4000',
        Price: '3500'
    }
]


let table = ''


render()

// end


var srcImg = '';

function add() {
    var itemHeaderPost = document.getElementById('id').value
    var itemNamePost = document.getElementById('name').value
    // var itemImgPost = document.getElementById('images').value
    var itemDescPost = document.getElementById('numbers').value
    var itemPrice = document.getElementById('price').value

    // xử lý ảnh cho thẻ input[type=file] và lấy ra đường dẫn ảnh
    var upload = document.querySelector('#images');
    upload.addEventListener('change', function (e) {
        console.log(typeof URL.createObjectURL(upload.files[0]))
        console.log('đây là link ảnh', URL.createObjectURL(upload.files[0]));
        srcImg = (URL.createObjectURL(upload.files[0])).toString();
        srcImga = URL.createObjectURL(e.target.files[0]);
    })


    var item = {
        Id: itemHeaderPost,
        Name: itemNamePost,
        // Images: itemImgPost,
        Images: srcImg,
        Numbers: itemDescPost,
        Price: itemPrice
    }
    let index = data.findIndex((c) => c.Id == item.Id)
    if (index >= 0) {
        data.splice(index, 1, item)
    }
    else {
        data.push(item)
    }
    render()
    clear()
}


//In thông tin sản phẩm
function render() {

    table =
        `<tr>
			<th scope="col">Mã sản phẩm</th>
			<th scope="col">Tên sản phẩm</th>
			<th scope="col">Ảnh sản phẩm</th>
			<th scope="col">Số lượng</th>
			<th scope="col">Giá sản phẩm</th>
			<th scope="col">Sửa/Xóa</th>
		</tr>`



    for (let i = 0; i < data.length; i++) {
        table +=
            `<tr>
				<th scope="col">${data[i].Id}</th>
				<th scope="col">${data[i].Name}</th>
				<th scope="col"><img style="height: 50px;" src=${data[i].Images}></th>
				<th scope="col">${data[i].Numbers}</th>
				<th scope="col">${data[i].Price}</th>
				<th scope="col">
					<button class="btn btn-warning" onclick="editItem(${data[i].Id})">Sửa</button>
					<button class="btn btn-danger" onclick="deleteItem(${data[i].Id})">Xóa</button>
				</th>
			</tr>`
    }
    document.getElementById('render').innerHTML = table
}
function clear() {
    var itemHeaderPost = document.getElementById('id').value = ""
    var itemNamePost = document.getElementById('name').value = ""
    var itemImgPost = document.getElementById('images').value = ""
    var itemDescPost = document.getElementById('numbers').value = ""
    var itemPrice = document.getElementById('price').value = ""
}
function deleteItem(x) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].Id == x) {
            data.splice(i, 1)
            render()
        }
    }
}
function editItem(x) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].Id == x) {
            document.getElementById('id').value = data[i].Id
            document.getElementById('name').value = data[i].Name
            // document.getElementById('images').value = data[i].Images
            srcImg = data[i].Images
            document.getElementById('numbers').value = data[i].Numbers
            document.getElementById('price').value = data[i].Price
        }
    }
}