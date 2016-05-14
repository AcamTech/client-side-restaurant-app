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

export function TransformToArrayOfIds(obj){
  return Object.keys(obj)
    .map(item => item);
}

export function ArrayToObject(arr){
  return arr.reduce(function(initial, item){
    return Object.assign({}, initial, item);
  }, {});
}

// gets a value promise from firebase and a path to look out and return an object with the results
export function getInnerDataFromUrl(value, ref, path){
  return value
    .then(snapshot => snapshot.val())
    .then(response => Object.keys(response || {}))
    .then(items => {
      return items.map(id => {
        return ref.child(`${path}/${id}/`)
          .once('value')
          .then(snapshot => {
            return {[snapshot.key()]: snapshot.val()};
          });
      });
    })
    .then(promisesArray => Promise.all(promisesArray))
    .then(items => ArrayToObject(items));
}

export function formatUserInfo (isTemporaryPassword, avatar = "", uid) {
  return {
    isTemporaryPassword,
    avatar,
    uid
  };
}

export function objectToArray(object){
  return Object.keys(object)
    .reduce((initialVal, item) => {
      initialVal.push({
        id: item,
        ...object[item]
      });
      return initialVal;
    }, []);
}

export function generateRandomPassword() {
  var possibleChars = ['abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!?_-'];
  var password = '';
  for(var i = 0; i < 16; i += 1) {
    password += possibleChars[Math.floor(Math.random() * possibleChars.length)];
  }
  return password;
}

export default FormatHelpers;
