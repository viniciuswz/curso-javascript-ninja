(function(){

    /*
    Envolva todo o código desse desafio em uma IIFE.
    Crie um arquivo chamado index.html e adicione esse script ao HTML.
    */

    /*
    Crie uma função construtora chamada "Person". Esse construtor deve ter
    as seguintes características:
    - Deve receber 3 parâmetros: `name`, `lastName` e `age`;
    - Deverá ter 3 propriedades:
    - `name` - que receberá o valor do parâmetro `name`;
    - `lastName` - que receberá o valor do parâmetro `lastName`;
    - `age` - que receberá o valor do parâmetro `age`;
    - Deverá ter 3 métodos:
    - `getFullName` - que deve retornar o nome completo do objeto criado,
    no formato:
        - "[NAME] [LASTNAME]"
    - `getAge` - que deverá retornar a idade (age);
    - `addAge` - esse método não deverá ter nenhum parâmetro, mas ao invocá-lo
    iremos passar um único argumento, que é a quantidade de anos que devem ser
    adicionados à idade original (age). Esse método deverá retornar o objeto
    que será instanciado.
    */
    function MyPerson(name, lastName, age){
        this.name = name;
        this.lastname = lastName;
        this.age = age;
        this.getFullName = function getFullName(){
            return name + ' ' + lastName;
        };
        this.getAge = function getAge(){
            return age;
        };
        this.addAge = function addAge(){
            age += arguments[0]
            return this;
        };
    }
    var contructor = new MyPerson('Vinícius','Araújo',18);
;
    /*
    Crie 3 novos objetos usando o construtor acima. Os objetos serão novas
    pessoas. As variáveis deverão ser o primeiro nome da pessoa. Passe os
    parâmetros corretamente para o construtor para criar as novas pessoas.
    Mostre as 3 novas pessoas criadas no console (Um console.log por pessoa).
    */
    console.log( 'Novas pessoas criadas à partir de Person:' );
    var Vinicius = new MyPerson('Vinícius','Araújo',18);
    var Joao = new MyPerson('João','Banana',22);
    var Pericles = new MyPerson('Pericles','do Exalta Samba', 49);

    /*
    Mostre no console o nome completo de cada pessoa.
    */
    console.log( '\nNomes das pessoas:' );
    console.log(Vinicius.getFullName());
    console.log(Joao.getFullName());
    console.log(Pericles.getFullName());

    /*
    Mostre no console as idades de cada pessoa, com a frase:
    - "[NOME COMPLETO] tem [IDADE] anos."
    */
    console.log( '\nIdade das pessoas:' );
    console.log(Vinicius.getFullName() + ' tem ' +Vinicius.getAge() + ' anos.');
    console.log(Joao.getFullName() + ' tem ' + Joao.getAge() + ' anos.');
    console.log(Pericles.getFullName() + ' tem ' + Pericles.getAge() + ' anos.');

    /*
    Adicione alguns anos à cada pessoa, e mostre no console a nova idade de
    cada um. A frase deverá ser no formato:
    - "[NOME COMPLETO] agora tem [NOVA IDADE] anos."
    */

   
    console.log( '\nNova idade das pessoas:' );
    console.log(Vinicius.getFullName() + ' tem ' + Vinicius.addAge(5).getAge() + ' anos.');
    console.log(Joao.getFullName() + ' tem ' + Joao.addAge(5).getAge() + ' anos.');
    console.log(Pericles.getFullName() + ' tem ' + Pericles.addAge(5).getAge() + ' anos.');

})();
