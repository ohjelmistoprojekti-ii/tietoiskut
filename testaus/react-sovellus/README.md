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

Tee yksikkötestitiedostot `tests`-kansioon siten, että jokaiselle testattavalle tiedostolle (`LocalStorageViewer.js`, `LocalStorageViewerPage.js`) luodaan oma testitiedosto, jonka nimi vastaa testattavaa tiedostoa, mutta pääte on `.test.js`. Esimerkiksi:

- `src/LocalStorageViewer.js` → `tests/LocalStorageViewer.test.js`
- `src/LocalStorageViewerPage.js` → `tests/LocalStorageViewerPage.test.js`

Testitiedostossa tuodaan testattava komponentti ja tarvittaessa React Routerin `MemoryRouter`-komponentti, jos komponentti käyttää reititystä. Testit kirjoitetaan [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) -kirjastolla.

Testitapaukset ovat:

1. **TC-001: LocalStorageViewer-komponentin otsikon renderöityminen**  
   Testaa, että LocalStorageViewer-komponentin otsikko "Local Storage Content" näkyy näkymässä.

2. **TC-002: LocalStorageViewer näyttää localStorageen tallennetut tiedot**  
   Testaa, että localStorageen tallennetut avain-arvoparit näkyvät LocalStorageViewer-komponentissa.

3. **TC-003: LocalStorageViewerPage-komponentin otsikon renderöityminen**  
   Testaa, että LocalStorageViewerPage-komponentin otsikko "Local Storage Viewer" näkyy näkymässä.

## Esimerkkirakenne

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

# Tehtävä 2: Integraatiotestien tekeminen

Tee integraatiotestitiedosto `tests/integration.test.js`, jossa testataan sovelluksen komponenttien yhteistoimintaa ja käyttäjän toimintojen vaikutuksia sovelluksen tilaan ja näkymään.

Testitapaukset ovat:

1. **TC-004: Integraatiotesti reititykselle napin painalluksella**  
   Testaa, että kun käyttäjä painaa "Back to Front Page" -painiketta LocalStorageViewerPage-näkymässä, sovellus siirtyy takaisin etusivulle ja lomake tulee näkyviin.

2. **TC-005: Integraatiotesti kirjautumislomakkeelle ja localStoragelle**  
   Testaa, että kun käyttäjä täyttää lomakkeen ja painaa "Login", tiedot tallentuvat localStorageen ja näkymä vaihtuu LocalStorageViewerPageen.

3. **TC-006: Integraatiotesti LocalStorageViewerPage-näkymälle**  
   Testaa, että LocalStorageViewerPage näyttää localStorageen tallennetut tiedot oikein.

## Esimerkkirakenne

```javascript
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import AppWrapper from '../src/App';
import LocalStorageViewerPage from '../src/LocalStorageViewerPage';

beforeEach(() => {
  localStorage.clear();
});

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

test('TC-004: Route changes to front page on Back to Front Page button click', () => {
  const mockNavigate = jest.fn();
  useNavigate.mockReturnValue(mockNavigate);
  render(
    <AppWrapper />
  );
  fireEvent.click(screen.getByText(/Login/i));
  // Tarkista, että navigate-funktiota kutsuttiin 
  expect(useNavigate).toHaveBeenCalledWith();
});

test('TC-005: Login form saves data to localStorage and navigates to LocalStorageViewerPage', () => {
  // Asetetaan localStorageen tiedot ja mennään suoraan LocalStorageViewerPageen
  render(
    <AppWrapper />
  );
  fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'John Doe' } });
  fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'john.doe@example.com' } });
  fireEvent.click(screen.getByText(/login/i));
  expect(localStorage.getItem('name')).toBe('John Doe');
  expect(localStorage.getItem('email')).toBe('john.doe@example.com');
  expect(screen.getByText(/Local Storage Viewer/i)).toBeInTheDocument();
});

test('TC-006: LocalStorageViewerPage displays localStorage data', () => {
  localStorage.setItem('name', 'Test User');
  localStorage.setItem('email', 'test@example.com');
  render(
    <Router>
      <LocalStorageViewerPage />
    </Router>
  );
  expect(screen.getByText(/Local Storage Viewer/i)).toBeInTheDocument();
  expect(screen.getByText(/Test User/i)).toBeInTheDocument();
  expect(screen.getByText(/test@example.com/i)).toBeInTheDocument();
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
