

const toggleNav = ()=>{


listItemWrappers.forEach((wrapper, wrapperIndex) => {
    wrapper.addEventListener("click", () => {
        listItems.forEach((li, liIndex) => {
            const isActive = liIndex === wrapperIndex;

            if(isActive){
                li.classList.toggle("active");
            }
            else{
                li.classList.remove("active")
            }
            
        });

        icons.forEach((icon, iconIndex) => {
            const isActive = iconIndex === wrapperIndex;
            if(isActive){
                icon.classList.toggle("active");
            }
            else{
                icon.classList.remove("active")
            }
        });

        dropDowns.forEach((dropDown, dIndex)=>{
            const isActive = dIndex === wrapperIndex;
            if(isActive){
                dropDown.classList.toggle("active-nav-animation")
            }
            else{
                dropDown.classList.remove("active-nav-animation")
            }
        })
    });
});
}

toggleNav()
// toggle hamburger

hamburger.addEventListener("click",()=>{
    hamburger.classList.add("hide")
    mobileNav.classList.add("active")
    mobileNav1.classList.add("active")
    cross.classList.remove("hide")
    overlay.classList.add("active")
    body.classList.add("overflow-hidden")

})
cross.addEventListener("click",()=>{
    cross.classList.add("hide")
    hamburger.classList.remove("hide")
    mobileNav.classList.remove("active")
    mobileNav1.classList.remove("active")
    overlay.classList.remove("active")
    body.classList.remove("overflow-hidden")
})





mList.forEach((list,index)=>{
    list.addEventListener("click", ()=>{
        mListContent.forEach((mLi,midex)=>{
            const isActive = midex === index;
            if(isActive){
                mLi.classList.toggle("active")
            }
        })
    })
})

// arrow rotate


const scrollProgressBar = () => {

     let h = document.documentElement;
     let st = h.scrollTop || document.body.scrollTop;
     let sh = h.scrollHeight || document.body.scrollHeight;
     let percent = st / (sh - h.clientHeight)*100;
     let roundedPercent = Math.round(percent);
    progressBar.style.width = `${roundedPercent}%`;
    // console.log(progressBar)

};


window.addEventListener("scroll",(e)=>{

    scrollProgressBar();

    if(window.scrollY > 0){
        arrow.classList.add("active")
        document.querySelector(".arrow-wrapper").style.opacity = `1`;
    }
    else{
        arrow.classList.remove("active")
        document.querySelector(".arrow-wrapper").style.opacity = `0.3`;
    }

})

arrow.addEventListener("click",()=>{
    window.scrollTo(0, 0);
})

