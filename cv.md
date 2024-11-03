# VITALI KOZHAR

## Junior Front-End Developer (Relocation Possible)

### Contact Information

- **Email**: [vox@mail.com](mailto:vox@mail.com)
- **Discord**: ettti28 (@vitalikozhar)
- **Telegram**: @ViT4L1
- **Tel**: +971561233098

---

### Skills

- **Software Development**
- Knowledge of **JavaScript**, **CSS**, **HTML**

### Education

- **Belarusian Radio Engineering Institute of Informatics and Radio Electronics**
- Completed **JavaScript / Front-end: Stage 0** course at **The Rolling Scopes**

### Work Experience

- **Radio Engineer** in Military Technology Development (20+ years)
  - Specialized in tracking and fire control systems for military equipment

### Additional Information

- Residing in **Dubai, UAE** for over 15 years
- **Languages**: Belarusian, Russian, English

### Code Example

```javascript
function pigIt(str) {
    let string = str.split(' ');
    let newstring = '';
    let newsword;
    for (let i = 0; i < string.length; i += 1) {
        if (/^[a-z]+$/i.test(string[i])) {
            newsword = string[i].slice(1) + string[i][0] + 'ay';
            newstring += newsword;
        } else {
            newstring += string[i];
        }
        if (i !== string.length - 1) {
            newstring += ' ';
        }
    }
    return newstring;
}
