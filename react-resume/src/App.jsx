// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header'
import Home from './Pages/Home'; // Create a Home component for your landing page
import About from './Pages/About'; // Create an About component
import Contact from './Pages/Contact'; // Create a Contact component
import Skills from './Pages/Skills'; // Create a Skills component
import './App.scss'

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about">
            <About
              header="Välkommen"
              img="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg"
              paragraph="Vid 32 års ålder har jag redan genomgått en spännande resa med olika erfarenheter och upplevelser. Jag är en passionerad individ som alltid strävar efter att växa och utvecklas både personligen och professionellt. På den personliga sidan av mitt liv är jag en stolt make och far till en underbar dotter. Att ha en kärleksfull familj som stöder mig är det som ger mig styrka och motivation varje dag. Jag värdesätter verkligen de små ögonblicken vi delar tillsammans och strävar alltid efter att vara närvarande och stödjande för mina nära och kära. På den professionella sidan har jag en bakgrund inom svetsning, där jag har fått möjligheten att arbeta med händerna och skapa med precision. Men min passion för teknik och innovation har lett mig till att utforska nya horisonter, och just nu studerar jag till webbutvecklare. Att kunna skapa och utforma digitala lösningar som kan berika människors liv är något jag brinner för, och jag är övertygad om att mina erfarenheter och mina färdigheter kommer att göra mig till en framgångsrik webbutvecklare. Med en stark önskan att lära mig och en vilja att utmana mig själv ser jag fram emot de kommande stegen i min karriärresa. Jag är redo att möta nya utmaningar, bygga meningsfulla relationer och bidra till den digitala världen på ett positivt sätt."
            />
          </Route>
          <Route path="/skills" component={Skills} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;


// // App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import About from './Pages/About';
// import Header from './components/Header';
// import Contact from './Pages/Contact';
// import FetchData from './components/FetchData'; // Correct import path

// const App = () => {
//   return (
//     <Router>
//       <div> 
//         <Header /> 
//         <Switch>
        
//           <Route path="/about" component={About} />
//           <Route path="/contact" component={Contact} />

//         </Switch>
//         <FetchData />
//       </div>
//     </Router>
//   );
// };

// export default App;
