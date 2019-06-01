# Demo Course

## Code Editor

> sectionId: section-1
> id: code-step
> goals: type-mathigon

Here is a code editor. Type “I love Mathigon” anywhere in the text box to
proceed:

    x-code-editor(mode="javascript"): textarea.
      function isPrime(n) {
        if (n % 1 !== 0 || n < 2) return false;
        if (n % 2 === 0) return (n === 2);
        if (n % 3 === 0) return (n === 3);

        let m = Math.sqrt(n);
        for (let i = 5; i <= m; i += 6) {
          if (n % i === 0 || n % (i + 2) === 0) return false;
        }
        return true;
      }

---
> id: step-1

Here is a self-checking code editor.

    x-code-checker(mode="javascript" theme="midnight")
      textarea.
        function gcd(a, b) {
          // Find Greatest Common Divisor
        }
      textarea.
        // Solution:
        function gcd(a, b) {
          while (b) [a, b] = [b, a % b];
          return a;
        }

---
> id: step-2

Here is a read-only editor with a different theme and height. The height is
measured in number of lines:

    x-code-editor(mode="python" theme="dracula" readonly height=5): textarea.
      def isPrime(n):
        for i in range(2,num):
          if (num % i) == 0:
            return true
        return false

---

## Section 2

> sectionId: section-2
> id: step-3

Section 2
