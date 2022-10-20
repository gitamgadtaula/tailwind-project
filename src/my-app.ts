export class MyApp {
  static routes = [
    {
      component: () => import("./pages/welcome"),
      path: "",
      title: "Welcome",
    },
    {
      component: () => import("./pages/about-us"),
      path: "about-us",
      title: "About us",
    },
  ];
  public message = "Hello World!";
}
