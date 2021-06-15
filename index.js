// Alerts 
const dismissAlert = document.querySelectorAll('.dismiss-alert');

dismissAlert.forEach( item => {
    item.onclick = () => {
      item.parentNode.style.opacity = 0;
      setTimeout(() => item.parentNode.style.display = 'none',300)
    }
});

// Alerts 


// List
const list = document.querySelectorAll('.list-group-item-action');

list.forEach( (item,index) => {
  item.onclick = () => {
    list.forEach( (item,i) => {
      if( index !== i){
        item.className = 'list-group-item list-group-item-action'
      }
      else{
       item.className = `${item.className} active`
      }
   })
  }
});

// List


// Ratings

const stars = document.querySelectorAll('.rating-control');

stars.forEach( (star,index) => {

    $(star).on('mouseenter',function(){
        stars.forEach( (star,i) => {
        if( i <= index ){
          star.style.color = "#ffcc00ea"
        }
     })
    })

    $(star).on('mouseleave',function(){
      stars.forEach( (star,i) => {
        if( i <= index ){
          star.style.color = ""
        }
     })
    })

    $(star).on('click',function(){
       stars.forEach( (star,i) => {
          if( i <= index ){
            star.className = "rated"
          }
          else{
            star.className = ""
          }
       })
       let rating = document.querySelector('.rating-count'); 
       rating.innerHTML = index+1;
    })
})

// Ratings

// toast
const showToast = document.querySelectorAll('.show-toast');

showToast.forEach( toastbtn => {
  $(toastbtn).on('click',function(){
     let toast = document.getElementsByClassName(toastbtn.id);
    
     toast[0].style.display = 'block';
     setTimeout( () => {
      toast[0].style.opacity = '1';
     },100 )

     setTimeout( () => {
      toast[0].style.opacity = '0';
     },2500 )
      
     setTimeout( () => {
      toast[0].style.display = 'none';
     },3000 )
  })
})


// toast