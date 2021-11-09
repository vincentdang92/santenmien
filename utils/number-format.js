export function formatCurrency(number) {
    if (number === null || number === undefined) return;
    return number.toLocaleString("vi-VN")+ " đ";
  }
  
  export function formatNumber(number) {
    if (number === null || number === undefined) return;
    return new Intl.NumberFormat('vi-VI', { style: 'decimal'}).format(number)
  }
  
  
  export function numberWithCommas(x) {
    if (!x) return;
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return parts.join(".");
  }