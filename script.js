const CALENDARIO = document.querySelector('.calendario');
const ITENS = document.querySelectorAll('.calendario .item');
const ANO = document.querySelector('.ano-atual')
const MES = document.querySelector('.mes-atual')

function organizar_itens() {
    const COLUNA_GRID = 7; 
    ITENS.forEach((item, index) => {
        let linha_inicial = Math.floor(index / COLUNA_GRID) + 1;
        let coluna_inicial = (index % COLUNA_GRID) + 1;
        item.style.gridArea = `${linha_inicial} / ${coluna_inicial} / ${linha_inicial + 1} / ${coluna_inicial + 1}`;
    });
}

organizar_itens();

let data = new Date()
let dia_do_mes = data.getDate()
let dia_da_semana = data.getDay()
let mes_atual = data.getMonth()
let ano_atual = data.getFullYear()
let primeiro_dia_do_mes = new Date(ano_atual, mes_atual, 1)
let ultimo_dia_do_mes = new Date(ano_atual, mes_atual + 1, 0).getDate()
let primeiro_dia_da_semana_do_mes = primeiro_dia_do_mes.getDay()

let lista_itens = Array.from(ITENS)

function setar_dias_do_mes(lista, dia_inicial, ultimo_dia, dia) {
    let numero = 1
    for (let i = dia_inicial; i < (ultimo_dia + dia_inicial); i++) {
        if (numero === dia) {
            lista[i].style.backgroundColor = '#ec4d4d'
            lista[i].style.color = '#fff'
        }
        if (numero < 10) {
            lista[i].textContent = `0${numero}`
        } else {
            lista[i].textContent = numero
        }
        numero++
    }
}

setar_dias_do_mes(lista_itens, primeiro_dia_da_semana_do_mes, ultimo_dia_do_mes, dia_do_mes)

function desenhar_mes_e_ano(ano, mes) {
    const nomesDosMeses = [
        'JANEIRO', 'FEVEREIRO', 'MARÇO', 'ABRIL', 'MAIO', 'JUNHO', 'JULHO', 'AGOSTO', 'SETEMBRO', 'OUTUBRO', 'NOVEMBRO', 'DEZEMBRO'
    ];
    
    ANO.textContent = ano;
    MES.textContent = nomesDosMeses[mes];
}

desenhar_mes_e_ano(ano_atual, mes_atual);
