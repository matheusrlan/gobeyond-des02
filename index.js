/* exercício 1 */

const nome = "João"
const salario = 1500
const vendas = 2000
const comissao = vendas * 15 / 100
const total = salario + comissao


/* exercício 2 Fiz de acordo com o que foi falado durante a aula, e da forma que entendi.*/


let info = {
    nome : ['joão', 'Marcos','Marcelo', 'Carlos'],
    salario: [2000, 4000, 3500, 8000],
    vendas: [5000, 4000, 7800, 4300],
    comissao: [5000 * 15/100, 4000 * 15/100, 7800 * 15/100, 4300 * 15/100],
    total: [ 2000 + 750, 4000 + 600, 3500 + 1170, 8000 + 645 ]
}

console.table(info)

