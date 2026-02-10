DROP TABLE todo;

CREATE SEQUENCE todo_seq START WITH 1 INCREMENT BY 50 NO MINVALUE NO MAXVALUE CACHE 1;

CREATE TABLE todo (
    id INTEGER PRIMARY KEY DEFAULT nextval('todo_seq'),
    title VARCHAR(255) NOT NULL,
    completed BOOLEAN NOT NULL DEFAULT FALSE
);

ALTER SEQUENCE todo_seq OWNED BY todo.id;

INSERT INTO todo (title, completed) VALUES ('First task', false);
INSERT INTO todo (title, completed) VALUES ('Second task', true);