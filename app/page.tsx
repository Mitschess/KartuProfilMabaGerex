import BorderGlow from './components/BorderGlow';
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-wrap items-center justify-center min-h-screen gap-10 p-10">

      <BorderGlow
        edgeSensitivity={30}
        glowColor="40 80 80"
        backgroundColor="rgba(233, 188, 11, 0.8)"
        borderRadius={20}
        glowRadius={100}
        glowIntensity={10}
        coneSpread={100}
        animated={true}
        colors={['#c084fc', '#f472b6', '#38bdf8']}
      >
        <div style={{ padding: '0.2em' }}>
          <div className="card">
            <div className="card-inner">
              <div className="front">
                <h2>Hilmi Taqiyuddin</h2>
                <p>5053251012 - Teknik Informatika</p>
                <h2 className="gugus">Gugus Stargazer</h2>
              </div>
            </div>
          </div>
        </div>
      </BorderGlow>

      <BorderGlow
        edgeSensitivity={30}
        glowColor="40 80 80"
        backgroundColor="rgba(233, 188, 11, 0.8)"
        borderRadius={20}
        glowRadius={100}
        glowIntensity={10}
        coneSpread={100}
        animated={true}
        colors={['#c084fc', '#f472b6', '#38bdf8']}
      >
        <div style={{ padding: '0.2em' }}>
          <div className="card">
            <div className="card-inner">
              <div className="front">
                <h2>Hilmi Taqiyuddin</h2>
                <p>5053251012 - Teknik Informatika</p>
                <h2 className="gugus">Gugus Stargazer</h2>
              </div>
            </div>
          </div>
        </div>
      </BorderGlow>

    </div >
  );
}
