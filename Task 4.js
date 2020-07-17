// Task 4 --------------------------------------------------------------------------------------

// Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. 
// Реализуйте его на прототипах.
// Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 
// Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). 
// Выбрав прибор, подумайте, какими свойствами он обладает.

// План:

// Определить родительскую функцию с методами, которые включают/выключают прибор из розетки;
// Создать делегирующую связь [[Prototype]] для двух конкретных приборов;
// У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов;
// Создать экземпляры каждого прибора;
// Вывести в консоль и посмотреть результаты работы, гордиться собой :)
// Общие требования:

// Имена функций, свойств и методов должны быть информативными
// Соблюдать best practices:
// использование camelCase нотации для переменных и методов,
// PascalCase для названия функций-конструкторов и классов;
// информативные имена (а не a, b);
// четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр конкретную реализацию);
// использование синтаксиса es6 (кроме функции-конструкторов) и т.д.
// При возникновении проблем по ходу решения вы всегда можете обратиться к ментору в Slack. 
  
    function Device(source, name){
     this.deviceType = 'electric';
     this.electricSource = source;
     this.name = name
  } 
  Device.prototype.calcPower = function (curent, voltage) {
         console.log (`Power is ${curent*voltage} W`)
         this.curent = curent;
         this.voltage = voltage;
  }
 Device.prototype.connectToPower = function (curState) {
            this.curState = curState
  }
  function DeviceMobile (name, weight){
    this.name =name;
    this.weight = weight;
  }
 
  DeviceMobile.prototype = new Device ();
  DeviceTable.prototype = new Device ();
  
  function DeviceTable (name, height){
    this.name =name;
    this.weight = height;
    console.log (`Device heght is ${height} cm`);
  }
  
  const jackLight = new DeviceMobile ("jackLight", 200);
  const deskLamp = new DeviceTable ("deskLamp", 50);  

  deskLamp.connectToPower("on");
  jackLight.connectToPower("off");

  

  console.log(jackLight.curState)
  deskLamp.calcPower(0.5, 220);
  jackLight.calcPower(0.3, 4)