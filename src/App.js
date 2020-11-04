import * as React from 'react';
import './App.css';
import { Step2 } from './examples/thinkInReact/step2';
import { Step4 } from './examples/thinkInReact/step4';
import { Step5 } from './examples/thinkInReact/step5';
import { UseState } from './examples/hooks/useState';
import { UseEffect } from './examples/hooks/useEffect';

function App() {
    return (
        <div className="App">
            {Step2}
            {/*{Step4}*/}
            {/*{Step5}*/}
            {/*<UseState />*/}
            {/*<UseEffect />*/}
        </div>
    );
}

export default App;
