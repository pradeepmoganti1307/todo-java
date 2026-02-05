package com.example.demo.controllers;

import com.example.demo.models.Todo;
import com.example.demo.repositories.TodoRepository;
import com.example.demo.services.TodoService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class TodoController {
    private TodoService todoService;

    @GetMapping("/api/todos")
    public List<Todo> fetchTodos() {
        List<Todo> todos= new ArrayList<>();
        todos.addAll(todoService.list());
        return todos;
    }
}
