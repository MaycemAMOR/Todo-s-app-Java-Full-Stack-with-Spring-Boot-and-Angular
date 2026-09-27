package com.mytech.todo.webservices.todo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.Objects;

@Getter
@Setter
@Builder
@AllArgsConstructor
public class Todo {
    private long id;
    private String username;
    private String description;
    private Date targetDate;
    private boolean isDone;

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;
        Todo todo = (Todo) o;
        return id == todo.id;
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }
}
