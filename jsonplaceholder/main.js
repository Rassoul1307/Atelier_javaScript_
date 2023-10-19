// // creation de taches

// // function createtache() {
// //     const taskInput = document.getElementById("taskInput");
// //     const taskTitle = taskInput.value;

// //     if (taskTitle.trim() === "") {
// //             alert("Veuillez entrer un titre de tâche.");
// //             return;
// //     }

// //     fetch("https://jsonplaceholder.typicode.com/todos",{
// //         method: 'POST',  
// //         headers:{
// //             'Content-Type': 'application/json; charset=UTF-8'
// //         },
// //         body: JSON.stringify({
// //             userId: 1,
// //             title: taskTitle,
// //             completed: false
// //         })
// //         })
// //         .then(response => response.json())
// //         .then(data =>{
// //             taskInput.value = ""
// //             displayTask(data)

// //         })
// //         .catch(error => console.error("Erreur lors de la création de la tâche :", error))
// // }

// // // Afficher les taches 

// function displayTask(task) {
//     const liElement =document.createElement('li')
//     const taches = document.getElementById('taches')
//     const btnTerminer = document.createElement('button')
//     const divActions = document.createElement('div')

//     btnTerminer.classList= "btnTerminer"
//     btnTerminer.textContent = "Terminer"
//     divActions.append(btnTerminer)
//     liElement.innerHTML = `${task.title}`
//     btnTerminer.addEventListener('click', ()=> deleteTask(task.id));
//     taches.appendChild(liElement)
//     liElement.append(divActions)

    
// }


// // // Fonction pour récupérer et afficher la liste des tâches
// // fetch("https://jsonplaceholder.typicode.com/todos")
// //     .then(response => response.json())
// //     .then(data => {
// //     data.forEach(task => displayTask(task));
// // })
// // .catch(error => console.error("Erreur lors de la récupération des tâches :", error));

// // // Fonction pour supprimer une tâche
// // function deleteTask(taskId) {
// //     //mettre a jour la liste des taches en supprimer la tache avec l'id
// //     // const url ="https://jsonplaceholder.typicode.com/todos/"+ taskId;
// //     // fetch (url,{method:"DELETE"})
// //     // .then(()=>{
// //     //     const tasksListe = document.querySelectorAll('#taches > li');
// //     //     tasksListe[taskId-1].remove();
// //     // }).catch((err)=>{console.log(`Error: ${err}`)});
// // };



// // fetch avec await 
// // const allTask = []
// async function listTodo() {
//     try{
//         let res = await fetch('https://jsonplaceholder.typicode.com/todos?completed=false');
//         let data = await res.json()
//         // afficher les todos avec completed false
//         data.forEach(task =>{
//             displayTask(task)
//             // allTask.push(task)
//         })
//         // console.log(allTask);
//     }catch(error){
//         console.error("Erreur lors de la récupération des tâches : ", error);
//     }
// }
// //fonction pour supprimer un todo
// const deleteTask = async (todoId) =>{
//     try {
//         await fetch('https://jsonplaceholder.typicode.com/todos/${todoId}',{
//             method:'delete'
//         })
//         console.log('tache terminé avec success',todoId);
//         listTodo()
//     } catch (error) {
//         console.error(error)
//     }
// }
// listTodo()


async function getTodos() {
    try {
      const apiUrl = 'https://jsonplaceholder.typicode.com/todos';
      const response = await fetch(apiUrl);
      const data = await response.json();
      const todoList = document.getElementById('todoList');
      const completedTodoList = document.getElementById('completedTodoList');
      const btnNodif = document.querySelector('.notifs')
      //   console.log(btnNodif);
      btnNodif.addEventListener('click', ()=>{
        const tacheTermine = document.querySelector('.tacheTermine')
        tacheTermine.classList.toggle('showTacheTerminer')
        // console.log(tacheTermine);
    })
  
      data.forEach(todo => {
        const listItem = document.createElement('li');
        listItem.textContent = todo.title;
  
        const finishButton = document.createElement('button');
        finishButton.textContent = 'Terminer';
  
        finishButton.addEventListener('click', () => {
          listItem.remove();
          todoList.insertBefore(listItem, todoList.firstChild);
          // Déplacer le todo vers la section "Todos terminés"
          completedTodoList.appendChild(listItem);
            finishButton.textContent = 'Non Terminer';
            finishButton.addEventListener('click',()=>{
                listItem.remove()
                todoList.appendChild(listItem);
                finishButton.textContent = 'Terminer';
            })

        });
  
        listItem.appendChild(finishButton);
  
        if (!todo.completed) {
          todoList.appendChild(listItem);
        }
      });
    } catch (error) {
      console.error('Une erreur s\'est produite lors de la récupération des todos : ', error);
    }
  }
  
  getTodos();
  