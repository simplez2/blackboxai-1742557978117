import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StudyPlan from './components/StudyPlan';
import StudyLog from './components/StudyLog';
import TomatoTimer from './components/TomatoTimer';
import AISummary from './components/AISummary';
import AdminDashboard from './components/AdminDashboard';
import Settings from './components/Settings';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={StudyPlan} />
                <Route path="/log" component={StudyLog} />
                <Route path="/timer" component={TomatoTimer} />
                <Route path="/ai-summary" component={AISummary} />
                <Route path="/admin" component={AdminDashboard} />
                <Route path="/settings" component={Settings} />
            </Switch>
        </Router>
    );
};

export default App;