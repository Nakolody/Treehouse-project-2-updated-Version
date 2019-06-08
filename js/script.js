
const ul = document.getElementById('students');
const input = document.getElementById('searchBar');
const search = input.value; 
const li = ul.getElementsByTagName('li');
const button = document.getElementById('submit');
const studentList = document.getElementsByClassName('student-item');
const pageFromBody = document.querySelector('.page');

//Function to only show index of pages
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

//Function to calculate number of pages.
function page(list){
      const div = document.createElement('div');
      div.classList.add('pagination');
      pageFromBody.appendChild(div);

      const numberOfPages = Math.ceil((list.length)/10);
      for(let i = 1; i <= numberOfPages; i+=1 ){
         let pageNumber = document.createElement('a');
         pageNumber.innerHTML = i;
         pageNumber.setAttribute('href','#');
         div.appendChild(pageNumber);

         pageNumber.addEventListener('click',()=>{
            let numberOfPage = parseInt(pageNumber.innerHTML);
            showPage(studentList,numberOfPage);
         })
      }
}

showPage(studentList,1);
page(studentList);

//Add event handler for the submit button
button.addEventListener('click',()=>{
   searchFunction();
});

//Add event handler for the input
input.addEventListener('keyup',()=>{
   searchFunction();
   changeBackground();
})

//Search function to filter out revalent data
function searchFunction (){
   let textArray = document.querySelectorAll('h3');
   for(let i = 0; i < li.length;  i +=1 ){
      let textToSearch = textArray[i].textContent.toLowerCase();
      const search = input.value.toLowerCase();
         li[i].classList.remove('student-item');
      if (textToSearch.includes(search) || search == "" ){
         li[i].classList.add('student-item');
         li[i].classList.remove('none');
      } else {
         li[i].classList.add('none');
      }
   }
   page(studentList);
   removePage();
}

// Changes background when text is entered.
function changeBackground(){
   if (input.value == ""){
      input.style.backgroundColor="white";
   }else {
      input.style.backgroundColor='#d1eff9';
   }
}

//Removes pages for search function to append the right pages.

function removePage(){
  const paginationDiv = document.getElementsByClassName('pagination');
  pageFromBody.removeChild(paginationDiv[0]);
}