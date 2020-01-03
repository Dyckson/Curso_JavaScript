Curso JavaScript

https://skylab.rocketseat.com.br/node/curso-java-script

1� exerc�cio

Crie uma fun��o que dado o objeto a seguir:

var endereco = {
 rua: "Rua dos pinheiros",
 numero: 1293,
 bairro: "Centro",
 cidade: "S�o Paulo",
 uf: "SP"
};
Retorne o seguinte conte�do:

O usu�rio mora em S�o Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com n� 1293.


2� exerc�cio

Crie uma fun��o que dado um intervalo (entre x e y) exiba todos n�mero pares:

function pares(x, y) {
 // c�digo aqui
}
pares(32, 321);


3� exerc�cio

Escreva uma fun��o que verifique se o vetor de habilidades passado possui a habilidade "Javascript" e retorna um booleano true/false caso exista ou n�o.

function temHabilidade(skills) {
 // c�digo aqui
}
var skills = ["Javascript", "ReactJS", "React Native"];
temHabilidade(skills); // true ou false
Dica: para verificar se um vetor cont�m um valor, utilize o m�todo indexOf.


4� exerc�cio

Escreva uma fun��o que dado um total de anos de estudo retorna o qu�o experiente o usu�rio �:

function experiencia(anos) {
 // c�digo aqui
}
var anosEstudo = 7;
experiencia(anosEstudo);
// De 0-1 ano: Iniciante
// De 1-3 anos: Intermedi�rio
// De 3-6 anos: Avan�ado
// De 7 acima: Jedi Master


5� exerc�cio

Dado o seguinte vetor de objetos:

var usuarios = [
 {
 nome: "Diego",
 habilidades: ["Javascript", "ReactJS", "Redux"]
 },
 {
 nome: "Gabriel",
 habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
 }
];
Escreva uma fun��o que produza o seguinte resultado:

O Diego possui as habilidades: Javascript, ReactJS, Redux
O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir
Dica: Para percorrer um vetor voc� deve utilizar a sintaxe for...of e para unir valores de um array com um separador utilize o join.