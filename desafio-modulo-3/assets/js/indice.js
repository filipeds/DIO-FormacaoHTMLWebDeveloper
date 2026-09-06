/*
 * Destaca no indice a secao visivel no momento.
 *
 * A pagina funciona sem este script: os links do indice sao ancoras HTML
 * comuns. Aqui so acrescentamos o realce da secao atual.
 */
(function () {
    'use strict';

    var links = document.querySelectorAll('.indice a[href^="#"]');
    if (!links.length || !('IntersectionObserver' in window)) {
        return;
    }

    var porId = {};
    var secoes = [];

    links.forEach(function (link) {
        var secao = document.getElementById(link.getAttribute('href').slice(1));
        if (secao) {
            porId[secao.id] = link;
            secoes.push(secao);
        }
    });

    var visiveis = new Set();

    function realcar() {
        var atual = secoes.filter(function (s) { return visiveis.has(s.id); })[0];
        links.forEach(function (link) { link.removeAttribute('aria-current'); });
        if (atual) {
            porId[atual.id].setAttribute('aria-current', 'location');
        }
    }

    var observador = new IntersectionObserver(function (entradas) {
        entradas.forEach(function (entrada) {
            if (entrada.isIntersecting) {
                visiveis.add(entrada.target.id);
            } else {
                visiveis.delete(entrada.target.id);
            }
        });
        realcar();
    }, { rootMargin: '-80px 0px -70% 0px' });

    secoes.forEach(function (secao) { observador.observe(secao); });
}());
