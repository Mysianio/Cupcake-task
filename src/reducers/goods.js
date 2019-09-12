const goodsData = {
    isFetching: true,
    data: null
}

export default function goods(state = goodsData, action){
    switch (action.type) {
      case "FETCH_GOODS_DATA":
        state.data = action.data;
        state.isFetching = action.isFetching;
        return {...state}
      default:
        return state;
    }
  }