function formpeminjaman() {
     judul = document.getElementById('judul');
     pengarang = document.getElementById('pengarang');
     peminjam = document.getElementById('peminjam');
     tglpinjam = document.getElementById('tglpinjam');
     tglkembali = document.getElementById('tglkembali');
    if(judul.value==''){
        alert('masukkan judul dulu');
        judul.focus();
        return false;
    }else if(pengarang.value==''){
        alert('siapa pengarangnya dimana rumahnya');
        pengarang.focus();
        return false;
    }else if(peminjam.value==''){
        alert('namanya siapa bang ?');
        peminjam.focus();
        return false;
    }else if(tglpinjam.value==''){
        alert('kapan pinjam nya ?');
        alamat.focus();
        return false;
    }else if(tglkembali.value==''){
        alert('kapan mulangi nya ?');
        tglkembali.focus();
        return false;
    }else{
        alert('makasih bang')
        return true;
    }
}