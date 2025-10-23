const CALENDARIO = document.querySelector('.calendario')
const ITEM = document.querySelectorAll('.calendario .item')
const NUM_COLUMNS = 5
const NUM_ROWS = 7


function organizar_items() {
    let row_start = 0
    let column_start = 0
    let row_end = 1
    let column_end = 1
    for (let i = 0; i < NUM_ROWS; i++) {
        row_start++
        row_end++
        for (let i2 = 0; i < NUM_COLUMNS; i2++) {
            column_start++
            column_end++
            ITEM.forEach(item => {
                item.style.gridArea = `${row_start} / ${column_start} / ${row_end} / ${column_end}`
            })
        }
    }
}
