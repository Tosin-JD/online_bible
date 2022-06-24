const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');

const handleOne = document.querySelector('#handle-one');
const handleTwo = document.querySelector('#handle-two');
const handleThree = document.querySelector('#handle-three');


hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
  rotateHandle();
});

function rotateHandle(){
  if (handleOne.classList.contains('handle-one')){
    handleOne.classList.remove('handle-one');
    handleOne.classList.add('reverse-handle-one');
  }else{
    handleOne.classList.add('handle-one');
    handleOne.classList.remove('reverse-handle-one');
  }

   if (handleTwo.classList.contains('handle-two')){
    handleTwo.classList.remove('handle-two');
    handleTwo.classList.add('reverse-handle-two');
  }else{
    handleTwo.classList.add('handle-two');
    handleTwo.classList.remove('reverse-handle-two');
  }

  if (handleThree.classList.contains('handle-three')){
    handleThree.classList.remove('handle-three');
    handleThree.classList.add('reverse-handle-three');
  }else{
    handleThree.classList.add('handle-three');
    handleThree.classList.remove('reverse-handle-three');
  }
}

