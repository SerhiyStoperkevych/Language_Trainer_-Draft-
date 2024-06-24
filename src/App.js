import React, { useState } from 'react';
import Flash from './components/Flash';
import Main from './components/MainList';

const App = () => {
    const [currentComponent, setCurrentComponent] = useState(null);
    const [secondComponent, setSecondComponent] = useState(null);


    const handleFlash = () => {
        setCurrentComponent(<Flash />);
  
    };

    return (
        <div>
            <h1>What language game would you like to take?</h1>
            <button onClick={handleFlash}>Flashcards</button>
            <button>Quiz</button>
            {currentComponent}
        </div>
    );
};

export default App;
