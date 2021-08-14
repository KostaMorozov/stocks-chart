const dates = [
    '01/08/2021',
    '02/08/2021',
    '03/08/2021',
    '04/08/2021',
    '05/08/2021',
    '06/08/2021'
]

export function getDates (){
    return dates.filter( date => date );
}