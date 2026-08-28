# 🚀 Desenvolvimento Back-End com Node.js T4:  Semanas 05 a 08

Continuação do repositório das **semanas 01 a 04**.

Nestas quatro semanas saímos dos fundamentos e entramos no JavaScript intermediário e avançado: funções como valores, closures, assincronicidade, orientação a objetos e a migração para **TypeScript**.

Este repositório reúne os exemplos, exercícios e materiais desenvolvidos durante as aulas.

---

# 📚 Objetivos

Ao final destas 4 semanas você será capaz de:

- Entender que funções são valores e utilizá-las como argumento e retorno;
- Escrever e reconhecer callbacks, síncronos e assíncronos;
- Compreender escopo, escopo léxico e closures;
- Encapsular dados com closures e aplicar currying;
- Trabalhar com código assíncrono usando Promises e async/await;
- Tratar erros de forma consistente com catch e try/catch;
- Programar orientado a objetos em JavaScript com classes e herança;
- Migrar do JavaScript para o TypeScript e utilizar tipagem estática.

---

# 🛠 Tecnologias utilizadas

- JavaScript (ES6+)
- TypeScript
- Node.js
- Visual Studio Code
- Git
- GitHub

---

# 📂 Organização do Repositório

```
📁 semana-5
📁 semana-6
📁 semana-7
📁 semana-8
📄 README.md
```

Cada pasta contém os exemplos utilizados em aula e os exercícios resolvidos.

---

# ▶️ Como executar os arquivos

Todos os arquivos são executáveis diretamente pelo Node:

```bash
node semana-5/aula-01/callbacks.js
```

Alguns arquivos das aulas 01 e 03 usam `setTimeout` e levam alguns segundos
para terminar. Isso é proposital: é o assunto da aula acontecendo.

---

# 📅 Conteúdo das Aulas

## ✅ Semana 05 — Funções Avançadas, Closures e Assincronicidade

### Aula 01 — Funções como Valores e Callbacks

- Funções como valores de primeira classe
- O que é um callback
- A diferença entre `callback` e `callback()`
- Callbacks síncronos: `forEach`, `map`, `filter`, `reduce`
- Callbacks assíncronos: `setTimeout` e `setInterval`
- Event Loop, Call Stack e Callback Queue
- Callback Hell

### Aula 02 — Funções Avançadas e Closures

- Higher-Order Functions (HOF)
- Escopo global, local e de bloco
- Escopo léxico
- Closures
- Encapsulamento e variáveis privadas
- IIFE
- Currying e composição de funções

### Aula 03 — Assincronicidade (Promises e Async/Await)

- Código síncrono x assíncrono
- O que é uma Promise
- Os três estados: `pending`, `fulfilled`, `rejected`
- Consumo com `then()`, `catch()` e `finally()`
- `async` e `await`
- Tratamento de erros com `try / catch`

---

## 🔜 Semana 06 — POO em JavaScript e Introdução ao TypeScript

- Classes, objetos, atributos e métodos
- Construtores e herança
- Uso do `this`
- O que é o TypeScript e como usá-lo
- Instalação, configuração e tipagem básica

---

## 🔜 Semana 07 — TypeScript Básico

- Tipagem de parâmetros e retorno
- Funções anônimas
- Parâmetros opcionais e default
- Interfaces e propriedades

---

## 🔜 Semana 08 — TypeScript Intermediário

- Herança, superclasses e métodos estáticos
- Tipos avançados: union, intersection e type aliases
- Generics

---

# 💡 Boas práticas

Durante o curso procure sempre:

✔ Utilizar nomes de variáveis significativos.

✔ Dar nomes claros aos callbacks: `aoConcluir` diz mais que `cb`.

✔ Manter funções pequenas e com uma responsabilidade só.

✔ Tratar os erros sempre: toda Promise precisa de um `catch`.

✔ Manter a identação correta.

✔ Testar seu código frequentemente.

✔ Fazer pequenos commits no Git.

---

# 🎯 Como estudar

A melhor forma de aprender programação é praticando.

Sempre que possível:

- Refaça os exemplos das aulas **sem olhar**;
- Antes de rodar um arquivo, tente prever o que vai sair no console;
- Resolva todos os exercícios;
- Tente criar versões diferentes dos desafios;
- Pesquise a documentação oficial;
- Compartilhe dúvidas com a turma.

> Prever a saída antes de rodar é o exercício que mais ensina.

---

# 📖 Materiais de apoio

- [Callbacks (MDN)](https://developer.mozilla.org/pt-BR/docs/Glossary/Callback_function)
- [Closures (MDN)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Closures)
- [Escopo (MDN)](https://developer.mozilla.org/pt-BR/docs/Glossary/Scope)
- [Promises (MDN)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Using_promises)
- [async / await (MDN)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/async_function)
- [Event Loop visual](http://latentflip.com/loupe/)
- [Documentação do Node.js](https://nodejs.org/docs/latest/api/)

---

# 🚀 Desafio

Não copie código.

Leia o problema.

Pense na solução.

Escreva.

Teste.

Melhore.

Repita.

É assim que um desenvolvedor evolui.

---

# 👨‍💻 Professor

**Maurício José de Souza**

Docente de Tecnologia

Bons estudos! 🚀
