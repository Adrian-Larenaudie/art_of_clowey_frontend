/* Liste des éléments pour lesquelles du js a été mis en place */
console.log('Hello world !');

/* open navigation portfolio menu desktop */
try {
    const portfolioTag = document.getElementById('navigation_portfolio');
    const wrapperTag = document.getElementById('navigation_wrapper');
    let displayDesk = false;
    portfolioTag.addEventListener('click', (event) => {
        displayDesk = !displayDesk
        if(displayDesk) {
            wrapperTag.style.display = 'flex';
        } else {
            wrapperTag.style.display = 'none';
        }   
});  
} catch (error) {
    console.log(error);
}

/* open navigation portfolio menu desktop */

/* open navigation portfolio menu tablet */
try {
    const categoryTag = document.getElementById('tablet_menu_portfolio');
    const tabletWrapperTag = document.getElementById('tablet_menu_wrapper');
    let visibilityTablet = false;
    categoryTag.addEventListener('click', (event) => {
        visibilityTablet = !visibilityTablet
        if(visibilityTablet) {
            tabletWrapperTag.style.opacity = 1;
        } else {
            tabletWrapperTag.style.opacity = 0;
        }   
});
} catch (error) {
    console.log(error);
}

/* open navigation portfolio menu tablet */

/* click & copy mail adress display bubble info */
const mailTag = document.getElementById('clowey_mail');
const bubbleTag = document.getElementById('footer_bubble');
const bubbleTriangleTag = document.getElementById('bubble_triangle');
mailTag.addEventListener('click', (event) => {
    navigator.clipboard.writeText(mailTag.textContent);
    // Alert the copied text
    bubbleTag.style.opacity = 1;
    bubbleTriangleTag.style.opacity = 1;
    setTimeout(() => {
        bubbleTag.style.opacity = 0;
        bubbleTriangleTag.style.opacity = 0;
    }, 2000);
});
/* click & copy mail adress */

/* display mobile menu modale */
const menuBurgerTag = document.getElementById('burger_menu');
const mobileMenuTag = document.getElementById('menu_mobile');
const bodyTag = document.getElementById('application_body');
const mobileLinksTags = document.querySelectorAll('.mobile_link');
const menuBurgerOpennerTag = document.querySelector('.burger_menu_openner');
let mobileMenuOpen = false;
const onClickMenuBurger = (event) => {
    mobileMenuOpen = !mobileMenuOpen;
    if(mobileMenuOpen) {
        mobileMenuTag.classList.remove('translateToTop');
        mobileMenuTag.classList.add('translateFromTop');
        mobileMenuTag.style.display = 'flex';
        bodyTag.style.overflow = 'hidden';
        bodyTag.style.position = 'fixed';
    } else {
        mobileMenuTag.classList.remove('translateFromTop');
        mobileMenuTag.classList.add('translateToTop');
        menuBurgerTag.removeEventListener('click', menuBurgerTag, true);
        menuBurgerTag.checked = false;
        setTimeout(() => {
            mobileMenuTag.style.display = 'none';
            bodyTag.style.overflow = 'visible';
            bodyTag.style.position = 'unset';  
            menuBurgerTag.addEventListener('click', onClickMenuBurger);
        }, 150);
    }   
}
menuBurgerTag.addEventListener('click', onClickMenuBurger);
mobileLinksTags.forEach(linkTag => {
    linkTag.addEventListener('click', onClickMenuBurger);
});
/* display mobile menu modale */


try {
    /* display slider image modale */
    let imageIndex;
    const mosaicImagesTags = document.querySelectorAll('.mosaic_image');
    const modaleSliderImageTag = document.querySelector('.slider_image');
    const closeSliderImageTag = document.querySelector('.slider_image_close_button');
    const imgSliderTag = document.querySelector('.slider_image_current_img');
    /* manage image slider */
    const imageData = [
        {name: 'DITYS Tuna', description: 'ceci est une courte description de l\'image', date: '01/01/1996', imageOriginalUrl: '../images/original/DTIYS Tuna.jpg'},
        {name: 'Friendly street', description: 'ceci est une courte description de l\'image', date: '01/01/1996', imageOriginalUrl: '../images/original/Friendly Street.jpg'},
        {name: 'Ghibli tricot', description: 'ceci est une courte description de l\'image', date: '01/01/1996', imageOriginalUrl: '../images/original/Ghibli tricot.jpg'},
        {name: 'Hana et Liz', description: 'ceci est une courte description de l\'image', date: '01/01/1996', imageOriginalUrl: '../images/original/HanaetLiz.png'},
        {name: 'Royalty', description: 'ceci est une courte description de l\'image', date: '01/01/1996', imageOriginalUrl: '../images/original/Royalty.jpg'},
        {name: 'Secret Santa Ghibli', description: 'ceci est une courte description de l\'image', date: '01/01/1996', imageOriginalUrl: '../images/original/Secret Santa Ghibli.jpg'},
        {name: 'Summer', description: 'ceci est une courte description de l\'image', date: '01/01/1996', imageOriginalUrl: '../images/original/Summer.jpg'},
        {name: 'Totally Cosplay', description: 'ceci est une courte description de l\'image', date: '01/01/1996', imageOriginalUrl: '../images/original/Totally spies cosplay.jpg'},
    ];
    /* manage image slider */
    mosaicImagesTags.forEach((mosaicImageTag) => {
        mosaicImageTag.addEventListener('click', (event) => {
            imageIndex = event.target.dataset.index;
            const src = event.target.src.replace('mosaic', 'original');
            imgSliderTag.style.visibility = 'hidden';
            imgSliderTag.src = src;
            modaleSliderImageTag.style.opacity = 1;
            modaleSliderImageTag.style.zIndex = 43;
            menuBurgerOpennerTag.style.zIndex = -1;
            bodyTag.style.overflow = 'hidden';
            bodyTag.style.position = 'fixed';
    
            let imagesToLoad = [];
            for (let i = 0; i < imageData.length; i++) {
                let image = new Image();
                image.src = imageData[i].imageOriginalUrl;
                imagesToLoad.push(image);
            }
    
            let loadedImages = 0;
            for (let i = 0; i < imagesToLoad.length; i++) {
                imagesToLoad[i].onload = function() {
                    loadedImages++;
                    if (loadedImages == imagesToLoad.length) {
                        // Toutes les images sont chargées, vous pouvez ouvrir le slider
                        imgSliderTag.style.visibility = 'visible';
                        const leftArrowTag = document.querySelector('.slider_image_left_arrow');
                        const rightArrowTag = document.querySelector('.slider_image_right_arrow');
                        leftArrowTag.addEventListener('click', (event) => {
                            if(imageIndex == 0) {
                                imageIndex = imageData.length - 1;
                            } else {
                                imageIndex--;
                            }
                            imgSliderTag.classList.remove('leavingTranslationToLeft');
                            imgSliderTag.classList.remove('arrivingTranslationFromRight');
                            imgSliderTag.classList.remove('arrivingTranslationFromLeft');
                            imgSliderTag.classList.add('leavingTranslationToRight');
                            setTimeout(() => {
                                imgSliderTag.classList.add('arrivingTranslationFromLeft');
                                imgSliderTag.classList.remove('leavingTranslationToRight');
                                imgSliderTag.src = imageData[imageIndex].imageOriginalUrl;    
                            }, 100);               
                        });
                        rightArrowTag.addEventListener('click', (event) => {
                            if(imageIndex == imageData.length - 1) {
                                imageIndex = 0;
                            } else {
                                imageIndex++;
                            }
                            imgSliderTag.classList.remove('leavingTranslationToRight');
                            imgSliderTag.classList.remove('arrivingTranslationFromLeft');
                            imgSliderTag.classList.remove('arrivingTranslationFromRight');
                            imgSliderTag.classList.add('leavingTranslationToLeft');
                            setTimeout(() => {    
                                imgSliderTag.classList.add('arrivingTranslationFromRight');
                                imgSliderTag.classList.remove('leavingTranslationToLeft');
                                imgSliderTag.src = imageData[imageIndex].imageOriginalUrl; 
                            }, 100);                      
                        });
                    }
                };
            }
        });
    });
    closeSliderImageTag.addEventListener('click', (event) => {
        modaleSliderImageTag.style.opacity = 0;
        modaleSliderImageTag.style.zIndex = -1;
        menuBurgerOpennerTag.style.zIndex = 42;
        bodyTag.style.overflow = 'visible';
        bodyTag.style.position = 'unset'; 
    });
    /* display slider image modale */  
} catch (error) {
    console.log(error);
}

try {
    /* manage file input */
    const inputFileTag = document.getElementById('new_work_file');
    console.log(inputFileTag);
    const buttonLoadFileTag = document.querySelector('#file_form_input');
    buttonLoadFileTag.addEventListener('click', (event) => {
        inputFileTag.click();
    })
    /* manage file input */
} catch (error) {
    console.log(error);
}
