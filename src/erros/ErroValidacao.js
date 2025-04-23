import RequisicaoIncorreta from './RequisicaoIncorreta.js';

class ErroValidacao extends RequisicaoIncorreta {
    constructor(erro) {
        
        const msgErro = Object.values(erro.errors)
            .map(e => e.message)
            .join('; ');

        super(`Os seguintes erros foram encontrados: ${msgErro}`);
    }
}

export default ErroValidacao;