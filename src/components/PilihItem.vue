<template>
  <div class="col d-flex align-items-start">
    <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
      <i><slot name="icon"></slot></i>
    </div>
    <div>
      <h4 class="fw-bold mb-0"><slot name="heading"></slot></h4>
      <p><slot name="description"></slot></p>
    </div>
  </div>
</template>

<style scoped>
.icon-square {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  font-size: 1.5rem;
  border-radius: 0.75rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.why > .col:hover .icon-square.bg-light {
  background: var(--bs-primary) !important;
  color: var(--bs-white) !important;
}
</style>
