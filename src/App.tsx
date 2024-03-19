import Achievements from "./components/Achievements/Achievements.tsx";
import Aside from "./components/Aside/Aside.tsx";
import Certificates from "./components/Certificates/Certificates.tsx";
import Education from "./components/Education/Education.tsx";
import Projects from "./components/Projects/Projects.tsx";
import Tools from "./components/Tools/Tools.tsx";
import './App.scss';

function App() {
    return (
        <>
            <Aside/>
            <section className="p-main">
                <Education/>
                <Achievements/>
                <Tools/>
                <Projects/>
                <Certificates/>
            </section>
        </>
    )
}

export default App;
