const expect = require('chai').expect
const platzom = require('..').default;

describe('#platzom', function () {
	it('Si la palabra termina con "ar", se le quitan esas dos letras', function () {
		const translation = platzom('Programar')
		expect(translation).to.equal('Program')
	})

	it('Si la palabra inicia con Z, se le añade "pe" al final', function () {
		const translation = platzom('Zorro')
		const translation2 = platzom('Zarpar')
		expect(translation).to.equal('Zorrope')
		expect(translation2).to.equal('Zarppe')
	})

	it('Si la palabra traducida tiene mas de 10 letras, se debe partir en dos por la mitad y unir con guion medio', function () {
		const translation = platzom('abecedario')
		expect(translation).to.equal('abece-dario')
	})

	it('Si la palabra original es palindromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercambiando las letras mayusculas y minusculas', function () {
		const translation = platzom('sometemos')
		expect(translation).to.equal('SoMeTeMoS')
	})

})