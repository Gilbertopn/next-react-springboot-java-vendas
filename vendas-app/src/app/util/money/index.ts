export const converterEmBigDecimal = (value: string): number => {
    if (!value) {
      return 0;
    }
    return parseFloat(value.replace(".", "").replace(",", "."));
  };

export const formatReal = (valor: string): string => {
    const numericValue = parseFloat(valor.replace(/\D/g, ''));
  
    const v = (numericValue / 100).toFixed(2).split('.');
  
    const m = v[0].split('').reverse().join('').match(/.{1,3}/g);
  
    const r = m ? m.reverse().map((item) => item.split('').reverse().join('') + '.').join('') : '';
  
    return r.substring(0, r.lastIndexOf('.')) + ',' + v[1];
  };