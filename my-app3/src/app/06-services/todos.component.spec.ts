import { TodosComponent } from './todos.component'; 
import { TodoService } from './todo.service'; 
import { of } from 'rxjs';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service:TodoService;
  
  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it('should get the items from http service', () => {
    spyOn(service, 'getTodos').and.callFake(()=>{
      return of([1,2,3,4,5])
    })
    component.ngOnInit();
    expect(component.todos.length).toBe(5)
  });
});