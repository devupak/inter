
const taskList = [
    {
        question: `1.) Milyen típusú a következő teszt?`,
        code: `
<pre>
// https://docs.cypress.io/api/introduction/api.html
describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.contains('h1', 'Welcome to Vuetify');
  });
});
</pre>                
        `,
        answers: [
            'manuális teszt',
            'egységteszt',
            'integrációs teszt',
            'felhasználói felület teszt'
        ]        
    },
    {
        question: `2.) Melyik JavaCript függvényhívás tér 
        vissza igaz értékkel a felsoroltak közzül?`,
        code: `
<pre>
function foo3(str1, str2) {
  return str1.length == str2.length && 
  (str1 + str1).indexof(str2) != -1
}
</pre>
        `,
        answers: [
            "foo3('BMI', 'IBM')",
            "foo3('ABC', 'CBA')",
            "foo3('RSB', 'SBS')",
            "foo3('ABC','DBA')"
        ]
    },
    {
        question: `3.) Melyik objektum azonosító 
        (konstruktor) hiányzik a kérdőjelek 
        helyén az AJAX technológiát használó`,
        code: `
<pre>
var xhr = new ??? ();
...
xhr.open("POST", "feldolgoz.php", true);
</pre>
JavaScript kódrészletben?
        `,
        answers: [
            'XMLHttpsResponse',
            'XMLHttpsRequest',
            'XMLHttpResponse',
            'XMLHttpRequest'
        ]
    },
    {
        question: `4.) Meliky JavaScript teszt-keretrendszer
        a felsoroltak közül?`,
        code: ``,
        answers: [
            'ESLint',
            'Node.js',
            'Jest',
            'Axios'
        ]
    },
    {
        question: `5.) Mit kell írni a kérdőjelek (???) helyére
        a JavaScript függvényben, hogy az arab számot római
        számra váltó függvény helyesen működjön?
        `,
        code: `
<pre>
function arabToRoman(number)
{
  let dec = [1,4,5,9,10,40,50,90,100,400,500,900,1000]
  let rom = ['I','IV','V','IX','X','XL','L','XC','C','CD','D','CM','M']
  let i = rom.length - 1
  let roman = ''
  while(number > 0) {
    let x = Math.floor(number / dec[i])
    number = number % dec[i]
    while(   ???   ) roman = roman +  rom[i]
    i--
  }
  return roman
}
</pre>
        `,
        answers: [
            'x++',
            'x--',
            'i<=0',
            'i>0'
        ]
    }
]

export {taskList};