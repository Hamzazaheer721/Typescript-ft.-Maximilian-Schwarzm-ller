/* 

Why const is powerful 
-> This is known as const assertion
-> Tells the compiler to infer the narrowest and most specific type it can fro an experession. 
-> It is called assertion and not a cast.
    -> the term cast is generally to be avoided in TS.
    -> Cast simply imply some sort of effect that can be observed at the runtime
*/

const routes = {
  home: '/',
  welcome: '/welcome',
  careers: '/careers'
} as const;

type RoutesTypes = keyof typeof routes;

type Route = typeof routes[RoutesTypes];


const goToRoute = (route: Route) => {}


goToRoute(routes.careers)
