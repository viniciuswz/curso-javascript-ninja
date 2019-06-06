/*
Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
métodos semelhantes aos que existem no array, mas que sirvam para os
elementos do DOM selecionados.
Crie os seguintes métodos:
- forEach, map, filter, reduce, reduceRight, every e some.
Crie também métodos que verificam o tipo do objeto passado por parâmetro.
Esses métodos não precisam depender de criar um novo elmento do DOM, podem
ser métodos estáticos.
Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
no objeto, como nos exemplos abaixo:
DOM.isArray([1, 2, 3]); // true
DOM.isFunction(function() {}); // true
DOM.isNumber('numero'); // false
Crie os seguintes métodos para verificação de tipo:
- isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
O método isNull deve retornar `true` se o valor for null ou undefined.
*/

(function(){
    'use strict';

    function DOM(param){
        this.element = this.getDOMElements(param);
    }
    
    DOM.prototype.getDOMElements = function getDOMElements(param){
        return document.querySelectorAll(param)
    }
    
    DOM.prototype.on = function on(event,callback){
      Array.prototype.forEach.call(this.element,function(element){
        element.addEventListener(event,callback,false)
      });
     
    };
    
    DOM.prototype.off = function off(event,callback){
      Array.prototype.forEach.call(this.element,function(element){
        element.removeEventListener(event,callback,false)
      });
    };
    
    DOM.prototype.get = function get(event,func){
      return this.element
    };

    //forEach, map, filter, reduce, reduceRight, every e some.

    DOM.prototype.forEach = function forEach(){
        return Array.prototype.forEach.apply(this.element, arguments);
    };

    DOM.prototype.map = function map(){
        return Array.prototype.map.apply(this.element, arguments);
    };

    DOM.prototype.filter = function filter(){
        return Array.prototype.filter.apply(this.element, arguments);
    };

    DOM.prototype.reduce = function reduce(){
        return Array.prototype.reduce.apply(this.element, arguments);
    };

    DOM.prototype.reduceRight = function reduceRight(){
        return Array.prototype.reduceRight.apply(this.element, arguments);
    };

    DOM.prototype.every = function every(){
        return Array.prototype.every.apply(this.element, arguments);
    };

    DOM.prototype.some = function some(){
        return Array.prototype.some.apply(this.element, arguments);
    };

    DOM.prototype.isArray = function isArray(param){
        return Object.prototype.toString.call(param) === '[object Array]';
    };

    DOM.prototype.isObject = function isObject(param){
        return Object.prototype.toString.call(param) === '[object Object]';
    };

    DOM.prototype.isNumber = function isNumber(param){
        return Object.prototype.toString.call(param) === '[object Number]';
    };

    DOM.prototype.isNull = function isNull(param){
        return Object.prototype.toString.call(param) === '[object Null]' || Object.prototype.toString.call(param) === '[object Undefined]';
    };

    DOM.prototype.isFunction = function isFunction(param){
        return Object.prototype.toString.call(param) === '[object Function]';
    };

    DOM.prototype.isString = function isString(param){
        return Object.prototype.toString.call(param) === '[object String]';
    };
})()
