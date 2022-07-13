let sobreMim = {
    nome: "Laysa",
    idade: 18,
    cor: "preta"
}
sobreMim.time = "Corinthians"
console.log(sobreMim);

delete sobreMim.cor;

let cadastro = [
    {
        Nome: 'Laysa',
        idade: 18,
        amigos: ['Laura', 'Natália', 'Rosa', 'Maria' ]
    },{
        Nome: 'Laura',
        idade: 24,
        amigos: ['Milena', 'Laysa', 'Maria', 'Laura' ]
    },{
        Nome: 'Natália',
        idade: 20,
        amigos: ['Rosa', 'Milena', 'Laysa', 'Maria' ]
    },{
        Nome: 'Milena',
        idade: 23,
        amigos: ['Maria', 'Natalia', 'Laura', 'Laysa' ]
    },{
        Nome: 'Rosa',
        idade: 26,
        amigos: ['Laysa', 'Milena', 'Natália', 'Maria' ]
    }
]
console.log(cadastro)



for(let c = 0; c < cadastro.length; c++){
    console.log(cadastro[c].amigos[0])
}