/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/




/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/




/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/





// Remember to delete the comments that came with this file, and replace them with your own code comments.
const ul = document.getElementById('students');
const input = document.getElementById('searchBar');
const search = input.value; 
const li = ul.getElementsByTagName('li');
const button = document.getElementById('submit');
const studentList = document.getElementsByClassName('student-item');
//li[0].firstElementChild.nextElementSibling

function showPage(list,page){
   let startIndex= (page*10)-10;
   let endIndex = (page*10);

   for(let i = 0; i<list.length; i +=1){
      if (i>=startIndex && i<endIndex){
         list[i].style.display = "";
      } else {
         list[i].style.display = 'none';
      }
   }

}

function page(list){
      
      const pageFromBody = document.querySelector('.page');
      const div = document.createElement('div');
      div.classList.add('pagination');
      pageFromBody.appendChild(div);

      const numberOfPages = Math.ceil((list.length)/10);
      for(let i = 1; i <= numberOfPages; i+=1 ){
         let pageNumber = document.createElement('a');
         pageNumber.innerHTML = i;
         // pageNumber.classList.add('pagination');
         pageNumber.setAttribute('href','#');
         div.appendChild(pageNumber);

         pageNumber.addEventListener('click',()=>{
            let numberOfPage = parseInt(pageNumber.innerHTML);
            // let spanLink = document.createElement('span');
            // spanLink.textContent = pageNumber.innerHTML;
            // div.insertBefore(spanLink,pageNumber);
            // div.removeChild(pageNumber);
            showPage(studentList,numberOfPage);
         })
      }


}
showPage(studentList,1);
page(studentList);

button.addEventListener('click',()=>{
   
   for(let i = 0; i < li.length;  i +=1 ){
      let textToSearch = li[i].firstElementChild.firstElementChild.nextElementSibling.textContent;
      const search = input.value.toLowerCase();
      if (textToSearch.toLowerCase().includes(search) || search == "" ){
         li[i].style.display = "";
      } else {
         li[i].style.display = "none";
      }
   }
});
console.log(input,"I AM HERE");
input.addEventListener('keyup',()=>{
   searchFunction();
   changeBackground();
})
function searchFunction (){
   for(let i = 0; i < li.length;  i +=1 ){
      let textToSearch = li[i].firstElementChild.firstElementChild.nextElementSibling.textContent;
      const search = input.value.toLowerCase();
      if (textToSearch.toLowerCase().includes(search) || search == "" ){
         li[i].style.display = "";
      } else {
         li[i].style.display = "none";
      }
   }

}


function changeBackground(){
   if (input.value == ""){
      input.style.backgroundColor="white";
   }else {
      input.style.backgroundColor='#d1eff9';
   }
}