<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/board">Board</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.flex-container{
  display: flex;
}
.flex-container--align-right{
  justify-content: flex-end;
}
.flex-container--justify-between{
  justify-content: space-between;
}
.flex-container--justify-center{
  justify-content: center;
}
.flex-container__item{
  margin:0 10px;
}
.flex-container__item--grow-6{
  flex-grow: 6;
}
.article{
  border: solid 1px black;
  padding: 3px;
  margin:0 10px;
}

.flex-container--column {
  flex-direction: column;
}

.flex-container__row {
  display: flex;
  border-color: black;
  border-style: solid;
  border-width: 0 0 1px;
  justify-content: space-around;
  text-align: center;
}

.flex-container__row--header {
  border-color: black;
  border-style: solid;
  border-width: 1px 0 2px;
}

.flex-container__row-item--category {
  flex: 3
}

.flex-container__row-item--file {
  flex: 1
}

.flex-container__row-item--title {
  flex: 9
}
.flex-container__row-item--title:hover {
  background: gainsboro;
}

.flex-container__row-item--writer {
  flex: 3
}

.flex-container__row-item--count {
  flex: 2
}

.flex-container__row-item--date {
  flex: 3
}

.page-nav {
  display: flex;
  justify-content: center;
}


</style>
