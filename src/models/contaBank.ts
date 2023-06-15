class ContaBank {
    public saldo: number;


    getSacar(saldo: number): number {
        return this.saldo = saldo;
    }
}


let obj = new ContaBank();
obj.getSacar(2000);