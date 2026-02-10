package com.example.demo.repositories;

import com.example.demo.models.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TodoRepository extends JpaRepository<Todo, Integer> {
    List<Todo> findByCompleted(boolean completed);
}
