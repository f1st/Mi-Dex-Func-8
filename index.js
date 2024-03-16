async function openMarginPosition(pair, side, leverage, amount, stopLoss, takeProfit) {
    const tx = await dexContract.openMarginPosition(pair, side, leverage, amount, stopLoss, takeProfit);
    await tx.wait();
    return tx.hash;
  }
  
  async function lendToken(token, amount, interestRate) {
    const tx = await dexContract.lendToken(token, amount, interestRate);
    await tx.wait();
    return tx.hash;
  }
  