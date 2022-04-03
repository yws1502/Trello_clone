<template>
  <div class="login">
    <h2>Log in to Trello</h2>
    <form>
      <div>
        <label for="email">Email</label>
        <input
          type="text"
          class="form-control"
          name="email"
          autofocus
          placeholder="e.g., test@test.com"
        />
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" class="form-control" placeholder="123123" />
      </div>
      <button class="btn" type="submit">
        Log In
      </button>
    </form>
    <p class="error"></p>
  </div>
</template>

<script>
export default {};
</script>

<style>
.login {
  width: 400px;
  margin: 0 auto;
}
.error {
  color: #f00;
}
</style>
