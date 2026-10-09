# Complete 22 Patterns: Logic, Formulas & Explanations

> A definitive conceptual guide to solving all 22 foundational nested loop patterns.  
> **No code, no syntax gimmicks**—just pure mathematical breakdowns, loop boundaries, and mental models.

---

## The Universal 4-Step Framework

Every pattern is approached with the exact same 4 questions:

1. **Outer Loop (Rows):** How many total lines are there? (Usually $N$ or $2N - 1$).
2. **Component Decomposition:** For any given row $i$, what components make up the line from left to right?
   - Common breakdowns:
     - `[Stars]`
     - `[Leading Spaces] + [Characters]`
     - `[Left Wing] + [Middle Spaces] + [Right Wing]`
3. **Column Counting / Formulas:** How many units does each component take as a function of row index $i$ and $N$?
4. **Value Logic:** What is printed? Does it stay constant across the row (depends on $i$), change across columns (depends on $j$), or persist continuously across lines?

---

## Pattern 1: Solid Square / Grid

### Visual ($N = 4$)
```text
* * * *
* * * *
* * * *
* * * *
```

### Logic & Derivation
- **Total Rows:** $N$.
- **Components:** Only stars, no spaces.
- **Formula:** For every row, column count is constant: exactly $N$ stars.
- **Mental Model:** A uniform matrix where the row index has no effect on the column count.

---

## Pattern 2: Right-Angled Star Triangle

### Visual ($N = 4$)
```text
*
* *
* * *
* * * *
```

### Logic & Derivation
- **Total Rows:** $N$ (0-indexed: $i = 0$ to $N - 1$).
- **Formula:** Row $i$ has $i + 1$ stars.
- **Mental Model:** Triangular boundary condition. The inner loop runs up to the current row index.

---

## Pattern 3: Inverted Right-Angled Star Triangle

### Visual ($N = 4$)
```text
* * * *
* * *
* *
*
```

### Logic & Derivation
- **Total Rows:** $N$ ($i = 0$ to $N - 1$).
- **Formula:** Stars decrease as row index increases: $N - i$ stars per row.
  - At $i = 0$: $N - 0 = N$ stars.
  - At $i = N - 1$: $N - (N - 1) = 1$ star.
- **Mental Model:** Inversion formula. Whenever a sequence decreases from $N$ down to $1$, use $N - i$.

---

## Pattern 4: Number Triangle (Column Changing)

### Visual ($N = 4$)
```text
1
1 2
1 2 3
1 2 3 4
```

### Logic & Derivation
- **Total Rows:** $N$.
- **Row Length:** Same shape as Pattern 2 ($i + 1$ elements).
- **Value Logic:** The number resets at the start of every row. Within a row, numbers increment left to right: $1, 2, \dots, j+1$.
- **Mental Model:** Values depend strictly on column index $j$, resetting every row.

---

## Pattern 5: Repeated Row Number Triangle

### Visual ($N = 4$)
```text
1
2 2
3 3 3
4 4 4 4
```

### Logic & Derivation
- **Total Rows:** $N$.
- **Row Length:** $i + 1$ elements.
- **Value Logic:** Every element across the entire row is identical.
- **Mental Model:** Value depends strictly on row index $i$. For row $i$ (0-indexed), the value is constant: $i + 1$.

---

## Pattern 6: Inverted Number Triangle

### Visual ($N = 4$)
```text
1 2 3 4
1 2 3
1 2
1
```

### Logic & Derivation
- **Total Rows:** $N$.
- **Row Length:** $N - i$ elements (same boundary as Pattern 3).
- **Value Logic:** Resets every row to $1$, then counts up to the row length ($1, 2, \dots, N - i$).

---

## Pattern 7: Upright Star Pyramid

### Visual ($N = 4$)
```text
   *
  ***
 *****
*******
```

### Logic & Derivation
Each row is split into **two distinct sequential components**:
1. **Leading Spaces:**
   - Row $0$: $3$ spaces
   - Row $1$: $2$ spaces
   - Row $2$: $1$ space
   - Row $3$: $0$ spaces
   - Formula: $N - 1 - i$
2. **Stars:**
   - Odd sequence: $1, 3, 5, 7$
   - Formula: $2i + 1$
- **Mental Model:** Trailing spaces are omitted since the newline terminates the line immediately after the last star.

---

## Pattern 8: Inverted Star Pyramid

### Visual ($N = 4$)
```text
*******
 *****
  ***
   *
```

### Logic & Derivation
1. **Leading Spaces:**
   - Increases row by row: $0, 1, 2, 3$
   - Formula: $i$ spaces.
2. **Stars:**
   - Decreasing odd sequence: $7, 5, 3, 1$
   - Formula: $2(N - i) - 1$ (starts at $2N - 1$, decreases by $2$ each row).

---

## Pattern 9: Solid Diamond

### Visual ($N = 4$)
```text
   *
  ***
 *****
*******
*******
 *****
  ***
   *
```

### Logic & Derivation
- **Total Rows:** $2N$.
- **Mental Model (Composite Shape):** Split vertically into two independent halves:
  - Top half: Upright Pyramid (Pattern 7) for $N$ rows.
  - Bottom half: Inverted Pyramid (Pattern 8) for $N$ rows.

---

## Pattern 10: Half Diamond / Star Peak

### Visual ($N = 4$)
```text
*
* *
* * *
* * * *
* * *
* *
*
```

### Logic & Derivation
- **Total Rows:** $2N - 1$.
- **Inflection Point / Breakpoint:**
  - Before midpoint ($i < N$): stars increase $\rightarrow i + 1$.
  - After midpoint ($i \ge N$): stars decrease $\rightarrow (2N - 1) - i$.
- **Mental Model:** A single loop running $2N - 1$ times using a piecewise conditional for row length.

---

## Pattern 11: Binary Alternating Triangle

### Visual ($N = 4$)
```text
1
0 1
1 0 1
0 1 0 1
```

### Logic & Derivation
- **Total Rows:** $N$.
- **Row Length:** $i + 1$.
- **Value Logic (Parity / Checkerboard):**
  - Even row sum $(i + j \text{ is even}) \rightarrow 1$.
  - Odd row sum $(i + j \text{ is odd}) \rightarrow 0$.
- **Alternative State Model:**
  - If row $i$ is even, starting element is $1$.
  - If row $i$ is odd, starting element is $0$.
  - Alternate the state ($1 \leftrightarrow 0$) at each column step.

---

## Pattern 12: Number Valley / Crown

### Visual ($N = 4$)
```text
1      1
12    21
123  321
12344321
```

### Logic & Derivation
Total row width is fixed at $2N$ columns. Each row is composed of **3 parts**:
1. **Left Numbers:** Increasing from $1$ up to $i + 1$.
2. **Middle Spaces:** Total columns minus elements taken by wings:
   $$\text{Spaces} = 2N - 2(i + 1) = 2(N - i - 1)$$
   Decreases by $2$ per line ($6 \rightarrow 4 \rightarrow 2 \rightarrow 0$).
3. **Right Numbers:** Decreasing from $i + 1$ down to $1$.

---

## Pattern 13: Floyd’s Triangle (Continuous Numbering)

### Visual ($N = 4$)
```text
1
2 3
4 5 6
7 8 9 10
```

### Logic & Derivation
- **Shape:** Right-angled triangle of $i + 1$ elements per row.
- **Value Logic:** The counter **never resets**. It lives outside all loops and increments continuously after every printed number.
- **Total numbers printed:** $\frac{N(N + 1)}{2}$.

---

## Pattern 14: Alphabet Column Triangle

### Visual ($N = 4$)
```text
A
A B
A B C
A B C D
```

### Logic & Derivation
- **Shape:** Right-angled triangle ($i + 1$ elements).
- **Value Logic:** Value is determined by column index $j$.
- **Formula:** Character $= \text{'A'} + j$. Resets to `'A'` at the beginning of each row.

---

## Pattern 15: Inverted Alphabet Triangle

### Visual ($N = 4$)
```text
A B C D
A B C
A B
A
```

### Logic & Derivation
- **Shape:** Inverted right-angled triangle ($N - i$ elements).
- **Value Logic:** Resets to `'A'` every row, advances by column index $j$: Character $= \text{'A'} + j$.

---

## Pattern 16: Alphabet Row Triangle

### Visual ($N = 4$)
```text
A
B B
C C C
D D D D
```

### Logic & Derivation
- **Shape:** Right-angled triangle ($i + 1$ elements).
- **Value Logic:** Entire row has the identical character.
- **Formula:** Character $= \text{'A'} + i$. Depends solely on the row index.

---

## Pattern 17: Alphabet Palindrome Pyramid

### Visual ($N = 4$)
```text
   A
  ABA
 ABCBA
ABCDCBA
```

### Logic & Derivation
Each row consists of:
1. **Leading Spaces:** $N - 1 - i$.
2. **Characters:** Total of $2i + 1$ characters.
3. **Peak & Direction Switch:**
   - The midpoint column is at index $i$.
   - For column indices $j \le i$: characters ascend (`A -> B -> C...`).
   - For column indices $j > i$: characters descend (`...C -> B -> A`).

---

## Pattern 18: Inverted Alphabet Starting Shift

### Visual ($N = 5$)
```text
E
D E
C D E
B C D E
A B C D E
```

### Logic & Derivation
- **Total Rows:** $N$.
- **Row Length:** $i + 1$ elements.
- **Starting Character Formula:**
  - Row $0$ starts at `'E'` ($\text{'A'} + N - 1 - 0$).
  - Row $1$ starts at `'D'` ($\text{'A'} + N - 1 - 1$).
  - Row $i$ starts at: $\text{'A'} + (N - 1 - i)$.
- **Traversal:** From that row's starting character, step upward sequentially until reaching the terminating character ($\text{'A'} + N - 1$).

---

## Pattern 19: Symmetric Butterfly Cut-Out / Hollow Diamond

### Visual ($N = 4$)
```text
********
***  ***
**    **
*      *
*      *
**    **
***  ***
********
```

### Logic & Derivation
Two symmetrical blocks:
1. **Top Half ($N$ rows, $i = 0$ to $N - 1$):**
   - Left Stars: $N - i$
   - Middle Spaces: $2i$ (starts at $0$, increases by $2$)
   - Right Stars: $N - i$
2. **Bottom Half ($N$ rows, $i = 0$ to $N - 1$):**
   - Left Stars: $i + 1$
   - Middle Spaces: $2(N - 1 - i)$ (decreases by $2$, ends at $0$)
   - Right Stars: $i + 1$

---

## Pattern 20: Butterfly Wings

### Visual ($N = 4$)
```text
*      *
**    **
***  ***
********
***  ***
**    **
*      *
```

### Logic & Derivation
- **Total Rows:** $2N - 1$.
- **Components:** `[Left Stars] + [Middle Spaces] + [Right Stars]`
- **Star Count:**
  - If $i < N$: $\text{stars} = i + 1$.
  - If $i \ge N$: $\text{stars} = (2N - 1) - i$.
- **Space Count:**
  - Starts at $2N - 2$.
  - Decreases by $2$ per row until midpoint, then increases by $2$ per row.

---

## Pattern 21: Hollow Square Border

### Visual ($N = 4$)
```text
****
*  *
*  *
****
```

### Logic & Derivation
- **Grid Size:** $N \times N$.
- **Boundary Condition:** Print a star only if the cell lies on an outer edge:
  - First row: $i = 0$
  - Last row: $i = N - 1$
  - First column: $j = 0$
  - Last column: $j = N - 1$
- If none of these conditions are met, print an empty space.

---

## Pattern 22: Concentric Square Number Rings (Min-Distance Matrix)

### Visual ($N = 4$)
```text
4 4 4 4 4 4 4
4 3 3 3 3 3 4
4 3 2 2 2 3 4
4 3 2 1 2 3 4
4 3 2 2 2 3 4
4 3 3 3 3 3 4
4 4 4 4 4 4 4
```

### Logic & Derivation
- **Grid Size:** $(2N - 1) \times (2N - 1)$.
- **Concentric Layer Concept:**
  - The matrix is made of nested rings (layers) numbered from $0$ (outer boundary) to $N - 1$ (center).
- **Distance to Boundaries:** For any cell at coordinate $(i, j)$:
  - Distance to Top edge: $d_{\text{top}} = i$
  - Distance to Left edge: $d_{\text{left}} = j$
  - Distance to Bottom edge: $d_{\text{bottom}} = (\text{Size} - 1) - i$
  - Distance to Right edge: $d_{\text{right}} = (\text{Size} - 1) - j$
- **Ring Determination:**
  $$\text{Layer} = \min(d_{\text{top}}, d_{\text{bottom}}, d_{\text{left}}, d_{\text{right}})$$
- **Value Formula:**
  $$\text{Value} = N - \text{Layer}$$
  - Cells closest to any outer edge have distance $0 \rightarrow N - 0 = N$.
  - The center cell has maximum distance $N - 1 \rightarrow N - (N - 1) = 1$.
