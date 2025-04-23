import mongoose from 'mongoose';

const livroSchema = new mongoose.Schema(
    {
        id: {type: String},
        titulo: {
            type: String, required: [true, 'O título do livro é obrigatório']
        },
        autor: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'autores', required: [true, 'O(a) autor(a) é obrigatório']
        },
        editora: {
            type: String, 
            required: [true, 'A editora é obrigatória'],
            enum: {
                values: ['Casa do código', 'Alura'],
                message: 'A editora {VALUE} fornecida não é um valor permitido'
            }
        },
        numeroPaginas: {
            type: Number,
            validate: {
                validator: (value) => {
                    return value >= 10 && value <= 5000;
                }, 
                message: 'O numero de paginas deve estar entre 10 a 5000. Valor fornecido: {VALUE}'
            }
        }
    }
);

const livros= mongoose.model('livros', livroSchema);

export default livros;