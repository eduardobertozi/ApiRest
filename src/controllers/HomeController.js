import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Thalyta',
      sobrenome: 'Portes',
      email: 'thalyta@gmail.com',
      idade: 25,
      peso: 62.5,
      altura: 1.58,
    });

    res.json(novoAluno);
  }
}

export default new HomeController();
