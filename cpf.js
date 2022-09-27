class Data {

    constructor(cpf) {
        
                this.cpf = cpf
             
    } 
    
    setcpf(cpf){
        if (typeof(this.cpf == typeof('string'))){
                this.cpf_comparativo = [this.cpf[cpf.length - 2], this.cpf[cpf.length - 1]]
                this.newcpf = Array.from(cpf.replace(/\D+/g, ""));
                this.cpf_7_digits = this.newcpf.slice(0, this.newcpf.length - 2);
        } 
        else if (typeof(this.cpf == typeof(0))) {
            this.cpf = Array.from(String(cpf))

            this.cpf_comparativo = [this.cpf[cpf.length - 2], this.cpf[cpf.length - 1]]
            this.cpf_7_digits = this.newcpf.slice(0, this.newcpf.length - 2)
        }
    }

     getDigito1() {
        this.cpfArray = [];
        this.i = Number(this.cpf_7_digits.length) + 1;

        for (let valor of this.cpf_7_digits) {
            this.produto = valor * this.i;
            this.cpfArray.push(this.produto);
            this.i = this.i - 1;

        }

        this.value = this.cpfArray.reduce((acumulador, valor) => acumulador += valor)
        this.value = 11 - (this.value % 11)
        this.value > 9 ? this.value = 0 : this.value = this.value
        return this.value

    }
     getDigito2() {
        this.cpfArray = []
        this.cpf_8_digits = this.cpf_7_digits.concat(this.value)
        this.j = this.cpf_8_digits.length + 1

        for (let valor of this.cpf_8_digits) {
            this.produto = valor * this.j
            this.cpfArray.push(this.produto);
            this.j = this.j - 1;
            
        }
        this.value = this.cpfArray.reduce((acumulador, valor) => acumulador += valor)
        this.value = 11 - (this.value % 11)
        this.value > 9 ? this.value = 0 : this.value = this.value
        this.value2 = this.value
        
        return this.value2
    }
    checkout(a) {
    
        if (this.getDigito1()  == this.cpf_comparativo[0] && this.getDigito2() == this.cpf_comparativo[1]){
            return true
         }  return false
         
    }
}

const p1 = new Data("705.484.450-52")
console.log(p1.checkout())

// const p2 = new Data("932.534.123-12")
// console.log(p2.checkout())

