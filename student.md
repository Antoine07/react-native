# Groupe 1

- Ibrahmin 
- Sofia
- Phedy

# Groupe 2

- Mohamed
- Youssef
- Adbelmajid
- Amor

# Groupe 3 -0.5

- Damien
- David
- Ahmed
- Amiel
- Edwin
- Mouthar

# Groupe 4

- Thiléli
- Tarine
- Dalila

# Groupe 5

- Manuel
- Eric

# Groupe 6

- Mauricel

# Groupe 7

- Stefan


```js

const choice = () => {
    const rand = Math.random();
    return [
        rand < 1/7, 
        1/7 < rand < 2/7,
        2/7 < rand < 3/7,
        3/7 < rand < 4/7,
        4/7 < rand < 5/7,
        5/7 < rand < 6/7,
        6/7 < rand
    ].indexOf(true) + 1 ;
}

```