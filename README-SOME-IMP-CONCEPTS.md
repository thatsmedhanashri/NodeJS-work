## How web works?

https://www.google.com/maps
https - protocol
www.google.com - domain name [DNS later convert it into actual ip address] e.g. https://216.58.116.54:443
maps - resource [DNS later covert it into port]

TCP/IP socket connection - Transmission Control Protocol/Internet Protocol
These are communication protocols and used to data transmission over the internet.
Decides how to send data over the internet. It devides whole information to be transmitted into multiple packages before sending and once they get the destination it reassemble it into original request or response. It uses ip address for each package.

HTTP request - Hypertext Transfer Protocol
It contains url [path, method], request headers, request body

HTTP response -
It contains status code, response headers, response body [which we send in res.end()]

## Backend and Frontend of the website

Frontend - whatever developed is visible to clients/users

Backend - everthing that happens on server, it is not visible to users
Web server: It includes httpn server, files, app [http server is the bridge between frontend app and backend app/files]
Database: Store user data, app data, data needed to fill template. Backend app communicates with database.

## Static vs Dynamic websites:

A static website is one where web pages are delivered exactly as they are stored, with no real-time content changes. In contrast, a dynamic website generates content in real time, typically using databases and scripting languages to provide interactivity and personalized experiences.
Dynamic website or API based webste: Contains database, backend app to get or manipulate DB data, and uses REST APIs to communicate with client side. Client side app then integrate those APIs to make the content on the website dynamic.
REST APIs once developed can be used to build Websites, Android apps, iOS apps, macOS apps and windows apps.
