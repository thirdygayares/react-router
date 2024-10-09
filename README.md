### 1\. Install `react-router-dom`

If you haven't installed React Router yet, run this command in your project directory:

```plaintext
npm install react-router-dom
```

### 2\. Set Up Routing in Your React App

First, make sure you have components for your pages:

* `LoginPage`.tsx
    
* `ServicesPage.tsx`
    
* `AboutPage.tsx`
    

### Example Code:

#### 2.1 Create Components (If you haven’t already)

**LoginPage.tsx**

```plaintext
import React from 'react';

const LoginPage: React.FC = () => {
  return <h2>This is the Login Page</h2>;
};

export default LoginPage;
```

**ServicesPage.js**

```plaintext
import React from 'react';

function ServicesPage() {
  return <h2>This is the Services Page</h2>;
}

export default ServicesPage;
```

**AboutPage.js**

```plaintext
import React from 'react';

const AboutPage: React.FC = () => {
  return <h2>This is the About Page</h2>;
};

export default AboutPage;
```

# 4 Create a Separate File for Routes

Create a new file called `AppRoutes.tsx`nand define all your routes there.

#### **app.routes.tsx**

```plaintext
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";

interface RouteProps {
    exact?: boolean;
    path: string;
    component: React.ComponentType<any>;
}


const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            {/* Default route */}
            <Route path="/" element={<LoginPage />} />
        </Routes>
    );
};

export default AppRoutes;
```

### 4\. Use AppRoutes to App

Now you can import `AppRoutes` into your main `App.tsx` file.

#### **App.tsx**

```plaintext
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './app.routes'; // Import your routes
import { Link } from 'react-router-dom';

const App: React.FC = () => {
  return (
      <div>
        {/* Navigation */}
        <nav>
          <ul>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>

        {/* Render Routes */}
        <AppRoutes />
      </div>
  );
};

export default App;
```

### 3\. Explanation:

* `app.routes.tsx`: Contains all your route definitions using the `Switch` and `Route` components.
    
* `App.tsx`: Now imports and uses the `AppRoutes` component to manage routing in a more organized and modular way.
    

### 5\. Default Route (Optional)

You can add a default route to redirect the user to a specific page if they visit the root (`/`):

```plaintext
<Route exact path="/" component={LoginPage} />
```

### 6\. Running the App

Start your development server:

```plaintext
npm start
```

Now, you can navigate to `/login`, `/services`, and `/about` to see each page.

This is a basic routing setup for your React app with `login_page`, `services_page`, and `about_page`.

**OUTPUT**

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1728351670448/8dd74ba4-6f3a-4c29-ad6b-5371bab27215.png)

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1728351685618/3cb75f0a-74fa-4a8a-b435-4075f83d03bb.png)

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1728351691224/c02b5b55-b7bf-4f3e-81e2-525f4181d227.png)

**TEST:**

[https://react-router-thirdy.web.app/login](https://react-router-thirdy.web.app/login)

GITHUB:

[thirdygayares/react-router (github.com)](https://github.com/thirdygayares/react-router)
