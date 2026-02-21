<template>
  <div>
    <Navbar />
    <main class="page">
      <slot />
    </main>
    <footer>
      <UpdatedTxt />
    </footer>
  </div>
</template>
<style scoped>
.page {
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 100px);
}
footer {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  height: 50px;
}
</style>
