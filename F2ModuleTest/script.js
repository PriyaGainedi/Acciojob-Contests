var page = document.querySelector('#posts');

const  createmodal = document.querySelector('#createModal');
const  editmodal = document.querySelector('#editModal');




var editableheading = "";
var editabledescription = "";


function newpost(){

  var heading = document.querySelector('#title').value;
  var description = document.querySelector('#description').value;
  document.querySelector('#title').value = "";
  document.querySelector('#description').value = "";  

  /*Create a div to post*/
  var post = document.createElement('div');
  unique_id = Math.floor(Math.random() * 100);
  post.classList.add('post',`${unique_id}`);
  var header = document.createElement('div');
  header.textContent = heading;
  header.classList.add('heading');
  post.appendChild(header);
  var about = document.createElement('div');
  about.textContent = description;
  about.classList.add('about');
  post.appendChild(about);
  var DateAndTime = (new Date().toLocaleString()).split(',');
  var TimeStamp = 'Created At : '+DateAndTime[0]+' at'+DateAndTime[1];
  var footer = document.createElement('div');
  footer.innerHTML=`<div class="buttons"><button class=" editbtn ${unique_id}" data-bs-toggle="modal" data-bs-target="#editModal" click="editpost(${unique_id},'${heading}','${description}')">Edit</button><button class="deletebtn">Delete</button></div><p class="timestamp">${TimeStamp}</p>`;
  footer.classList.add('footer');
  post.appendChild(footer);

  page.appendChild(post);   
}

function editpost(class_name,header,about) {
  document.querySelector('#edittitle').value = header;
  document.querySelector('#editdescription').value = about;
  alert("edited");

  document.querySelector('#save').addEventListener('click',savepost(class_name));
}

function savepost(class_name){
  editableheading = document.querySelector('#edittitle').value;
  editabledescription = document.querySelector('#editdescription').value;
  alert("saved");
  
  console.log(document.querySelector('#edittitle').value);
  console.log(document.querySelector('#editdescription').value);
  // document.getElementsByClassName(class_name)[0].querySelector('.heading').textContent = "Monika";
  // document.getElementsByClassName(class_name)[0].querySelector('.about').textContent = "Monika"
  update(class_name);
}

function update(class_name){
  alert("Modified");
  document.getElementsByClassName(class_name)[0].querySelector('.heading').textContent = editableheading;
  document.getElementsByClassName(class_name)[0].querySelector('.about').textContent = editabledescription;
}




//document.querySelector('#save').addEventListener('click',savepost(class_name));
document.querySelector('#publish').addEventListener('click',newpost);