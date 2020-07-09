const add=document.getElementById("plus");
const del = document.getElementById("delete");
const inp = document.getElementById("add-todo");
const list = document.getElementById("list");
const items = document.getElementsByTagName("li");

function newElement(){
	var li=document.createElement("li");
	var inputtext=inp.value;
	if(inputtext=="")
		alert("Please enter something");
	else{
		const inside=`<span id="delete" ><i class="fa fa-trash" aria-hidden="true" display:"none"></i></span>${inputtext}`;
		li.innerHTML=inside;
		list.appendChild(li);
	}
	inp.value="";
}

inp.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
   add.click();
   inp.textContent="";
  }
});


list.addEventListener('click', function(ev) {
	 if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('completed');
  }
});

$('ul').on('click','span',function(event){
	 $(this).parent().fadeOut(500,function(){
	 	 $(this).remove();
	 });
	 event.stopPropagation();
});

// list.addEventListener('mouseover', function(ev) {
// 	 if (ev.target.tagName === 'LI') {
//     	del.classList.remove('hidden');
//   }
// });

// list.addEventListener('mouseout', function(ev) {
// 	 if (ev.target.tagName === 'LI') {
//     	del.classList.add('hidden');
//   }
// });

// del.addEventListener("click",removeitem);
// function removeitem(){
//   let childs = this.parentNode;
//   let parent = childs.parentNode;
//   parent.removeChild(childs);
// }
