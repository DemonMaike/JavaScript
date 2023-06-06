if (!localStorage.getItem('goods')) {
    localStorage.setItem('goods', JSON.stringify([]));
}

let myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
    keyborad: false,
})

document.querySelector('button.add_new').addEventListener('click', ()=>{
    let name = document.getElementById('good_name').value;
    let price = document.getElementById('good_price').value;
    let count = document.getElementById('good_count').value;
    if (name && price && count) {
        document.getElementById('good_name').value = '';
        document.getElementById('good_price').value = '';
        document.getElementById('good_count').value = '1';
        let goods = JSON.parse(localStorage.getItem('goods'));
        goods.push(['good_'+goods.length, name, price, count, 0, 0, 0]);
        localStorage.setItem('goods', JSON.stringify(goods));
        //update_goods()
        myModal.hide()
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Ошибка',
            text: 'Заполните все поля', 
        })
    }
}) 