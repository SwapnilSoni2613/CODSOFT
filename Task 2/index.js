list=[]
window.addEventListener('DOMContentLoaded', () => {
        console.log(localStorage.getTask('todolist'));
        var arr = JSON.parse(localStorage.todolist);
        list.concat(arr);

                for (i=0;i<arr.length;i++){
                        ListTask=document.createElement('li');
                        console.log(ListTask);
                        ListTask.innerHTML=arr[i];
                        document.querySelector('ol').append(ListTask);
                }        
        });
document.querySelector("#submit").disabled=true;
document.querySelector("#task").value='';
document.querySelector('#task').onkeyup = ()=>{
        document.querySelector("#submit").disabled=false;
        if (document.querySelector("#task").value.length<=0 || document.querySelector("#task").value=='') {
                document.querySelector("#submit").disabled=true;
        }}
        document.querySelector('#form').onsubmit =()=>{
                        let task=document.querySelector("#task").value;        //
                        list.push(task);
                        localStorage.todolist = JSON.stringify(list);
                        var array_after_load = JSON.parse(localStorage.todolist);

                        for (i=0;i<array_after_load.length;i++){
                                ListTask=document.createElement('li');
                                ListTask.innerHTML=array_after_load[i];
                        }                        
                        document.querySelector('ol').append(ListTask);
  
                        document.querySelector("#task").value='';
                        document.querySelector("#submit").disabled=true;
                        return false;
                }
                document.querySelector('#sun').onclick=()=>{
                        document.querySelector('.container').classList.add('dark');
                        document.querySelector('#sun').style.display='none';
                        document.querySelector('#moon').style.display='block';
                } 
                document.querySelector('#moon').onclick=()=>{
                        document.querySelector('.container').classList.remove('dark');
                        document.querySelector('#sun').style.display='block';
                        document.querySelector('#moon').style.display='none';
                } 
                document.querySelector('#clear').onclick=()=>{
                        localStorage.clear();
                        document.querySelector('#ol').innerHTML='';
                }

