package com.example.demo.services;

import com.example.demo.models.Todo;
import com.example.demo.repositories.TodoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoService {

    private final TodoRepository todoRepository;

    public TodoService(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    public List<Todo> list() {
        return todoRepository.findAll();
    }

    public Todo save(Todo todo) {
        return todoRepository.save(todo);
    }

    public Todo update(Integer id, Todo todo) {
        Todo existingTodo = todoRepository.findById(id).orElseThrow(() -> new RuntimeException("Todo not found with id: " + id));

        existingTodo.setTitle(todo.getTitle());
        existingTodo.setCompleted(todo.getCompleted());
        
        return todoRepository.save(existingTodo);
    }

    public void delete(Integer id) {
        Todo existingTodo = todoRepository.findById(id).orElseThrow(() -> new RuntimeException("Todo not found with id: " + id));
        todoRepository.delete(existingTodo);
        return;
    }

    public List<Todo> findByCompleted(Boolean complete) {
        return todoRepository.findByCompleted(complete);
    }
}
