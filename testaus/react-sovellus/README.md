# Alkuun pääseminen Create React App -sovelluksessa

Tämä projekti on luotu [Create React App](https://github.com/facebook/create-react-app) -työkalulla.

## Käytettävissä olevat komennot

Projektihakemistossa voit suorittaa seuraavat komennot:

### `npm start`

Käynnistää sovelluksen kehitystilassa.\
Avaa [http://localhost:3000](http://localhost:3000) nähdäksesi sovelluksen selaimessa.

Sivu päivittyy automaattisesti, kun teet muutoksia.\
Voit myös nähdä mahdolliset lint-virheet konsolissa.

### `npm test`

Käynnistää testrunnerin interaktiivisessa katselutilassa.\
Lisätietoja testien suorittamisesta löydät [täältä](https://facebook.github.io/create-react-app/docs/running-tests).

### `npm run build`

Kokoaa sovelluksen tuotantokäyttöä varten `build`-kansioon.\
Se niputtaa Reactin tuotantotilaan ja optimoi rakennuksen parhaan suorituskyvyn saavuttamiseksi.

Rakennus on minifioitu ja tiedostonimet sisältävät hashit.\
Sovelluksesi on valmis käyttöönotettavaksi!

Lisätietoja käyttöönotosta löydät [täältä](https://facebook.github.io/create-react-app/docs/deployment).

---

# Tehtävä 1: Yksikkötestien tekeminen

Tee kolme yksikkötestiä `tests`-kansioon siten, että jokaiselle testattavalle tiedostolle (`LocalStorageViewer.js`, `LocalStorageViewerPage.js`) luodaan oma testitiedosto, jonka nimi vastaa testattavaa tiedostoa, mutta pääte on `.test.js`. Esimerkiksi:

- `src/LocalStorageViewer.js` → `tests/LocalStorageViewer.test.js`
- `src/LocalStorageViewerPage.js` → `tests/LocalStorageViewerPage.test.js`

Testitiedostossa tuodaan testattava komponentti ja tarvittaessa React Routerin `MemoryRouter`-komponentti, jos komponentti käyttää reititystä. Testit kirjoitetaan [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) -kirjastolla.

Testitapaukset ovat:
1. `TC-001: renders LocalStorageViewer text`
2. `TC-002: displays LocalStorage items`
3. `TC-003: renders LocalStorageViewerPage text`

### Esimerkki testitiedoston rakenteesta

```javascript
import React from 'react';
import { render, screen } from '@testing-library/react';
import LocalStorageViewer from '../src/LocalStorageViewer';

test('TC-001: renders LocalStorageViewer text', () => {
  render(<LocalStorageViewer />);
  expect(screen.getByText(/Local Storage Content/i)).toBeInTheDocument();
});
```




---

### `npm run eject`

**Huom: tätä toimintoa ei voi peruuttaa. Kun suoritat `eject`, et voi palata takaisin!**

Jos et ole tyytyväinen rakennustyökalun ja konfiguraation valintoihin, voit suorittaa `eject`-komennon milloin tahansa. Tämä komento kopioi kaikki konfiguraatiotiedostot ja riippuvuudet (webpack, Babel, ESLint, jne.) suoraan projektiisi, jolloin sinulla on täysi hallinta niihin. Kaikki muut komennot paitsi `eject` toimivat edelleen, mutta ne osoittavat nyt kopioituihin skripteihin, joten voit muokata niitä vapaasti. Tässä vaiheessa olet omillasi.

Sinun ei tarvitse koskaan käyttää `eject`-komentoa. Valmiiksi määritetty ominaisuusjoukko sopii pieniin ja keskisuuriin käyttöönottoihin, eikä sinun tarvitse tuntea velvollisuutta käyttää tätä ominaisuutta. Ymmärrämme kuitenkin, että tämä työkalu ei olisi hyödyllinen, ellet voisi mukauttaa sitä tarpeen mukaan.

## Lisätietoja

Lisätietoja löydät [Create React App -dokumentaatiosta](https://facebook.github.io/create-react-app/docs/getting-started).

Reactista voit lukea lisää [Reactin dokumentaatiosta](https://reactjs.org/).

### Koodin pilkkominen

Tämä osio on siirretty tänne: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Paketin koon analysointi

Tämä osio on siirretty tänne: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Progressiivisen web-sovelluksen tekeminen

Tämä osio on siirretty tänne: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Edistynyt konfigurointi

Tämä osio on siirretty tänne: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Käyttöönotto

Tämä osio on siirretty tänne: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` epäonnistuu minifioinnissa

Tämä osio on siirretty tänne: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
