package com.mytech.todo.webservices.todo;

import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Component
public class TodoHardCodedService {

    private static final List<Todo> todos = new ArrayList<>();
    private static int idCounter = 0;

    static {
        todos.add(new Todo(idCounter, "Mytech", "Learn to Dance", new Date(), false));
        todos.add(new Todo(++idCounter, "Mytech", "Learn about Microservices", new Date(), false));
        todos.add(new Todo(++idCounter, "Mytech", "Learn about Angular", new Date(), false));

    }

    public List<Todo> FindAll() {
        return todos;
    }

    public Todo deleteById(long id) {
        Todo todo = findById(id);
        if (todo == null)
            return null;
        if (todos.remove(todo)) {
            return todo;
        }
        return null;
    }

    private Todo findById(long id) {

        for (Todo todo : todos) {
            if (todo.getId() == id) {
                return todo;
            }
        }
        return null;

//        return todos.stream()
//                .filter(todo -> todo.getId() == id)
//                .findFirst()
//                .orElse(null);

    }

}
