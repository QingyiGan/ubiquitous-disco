let anchor = document.querySelector('a');
const viewComments = (event) => {
  console.log(event);
  event.preventDefault();
  let comments = document.querySelector('#comments');
  comments.className = 'show-comments';
};
anchor.addEventListener('click', viewComments);
