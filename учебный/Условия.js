let age = prompt('Сколько вам лет', " ");

// if (age < 18) {
//     alert('Рановато еще');
// }else if (age > 100){
//     alert('Поздновато');
// }else {
//     alert('Вы можете войти');
// }
// switch case проверяет только Условия на строгое соответсвие ===
switch(age){
    case '18':
        alert('Вы можете войти');
        break; 
        case '100':
        alert('Поздновато');
        break; 
        default:alert('Значение не изветсно');
            
}