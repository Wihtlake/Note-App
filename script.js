const todoList = document.querySelector('.content__block--note');
const todoForm = document.querySelector('.content__write');
const todoInput = document.querySelector('.input_content');

todoForm.addEventListener('submit', addNote);

let clearNumber = 0;
let number = 0;
let clear = function(clear){
    clearNumber = 0;
}




function addNote(event){
    
    event.preventDefault(); // останавливаем отправку формы

  
    
    const textInput = todoInput.value;// получаем название задачи
    if(textInput == ''){}
    else{
    //создаем тег li
    const newTask = document.createElement('li');

    // Добавляем ему класс
    newTask.classList.add('content__text__note');

    // берем значение из input и вставляем в переменную 
    newTask.innerText = textInput;

    //создаем кнопку удалить
    const buttonNote = document.createElement('button');

    // Добавляем ему класс
    buttonNote.classList.add('content__button');

    // добавляем текст внутрь
    buttonNote.innerText = 'завершить!';
    
    // Добавляем кнопку в подкласс
    newTask.appendChild(buttonNote);
    // 
    //  Удаляем класс при нажатии на кнопку
    buttonNote.addEventListener('click', function(){
        newTask.className = "animation";
        // Добавляем счетчик задач
        clearNumber++;
        number++;
        if(clearNumber > 3){
            alert(`Молодец! продолжай в том же духе! ты выполнил еще: ${number} задач(и)! `);
            // сбрасываем число
            clear();
        }
        
        
        
        // Задаем время, через которое должно удалить элемент
        setTimeout((newTask) => {this.closest('li').remove();}, 120);
        console.log(number);
    });
    // 
    
    //Добавляем разметку на страницу
    todoList.append(newTask);

    // Очищаем поле ввода
    todoInput.value = '';

    // Фокус на поле ввода
    todoInput.focus();
}
}

// закончил в 2:35 на 4:35:18
//начал в 9:30