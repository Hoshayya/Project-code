import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Pricing from './components/Pricing';
import Courses from './components/Courses';
import Progress from './components/Progress';
import Assignments from './components/Assignments';
import LiveClasses from './components/LiveClasses';
import DiscussionForum from './components/DiscussionForum';
import Profile from './components/Profile';
import Support from './components/Support';
import Blog from './components/Blog';
import AboutUs from './components/AboutUs';
import TermsAndConditions from './components/TermsAndConditions';
import PrivacyPolicy from './components/PrivacyPolicy';
import Login from './components/Login';
import SignUp from './components/SignUp';
import LogoUpload from './components/LogoUpload'; // Import the LogoUpload component

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/courses" component={Courses} />
        <Route path="/progress" component={Progress} />
        <Route path="/assignments" component={Assignments} />
        <Route path="/live-classes" component={LiveClasses} />
        <Route path="/discussion-forum" component={DiscussionForum} />
        <Route path="/profile" component={Profile} />
        <Route path="/support" component={Support} />
        <Route path="/blog" component={Blog} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/terms-and-conditions" component={TermsAndConditions} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/login" component={Login} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/logo-upload" component={LogoUpload} /> {/* Add route for LogoUpload */}
      </Switch>
    </Router>
  );
}

export default App;
