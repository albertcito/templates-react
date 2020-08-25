# Private and Different Layouts with React Router

Review the updates and original post in in my [webpage](https://albertcito.com)

I create a different template for React with React Router 4. The idea is:

- Code flexible able to manage many layouts.
- Possibility to choose a different layout for any component or a layout for a group of components.
- If a user is not logged in the URL’s that required a login, then show the public layout with a login form.
- If the user is logged and their wants see the public page (like about-us), the layout must be the public layout with the possibility to see the private web page if click in a private URL.

## View Preview
<div style="text-align:center">
  <img 
    src="https://cdn-images-1.medium.com/max/1600/1*Tp_SStzt1ZLK_wde4d3D3g.gif" 
    style='max-width: 100%; height: auto'
  />
  <br />
  You can see this working <a href="https://albertcito.github.io/templates-react/">live here</a>
</div>

## Routes

You can create the routes in this way. You can create many files that you want:
```typescript
// src/routes/private.tsx

const routes: IRoute[] = [
  {
    component: Profile,
    exact: true,
    path: '/admin/profile',
  },
];
```

## Route Types

There are three route types defined in the project.

```typescript
// src/routes/routeTypes.tsx

export enum routeTypes {
  private = 'private',
  public = 'public',
  session= 'session',
}
```

**private**: private pages like profile, edit-profile, etc. If the user isn’t logged then must to show the login page.  
**public**: public pages like about-us, contact, etc.  
**session**: session pages like login and sign-up. If the user is logged then must to redirect to the private dashboard.  

## Routes Template

In this file you can define the routes, the template and the rights (public, private, session).

```typescript
// src/routes/index.tsx

const routesTemplate: IRouteTemplate[] = [
  {
    routes: privateRoutes,
    template: GlobalLayout,
    type: routeTypes.private,
  },
  ...
];

```

## Router

It define the route and call the Auth.

```typescript
// src/start/Routes.tsx

routesTemplates.map((routesTemplate) => {
  const { routes: appRoutes, template: Template , type} = routesTemplate;
  return appRoutes.map( (appRoute) => {
    return (
      <Route
        exact={appRoute.exact}
        path={appRoute.path}
        key={appRoute.path}
        render={(route) =>
          <Auth
            appRoute={appRoute}
            Template={Template}
            route={route}
            type={type}
          />
        }
      />
    );
  });
})
```

## Auth

Verify the rights and redirection. 

```typescript 
// src/start/Auth.tsx

if (isPrivate(type) && !global.logged) {
  return <GlobalLayout Component={Error403} route={route} />;
}

if (isSession(type) && global.logged) {
  return <Redirect to="/" />
}

const Layout = appRoute.template ? appRoute.template : Template;
return <Layout
  Component={appRoute.component}
  route={route}
/>;
```
