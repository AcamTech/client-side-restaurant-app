let FormatHelpers = {
  formatPrice(quantity){
    quantity = quantity.toString();

    if (quantity.length > 6) {
      var millions = quantity.slice(0, quantity.length - 6);
      quantity = millions + '\'' + quantity.slice(-6);
    }

    if (quantity.length > 3) {
      var thousands = quantity.slice(0, quantity.length - 3);
      quantity = thousands + '.' + quantity.slice(-3);
    }

    return '$' + quantity;
  }
};

export default FormatHelpers;