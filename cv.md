<!-- @format -->

# Kristina Buben

## My Contact Info

- **Phone:** +375 44 546-02-43
- **E-mail:** krisbubenka@icloud.com
- **GitHub:** [Kristina0606](https://github.com/Kristina0606)
- **Codewars:** https://www.codewars.com/users/rsschool_13234b300df92067

---

## About Me

I am 20 years old, I am studying to be a frontend developer. I really need an activity where I can develop throughout my life. That’s why I’m here. My goal is to learn about development on the front lines.

### My strengths:

- Quick learner
- Full immersion in the essence of the problems
- Diligence
- Team playing
- Keep learning…

---

## Skills

- HTML
- CSS (Bootstrap, SASS/SCSS, BEM)
- JavaScript (Fundamentals, ES6+, DOM, JSON, Asynchronous JavaScript)
- Git/GitHub

---

## Education

- Belarusian National Technical University
  - Specialty: Information technology software
- IT-Academy
  HTML/CSS
  JavaScript
- RS pre-school(JS)

## Languages

- Russian - native speaker.
- English - A2 (B1 in process…)

---

## Code Examples

function findAllOccurrences(arr, item) {
let count = 0;
const recFunc = (i) => {
if (i === arr.length) {
return count;
}
if (arr[i] === item) {
count += 1;
recFunc(i + 1);
} else {
return recFunc(i + 1);
}
return count;
};
recFunc(0);
return count;
}
