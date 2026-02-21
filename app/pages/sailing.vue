<template>
  <main class="marginArea">
    <h3>When not developing, I like:</h3>
    <h1>Sailing</h1>

    <h3>My boats:</h3>
    <div class="flexRow boatRow">
      <Boat boattype="49er" sailnum="CAN 226" />
      <Boat boattype="Laser" sailnum="187400" />
      <Boat boattype="Unknown" sailnum="unknown" name="Tilt" />
    </div>
    <h3>Other dinghies I've sailed:</h3>
    <p>420, FJ, 29er, Vanguard 15, RS Terra, Opti, Melges 15</p>

    <h3>My favorite photos I've taken:</h3>
  </main>
</template>
<style scoped>
.boatRow {
  justify-content: space-evenly;
}
.boatRow > * {
  flex: 1;
}
</style>
