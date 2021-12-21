<template>
  <h3>Day 1</h3>
  <p>
    {{ getNumOfLargerMeasur(inputImport) }} measurements are larger than the
    previous measurement.
  </p>
</template>

<script>
import input from "../data/input1.1";
import { ref } from "vue";

export default {
  name: "",

  components: {},

  props: {},

  setup() {
    const inputImport = ref(input);
    return {
      inputImport,
    };
  },

  methods: {
    getNumOfLargerMeasur(input) {
      let largerMeasurement = 0;

      for (let i = 1; i <= input.length; i++) {
        if (input[i] > input[i - 1]) {
          largerMeasurement += 1;
        }
      }

      return largerMeasurement;
    },
  },
};
</script>
