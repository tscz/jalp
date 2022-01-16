# JALP - Just Another Learning Platform

<br>
<p align="center">
    <img src="./jalp.svg" alt="logo" width="20%">
</p>

<p align="center">
This is just another learning platform helping you to learn and practice new things. 
</p>

## Getting started
First start the server locally (default as localhost:4000) via
```bash
npm run start:server
```
Then you can start the client (default as localhost:3000) via
```bash
npm run start:client
```

## Domain of JALP
The domain is based on a set of highlevel core concepts like flashcards, cheat sheets, roadmaps, and so on (see chapter regarding [core domains](#Core-Domain)). These core domain concepts are applied in concrete functional domains like learning languages, practicing music and sports (see chapter regarding [sub domains](#Sub-Domains)).


### Core Domain - Flashcards, Cheatsheets, Roadmaps and practice schedules
The platform uses different established learning practices to help a user keep motivated and to structurally learn these new things, i.e. using:
- Flashcards  
  Flashcards are learning aids for memorizing. Combined with learning systems like the [Leitner-System](https://en.wikipedia.org/wiki/Leitner_system) they are efficient tools. I have a love-hate relationship to flashcards, I never liked using them but undoubtly they are quite effective (for me) for learning stuff based on memorizing. 
- Cheat-sheets  
  A cheat sheet in its essence a comprimised summary of a topic in the most compressed form. Writing cheat sheets (without applying:-) ) helped me to focus a lot at school and university. This platform should support the process of creating mantaining cheat sheets. 
- Road Maps  
  Road Maps are a great tool to structure a complex net of interelated topics in a larger context. Especially developer roadmaps (i.e. https://roadmap.sh/) helped me a lot giving some guideline when starting in the industry and find my way of becoming a developer. They are both a good tool to understand an ecosystem and measure progress. 
- Practice Schedules  
  Learning only creates knowledge but practice creates skill. A practice schedule helps to apply the knowledge on a daily bases. Often I started something interesting, got lost in the process and stopped practicing it.

### Sub Domains - Language, Music, Dev and Sports

### Sub Domain 1: Learning Korean
The platform offers it to create and use vocabulary flashcards in Korean. Also it helps measuring progress. Also grammar flashcards are supported and dynamic tests are possible.

### Sub Domain 2: Practice Guitar
There is an option to have flashcards as guitar lessons for specific topics (like Blues Scale, Chord Shapes, Muting Techniques, ...). There is also a dictionary of song transcriptions as flashcards. It is possible to organise and measure weekly practice.

### Sub Domain 3: Improve Software Developer Skills
This sub domain deals with learning and measuring progress in aquiring developer skills. A developer roadmap supports this process.

### Sub Domain 4: Doing sports and fitness
A fitness schedule and sports practice is enabled by the learning platform.

## Implementation
Basic idea is a typescript based server-/client-application based on hexagonal architecture and a scalable GraphQL domain model.

### GraphQL Domain
#### Code generation
The domain model is a server driven domain model. It is generated based on graphql inputs via
```bash
npm run codegen
```
For more details see npm scripts within package.json files.

### Server
The server is a monolithic nodejs application.

#### Dependency Diagram Server
<img src="./server/doc/generated/dependencygraph.svg" style="width:100%">

#### Architecture Linting
TODO. See [dependency cruiser profile](./server/.dependency-cruiser.js).

### Client
The client is a react application.

#### Dependency Diagram Client
<img src="./client/doc/generated/dependencygraph.svg" style="width:100%">

### Build
TODO
```bash
npm run build
```
For more details see npm scripts within package.json files.

### Test
TODO
```bash
npm run test
```
For more details see npm scripts within package.json files.

### Lint
TODO
```bash
npm run lint
```
For more details see npm scripts within package.json files.


## License
Icons by [svgrepo.com](https://www.svgrepo.com/svg/357225/student)