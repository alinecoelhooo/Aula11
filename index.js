class Conta
 {
        //Método de Classe
    constructor()
    {
        //Atributo da Classe(Características)
        this.Saldo = 0
        this.PossuiLimite = false
        console.log('Classe criada com sucesso')
    }

    depositar(pValor)
    {
        this.Saldo += pValor
        console.log('Depositado ' + pValor)
    }

    sacar(pValor)
   
    {
            if(this.PossuiLimite && this.Saldo - pValor < 0)
                pValor += pValor * 0.15
            else
                pValor += pValor * 0.10
            this.Saldo -= pValor
    }
           
    
    getSaldo()
    {
        return this.Saldo
    }
 }

 class Corrente extends Conta
 {

 }

 class Poupanca extends Conta
 {

 }
 let cc = new Corrente
 let cp = new Poupanca



