module.exports = function (menuTrigger, menu) {
menuTrigger.addEventListener('click', ()=>{
  menu.classList.toggle("active");
});

};