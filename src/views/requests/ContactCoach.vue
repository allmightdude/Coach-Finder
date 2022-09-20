<template>
  <base-card>
    <form>
      <div class="form-control">
        <label for="email"> Your E-Mail</label>
        <input type="email" id="email" />
      </div>

      <div class="form-control">
        <label for="message"> Your Message</label>
        <textarea id="message" cols="10"></textarea>
      </div>
      <div class="actions">
        <base-button type="submit">Send Message</base-button>
      </div>
    </form>
  </base-card>
</template>

<style lang="scss" scoped>
form {
  margin: 1rem;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
  border-radius: 10px;
  padding: 0.5rem 1.5rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>
