function softshadow(option){
    let images = document.querySelectorAll('.softshadow');
    if(option.shadow_type === 'hard'){
        option.shadow_type = '15px'
    }else{
        option.shadow_type = '0px';
    }
    images.forEach((img)=> {
        img.style.boxShadow = `5px 10px 10px ${option.shadow_type} rgba(0,0,0,0.22)`;
        if(option.padding){
            img.style.padding = '1em'
        }
        img.style.margin = '1em'
    })
}

module.exports.softshadow = softshadow;  