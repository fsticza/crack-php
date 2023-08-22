<script setup lang="ts">
  console.log('Form.vue setup script')
  function onSubmit(ev: Event) {
    ev.preventDefault()
    const form = ev.target as HTMLFormElement
    if (!form.checkValidity()) {
      ev.preventDefault()
      ev.stopPropagation()
    }

    form.classList.add('was-validated')
  }
</script>

<template>
  <form class="needs-validation" novalidate @submit="onSubmit">
    <div class="mb-3">
      <label for="email" class="form-label">Email</label>
      <input type="email" class="form-control" id="email" required>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="mb-3">
      <label for="password" class="form-label">Password</label>
      <input type="password" class="form-control" id="password" required>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <button class="btn btn-primary" type="submit">Submit form</button>
  </form>
</template>