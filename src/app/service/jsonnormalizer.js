
export default function normalize(order) {
    const string = String(order)
    const normalizedString = string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    console.log('normalizado', normalizedString); 
}
