import { CreateUserUseCase } from "../application/CreateUserUseCase";
import { CreateUserController } from "./controller/CreateUserController";
import { UserRepository_impl } from "./UserRepository_impl";

const createUserRepository = new UserRepository_impl();

export const createUser = new CreateUserUseCase(createUserRepository);

export const createUserController = new CreateUserController(createUser);
