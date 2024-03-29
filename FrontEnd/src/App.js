import './App.css';

function App() {
  return (
    <>
      <div class="container">
        <div class="content">
          <div class="input-task">
            <input type="text" class="input-field" placeholder="Task to be done ..." />
            <button class="btn-add">Add</button>
          </div>
          <div class="show-task">
            <div class="row-header">You have 3 task to complete</div>
            <div class="row">
              <input type="checkbox" class="checkbox" />
              <div class="task-name">Task Name </div>
              <button class="btn-edit"><i class="fas fa-edit icon"></i></button>
              <button class="btn-delete"><i class="fas fa-trash-alt icon"></i></button>
            </div>
            <div class="row">
              <input type="checkbox" class="checkbox" />
              <div class="task-name">Task Name</div>
              <button class="btn-edit"><i class="fas fa-edit icon"></i></button>
              <button class="btn-delete"><i class="fas fa-trash-alt icon"></i></button>
            </div>
            <div class="row">
              <input type="checkbox" class="checkbox" />
              <div class="task-name">Task Name</div>
              <button class="btn-edit"><i class="fas fa-edit icon"></i></button>
              <button class="btn-delete"><i class="fas fa-trash-alt icon"></i></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
