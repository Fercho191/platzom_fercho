# Platzom-Fercho

Platzom es un idioma inventado desde el [Curso de fundamentos de javascript](https://platzi.com/js) de [Platzi](https://platzi.com)

## Descripcion del Idioma
- Si la palabra termina con "ar", se le quitan esas dos letras 
- Si la palabra inicia con Z, se le añade "pe" al final
- Si la palabra traducida tiene mas de 10 letras, se debe partir en dos por la mitad y unir con guion medio
- Si la palabra original es palindromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercambiando las letras mayusculas y minusculas

## Instalacion
```
npm install @fercho191/platzom
```

## Uso
```javascript
import platzomFercho from '@fercho191/platzom'

platzomFercho("Programar") //Program
platzomFercho("Zorro") //Zorrope
platzomFercho("Zarpar") //Zarppe
platzomFercho("abecedario") //abece-dario
platzomFercho("sometemos") //SoMeTeMoS
```

## Creditos
- [Fernando Espinoza](https://twitter.com/Fercho1818)

## Licencia
[MIT](https://opensource.org/licenses/MIT)