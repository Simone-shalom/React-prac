
// best time to buy and sell stocks

function bestTime(prices){
  
    let mostProfit= 0
  
    for(let i = 0; i<prices.length-1; i ++){
      for(let j = i+1; j<prices.length; j++){
        const twoPrices =  prices[j] - prices[i]
        if(twoPrices > mostProfit){
          mostProfit = twoPrices
        } 
      }
    }
    return mostProfit
  
  }
  
  console.log(bestTime([1,6,4,3,1]))