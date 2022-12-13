This is a very simple web app with CRUD operations written with Clojure, ClojureScript, Reagent, reitit, httpkit, and TailwindCSS, with Karma and kaocha for test runners, and shadow-cljs for frontend compilation.

You can do whatever you want with it. There are several ways to check it out, but before that you need to create a container with PostgreSQL DB in it, you can find the appropriate Dockerfile in /docker dir.

If you have Clojure installed on your local machine, you can run

`clj -M:run`

to start a server at port 4000. Run

`npm run sh`

to launch a dev server for frontend. Then you can check it out at localhost:8081.

You can also apply k8s.yml manifest if you have local k8s cluster. Just don't forget to port forward ports 4000, 8081 and 5432. There's also Dockerfiles for backend and frontend in /docker dir. Do whatever you heart desires with them.
