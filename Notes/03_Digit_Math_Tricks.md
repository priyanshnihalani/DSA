# ⚔️ Quest 03: The Digit Alchemist (Math & Digit Extraction)

**XP Reward:** 100 XP  
**Class Perk Unlocked:** *Modulo Vision* 👁️  
**Prerequisites:** Loops & Nested Logic (Quest 02 Completed)

---

## 🎯 The Quest Objective
In DSA, numbers are not just scalars—they are **streams of digits**.  
Almost every number problem in interviews (Reverse Integer, Palindrome Number, Armstrong Number, GCD) relies on **one single fundamental loop**.

Your mission today is to master the **Digit Extraction Loop** so you can manipulate digits without converting numbers to strings!

---

## 🗝️ The Secret Alchemy: `% 10` and `/ 10`

Whenever you have an integer `N`, you have two magical tools:

| Operation | What it does | Example (`N = 582`) |
| :---: | :--- | :--- |
| `N % 10` | **Peels off the LAST digit** | `582 % 10 = 2` |
| `Math.floor(N / 10)` | **Discards the LAST digit** | `Math.floor(582 / 10) = 58` |

---

## 🔄 The Master Loop Template

Memorize this 4-line engine. It runs until the number runs out of digits:

```js
let n = 582;

while (n > 0) {
  let lastDigit = n % 10;   // 1. Grab the tail
  // ... DO SOMETHING WITH lastDigit ...
  n = Math.floor(n / 10);   // 2. Shrink the number
}
```

**Time Complexity:** $O(\log_{10} N)$ — The loop runs once per digit (e.g., $1000 \rightarrow 4$ steps).  
**Space Complexity:** $O(1)$ — Zero extra memory allocated.

---

## ⚔️ 3 Boss Challenges Solved With This Engine

### 1. Count Digits
- **Goal:** How many digits are in `N`?
- **Logic:** Every time we shrink `n`, increment a counter `count++`.

### 2. Reverse a Number (LeetCode #7)
- **Goal:** Turn `1234` into `4321`.
- **Mental Model:** Shifting digits left (`rev * 10`) and appending the new digit:
  $$\text{rev} = \text{rev} \times 10 + \text{lastDigit}$$
- **Trace for 123:**
  - `lastDigit = 3` $\rightarrow \text{rev} = 0 \times 10 + 3 = 3$
  - `lastDigit = 2` $\rightarrow \text{rev} = 3 \times 10 + 2 = 32$
  - `lastDigit = 1` $\rightarrow \text{rev} = 32 \times 10 + 1 = 321$

### 3. Palindrome Number (LeetCode #9)
- **Goal:** Is `121` the same forwards and backwards?
- **Logic:** 
  1. Save `original = n`.
  2. Reverse the number using the formula above into `rev`.
  3. Check if `original === rev`.

---

## 📝 Today's Reflection & Aha! Moment
> *"A number is just an array of digits read from right to left using modulo 10."*

---
**Status:** Completed ✅ | **XP Claimed:** +100 XP
