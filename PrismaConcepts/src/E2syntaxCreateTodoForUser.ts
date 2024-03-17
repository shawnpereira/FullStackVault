import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createTodo(userId: number, title: string, description: string) {
  const todo = await prisma.todo.create({
    data: {
      title,
      description,
      userId,
    },
  });
  console.log(todo);
}

createTodo(1, "go to gym", "go to gym and do 10 pushups");

// get

async function getTodos(userId: number) {
  const todos = await prisma.todo.findMany({
    where: {
      userId: userId,
    },
  });
  console.log(todos);
}

getTodos(1);

//getTodosAndUserDetails using joins
//M1 good
async function getTodosAndUserDetails(userId: number) {
  const todos = await prisma.todo.findMany({
    where: {
      userId: userId,
    },
    select: {
      user: true,
      title: true,
      description: true,
    },
  });
  console.log(todos);
}

getTodosAndUserDetails(1);

//M2bad
async function getTodosAndUserDetailsBad(userId: number) {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  const todos = await prisma.todo.findMany({
    where: {
      userId: userId,
    },
  });
  console.log(todos);
  console.log(user);
}

getTodosAndUserDetailsBad(1);
