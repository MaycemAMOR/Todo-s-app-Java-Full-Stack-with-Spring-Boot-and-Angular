package com.mytech.todo.basic.auth;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class AuthenticationBean {

    private String message;

    public AuthenticationBean(String helloWorld) {
        this.message = helloWorld;
    }

    @Override
    public String toString() {
        return "HelloWorldBean{" +
                "message='" + message + '\'' +
                '}';
    }
}
