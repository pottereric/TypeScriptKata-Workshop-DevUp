/*
  Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
  
  Symbol   Value
  I         1
  V         5
  X         10
  L         50
  C         100
  D         500
  M         1000
  
  For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.
  Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
  
  I can be placed before V (5) and X (10) to make 4 and 9. 
  X can be placed before L (50) and C (100) to make 40 and 90. 
  C can be placed before D (500) and M (1000) to make 400 and 900.
  Given a Roman numeral, convert it to an integer.
  
   
  
  Example 1:
    Input: numeral = "III"
    Output: 3
    Explanation: 3 is represented as 3 ones.
  
  Example 2:
    Input: numeral = "LVIII"
    Output: 58
    Explanation: L = 50, V = 5, III = 3.
  
  Example 3:
    Input: numeral = "MCMXCIV"
    Output: 1994
    Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
  
  Constraints:
    1 <= numeral <= 3999
    
  Edge Cases:
    you can assume all inputs are valid Roman numerals that are less than or equal to 3999
*/

export const READY_TO_TEST = false; // SET ME TO TRUE IF YOU DARE

export function romanNumeralToInteger(numeral: string): number {
  return -1;
}
