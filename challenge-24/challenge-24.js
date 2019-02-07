/*
Nossa calculadora agora está funcional! A ideia desse desafio é modularizar
o código, conforme vimos na aula anterior. Quebrar as responsabilidades
em funções, onde cada função faça somente uma única coisa, e faça bem feito.

- Remova as duplicações de código;
- agrupe os códigos que estão soltos em funções (declarações de variáveis,
listeners de eventos, etc);
- faça refactories para melhorar esse código, mas de forma que o mantenha com a
mesma funcionalidade.
*/


(function(win,doc){
  'use strict'
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
        if(valorInitial == 0 && $this != '>')
           return $visor.value =  $this; 
        else if($this == 'apagar')
            return $visor.value = 0;
        else if($this == '=')
            return $visor.value = sendCalc(valorInitial);
        else if(isSignal($this))
            return verifyLastDigit($this,valorInitial);
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
        else if($length > 1 || $this == '>')
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
       return makeCalcAgain(calcs(reg,removeLastSignal(visor)))
    }

    function removeLastSignal(visor){
        
        if(isSignal(visor.slice(-1)))
        return visor.slice(0,-1)
        else
            return visor;
    }

    function calcs(reg,calc){
    return calc.replace(reg,function(index,signal){
            var values = index.match(/^([\+\-]?[\d\.]+)|([\d\.]+)/g);
            values.push(signal);
            //return mult.apply(mult,index.match(/\d+/g));
            //return verifyCalc.apply(verifyCalc,sigal,index.match(/\d+/g));
            return verifyCalc.apply(verifyCalc,values);
        })
    }

    function makeCalcAgain(calc){
        if(/.?\d[\+\*\/\-]/g.test(calc))
            return sendCalc(calc)
        else
            return calc
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
