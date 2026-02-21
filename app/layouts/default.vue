<template>
  <div>
    <Navbar />
    <main class="page">
      <slot />
    </main>
  </div>
</template>
<style scoped>
.page {
  padding-top: 50px;
}
</style>
