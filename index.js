// 1.
//   Функция user.g() вызовет метод f, который выводит this.
//   Поскольку функция была связана с null (через bind), this будет равен global (в браузере) или undefined (в строгом режиме).
//
// 2.
//   Нет, после первого вызова bind на функции, новый this будет зафиксирован.
//
// 3.
//   Нет, значение свойства функции test не изменится после применения bind.
//   При вызове alert(bound.test) будет получено значение undefined, так как test не является ни свойством объекта,
//   на который происходит привязка, ни свойством самой функции bound.
//
// 4.
//   При передаче user.loginOk и user.loginFail в askPassword, теряется контекст this.
//   Чтобы исправить это, нужно использовать bind() для связывания this с объектом user.
//
// 5.
//   askPassword(user.login.bind(user, true), user.login.bind(user, false));
//
// 6.
// const elem = {value: 'Привет'};
// function func(surname, name) {
//    alert(this.value + ', ' + surname + ' ' + name);
// }
// func = func.bind(elem);
//
// 7.
// const curriedSum = a => b => c => a + b + c;
//
// 8.
// function countdown(start, end) {
//    let timer = setInterval(() => {
//        console.log(start);
//        if (start <= end) {
//            console.log("Таймер завершен");
//            clearInterval(timer);
//        }
//        start--;
//    }, 1000);
// }
