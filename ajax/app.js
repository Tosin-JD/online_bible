const bibleBooksList = document.querySelector(".bible-books-list");
const bookListArrays = document.querySelector('.bible-books');
var chapterNodeSelected = document.getElementById('chapter-text');
var itemClicked;
var booksOnlyArrays = [];
var bibleObj;
var bookNodeSelected;
var selectedBook = "Matthew";
var selectedChapter = "1";
var selectedChapterText = [];
var selectedChapterArray = [];


//execute when the document loads
window.addEventListener('load', (event) => {
    getBible();
    getBookChapters(); 
});



function handleBibleJSON(){
     handleAjaxRequest();
}

function getBible(){
    handleAjaxRequest();
}


function handleAjaxRequest(){
    
  var ajaxRequest = new XMLHttpRequest();
  ajaxRequest.onreadystatechange = function(){

    if(ajaxRequest.readyState == 4){
      //the request is completed, now check its status
      if(ajaxRequest.status == 200){
          //turn JSON into array
          var verseObject = JSON.parse(ajaxRequest.responseText);
          
          
          let receivedResponseText = ajaxRequest.responseText;
          tranverseBible(verseObject);
          bibleObj = verseObject;

          // display default bible verse
          displayDefaultChapter();
          
            
      }
      else{
          console.log("Status error: " + ajaxRequest.status);
      }
    }
    else{
        console.log("Ignored readyState: " + ajaxRequest.readyState);
    }
  }
  //      ajaxRequest.open('GET', 'https://happycoding.io/tutorials/javascript/example-ajax-files/random-welcomes.json');
  ajaxRequest.open('GET', '../resources/NKJV_bible.json');

  ajaxRequest.send();
}


function tranverseBible(verseObject){
//    console.log(verseObject["version"]);
    
//    console.log(verseObject["books"][0]["name"]);
    
    
    //use that object to set content and color
    let verseDiv = document.getElementById("daily-verse");
    verseDiv.innerHTML = verseObject["books"][0]["name"];
    
    let bookArray = verseObject["books"];
    
    
    for(let i=0; i < verseObject["books"].length; i++){
        var bookNames = verseObject["books"][i]["name"];
        booksOnlyArrays.push(bookNames);
        displayBibleBooks(bookNames);
    } 
    
   
}

function displayBibleBooks(text){
    let bookName = document.createElement("li")
    let textNode = document.createTextNode(text)
    bookName.classList.add("bible-books");
    bookName.setAttribute('id', text);
    
    
    bookName.appendChild(textNode);
    bibleBooksList.appendChild(bookName);
}



var getTheBook = (event)=>{
    let itemText = event.srcElement.innerHTML;
    let bookId = event.srcElement.id;
    bookNodeSelected = document.getElementById(bookId);
   
    
    for(let k=0; k < bibleObj["books"].length; k++){
        if(itemText == bibleObj['books'][k]['name']){
            eachBook = bibleObj['books'][k];
             displayChapters(eachBook);
            selectedBook = eachBook;
            return;
        }
    }
}


function displayChapters(text){
    let chaptersList = document.createElement("ul");
    
    
    
    for(let chp=0; chp < text['chapters'].length; chp++){
        let chapterText = text['chapters'][chp]['num'];
        let chapter  = text['chapters'][chp]['num'];
        
        let chapterName = document.createElement("li");
        
        chapterName.innerHTML = text['chapters'][chp]['num'];
        
        chapterName.setAttribute('id', chapter);
        
        chapterName.classList.add("book-chapters");
        chaptersList.appendChild(chapterName);
    }   
    bookNodeSelected.appendChild(chaptersList);
}

var getBookChapters = (event)=>{
    let itemBook = event.srcElement.innerHTML;
}


// not yet useful
function lookForItem(arrayOfBooks, searchItem){
    // Look for the book in the array of books
    for (var i = arrayOfBooks.length - 1; i >= 0; i--) {
        if(searchItem == arrayOfBooks[i]){
            return arrayOfBooks[i];
        }
    }
}

function createChapterTextNode(text, verseNum){
    let chapterTextNode = document.createTextNode(text);
    let chapterParagraphNode = document.createElement('li');
    chapterParagraphNode.appendChild(chapterTextNode);
    // chapterNodeSelected
    return chapterParagraphNode;
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    return parent;
}

var getChapterText = (event)=>{
    let chapterClicked = parseInt(event.srcElement.innerHTML);
    let chapters = bibleObj['books'];


    selectedChapterText = selectedBook['chapters'][chapterClicked - 1]['verses'];
    selectedChapterArray = selectedBook['chapters'][chapterClicked - 1];

    removeAllChildNodes(chapterNodeSelected);
    for(let i=0; i < selectedChapterText.length -1; i++){
        console.log(selectedChapterText[i]['num']);
        console.log(selectedChapterText[i]['text']);
        let text = selectedChapterText[i]['text'];
        let verseNum = selectedChapterText[i]['num']

        let chapterText = createChapterTextNode(text, verseNum);
        chapterNodeSelected.appendChild(chapterText);
    }
}


function displayDefaultChapter(){
    selectedChapterText = bibleObj['books'][39]['chapters'][1]['verses'];
    

    removeAllChildNodes(chapterNodeSelected);
    for(let i=0; i < selectedChapterText.length -1; i++){
        console.log(selectedChapterText[i]['num']);
        console.log(selectedChapterText[i]['text']);
        let text = selectedChapterText[i]['text'];
        let verseNum = selectedChapterText[i]['num']

        let chapterText = createChapterTextNode(text, verseNum);
        chapterNodeSelected.appendChild(chapterText);
    }
}

      
function getVerses(){
    
}


function getVerseText(){
    
}




//Check if anything is clicked in the windows and log it to the console.
const onClick = (event)=>{
    itemClicked = event.srcElement;
}

// execute when anything is clicked in the window
window.addEventListener('click', onClick);

// check for the Bible book that is clicked
window.addEventListener('click', getTheBook);

window.addEventListener('click', getBookChapters);

// check for the chapter of the book that is clicked
window.addEventListener('click', getChapterText);

// check for the chapter of the book that is clicked
window.addEventListener('click', getVerseText);
