import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import Login from './pages/Login/Login';
import Register from './pages/Register';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import EventTasks from './pages/EventTasks';
import AdminDashboard from './pages/Admin/AdminDashboard';

export const UserContext = createContext([])
export const SelectedEventContext = createContext([])
export const EventContext = createContext([])

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  const [selectedEvent, setSelectedEvent] = useState('')
  const [events, setEvents] = useState([])

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <SelectedEventContext.Provider value={[selectedEvent, setSelectedEvent]}>
      <EventContext.Provider value={[events, setEvents]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/admin">
              <AdminDashboard />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/register">
              <Register />
            </PrivateRoute>
            <Route path="/eventTasks">
              <EventTasks />
            </Route>
            <Route path="/events">
              <EventTasks />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Router>
        </EventContext.Provider>
      </SelectedEventContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
