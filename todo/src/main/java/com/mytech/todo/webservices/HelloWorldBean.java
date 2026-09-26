package com.mytech.todo.webservices;


import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class HelloWorldBean {

    private String message;

    public HelloWorldBean(String helloWorld) {
        this.message = helloWorld;
    }

    @Override
    public String toString() {
        return "HelloWorldBean{" +
                "message='" + message + '\'' +
                '}';
    }
}
