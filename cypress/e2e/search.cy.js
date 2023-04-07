// <reference types="cypress" />
import { HomePage } from "../support/pages/homePage";

describe('This is your test project title', () => {
    const homePage = new HomePage();
    let dataSearch;

    before(() => {
        cy.fixture('searchData').then(dat => {
            dataSearch = dat;
        })
    })
    beforeEach(() => {
        cy.visit('/');
    })

    /// casos resueltos con forEach

    /*it('validar busqueda de producto con valores validos y resultados', () => {
        dataSearch.forEach(data => {
            if (data.positive === true) {
                homePage.searchProduct(data.search);
                homePage.returnResultSearch(true).should('have.length', data.result);
            }
            cy.visit('/');
        })
    });

    it('validar busqueda de producto con valores validos sin resultados', () => {
        dataSearch.forEach(data => {
            if (data.positive === false) {
                homePage.searchProduct(data.search);
                homePage.returnResultSearch(false).invoke('text').then(res => {
                    expect(res).is.eql(data.result);
                });
            }
            cy.visit('/');
        })
    });*/

    it('validar busqueda de producto con longitud de texto 1 valido', () => {
        homePage.searchProduct(dataSearch[2].search);
        homePage.returnResultSearch(dataSearch[2].positive).should('have.length', dataSearch[2].result);
    });

    it('validar busqueda de producto con longitud de texto 2 valido', () => {
        homePage.searchProduct(dataSearch[0].search);
        homePage.returnResultSearch(dataSearch[0].positive).should('have.length', dataSearch[0].result);
    });

    it('validar busqueda de producto con longitud de texto 3 valido', () => {
        homePage.searchProduct(dataSearch[1].search);
        homePage.returnResultSearch(dataSearch[1].positive).should('have.length', dataSearch[1].result);
    });

    it('validar busqueda de producto con longitud de texto 5 valido', () => {
        homePage.searchProduct(dataSearch[3].search);
        homePage.returnResultSearch(dataSearch[3].positive).should('have.length', dataSearch[3].result);
    });

    it('intentar busqueda de producto con valor sin resultado 999', () => {
        homePage.searchProduct(dataSearch[5].search);
        homePage.returnResultSearch(dataSearch[5].positive).invoke('text').then(res => {
            expect(res).is.eql(dataSearch[5].result);
        });
    });

    it('intentar busqueda de producto con valor sin resultado /', () => {
        homePage.searchProduct(dataSearch[6].search);
        homePage.returnResultSearch(dataSearch[6].positive).invoke('text').then(res => {
            expect(res).is.eql(dataSearch[6].result);
        });
    });
})