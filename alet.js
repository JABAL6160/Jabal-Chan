function cekform() {
     nama = document.getElementById('txtnama');
     id = document.getElementById('ID');
     alamat = document.getElementById('txtalamat');
     jenkel = document.getElementById('jenkel');
    if(nama.value==''){
        alert('isi nama nya boi');
        nama.focus();
        return false;
    }else if(nama.value.length < 4){
        alert('minimal 5 huruf boi');
        nama.focus();
        return false;
    }else if(id.value==''){
        alert('isi id nya dulu la');
        id.focus();
        return false;
    }else if(alamat.value==''){
        alert('rumah dimana bang');
        alamat.focus();
        return false;
    }else if(jenkel.value==''){
        alert('ngga punya kelamin kah');
        jenkel.focus();
        return false;
    }else{
        alert('makasih bang')
        return true;
    }
}