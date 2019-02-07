/*
Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
As regras são:

- Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
diretamente;
- O input deve iniciar com valor zero;
- Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
- Deve haver 4 botões para as operações principais: soma (+), subtração(-),
multiplicação(x) e divisão(÷);
- Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
que irá limpar o input, deixando-o com valor 0;

- A cada número pressionado, o input deve atualizar concatenando cada valor
digitado, como em uma calculadora real;
- Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
operação no input. Se o último caractere no input já for um símbolo de alguma
operação, esse caractere deve ser substituído pelo último pressionado.
Exemplo:
- Se o input tem os valores: "1+2+", e for pressionado o botão de
multiplicação (x), então no input deve aparecer "1+2x".
- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
input;
- Ao pressionar o botão "CE", o input deve ficar zerado.
*/


(function(win,doc){
    var operation = {
        '+': function(x,y){
            return (Number(x)) + (Number(y));
        },
        '-': function(x,y){
            return (Number(x)) - (Number(y));
        },
        '*': function(x,y){
            return (Number(x)) * (Number(y));
        },
        '/': function(x,y){
            return (Number(x)) / (Number(y));
        },
        '%': function(x,y){
            return (Number(x)) % (Number(y));
        }
    }
   
    var $buttonData = document.querySelectorAll('[data-js]');
    var $button = document.querySelectorAll('button');
    var $visor = doc.querySelector('[type="text"]')
    //var $reg = /\d+([\+\*\/\-])\d+/g;
    var $reg = /\-?[\d\.]+([\+\*\/\-]).?[\d\.]+/;
    var regInit = /\-?[\d\.]+([\*\/]).?[\d\.]+/;
   // var $button = document.querySelector('[data-js="1"]');
    

    console.log($buttonData)
    function myFunction(event) {
        event.preventDefault();
        var visorValue = $visor.value;
        initCalculator.call(this,null,visorValue);
    }

    function initCalculator($this,valorInitial){
        var $this = this.value;

        //verifyLastDigit($this);
        //console.log(valorInitial); 
        if(valorInitial == 0 && $this != '>' )
           return $visor.value =  $this; 
        else if($this == 'apagar')
            return $visor.value = 0;
        else if($this == '=')
            return $visor.value = sendCalc(valorInitial)
        else if(isSignal($this))
            return verifyLastDigit($this,valorInitial)
        else if($this == '>')
            deleteLastDigit($this);
        else
           return $visor.value +=  $this
    }

    function verifyLastDigit(signal,valorInitial){
        var lastSignalDigit = valorInitial.substring(valorInitial.length - 1);

        if(lastSignalDigit == signal)
            return $visor.value = sendCalc(valorInitial.substring(0,valorInitial.length - 1));
        else if(isSignal(lastSignalDigit))
            return $visor.value = valorInitial.substring(0,valorInitial.length - 1) + signal;
        else
            return $visor.value = valorInitial + signal

        //console.log(signal)
    }

    function deleteLastDigit($this){
        var $length = $visor.value.length;
        if($length >1)
            return $visor.value = $visor.value.substring(0, $length - 1)
        else if($length >1 || $this == '>')
            return $visor.value = 0
    }

    function isSignal($this){
       return $this == '+' || $this == '-' || $this == '*' || $this == '/'
    }
    
    //console.log(sum(1,2,3,4,5,6))

   
    function sendCalc(visor){
        //var initSignal = /[\*\/]/
        //var normalSignal = /\d([\+\-])/
        if(verifySignal(regInit,visor)){
            return makeCalc(regInit,visor)
        }else{
            return makeCalc($reg,visor)
        }
        
    }

    function verifySignal(reg,visor){
        var bacon = reg.test(visor);
        if(bacon){
            return bacon;
        }
    }

    function makeCalc(reg,visor){
        var jaca = visor.replace(reg,function(index,signal){
            var values = index.match(/^([\+\-]?[\d\.]+)|([\d\.]+)/g);
            values.push(signal);
            //return mult.apply(mult,index.match(/\d+/g));
            //return verifyCalc.apply(verifyCalc,sigal,index.match(/\d+/g));
            return verifyCalc.apply(verifyCalc,values);
        })

        if(/.?\d[\+\*\/\-]/g.test(jaca))
            return sendCalc(jaca)
        else
            return jaca
    }

    function verifyCalc(x,y,signal){
    return operation[signal](x,y);
    }



    //console.log(verifyCalc('*',1,2))

    // console.log(sendCalc('10+1*2*3*4'))

    // $button[0].addEventListener('click',myFunction,false)

    Array.prototype.forEach.call($buttonData,function($this){
        console.log($this.addEventListener('click',myFunction,false))
    })
0
    Array.prototype.forEach.call($button,function($this){
        console.log($this.addEventListener('click',myFunction,false))
    })
 
  
})(window,document)
