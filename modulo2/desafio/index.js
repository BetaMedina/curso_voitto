const usuarios = [{
  id: 1,
  nome: 'João da Silva'
}, {
  id: 2,
  nome: 'João da Silva 2'
}, {
  id: 3,
  nome: 'João da Silva 3'
}]

function getUsuarioById(id) {
  return new Promise((resolve, reject) => {
    const usuario = usuarios.find(user => user.id === id)
    if (usuario) return resolve({ id, nome: 'João da Silva' })
    return reject("Usuario não encontrado")
  })
}
const ids = [1, 2, 3, 4]

for await (const id of ids) {
  getUsuarioById(id)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}


/* 
  Primeiramente, crie uma base de dados mockada, pode-se usar uma constante contendo o array de usuarios
  a partir dela, construa um código para buscar um usuario apartir de um ID de forma dinamica, posteriormente gere um código
  onde deve-se passar as seguintes sequencias de ids [1,2,3,4], onde, um desses ID's deve gerar um Erro e os demais gerar sucesso.
  Como resultado final esperado, deve-se ter: 3 resolves e 1 reject
*/