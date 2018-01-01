## Different Layouts with React Router

This week I tried to create a different template for React with [React Router 4](https://reacttraining.com/react-router/). The idea is:

- Code flexible able to manage many layouts.
- Possibility to choose different layout for any component or a layout for a group of component.
- If user is not logged in the URL’s that required login, then show the public layout with login form.
- If the user is logged and their wants see the public page (like about-us), the layout must be the public layout with the possibility to see the private web page if click in a private URL.

### Routes Variables

Routes variables are defined in this way:

```js
const routes = {
  Page: {
    path: '/page',
    component: Page
  },
  ...
}
```

**publicRoutes**: Have all public pages like: about-us, contact, etc. 

**privateRoutes**:  Have all private pages like: profile, edit-profile, etc. If the user isn’t logged then must to show login page.

**sessionRoutes**: Have all session pages like: login and sign-up. If the user is logged then must to redirect to private dashboard.
(You can add more group routes or simple components with custom layout)

### Layouts

Layout pages are defined in this way:
```js
render() {
   const Component = this.props.component;
   const route = this.props.route;
   return (
      <div>
         <h1>Example Page Layout</h1>
         <Component route={route}/>
      </div>
   );
}
```

### Template

Template is where is defined the current template. It wait to verify if user is logged, after to print the interface.

```js
render() {
  if (!this.props.user.verified) { return(<div>Loading...</div>); }
  return (
    <BrowserRouter>
      <Switch>
        
        
        
        { _.map(publicRoutes, (route, key) => {
          const { component, path } = route;
          return (
            <Route
              exact
              path={path}
              key={key}
              render={ (route) => 
                 <PublicLayout 
                   component={component}
                   route={route} 
                 /> 
              }
            />
          )
        })}
        
        { _.map(privateRoutes, (route, key) => {
          const { component, path } = route;
          return (
            <Route
              exact
              path={path}
              key={key}
              render={ () => 
                this.props.user.logged ? (
                  <PrivateLayout 
                      component={component}  
                      route={route}
                  />
                ) : (
                  <PublicLayout 
                      component={LoginForm} 
                      route={route}
                  />
                )
              }
            />
          )
        })}
        { _.map(sessionRoutes, (route, key) => {
          const { component, path } = route;
          return (
            <Route
              exact
              path={path}
              key={key}
              render={ () => 
                this.props.user.logged ? (
                  <Redirect to="/profile"/>
                ) : (
                  <PublicLayout 
                      component={component} 
                      route={route}
                  />
                )
              }
            />
          )
        })}
        <Route component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}
```
