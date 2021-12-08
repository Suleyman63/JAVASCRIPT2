let thum1 = document.getElementById('thum1');
let thum1 = document.getElementById('thum2');
let thum1 = document.getElementById('thum3');

thum1.addEventListener('click', showImage);
thum1.addEventListener('click', showImage);
thum1.addEventListener('click', showImage);


function showImage() {
    let allBigImages = document.querySelectorAll('#image1, #image2, #image3');

    for(x=0; x<allBigImages.length; x++){
        allBigImages[x].className = 'hide';
    }



    let imgID = this.attributes['data-pic'].value;
    let picture = document.getElementById('imgID');
    if(picture.className ==='hide'){
        picture.className='';
    }else{
        picture.className='hide';
    }
    
}