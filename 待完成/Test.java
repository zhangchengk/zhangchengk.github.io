import java.util.Arrays;
public class Test{
    public static void main(String[] args){
        int amount = 11;
        int[] coins = {1,2,5};
        int[] coinAmount = new int[amount+1];
        Arrays.fill(coinAmount, amount+1);
        // base case
        coinAmount[0] = 0;
        System.out.println(coinChange(coins, amount, coinAmount));
    }
    static int coinChange(int[] coins, int amount, int[] coinAmount) {
        // 外层 for 循环在遍历所有状态的所有取值
        for(int i= 0;i<coinAmount.length;i++) {
            // 内层 for 循环在求所有选择的最小值
            for(int coin : coins) {
                // 子问题无解，跳过
                if (i - coin < 0) continue;
                coinAmount[i] = Math.min(coinAmount[i], 1+ coinAmount[i - coin]);
            }
        }
        if(coinAmount[amount] == amount + 1) return -1;
        return coinAmount[amount];
    }
}