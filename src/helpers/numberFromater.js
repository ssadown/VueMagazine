export default function numberFormater(value) {
    return new Intl.NumberFormat().format(value);
}