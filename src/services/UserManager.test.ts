import { UserManager } from '../services/UserManager';

// Teste para a classe UserManager

describe('UserManager', () => {
    // Variável para armazenar a instância de UserManager
  let userManager: UserManager;

    // Executa antes de cada teste
  beforeEach(() => {
    // Obtém nova instância de UserManager
    userManager = UserManager.getInstance();
    //Usuario de teste
    userManager.registerUser('Renan Meira', 'renan@meira.com', '123456');
  });

  test('registerUser deve adicionar um novo usuário', () => {

    // Chama o metodo registerUser para adicionar um usuário de teste
    const user = userManager.registerUser('Jane Smith', 'jane@example.com', 'password456');
    // Verifica se o usuário pode ser autenticado 
    expect(userManager.authenticateUser('jose@test.com', 'senha123')).toBe(true);
  });

  test('authenticateUser deve retornar true para credenciais válidas', () => {
    // Verifica se o usuário pode ser autenticado
    expect(userManager.authenticateUser('renan@test.com', '7894562')).toBe(true);
  });

  // Testa o método authenticateUser
  test('authenticateUser deve retornar false para credenciais inválidas', () => {
    // Verifica se o usuário não pode ser autenticado
    expect(userManager.authenticateUser('naya@example.com', 'naya123')).toBe(false);
  });
});
