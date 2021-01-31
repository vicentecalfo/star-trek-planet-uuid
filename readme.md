# @vicentecalfo/star-trek-planet-uuid

<img src="https://unpkg.com/simple-icons@v4/icons/startrek.svg" width="60">

Generate unique random IDs that contain planet names from the Star Trek universe. 
You will notice that the generated IDs are not technically UUID or GUID. Obviously this package was developed just for fun.

However, if you need to create CSS identifiers or need a unique ID for low complexity applications you can use them without any problems.

## Inspiration
The silly idea of ​​developing an ID generator based on the planets in the Star Trek universe came from another project that generates [IDs based on medical terms](npmjs.com/package/@redoxengine/medical-word-uuid).

## Installation

First you need to install the npm module.
```
npm install @vicentecalfo/star-trek-planet-uuid
```

## Usage
```javascript
import { uuid } from '@vicentecalfo/star-trek-planet-uuid';

const starTrekId = uuid();
// 371dfd05-verex-iii-137d2b6f

```
