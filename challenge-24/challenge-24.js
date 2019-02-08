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

    var $buttonData = document.querySelectorAll('[data-js]');
    var $button = document.querySelectorAll('button');
    var $visor = doc.querySelector('[type="text"]')
    var $reg = /\-?[\d\.]+([\+\*\/\-]).?[\d\.]+/;
    var regInit = /\-?[\d\.]+([\*\/]).?[\d\.]+/;   
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
    function initCode(){
        initEvents();
    }

    function initEvents(){

        Array.prototype.forEach.call($buttonData,function($this){
            console.log($this.addEventListener('click',myFunction,false))
        })
        Array.prototype.forEach.call($button,function($this){
            console.log($this.addEventListener('click',myFunction,false))
        })
    }

    function myFunction(event) {
        event.preventDefault();
        var visorValue = $visor.value;
        initCalculator.call(this,null,visorValue);
    }

    function initCalculator($this,valorInitial){
        var $this = this.value;
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
    
    function sendCalc(visor){
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

    initCode();
})(window,document)
