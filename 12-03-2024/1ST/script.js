const btnAdd=document.querySelector('.btn-add');
const input=document.querySelector('input');
const list=document.querySelector('.to-do-list');
const edit=document.querySelector('.btn-edit');
const select=document.querySelector('select')
let myToDos=[];
let editJobId=''
let jobisActive=null;

//ვუსმენთ სელეცტის ცვლილებას;
select.addEventListener('change',(e)=>{
   jobisActive=e.target.value;   
})
// ევენთ ლისენერი ახალი ჯობის შექმნისთვის ან შეცვილსთვის მთავარი
// ღილაკისთვის;
btnAdd.addEventListener('click',(e)=>{
   e.preventDefault();
   const value=input.value.trim();
   if(value=='') return;  
   editJobId?addNew(value,editJobId,jobisActive):addNew(value);
   reset();
});


function addNew(jobTitle,jobId=null,jobStaus=null){
  
   const item={
      id:jobId ?? Math.random().toFixed(4).slice(2),
      title:jobTitle,
      isActive:jobStaus ?? true
   }
   console.log(item)
   if(!jobId){
      myToDos.push(item)
   }
   else{
     const toDos=myToDos.filter(e=>e.id!==jobId);
     myToDos=[...toDos];
     myToDos.push(item);

   }
   renderToDos();
};


function renderToDos(){
   list.innerHTML='';
   for(let todo of myToDos){
      list.innerHTML+=`
            <tr>
                     <td>${todo.id}</td>
                     <td>${todo.title}</td>
                     <td>${todo.isActive.toString()=='true'?'Active':'Completed'}</td>
                     <td>
                     <button jobId=${todo.id} class="btn-delete">delete</button>
                     <button jobId=${todo.id} class="btn-edit">edit</button>
                     </td>
            </tr>
         `
      }
      // დააყენებს ევენთ ლისენერებს წაშლის და ედიტის ღილაკებზე;
      seteventListeners();
      setdeletelis();
}

function seteventListeners(){
   const btns=Array.from(document.querySelectorAll('.btn-edit'));
   for(let btn of btns){
      btn.addEventListener('click',(e)=>{
         const jobId=e.target.attributes.jobId.value;
         const job=myToDos.find(el=>el.id==jobId);
         btnAdd.innerText='edit Job';
         select.classList.add('active');
         input.value=job.title;
         editJobId=jobId;       

      })
   }
};

function setdeletelis(){
   const btns=Array.from(document.querySelectorAll('.btn-delete'));
   for(let btn of btns){
      btn.addEventListener('click',(e)=>{
         const jobId=e.target.attributes.jobId.value;
        const toDos=myToDos.filter(e=>e.id!==jobId);
         myToDos=[...toDos];
         renderToDos();
      })
   }
};

function reset(){
   editJobId='';
   jobisActive=null;
   input.value='';
   btnAdd.innerText='add new'; 
   select.classList.remove('active');
}


