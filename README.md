# Portfolio Web Application

This is a portfolio web application built with [Next.js](https://nextjs.org/), a popular React framework.

## Getting Started

To get the application running locally:

1. Clone this repository
2. Install the dependencies:

```bash
npm install
# or
yarn install
```

### To add your user data

- Copy `.env.example` to `.env`
- Add or make changes to `userConfig` stringified object.

```javascript
const userConfig = {
  name: "",
  email: "",
  bio: "",
  position: "",
  avatar: "",
  github: { url: "" },
  linkedin: { url: "" },
  x: { url: "" },
  company: { name: "", url: "" },
  location: "",
  resume: "",
  experience: [
    { position: "", company: "", link: "", address: "", time: "", work: [" "] },
  ],
  education: [{ type: "", place: "", time: "", info: [""] }],
  seoMetaData: {
    title: "",
    description: "",
    img: "",
  },
};
```

- Use this stringified object as `.env` variable to fill up the necessary data.
