package com.mytech.todo.webservices;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import javax.lang.model.util.Elements;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class HelloWorldController {
    //GET
    //URI-/hello-world
    //methode return -"Hello World"
    // @RequestMapping(method = RequestMethod.GET,path = "/hello-world")
    @GetMapping("/hello-world")
    public String helloWorld() {
        return "Hello World";
    }

    @GetMapping("/hello-world-bean")
    public HelloWorldBean helloWorldBean() {
        //throw new RuntimeException("Some Error has Happened! Contact Support at ******-*****");
        return new HelloWorldBean("Hello World - changed");
    }

    //hello-world/path-variable/mytech
    @GetMapping("/hello-world/path-variable/{variable}")
    public HelloWorldBean helloWorldPathVariable(@PathVariable String variable) {
        return new HelloWorldBean(String.format("Hello World %s", variable));
    }
}
