# Chatio a simple Svelte - firebase chat app.

## Demo

https://chatio-3e6fa.web.app/

how to use it

```bash
git clone https://github.com/AlvareYN/chatio-svelte
cd chatio-svelte
npm install
```

Create a new file under ./src with the following name, firebase_client_credentials.json and copy your firebase credentials there, this file should look like this

```json
{
  "apiKey": "-------your credential-----------",
  "authDomain": "-------your credential-----------",
  "projectId": "-------your credential-----------",
  "storageBucket": "-------your credential-----------",
  "messagingSenderId": "-------your credential-----------",
  "appId": "-------your credential-----------"
}
```

then run the developer env.

```bash
npm run dev
```

## upcoming changes

- better sign-in screen
- make it posible to write personal chats
- lets users create accout without using google auth
- check responsive css
