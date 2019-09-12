const cartInfo = {
    totalAmount: 0,
    goodInfo: []
}

export default function cart(state = cartInfo, action){
    switch (action.type) {
      case "ADD_TO_CART":
        cartInfo.totalAmount = action.amount;
        for(let i = 0; i < cartInfo.goodInfo.length; i++){
            if(cartInfo.goodInfo[i].good.isbn13 === action.goodInfo.good.isbn13){
              cartInfo.goodInfo.splice(i, 1);
              cartInfo.goodInfo = [...cartInfo.goodInfo];
                return {...cartInfo}
            }
        }
        cartInfo.goodInfo = [...cartInfo.goodInfo, action.goodInfo];
        return {...cartInfo};
      default:
        return state;
    }
  }