# React-Typescript Starter

## What is the React-Typescript Starter template?

React Stater Template is a project template made with Typescript, Styled-components, Redux/Easy-peasy for state-management, Cypress for testing, Material-UI, Absolute imports and other react components

## About the project

- Author: <a href="https://www.godswill.tech/" target="_blank">Godswill Edet</a>

## Installing

### Manual installation

| Name | Recommended version |
| ---- | ------------------- |
| Node | 16.13               |
| Yarn | latest              |

#### Install dependencies

From the root folder:

`yarn install`

#### Run the app

For development:

`yarn start`

App should be running on <http://localhost:3000>

#### Build

For production build:

`yarn build`

Build files should be in `build`

#### E2E Tests

Run e2e tests: `yarn cy:open`

App should be running on <http://localhost:3000>

---

## Methodologies

### component-based development

Component-based software engineering (CBSE), also called as component-based development (CBD), is a branch of software engineering that emphasizes the separation of concerns with respect to the wide-ranging functionality available throughout a given software system.

### behavior driven development

Behavior Driven Development (BDD) is an Agile process designed to keep focus on stakeholder's value throughout the whole project. It is a way to do Test Driven Development (TDD) with clarity that can not be accomplished with Unit Testing. It is a way to describe and test functionality in (almost) natural language.

## Core

### react

A JavaScript library for building declarative component-based user interfaces

### Redux / (Easy-peasy)

Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test

## Styling

### styled components

styled-components utilises tagged template literals to style your components. It removes the mapping between components and styles. This means that when you're defining your styles, you're actually creating a normal React component, that has your styles attached to it. Here we use the css prop from styled-components
e.g
`
In your style.ts file

import { css } from "styled-components/macro;

export const navbarCss=css`width:100%; height:4rem; background-color:red;`

Then in your main react component file
import the style name and apply

import { navbarCss } from "./style.ts"

<nav css={navbarCss}> I am a navbar </nav>

`

## Code quality

### eslint

## Testing

### cypress

Cypress is a next generation front end testing tool built for the modern web.

## Absolute Import paths
