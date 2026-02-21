<template>
  <nav class="navContainer">
    <ul>
      <li><NuxtLink to="/" activeClass="active">Home</NuxtLink></li>
      <li><NuxtLink to="/projects" activeClass="active">Projects</NuxtLink></li>
    </ul>
  </nav>
</template>
<style scoped>
.navContainer {
  position: sticky;
  border-bottom: var(--outline);
  background-color: var(--bg-1);

  height: 50px;

  top: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 1000;
}
ul {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0;
}
li {
  list-style-type: none;
}

li a {
  text-decoration: none;
  color: var(--text-1);
}
.active {
  font-weight: bold;
  text-decoration: underline;
}
</style>
