
const ul = document.getElementById('students');
const input = document.getElementsByClassName('student-search')[0];
const li = ul.getElementsByTagName('li');
const searchButton = document.getElementsByClassName('student-search')[1];
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
//Shows current Index
showPage(studentList,1);
//Paginates list
page(studentList);
//Dynamically creates Search Input with Javascript
createSearch();

//Search function to filter out revalent data
function searchFunction (){
   let textArray = document.querySelectorAll('h3');
   for(let i = 0; i < li.length;  i +=1 ){
      let textToSearch = textArray[i].textContent.toLowerCase();
      const search = searchInput.value.toLowerCase();
         li[i].classList.remove('student-item');
      
      if (textToSearch.includes(search) || search == "" ){
         li[i].classList.add('student-item');
         li[i].classList.remove('none');
            if(typeof(message) != 'undefined' && message != null){
               ul.removeChild(message);
            }
         } else {
         li[i].classList.add('none');
         }
      }
      if(studentList.length === 0){
         message = document.createElement('li');
         message.textContent = "There are no students by that name";
         message.setAttribute('class','message');
         ul.appendChild(message);
      }
   page(studentList);
   removePage();
}

//Removes pages for search function to append the right pages.

function removePage(){
  const paginationDiv = document.getElementsByClassName('pagination');
  pageFromBody.removeChild(paginationDiv[0]);
}
//Dynamically creates Search input and button with Javascript
function createSearch(){
   pageHeader = document.getElementsByClassName('page-header')[0];
   searchInput = document.createElement('input');

   searchInput.setAttribute('type','text');
   searchInput.setAttribute('placeholder',"Enter Student's Name");
   searchInput.setAttribute('class','student-search');
   pageHeader.appendChild(searchInput);

   let searchButton = document.createElement('button');
   searchButton.textContent = "Search";
   searchButton.setAttribute('class','student-search');
   pageHeader.appendChild(searchButton);

   searchButton.addEventListener('click',()=>{
      searchFunction();
   });
   searchInput.addEventListener('keyup',()=>{
      searchFunction();
   })
}