import { Request, Response } from 'express';
import { UserManager } from '../services/UserManager';

export class UserController {
  private userManager: UserManager;

  constructor() {
    this.userManager = UserManager.getInstance();
  }

  // Registrar um novo usuario
  public registerUser(req: Request, res: Response): void {
    // Extrai nome, email e senha do corpo da requisição
    const { name, email, password } = req.body;

    // Registra o usuário usando o gerenciador de usuários (UserManager)
    const user = this.userManager.registerUser(name, email, password);

    // Retorna o usuário registrado na resposta
    res.json(user);
  }

  // Manipula o login de um usuário
  public loginUser(req: Request, res: Response): void {
    // Extrai o email e a senha do corpo da requisição
    const { email, password } = req.body;

    // Autentica o usuário usando o gerenciador de usuários (UserManager)
    const isAuthenticated = this.userManager.authenticateUser(email, password);

    // Verifica se a autenticação é bem-sucedida
    if (isAuthenticated) {
      // Retorna uma mensagem de sucesso
      res.json({ message: 'Autenticação bem-sucedida' });
    } else {
      // Retorna uma mensagem de erro se a autenticação falhar
      res.status(401).json({ message: 'Credenciais inválidas' });
    }
  }
}
