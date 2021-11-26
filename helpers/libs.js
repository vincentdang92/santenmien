export function formatCurrency(number) {
    if (number === null || number === undefined) return;
    number = parseFloat(number);
    return number.toLocaleString("vi-VN")+ " đ";
  }
  
  export function formatNumber(number) {
    if (number === null || number === undefined) return;
    return new Intl.NumberFormat('vi-VI').format(number);
  }
  export function checkValidDomain(text) {
    if (text === null || text === undefined) return;
    return /^(([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]|[a-zA-Z0-9])\.)*[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/.test(text);
  }
  
  
  export function numberWithCommas(x) {
    if (!x) return;
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return parts.join(".");
  }