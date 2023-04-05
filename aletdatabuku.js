function formdatabuku() {
    judul = document.getElementById('judul');
    pengarang = document.getElementById('pengarang');
    penerbit = document.getElementById('penerbit');
    thnterbit = document.getElementById('thnterbit');
   if(judul.value==''){
       alert('masukkan judul dulu');
       judul.focus();
       return false;
   }else if(pengarang.value==''){
       alert('siapa pengarangnya dimana rumahnya');
       pengarang.focus();
       return false;
   }else if(penerbit.value==''){
       alert('siapa penerbitnya bang ?');
       penerbit.focus();
       return false;
   }else if(thnterbit.value==''){
       alert('buku tahun kapan nih bang ?');
       thnterbit.focus();
       return false;
   }else{
       alert('makasih bang')
       return true;
   }
}