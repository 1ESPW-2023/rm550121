
//O que significa UTC?
//UTC é a sigla de Coordinated Universal Time, que significa Tempo Universal Coordenado.
//É o fuso horário de referência a partir do qual se calculam todas as outras zonas horárias do mundo.
//O UTC é o sucessor do GMT (Greenwich Mean Time), que foi o fuso horário de referência até 1972.

//Função para formatar datas no formato dd/mm/aaaa
// function formataData(data) {
//     let dia = data.getDate();
//     let mes = data.getMonth() + 1;
//     let ano = data.getFullYear();
     
//     if (dia.toString().length == 1) {
//         dia = "0" + dia;
//     }
//     if (mes.toString().length == 1) {
//         mes = "0" + mes;
//     }
//     return dia + "/" + mes + "/" + ano;
// }

// getDate() = Dia do mês 
// getDay() = Dia da Semana (0[Sabado] - 6 [Domingo])
// getFu11Year() = Ano com 4 dígitos
// getHours() = Horas
// getMilliseconds() = Milisegundos
// getMinutes() =  Minutos
// getMonth() = Mês 
// getSeconds () = Segundos 
// getTime() = Timestamp (milisegundos desde 1 de Daneiro de 1970, UTC 
// Date.now() = Timestamp (milisegundos desde 1 de Janeiro de 1970, UTC 
// getTimezoneOffset() = Timezone da localidade 
// setDate() = Define um dia do mês para a data 
// setMonth() = Define um mês para a data 
// setFullYear() = Define um ano para a data 
// setHours() = Define horas 
// setMinutes() = Define Minutos 
// setSeconds() = Define Segundos 
// setMi11iseconds() = Define milisegundos 
// toDateString() = Retorna somente a data 


//Função para calcular a diferença de dias entre duas datas
function diferencaDias(data1, data2) {
    let diferenca = Math.abs(data1.getTime() - data2.getTime());
    return Math.ceil(diferenca / (1000 * 60 * 60 * 24));
}

//Função para calcular a diferença de meses entre duas datas
function diferencaMeses(data1, data2) {
    let diferenca = (data2.getFullYear() - data1.getFullYear()) * 12;
    diferenca -= data1.getMonth() + 1;
    diferenca += data2.getMonth();
    return diferenca <= 0 ? 0 : diferenca;
}
 
//Função para calcular a diferença de anos entre duas datas
function diferencaAnos(data1, data2) {
    let diferenca = data2.getFullYear() - data1.getFullYear();
    return diferenca <= 0 ? 0 : diferenca;
}

//Função para calcular a diferença de horas entre duas datas
function diferencaHoras(data1, data2) {
    let diferenca = Math.abs(data1.getTime() - data2.getTime());
    return Math.ceil(diferenca / (1000 * 60 * 60));
}

//Função para calcular a diferença de minutos entre duas datas
function diferencaMinutos(data1, data2) {
    let diferenca = Math.abs(data1.getTime() - data2.getTime());
    return Math.ceil(diferenca / (1000 * 60));
}

//Função para calcular a diferença de segundos entre duas datas
function diferencaSegundos(data1, data2) {
    let diferenca = Math.abs(data1.getTime() - data2.getTime());
    return Math.ceil(diferenca / 1000);
}

//Função para calcular a diferença de milisegundos entre duas datas
function diferencaMilisegundos(data1, data2) {
    let diferenca = Math.abs(data1.getTime() - data2.getTime());
    return diferenca;
}

//Função para calcular a diferença entre duas datas
function diferencaEntreDatas(data1, data2) {
    let diferenca = Math.abs(data1.getTime() - data2.getTime());
    let dias = Math.ceil(diferenca / (1000 * 60 * 60 * 24));
    let meses = (data2.getFullYear() - data1.getFullYear()) * 12;
    meses -= data1.getMonth() + 1;
    meses += data2.getMonth();
    let anos = data2.getFullYear() - data1.getFullYear();
    let horas = Math.ceil(diferenca / (1000 * 60 * 60));
    let minutos = Math.ceil(diferenca / (1000 * 60));
    let segundos = Math.ceil(diferenca / 1000);
    let milisegundos = diferenca;
    return {
        dias: dias,
        meses: meses,
        anos: anos,
        horas: horas,
        minutos: minutos,
        segundos: segundos,
        milisegundos: milisegundos
    }
}