import logo from './logo.svg';
import Game from "./components/Game";
import './App.css';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function App() {

  const handleModal = (e) => {
    const MySwal = withReactContent(Swal)

    MySwal.fire({
      title: <strong>Game Info</strong>,
      html: <p>Uygulama, (Pokegame) listeden 8 pokemon kartı alır ve onları rastgele her biri 4 karttan oluşan iki ele atama yapar.
        Daha sonra her yeni başlangıçta iki Pokedex grubu oluşturur. Bu uygulama çalıştırdıktan sonra kartlar ekrana yansır.
        Ardından, Pokegame kartların güç değerleri hesaplanır ve en güçlü toplama sahip grup kartı olan el oyunu kazanır.
        Burada kazanan el daha yüksek toplam deneyime sahip eldir.
        Pokegame kazanan el grubunda , "Winning Player!" kaybeden el grubunda "Losing Player" mesajı gösterilir.
        Şimdi oyunu başlatın veya sayfayı her yenilediğinizde rastgele değişen 4 karttan oluşan iki farklı el görmelisiniz.
        Bakalım hangi el şanslı!...
        Oyun başlatamadan tarafını seçmeyi unutma. Bol şans...
      </p>,
      //icon: 'success'
    })
  }


  return (
    <div className="App  container">
      <header className="App-header rounded-3 position-sticky top-0">
        <a href="/" className="logo-link">
          <img src={logo} className="App-logo" alt="logo" />
        </a>
        <h1>Pokemon Go Card Game <a href="/"><i class="bi bi-joystick"></i></a></h1>
        <div className='d-flex flex-column'>
          <p className='me-4 my-1'>React Game Project</p>
          <button className='btn btn-link my-1' onClick={handleModal}>Game İnfo</button>
        </div>

      </header>
      <Game />
    </div>
  );
}

export default App;
