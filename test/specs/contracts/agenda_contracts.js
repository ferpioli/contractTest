var Joi = require('joi');
var joiAssert = require('joi-assert');

describe('POST /requests', () => {
    it.only('valida retorno do post', done => {
        const schema = Joi.object({
            Name: Joi.string(),
            nascDia:Joi.number(),
            nascMes: Joi.number(),
            nascAno: Joi.number(),
            rua: Joi.string(),
            numero:Joi.number(),
            cidade: Joi.string(),
            Cep: Joi.string(),
            tipo: Joi.string(),
            
        });

        let newRequest = {
            name: 'Fernando',
            nascDia: 20,
            nascMes: 11,
            nascAno: 1979,
            rua: 'palmeiras',
            numero:155,
            cidade: 'Belo Horizonte',
            Cep: '3200000',
            tipo: 'CASA'
        }
        request
            .post('/requests')
            .send(newRequest)
            .end((err, res) => {
            //console.log(res.body.trace)
            //console.log(schema)
                joiAssert(res.body, schema);
                done(err);
            });
    });
});
