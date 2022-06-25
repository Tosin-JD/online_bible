const btnGetBibleVerse = document.getElementById('get-bible-verse');

counter = 1;

btnGetBibleVerse.addEventListener('click', ()=>{
    counter += 1;
    console.log("Get Bible Verse");
    getBibleVerse();
});


document.;


function handleBibleJSON(){
     handleAjaxRequest();
}

function getBibleVerse(){
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
    console.log(verseObject["version"]);
    
    console.log(verseObject["books"][0]["name"]);
    //use that object to set content and color
    
    let verseDiv = document.getElementById("daily-verse");
    verseDiv.innerHTML = verseObject["books"][0]["name"];
    
    let bookArray = verseObject["books"];
    
    
    for(let i=0; i < verseObject["books"].length; i++){
        let bookName = verseObject["books"][i]["name"];
        displayBibleBooks(bookName);
    } 
    
   
}



function displayBibleBooks(text){
    const bibleBooksList = document.querySelector(".bible-books-list");
    let bookName = document.createElement("li")
    let textNode = document.createTextNode(text)
   
    bookName.appendChild(textNode);
    bibleBooksList.appendChild(bookName);
    
}
	


function getBookChapters(){
    
}

function getChapterText(){

}

function get VerseText(){
    
}