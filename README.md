# oaf-node

## Table of Contents

* [Introduction](#introduction)
* [Installation](#installation)
* [Configuration](#configuration)
* [Documentation](#documentation)
    * [OAFConfiguration](#class-oafconfiguration)
    * [OAFError](#enum-oaferror)
    * [OAFModel](#class-oafmodel)
    * [OAFQuery](#class-oafqueryt-extends-oafmodel)
    * [OAFUser](#class-oafuser)
* [Author](#author)
* [License](#license)
* [Donation](#donation)

## Introduction

Client-facing Node.js module which enables interaction with an [OAFServer][OAFServer].

## Installation

Install this repository from GitHub using npm.

```shell
npm install git://github.com/oscar-fuentes/oaf-node.git
```

You can also add it as a dependency to your package.json file and run `npm install`.

```json
{
    "dependencies"  : {
        "oaf-node"  : "git://github.com/oscar-fuentes/oaf-node.git"
    }
}
```

This installs both the JavaScript and the [TypeScript][TypeScript] version of this dependency.

## Configuration

Here is a basic [TypeScript][TypeScript] example configuring this module:

```typescript
import { OAFConfiguration }         from "oaf-node";

OAFConfiguration.shared.adminKey    = "1234567890";
OAFConfiguration.shared.apiKey      = "0987654321";
OAFConfiguration.shared.uri         = "http://localhost:8080";
```

## Documentation

### Class `OAFConfiguration`

* `shared {OAFConfiguration}` - The shared module-level configuration instance.
* `adminKey {String} [adminKey]` - The administrative key for server-side access.
* `apiKey {String} [apiKey]` - The API key for server-side access.
* `uri {String} [uri]` - The URI of the [OAFServer][OAFServer].

### Enum `OAFError`

The following values are available:

* `missingApiKey` - The configuration's `apiKey` has not been set.
* `missingUri` - The configuration's `uri` has not been set.

### Class `OAFModel`

### Class `OAFQuery<T extends OAFModel>`

#### Initializers

* `init()`

#### Instance Variables

#### Instance Methods

* `execute(): Promise<T[]>`

#### Example

Here is a full-fledged [TypeScript][TypeScript] example utilizing `OAFQuery`:

```typescript
/**
 * `TestModel` is a hypothetical subclass of `OAFModel`
 */
let query = TestModel.query();

query
    .execute()
    .then(models => {
        /**
         * The query executed successfully.
         * `models` is an array of `TestModel`.
         */
    })
    .catch(error => {
        /**
         * An error occurred
         */
    });
```

### Class `OAFUser`

### Static Methods

* `logIn(options)` - .
    * `options {object}` - .
        * `emailAddress {string} [emailAddress]` - .
        * `password {string}` - .
        * `telephone {string} [telephone]` - .
        * `username {string} [username]` - .
* `signUp(user)` - .
    * `user {OAFUser}` - .

## Author

* Oscar Fuentes

## License

This project is licensed under the [Apache-2.0](LICENSE).

## Donation

This module was built on trains, ferries, and in the wee hours of the night, so if it served you any purpose, please consider paying for my next cup of coffee via [PayPal][PayPal] :)

[PayPal]: https://www.paypal.me/oscarfuentes/1
[OAFServer]: https://github.com/oscar-fuentes/oaf-server
[TypeScript]: https://www.typescriptlang.org/
