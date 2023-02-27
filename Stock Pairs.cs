using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StockPair
{
    public class Program
    {

        static void Main(string[] args)
        {
            int[] stocksProfit = { 5, 7, 9, 13, 11, 6, 6, 3, 3 };
            int n = stocksProfit.Length;
            int target = 12;

            Console.WriteLine(StockPairs(stocksProfit, target));

        }

        static int StockPairs(int[] stocksProfit, int target)
        {
            int numOfpairs = 0;
            var dict = new Dictionary<int, int>();

            for (int i = 0; i < stocksProfit.Length; i++)
            {
                var curVal = stocksProfit[i];
                var req = target - curVal;
                if (dict.ContainsKey(curVal))
                {
                    numOfpairs++;
                    if (dict[curVal] > 1)
                    {
                        dict[curVal]--;
                    }
                    else
                    {
                        dict.Remove(curVal);
                    }
                }
                else
                {
                    if (dict.ContainsKey(req))
                    {
                        dict[req] += 1;
                    }
                    else
                    {
                        dict.Add(req, 1);

                    }
                }
            }

            return numOfpairs;
        }
    }
}
