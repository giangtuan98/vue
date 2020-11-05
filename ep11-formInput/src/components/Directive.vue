<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <h1>Default / Built-in Directives</h1>
        <p v-text="'hello'"></p>
        <div v-html="'<h1>this is heading one</h1>'"></div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <h1>Custom Directives</h1>
        <p v-bgColor="'yellow'">hello</p>
        <p v-custom:background.delayed="'green'">hello</p>
        <p
          v-local-custom:background.delayed.blink="{
            mainColor: 'green',
            secondColor: 'blue',
            delay: 1000,
          }"
        >
          hello
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    "local-custom": {
      bind(el, binding) {
        var delay = 0;
        if (binding.modifiers["delayed"]) {
          delay = binding.value.delay;
        }

        let mainColor = binding.value.mainColor;
        let secondColor = binding.value.secondColor;
        if (binding.modifiers["blink"]) {
          let currentColor = mainColor;

          setTimeout(() => {
            setInterval(() => {
              currentColor =
                currentColor == mainColor ? secondColor : mainColor;
              if (binding.arg == "background") {
                el.style.backgroundColor = currentColor;
              } else {
                el.style.color = currentColor;
              }
            }, 1000);
          }, delay);
        } else {
          setTimeout(() => {
            if (binding.arg == "background") {
              el.style.backgroundColor = mainColor;
            } else {
              el.style.color = mainColor;
            }
          }, delay);
        }
      },
    },
  },
};
</script>

<style></style>
