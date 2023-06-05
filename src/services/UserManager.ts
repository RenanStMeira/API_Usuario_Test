import { User } from '../models/User';

export class UserManager {
  private static instance: UserManager;
  private users: User[];

  private constructor() {
    this.users = [];
  }

  // Obtém a instância única do UserManager 
  public static getInstance(): UserManager {
    // Verifica se a instância ainda não foi criada
    if (!UserManager.instance) {
      // Cria uma nova instância do UserManager
      UserManager.instance = new UserManager();
    }
    // Retorna a instância existente ou recém-criada
    return UserManager.instance;
  }

  // Registra um novo usuário
  public registerUser(name: string, email: string, password: string): User {
    // Cria um novo objeto de usuário com os dados fornecidos
    const newUser: User = { name, email, password };

    // Adiciona o novo usuário à lista de usuários
    this.users.push(newUser);

    // Retorna o usuário registrado
    return newUser;
  }

  // Autentica um usuário
  public authenticateUser(email: string, password: string): boolean {
    // Procura na lista de usuários pelo usuário com o email e senha fornecidos
    const user = this.users.find((u) => u.email === email && u.password === password);

    // Retorna true se o usuário foi encontrado, caso contrário, retorna false
    return !!user;
  }
}
