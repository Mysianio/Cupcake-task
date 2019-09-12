export function getGoodsSuccess(data){
    return{
      type: 'FETCH_GOODS_DATA',
      data: data, isFetching: false
    }
  }
  
  export function getGoods(url){
    return (dispatch)=>{
      setTimeout(()=>{
        fetch(url, {method: 'GET'})
          .then(response =>{
            if(!response.ok){
              console.log('Error');
            }
              return response
          })
          .then(response => response.json())
          .then(data => dispatch(getGoodsSuccess(data)))
      }, 3000)
    }
  }
  