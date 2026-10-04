package com.mytech.todo.webservices.todo;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class TodoJpaResource {


    private final TodoHardCodedService todoService;
    private final TodoJpaRepository todoJpaRepository;

    @GetMapping("/jpa/users/{username}/todos")
    public List<Todo> getAllTodos(@PathVariable String username) {
        return todoJpaRepository.findByUsername(username);
//        return todoService.FindAll();
    }

    //Delete /users/{username}/todos/{id}
    @DeleteMapping("/jpa/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id) {
        Todo todo = todoService.deleteById(id);
        if (todo != null) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping("/jpa/users/{username}/todos/{id}")
    public Todo getTodo(@PathVariable String username, @PathVariable long id) {
//        return this.todoService.findById(id);
        return this.todoJpaRepository.findById(id).orElseThrow(() -> new ResponseStatusException(
                HttpStatus.NOT_FOUND,
                "Todo not found with the ID: " + id
        ));
    }

    // edit /upadate a todo
    //Put /users/{username}/todos/{todo_id}

    @PutMapping("/jpa/users/{username}/todos/{id}")
    public ResponseEntity<Todo> updateTodo(
            @PathVariable String username,
            @PathVariable long id,
            @RequestBody Todo todo) {
        Todo todoUpdated = this.todoService.save(todo);

        return new ResponseEntity<Todo>(todo, HttpStatus.OK);

    }

    //create a new todo
    //post /user/{username}/todods/
    @PostMapping("/jpa/users/{username}/todos")
    public ResponseEntity<Todo> createTodo(
            @PathVariable String username,
            @RequestBody Todo todo) {
        Todo createdTodo = this.todoService.save(todo);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdTodo.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }

}
