CREATE DATABASE banco;
USE banco;

CREATE TABLE logar(
    nomePessoa varchar(30) NOT NULL,
    senha varchar(10),
    PRIMARY KEY (nomePessoa)
);

CREATE TABLE tarefas(
    nomePessoa varchar(30) NOT NULL,
    nomeTarefas varchar(100)
);

INSERT INTO logar( nomePessoa, email) VALUES ("009eb210", "gabriel");
INSERT INTO logar( nomePessoa, email) VALUES ("123456", "lariane");

INSERT INTO tarefas(nomePessoa, nomeTarefas) VALUES ("gabriel", "arroz");
INSERT INTO tarefas(nomePessoa, nomeTarefas) VALUES ("gabriel", "feijao");
INSERT INTO tarefas(nomePessoa, nomeTarefas) VALUES ("gabriel", "macarrao");
INSERT INTO tarefas(nomePessoa, nomeTarefas) VALUES ("gabriel", "ervilhas");
INSERT INTO tarefas(nomePessoa, nomeTarefas) VALUES ("gabriel", "farinha");